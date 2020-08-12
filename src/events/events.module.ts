import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventRepository } from './events.repository';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([EventRepository]), AuthModule],
  controllers: [EventsController],
  providers: [EventsService],
})
export class EventsModule {}
