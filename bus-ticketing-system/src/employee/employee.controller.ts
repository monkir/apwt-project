/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards, UsePipes,Session, ValidationPipe, UnauthorizedException } from '@nestjs/common';
import session, {  } from 'express-session';
import { addbusownerForm, addCustomerForm, deleteCustomerForm, findcustomerForm, loginForm, signupForm, updatebusownerForm, updateCustomerForm } from './employee.dto';
import { sessionGuard } from './employee.guard';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: EmployeeService){

    }
    //index
    @Get()
    find():any{
        //return this.employeeService.getIndex()
        return "Welcome to employee panel"
    }
    @Post('signup')
    @UsePipes(new ValidationPipe())
    signup(@Body() signupDTO: signupForm)
    {
        return this.employeeService.signup(signupDTO)
    }
    //employee login
    @Post('login')
    @UsePipes(new ValidationPipe())
    login(@Body() loginDTO: loginForm, @Session() session ):any
    {
        if (this.employeeService.login(loginDTO)){
            // session.email=loginDTO.email;
            session.email = loginDTO.email;
            return {'Message': 'Successfully Logged in'};
        }
        else
        {
            return {'Message': 'Invalid Creditential'}
        }
    }
    //Managing Customers
    //find customer
    @Get("showcustomers")
    @UseGuards(sessionGuard)
    showcustomes():any
    {
        return this.employeeService.showcustomers();
    }
    //find customer
    @Get("findcustomer/:id")
    @UsePipes(new ValidationPipe())
    findcustomer(@Param() findCustomerDto: findcustomerForm):any
    {
        return this.employeeService.findcustomer(findCustomerDto);
    }
    //add customer
    @Post('addcustomer')
    @UsePipes(new ValidationPipe())
    addcustomer(@Body() addCustomerDTO: addCustomerForm):any
    {
        return this.employeeService.addcustomer(addCustomerDTO);
    }
    //Update Customer
    @Put('updatecustomer')
    @UsePipes(new ValidationPipe())
    updatecustomer(@Body() updateCustomerDTO:updateCustomerForm):any
    {
        return this.employeeService.updatecustomer(updateCustomerDTO)
    }
    //delete customer
    @Delete('deletecustomer/:id')
    @UsePipes(new ValidationPipe())
    deletecustomer(@Param() deleteCustomerDTO: deleteCustomerForm):any
    {
        return this.employeeService.deletecustomer(deleteCustomerDTO)
    }
    //Managing bus provider
    //Finding bus provider
    @Get("findbusprovider/:id")
    @UsePipes(new ValidationPipe())
    findbusprovider(@Param() findBusProviderDTO: findcustomerForm):any
    {
        return this.employeeService.findbusprovider(findBusProviderDTO)
    }
    //Adding bus provider
    @Post('addbusowner')
    @UsePipes(new ValidationPipe())
    addbusowner(@Body() addbusownerDTO: addbusownerForm):any
    {
        return this.employeeService.addbusowner(addbusownerDTO)
    }
    //updating bus provider
    @Put('updatebusowner')
    @UsePipes(new ValidationPipe())
    updatebusowner(@Body() updatebusownerDTO: updatebusownerForm)
    {
        return this.employeeService.updatebusowner(updatebusownerDTO)
    }
    //deleting bus provider
    @Delete('deletebusowner/:id')
    deletebusowner(@Param() deleteCustomerDTO: deleteCustomerForm)
    {
        return this.employeeService.deletebusowner(deleteCustomerDTO)
    }
    @Get('logout')
    logout(@Session() session){
        if(session.destroy()){
            return {'Message':'Successfully Loged out'}
        }
        else{
            throw new UnauthorizedException("invalid actions"); 
        }
    }
    //Send mail
    @Post('sendmail')
    sendmail()
    {
        return this.employeeService.sendmail()
    }
}
