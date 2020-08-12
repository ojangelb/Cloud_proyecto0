import { IsString, MinLength, MaxLength } from 'class-validator';
export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  first_name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  last_name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  password: string;
}
