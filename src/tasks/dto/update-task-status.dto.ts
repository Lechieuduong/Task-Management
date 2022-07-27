import { IsEnum } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class UpdateTaskStatusDto {
    @IsEnum(TaskStatus)
    status: TaskStatus;
}
