import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '44016458',
  database: 'events_db',
  entities: [__dirname + '/../**/*.entity.{ts,js}'],
  synchronize: true,
};
