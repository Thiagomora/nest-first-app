import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

@Module({
  controllers: [TasksController], //importamos el controlador
  providers: [TasksService], //importamos el servicio
})
export class TasksModule {} //exportamos el modulo
