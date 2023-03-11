import { EmployeeModule } from './employee/employee.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { busownerModule } from './busowner/busowner.module';
import { customerModule } from './customer/busowner.module';

@Module({
  imports: [
        EmployeeModule,
        busownerModule,
        customerModule,
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5842,
          username: 'postgres',
          password: 'tiger123',
          database: 'bus-ticketing-system',
          autoLoadEntities: true,
          synchronize: true,
        }),
      ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
