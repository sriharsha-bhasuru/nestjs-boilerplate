import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './entity/dto/create-employee.dto';
import { ViewEmployeeDto } from './entity/dto/view-employee.dto';

@Controller('employee')
@ApiTags('Employee Information')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  @ApiOperation({ description: 'Get all employees' })
  @ApiOkResponse({
    description: 'Returns list of employees',
    type: ViewEmployeeDto,
    isArray: true,
  })
  @ApiBadRequestResponse({
    description: 'Bad Request',
  })
  getAllEmployees(): Promise<ViewEmployeeDto[]> {
    return this.employeeService.getAll();
  }

  @Post('/create')
  @ApiOperation({ description: 'Creates a new employee into the database' })
  @ApiBody({ type: CreateEmployeeDto })
  @ApiOkResponse({
    type: String,
    description: 'Returns Employee ID with 200 status code',
  })
  async createEmployee(
    @Request() req: string,
    @Body() createDto: CreateEmployeeDto,
  ): Promise<string> {
    return await this.employeeService.createEmployee(createDto);
  }
}
