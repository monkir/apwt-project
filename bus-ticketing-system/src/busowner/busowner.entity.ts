import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class busownerEntity
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    password: string;

    @Column()
    name: string;

    @Column({unique:true})
    email: string;

    @Column({unique:true})
    phone: string;

    @Column()
    address: string;
}
