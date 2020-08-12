import {
  BaseEntity,
  Entity,
  Column,
  Unique,
  PrimaryColumn,
  OneToMany,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Event } from '../events/events.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column({ default: '' })
  email: string;

  @Column({ default: '' })
  password: string;

  @Column({ default: '' })
  first_name: string;

  @Column({ default: '' })
  last_name: string;

  @Column({ default: '' })
  salt: string;

  @OneToMany(() => Event, (event) => event.user, { eager: true })
  events: Event[];

  async validatePassword(password: string): Promise<boolean> {
    const hash = await bcrypt.hash(password, this.salt);
    return hash === this.password;
  }
}
