import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class RegisterFromClientDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(7)
  password: string;

  @IsString()
  @IsNotEmpty()
  registerToken: string;
}

export default RegisterFromClientDTO;
