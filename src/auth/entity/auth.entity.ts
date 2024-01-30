import { ApiProperty } from '@nestjs/swagger';

type UserAuthEntity = {
  id: number;
  name: string;
  email: string;
};

export class AuthEntity {
  @ApiProperty()
  accessToken: string;

  @ApiProperty()
  user: UserAuthEntity;
}
