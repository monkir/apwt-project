/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get()
    find():string{
        return "this is employee panel"
    }
    @Post('login')
    login(
        @Body("id") id:string,
        @Body("password") password:string):string{
        return "Log in with id: "+id+" and password: "+password;
    }
    @Get("findcustomer/:id")
    findcustomer(@Param('id') id):string
    {
        return "employee trying to find customer with id: "+id;
    }
    @Get("findbusprovider/:id")
    findbusprovider(@Param('id') id):string
    {
        return "employee trying to find bus provider with id: "+id;
    }
    @Post('addcustomer')
    addcustomer(
        @Body('name') name:string,
        @Body('email') email:string,
        @Body('phone') phone:string
    ){
        return "Employee is adding a customer with name: "+name+" email: "+email+" phone: "+phone;
    }
    @Put('updatecustomer')
    updatecustomer(
        @Body('id') id:string,
        @Body('name') name:string,
        @Body('email') email:string,
        @Body('phone') phone:string
    ){
        return "Employee is updating a customer with id: "+id+" name: "+name+" email: "+email+" phone: "+phone;
    }
    @Delete('deletecustomer/:id')
    deletecustomer(
        @Param('id') id: string
    ){
        return "Employee is deleting a customer with id: "+id
    }
    @Post('addbusowner')
    addbusowner(
        @Body('name') name:string,
        @Body('brta-license') brta_lcs:string
    ){
        return "Employee is adding a bus owner with name: "+name+" brta-license: "+brta_lcs
    }
    // @Post('addbusowner')
    // addbusowner(@Body() body):string{
    //     return "Employee is adding a bus owner with name: "+body.name+" brta-license: "+body.brta_lcs
    // }
    @Put('updatebusowner')
    updatebusowner(
        @Body('id') id:string,
        @Body('name') name:string,
        @Body('brta-license') brta_lcs:string
    ){
        return "Employee is adding a bus owner with id: "+id+" name: "+name+" brta-license: "+brta_lcs
    }
    @Delete('deletebusowner/:id')
    deletebusowner(
        @Param('id') id: string
    ){
        return "Employee is deleting a bus owner with id: "+id
    }
}
