/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { busownerEntity } from 'src/busowner/busowner.entity';
import { customerEntity } from 'src/customer/customer.entity';
import { Repository } from 'typeorm';
import { employeeEntity } from './employee.entity';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(employeeEntity)
        private empRepo: Repository<employeeEntity>,
        @InjectRepository(busownerEntity)
        private busRepo: Repository<busownerEntity>,
        @InjectRepository(customerEntity)
        private custRepo: Repository<customerEntity>
    ){}
    getIndex():any
    {
        //return "this is employee panel";
        return this.empRepo.find()
    }
    signup(signupDTO):any
    {
        /*
        return "Signup with name: "+signupDTO.name
        +" email: "+signupDTO.email
        +" and password: "+signupDTO.password
        +" address: "+signupDTO.address
        */
       return this.empRepo.insert(signupDTO)
    }
    login(loginDTO):any
    {
        /*
        return "Login with email: "+loginDTO.email
        +" and password: "+loginDTO.password;
        */
       //userdetails: employeeEntity= this.empRepo.findOneBy({email: loginDTO.email, password: loginDTO.password})
       //var result = this.empRepo.findOneBy({email: loginDTO.email})
       return this.empRepo.findOneBy({email: loginDTO.email})
    }
    showcustomers():any
    {
        //return "employee trying to find customer with id: "+findCustomerDto.id;
        return this.custRepo.find()
    }
    findcustomer(findCustomerDto):any
    {
        //return "employee trying to find customer with id: "+findCustomerDto.id;
        return this.custRepo.findOneBy({id:findCustomerDto.id});
    }
    findbusprovider(findBusProviderDTO):any
    {
        //return "employee trying to find bus provider with id: "+findBusProviderDTO.id;
        return this.busRepo.findOneBy({id:findBusProviderDTO.id})
    }
    addcustomer(addCustomerDTO):any
    {
        /*
        return "Employee is adding a customer with name: "+addCustomerDTO.name
        +" email: "+addCustomerDTO.email+" phone: "+addCustomerDTO.phone;
        */
       return this.custRepo.insert(addCustomerDTO)
    }
    updatecustomer(updateCustomerDTO):any
    {
        // return "Employee is updating a customer with id: "+updateCustomerDTO.id
        // +" name: "+updateCustomerDTO.name+" email: "+updateCustomerDTO.email
        // +" phone: "+updateCustomerDTO.phone;
        return this.custRepo.update(updateCustomerDTO.id, updateCustomerDTO)
    }
    deletecustomer(deleteCustomerDTO):any
    {
        //return "Employee is deleting a customer with id: "+deleteCustomerDTO.id
        return this.custRepo.delete(deleteCustomerDTO.id)
    }
    addbusowner(addbusownerDTO):any
    {
        return "Employee is adding a bus owner with name: "+addbusownerDTO.name
        +" brta-license: "+addbusownerDTO.brtalicense
    }
    updatebusowner(updatebusownerDTO):any
    {
        return "Employee is updating a bus owner with name: "+updatebusownerDTO.name
        +" brta-license: "+updatebusownerDTO.brtalicense
        +" where id: "+updatebusownerDTO.id
    }
    deletebusowner(deleteCustomerDTO):any
    {
        return "Employee is deleting a bus owner with id: "+deleteCustomerDTO.id
    }
}
