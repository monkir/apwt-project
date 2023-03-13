import { IsNotEmpty, IsInt, Length, IsEmail, IsNumberString } from "class-validator";

export class signupForm 
{  
    @IsNotEmpty()
    @Length(8)
    password: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;
    
    @IsNotEmpty()
    phone: string;

    @IsNotEmpty()
    address: string;
    filename: string;
}
export class loginForm 
{   
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    password: string;
}
export class findcustomerForm 
{   
   @IsNotEmpty()
   @IsInt()
    id: string;
}
export class findBusProviderForm 
{   
   @IsNotEmpty()
    id: string;
}
export class addCustomerForm
{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;
}
export class updateCustomerForm
{
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    address: string;
}
export class deleteCustomerForm
{
    @IsNotEmpty()
    id: string;
}
export class addbusownerForm
{
    @IsNotEmpty()
    name: string;
    
    @IsNotEmpty()
    @IsEmail()
    eamil: string;

    @IsNotEmpty()
    @IsNumberString()
    phone: string;

    @IsNotEmpty()
    address: string;

    @IsNotEmpty()
    account: number;

    @IsNotEmpty()
    brtalicense: string;
}
export class updatebusownerForm
{
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    brtalicense: string;
}
export class deletebusownerForm
{
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    brtalicense: string;
}
export class deleteBusOwnerForm
{
    @IsNotEmpty()
    id: string;
}