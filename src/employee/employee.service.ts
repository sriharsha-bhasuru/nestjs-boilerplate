import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { ChangeTracking } from 'src/common/changetracking.entity';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from './entity/dto/create-employee.dto';
import { ViewEmployeeDto } from './entity/dto/view-employee.dto';
import { Employee } from './entity/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  /**
   * Retrieves all employees
   *
   * @returns {Promise<ViewEmployeeDto[]>} A promise that resolves to an array of Employee objects
   * @throws {BadRequestException} If the retrieval fails
   */
  async getAll(): Promise<ViewEmployeeDto[]> {
    return this.employeeRepository
      .find()
      .then((employees) => {
        return employees.map((employee) =>
          plainToInstance(ViewEmployeeDto, employee),
        );
      })
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }

/**
 * Creates a new employee record in the database.
 *
 * @param {CreateEmployeeDto} employeeInfoDto - The data transfer object containing employee details.
 * @returns {Promise<string>} A promise that resolves to the ID of the newly created employee.
 * @throws {BadRequestException} If there is an error during the creation process.
 */

  async createEmployee(employeeInfoDto: CreateEmployeeDto) {
    const now = new Date();
    const changeTracking = new ChangeTracking();
    changeTracking.createDate = now;
    changeTracking.createdBy = 'admin';
    changeTracking.modifiedDate = now;
    changeTracking.modifiedBy = 'admin';

    const employee = this.employeeRepository.create({
      id: this.generateId(),
      firstName: employeeInfoDto.firstName,
      lastName: employeeInfoDto.lastName,
      email: employeeInfoDto.email,
      changeTracking: changeTracking,
    });

    return await this.employeeRepository
      .save(employee)
      .then((employee) => {
        return employee.id;
      })
      .catch((error) => {
        throw new BadRequestException(error.message);
      });
  }

  /**
   * Generates a random 8 character string which is used as an ID.
   *
   * @returns {string} The generated ID.
   */
  generateId(): string {
    return Math.random().toString(36).substring(2, 10);
  }
}
