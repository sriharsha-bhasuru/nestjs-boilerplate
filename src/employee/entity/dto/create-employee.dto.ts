import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateEmployeeDto {
  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'First Name',
    example: 'John',
  })
  firstName: string;

  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Last Name',
    example: 'Doe',
  })
  lastName: string;

  @MaxLength(50)
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    required: true,
    description: 'Email',
    example: 'bKbY7@example.com',
  })
  email: string;
}
