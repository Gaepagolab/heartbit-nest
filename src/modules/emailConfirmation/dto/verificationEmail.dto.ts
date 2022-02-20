import { IsNotEmpty, IsEmail } from 'class-validator';

export class VerificationDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export default VerificationDto;
