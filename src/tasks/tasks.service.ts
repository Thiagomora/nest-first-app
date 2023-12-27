import { Injectable } from '@nestjs/common'; //importamos el decorador Injectable
import { Task, TaskStatus } from './task.entity'; //importamos la interfaz Task y el enum TaskStatus
import { v4 } from 'uuid'; //importamos la funcion v4 de la libreria uuid
import { UpdateTaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  //simulamos una base de datos
  private tasks: Task[] = [
    //lista de tareas
    {
      id: '1',
      title: 'First Task',
      description: 'some task',
      status: TaskStatus.PENDING,
    },
  ];

  getAllTasks() {
    return this.tasks; //retornamos la lista de tareas
  }

  createTask(title: string, description: string) {
    const task = {
      //creamos la tarea
      id: v4(), //generamos un id unico
      title, //title: title
      description, //description: description
      status: TaskStatus.PENDING, //por defecto la tarea se crea con estado pendiente
    };
    this.tasks.push(task); //agregamos la tarea a la lista de tareas

    return task; //retornamos la tarea creada
  }
  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id); //actualizamos la lista de tareas
  }

  getTaskById(id: string) {
    return this.tasks.find((task) => task.id === id); //retornamos la tarea que coincida con el id
  }

  updateTask(id: string, updatedFields: UpdateTaskDto): Task {
    const task = this.getTaskById(id); //obtenemos la tarea por id
    const newTask = Object.assign(task, updatedFields); //actualizamos la tarea
    this.tasks = this.tasks.map((task) => (task.id === id ? newTask : task)); //actualizamos la lista de tareas
    return newTask; //retornamos la tarea actualizada
  }
}
