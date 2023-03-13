/*
https://docs.nestjs.com/providers#services
*/

import { MailerModule, MailerService } from '@nestjs-modules/mailer/dist';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { busownerEntity } from 'src/busowner/busowner.entity';
import { customerEntity } from 'src/customer/customer.entity';
import { Repository } from 'typeorm';
import { employeeEntity } from './employee.entity';
import * as bcrypt from 'bcrypt';
import { randomInt } from 'crypto';

@Injectable()
export class EmployeeService {
    constructor(
        @InjectRepository(employeeEntity)
        private empRepo: Repository<employeeEntity>,
        @InjectRepository(busownerEntity)
        private busRepo: Repository<busownerEntity>,
        @InjectRepository(customerEntity)
        private custRepo: Repository<customerEntity>,
        private mailerService: MailerService
    ){}
    getIndex():any
    {
        //return "this is employee panel";
        return this.empRepo.find()
    }
    async signup(signupDTO):Promise<any>
    {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(signupDTO.password,salt);
        signupDTO.password=hash;
        return this.empRepo.insert(signupDTO)

    }
    async login(loginDTO):Promise<any>
    { 
       if(await this.empRepo.count({where: {email: loginDTO.email}})==0){
        return false;
       }
       const tableData= await this.empRepo.findOneBy({email: loginDTO.email})
       return bcrypt.compare(loginDTO.password, tableData.password)
    }
    async getIDbyEmail(email):Promise<any>
    { 
        const tableData= await this.empRepo.findOneBy({email: email})
       return tableData.id
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
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
    async addcustomer(addCustomerDTO):Promise<any>
    {
        /*
        return "Employee is adding a customer with name: "+addCustomerDTO.name
        +" email: "+addCustomerDTO.email+" phone: "+addCustomerDTO.phone;
        */
       const pass = this.makeid(8)
       const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(pass,salt);
        addCustomerDTO.password=hash;
        await this.mailerService.sendMail({
            to: addCustomerDTO.email,
            subject: 'Password of your account in Bus Ticketing System',
            text: 'Welcome to Bus Ticketing System\n'+
                'Your account is: '+addCustomerDTO.email+'\n'+
                'Your password is: '+pass
        })
        return this.custRepo.insert(addCustomerDTO)
    }
    async updatecustomer(updateCustomerDTO):Promise<any>
    {
        // return "Employee is updating a customer with id: "+updateCustomerDTO.id
        // +" name: "+updateCustomerDTO.name+" email: "+updateCustomerDTO.email
        // +" phone: "+updateCustomerDTO.phone;
        const pass = updateCustomerDTO.password
       const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(pass,salt);
        updateCustomerDTO.password=hash;
        await this.mailerService.sendMail({
            to: updateCustomerDTO.email,
            subject: 'Updated Password of your account in Bus Ticketing System',
            text: 'Welcome to Bus Ticketing System\n'+
                'Your account is: '+updateCustomerDTO.email+'\n'+
                'Your password is: '+pass
        })
        console.log('test')
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
    async sendmail():Promise<any>
    {
        return await this.mailerService.sendMail({
            to: 'monkirchowdhury@gmail.com',
            subject: 'Bus Ticketing System',
            text: 'Welcome to Bus Ticketing System'
        })
    }
}
