import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    async getUser(_id:number): Promise<User[]> {
        return await this.userRepository.find({
            select: ["id", "first_name", "last_name"],
            where: [{ "id": _id }]
        });
    }
}
