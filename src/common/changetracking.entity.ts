import { Column } from 'typeorm';

export class ChangeTracking {
  @Column('varchar', { name: 'created_by', nullable: false, length: 255 })
  createdBy: string;

  @Column({ name: 'created_date', type: 'timestamptz' })
  createDate: Date;

  @Column('varchar', { name: 'modified_by', nullable: false, length: 255 })
  modifiedBy: string;

  @Column({ name: 'modified_date', type: 'timestamptz' })
  modifiedDate: Date;
}
