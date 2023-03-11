import { customerEntity } from "src/customer/customer.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class employeeEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    address: string;

    @OneToMany(()=>customerEntity, (customerEntity)=>customerEntity.employee)
    customers: customerEntity[];
}
