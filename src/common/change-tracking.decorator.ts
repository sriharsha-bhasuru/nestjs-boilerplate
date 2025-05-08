import { applyDecorators } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export function ChangeTrackingDecorators() {
  return function (target: any) {
    applyDecorators(
      ApiProperty({
        type: String,
        description: 'Record created by',
        example: 'John Doe',
      }),
      IsNotEmpty(),
    )(target.prototype, 'createdBy');

    applyDecorators(
      ApiProperty({
        type: String,
        description: 'Record created on',
        example: '2023-05-01T00:00:00Z',
      }),
      IsNotEmpty(),
    )(target.prototype, 'createDate');

    applyDecorators(
      ApiProperty({
        type: String,
        description: 'Record modified by',
        example: 'Peter Parker',
      }),
      IsNotEmpty(),
    )(target.prototype, 'modifiedBy');

    applyDecorators(
      ApiProperty({
        type: String,
        description: 'Record modified on',
        example: '2025-05-08T00:00:00Z',
      }),
      IsNotEmpty(),
    )(target.prototype, 'modifiedDate');
  };
}
