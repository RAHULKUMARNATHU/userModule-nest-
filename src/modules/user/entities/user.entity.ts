// export class User {}

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum gender {
  Maleuser = 'Male',
  Femaluser = 'Female',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'first_name',
  })
  firstName: string;

  @Column({
    name: 'last_name',
  })
  lastName: string;

  @Column({
    name: 'user_name',
  })
  userName: string;

  @Column({
    type: 'enum',
    enum: gender,
  })
  gender: gender;

  @Column({type:'date'})
  dob: Date;
}
