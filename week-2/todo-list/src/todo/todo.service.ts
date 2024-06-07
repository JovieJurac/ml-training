import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoDto: CreateTodoDto) {
    try {
      return await this.prisma.todo.create({
        data: createTodoDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.todo.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.todo.findUnique({
        where: { id: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    try {
      return await this.prisma.todo.update({
        where: { id: id },
        data: updateTodoDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.todo.delete({
        where: { id: id },
      });
    } catch (error) {
      return error.message;
    }
  }
}
