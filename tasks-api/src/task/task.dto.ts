import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsEnum, IsOptional, IsString, IsUUID, MaxLength, MinLength } from "class-validator";

export enum TaskStatusEnum {
    TO_DO = 'TO_DO',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class TaskDto {
    @IsUUID()
    @IsOptional()
    @ApiProperty()
    id: string;

    @IsString()
    @MinLength(3)
    @MaxLength(256)
    @ApiProperty()
    title: string;

    @IsString()
    @MinLength(5)
    @MaxLength(512)
    @ApiProperty()
    description: string;

    @IsEnum(TaskStatusEnum)
    @IsOptional()
    @ApiProperty()
    status: string;

    @IsDateString()
    @ApiProperty()
    expirationDate: Date;
}
