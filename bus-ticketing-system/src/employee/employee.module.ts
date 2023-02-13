import { EmployeeController } from './employee.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
    imports: [],
    controllers: [
        EmployeeController, ],
    providers: [],
})
export class EmployeeModule {}
