import { Injectable } from '@nestjs/common';
import { Event } from './events.entity';
import { EventRepository } from './events.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { EventDto } from './events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(EventRepository)
    private eventRepository: EventRepository,
  ) {}

  getAllEvents(user: User): Promise<Event[]> {
    return this.eventRepository.getEvents(user);
  }

  getEventById(id: string, user: User): Promise<Event> {
    return this.eventRepository.getEventById(id, user);
  }

  createEvent(event: EventDto, user: User) {
    return this.eventRepository.createEvent(event, user);
  }

  updateEvent(id: string, event: EventDto, user: User) {
    return this.eventRepository.updateEvent(id, event, user);
  }

  deleteEvent(id: string, user: User) {
    return this.eventRepository.deleteEvent(id, user);
  }
}
