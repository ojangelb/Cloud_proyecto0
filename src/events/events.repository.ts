import { Repository, EntityRepository, DeleteResult } from 'typeorm';
import { Event } from './events.entity';
import { NotFoundException } from '@nestjs/common';
import { User } from '../user/user.entity';
import { EventDto } from './events.dto';

@EntityRepository(Event)
export class EventRepository extends Repository<Event> {
  async getEvents(user: User): Promise<Event[]> {
    return await this.find({ where: { user } });
  }

  async getEventById(id: string, user: User): Promise<Event> {
    const event = await this.findOne({ where: { id, user } });
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    return event;
  }

  async createEvent(eventDto: EventDto, user: User): Promise<Event> {
    const event = new Event();
    Object.assign(event, eventDto);
    event.user = user;
    await event.save();
    delete event.user;
    return event;
  }

  async updateEvent(id: string, eventDto: EventDto, user: User): Promise<Event> {
    const event = await this.getEventById(id, user);
    if (!event) {
      throw new NotFoundException('Event not found');
    }
    Object.assign(event, eventDto);
    await event.save();
    return event;
  }

  async deleteEvent(eventId: string, user: User): Promise<DeleteResult> {
    const result: DeleteResult = await this.delete({ id: eventId, user });
    if (result.affected === 0) {
      throw new NotFoundException(`Event with Id ${eventId} does not exists.`);
    }
    return result;
  }
}
