import { IsNotEmpty, IsInt, Length, IsEmail, IsNumberString, isNotEmpty } from "class-validator";

export class signupForm 
{   
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @Length(8)
    password: string;

    @IsNotEmpty()
    address: string;
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