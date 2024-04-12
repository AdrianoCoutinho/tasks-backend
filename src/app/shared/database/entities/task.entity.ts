import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";

@Entity("Task")
export class TaskEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({
    name: "ind_active",
    default: true,
  })
  indActive: boolean;

  @Column({
    name: "id_user",
  })
  idUser: string;

  @ManyToOne(() => UserEntity, { cascade: true })
  @JoinColumn({
    name: "id_user",
  })
  user: UserEntity;

  @CreateDateColumn({
    name: "dthr_register",
  })
  dthrRegister: Date;
}
