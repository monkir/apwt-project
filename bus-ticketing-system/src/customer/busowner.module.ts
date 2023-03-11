import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { customerEntity } from "./customer.entity";

@Module(
    {
        imports: [TypeOrmModule.forFeature([customerEntity])], 
    }
)
export class customerModule{}