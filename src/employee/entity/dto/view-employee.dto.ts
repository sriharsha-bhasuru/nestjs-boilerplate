import { ApiProperty } from '@nestjs/swagger';
import { ChangeTrackingDecorators } from '../../../common/change-tracking.decorator';
import { CreateEmployeeDto } from './create-employee.dto';

@ChangeTrackingDecorators()
export class ViewEmployeeDto extends CreateEmployeeDto {
  @ApiProperty({
    type: String,
    description: 'Employee ID',
    example: 'A1221',
  })
  id: string;
}
