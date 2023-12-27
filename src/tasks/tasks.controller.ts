import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {
  //creamos el controlador
  constructor(private tasksService: TasksService) {} //inyectamos el servicio

  @Get() //definimos la ruta
  getAllTasks() {
    //definimos el metodo
    return this.tasksService.getAllTasks(); //retornamos el metodo del servicio
  }

  @Post() //definimos la ruta
  createTask(@Body() newTask: CreateTaskDto) {
    //definimos el metodo y le pasamos el dto
    return this.tasksService.createTask(newTask.title, newTask.description); //retornamos el metodo del servicio
  }

  @Delete(':id') //definimos la ruta
  deleteTask(@Param('id') id: string) {
    //definimos el metodo y le pasamos el id
    return this.tasksService.deleteTask(id); //retornamos el metodo del servicio
  }

  @Patch(':id') //definimos la ruta
  updateTask(@Param('id') id: string, @Body() updatedFields: UpdateTaskDto) {
    //definimos el metodo y le pasamos el id y el dto
    return this.tasksService.updateTask(id, updatedFields); //retornamos el metodo del servicio
  }
}
