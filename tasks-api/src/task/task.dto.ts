import { ApiProperty } from "@nestjs/swagger";

export class TaskDto {
    @ApiProperty()
    id: string;

    @ApiProperty()
    title: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    status: string;

    @ApiProperty()
    expirationDate: Date;
}
