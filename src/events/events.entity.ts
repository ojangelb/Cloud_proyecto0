import {
    BaseEntity,
    Column,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  import { User } from '../user/user.entity';
  
  @Entity()
  export class Event extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ default: '' })
    event_name: string;
    @Column({ default: '' })
    event_category: string;
    @Column({ default: '' })
    event_place: string;
    @Column({ default: '' })
    event_address: string;
    @Column({ default: '' })
    event_initial_date: string;
    @Column({ default: '' })
    event_final_date: string;
    @Column({ default: '' })
    event_type: string;
    @Column({ default: '' })
    thumbnail: string;
    @ManyToOne(() => User, (user) => user.events, { eager: false })
    user: User;
  
    constructor() {
      super();
    }
  }
  