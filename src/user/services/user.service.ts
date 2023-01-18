import { Injectable } from "@nestjs/common";
import { RegisterDto } from "src/auth/dtos/register.dtos";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "../repositories/user.repository";

@Injectable()
export class UserService {
    constructor(private readonly _userRepository: UserRepository) {}

    async create(userData: RegisterDto): Promise<UserEntity> {
        const user = await this._userRepository.create(userData);
        return this._userRepository.save(user);
    }

    public async getUserByUsername(username): Promise<UserEntity> {
        return this._userRepository.findOne({ username })
    }

    public async getUserById(payload): Promise<UserEntity> {
        console.log(payload.userId)
        return this._userRepository.findOne(payload.id);
    }
}