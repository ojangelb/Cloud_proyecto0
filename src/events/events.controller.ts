import {
    Body,
    Param,
    Controller,
    Delete,
    Get,
    Post,
    Put,
    UseInterceptors,
    UseGuards,
  } from '@nestjs/common/';
  import { Event } from './events.entity';
  import { EventsService } from './events.service';
  import { FilesInterceptor } from '@nestjs/platform-express';
  import { AuthGuard } from '@nestjs/passport';
  import { GetUser } from '../auth/get-user.decorator';
  import { User } from '../user/user.entity';
  import { EventDto } from './events.dto';
  
  @Controller('events')
  @UseGuards(AuthGuard())
  export class EventsController {
    constructor(private eventsService: EventsService) {}
  
    @Get()
    getEvents(@GetUser() user: User): Promise<Event[]> {
      return this.eventsService.getAllEvents(user);
    }
  
    @Get(':id')
    getEventById(@Param('id') id: string, @GetUser() user: User): Promise<Event> {
      return this.eventsService.getEventById(id, user);
    }
  
    @Post()
    @UseInterceptors(FilesInterceptor(null))
    createEvent(@Body() event: EventDto, @GetUser() user: User) {
      console.log(EventDto);
      return this.eventsService.createEvent(event, user);
    }
  
    @Put(':id')
    @UseInterceptors(FilesInterceptor(null))
    updateEvent(@Param('id') id, @Body() event: EventDto, @GetUser() user: User) {
      return this.eventsService.updateEvent(id, event, user);
    }
  
    @Delete(':id')
    deleteEvent(@Param('id') id, @GetUser() user: User) {
      return this.eventsService.deleteEvent(id, user);
    }
  }
  