import { Check, Column, Entity, PrimaryColumn } from 'typeorm';
import { ChangeTracking } from '../../common/changetracking.entity';

@Entity()
@Check(`char_length(email) <= 50`)
export class Employee {
  @PrimaryColumn('varchar', { length: 10 })
  id: string;

  @Column('varchar', { name: 'first_name', length: 50, nullable: false })
  firstName: string;

  @Column('varchar', { name: 'last_name', length: 50, nullable: false })
  lastName: string;

  @Column({
    type: 'citext',
    name: 'email',
    nullable: false,
    unique: true,
  })
  email: string;

  @Column(() => ChangeTracking, { prefix: false })
  changeTracking: ChangeTracking;
}
