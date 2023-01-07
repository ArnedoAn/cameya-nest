import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PruebaController } from './prueba/prueba.controller';
import { PruebaService } from './prueba/prueba.service';
import { PruebaModule } from './prueba/prueba.module';
import { LoginController } from './Auth/login/login.controller';
import { LoginService } from './Auth/login/login.service';
import { LoginModule } from './Auth/login/login.module';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [PruebaModule, LoginModule, RegisterModule],
  controllers: [AppController, PruebaController, LoginController, RegisterController],
  providers: [AppService, PruebaService, LoginService, RegisterService],
})
export class AppModule {}
