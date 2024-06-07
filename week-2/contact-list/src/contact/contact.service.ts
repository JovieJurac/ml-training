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

  async findOne(number: string) {
    try {
      return await this.prisma.contact.findUnique({
        where: { number: number },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(number: string, updateContactDto: UpdateContactDto) {
    try {
      return await this.prisma.contact.update({
        where: { number: number },
        data: updateContactDto,
      });
    } catch (error) {
      return error.message;
    }
  }

  async remove(number: string) {
    try {
      return await this.prisma.contact.delete({
        where: { number: number },
      });
    } catch (error) {
      return error.message;
    }
  }
}
