import { IsInt, IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateBookDto {
    @IsInt()
    id: number;

    @IsString()
    title: string;

    @IsString()
    author: string;

    @IsString()
    isbn: string;

    @IsNumber()
    publishYear: number;

    @IsBoolean()
    reserved: boolean;
}
