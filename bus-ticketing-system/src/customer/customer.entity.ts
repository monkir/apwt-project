import { employeeEntity } from "src/employee/employee.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class customerEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column({unique:true})
    email: string;

    @Column({unique:true})
    phone: string;

    @Column({default: 'none', })
    address: string;

    @ManyToOne(()=>employeeEntity, (employeeEntity)=>employeeEntity.customers)
    employee: employeeEntity
}
