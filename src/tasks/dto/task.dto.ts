/* eslint-disable prettier/prettier */
import { TaskStatus } from '../task.entity'; //importamos el modelo
import { IsNotEmpty,IsString } from 'class-validator'; //importamos el decorador

export class CreateTaskDto {
  //creamos el dto
  @IsString() //definimos el decorador
  @IsNotEmpty() //definimos el decorador
  title: string; //definimos los campos
  description: string; //definimos los campos
}
export class UpdateTaskDto {
  //creamos el dto
  title?: string; //definimos los campos
  description?: string; //definimos los campos
  status?: TaskStatus; //definimos los campos
}
