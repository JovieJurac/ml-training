import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      return await this.prisma.contact.create({
        data: createContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.contact.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.contact.findUnique({
        where: { id: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    try {
      return await this.prisma.contact.update({
        where: { id: id },
        data: updateContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.contact.delete({
        where: { id: id },
      });
    } catch (error) {
      return error.message;
    }
  }
}
