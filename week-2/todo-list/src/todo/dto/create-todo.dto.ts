export class CreateTodoDto {
  id: number;
  title: string;
  description?: string;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}
