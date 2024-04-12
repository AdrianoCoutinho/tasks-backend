import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    select: true,
  })
  password: string;

  @CreateDateColumn({
    name: "dthr_register",
  })
  dthrRegister: Date;
}
