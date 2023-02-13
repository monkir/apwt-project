import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
        EmployeeModule, ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
