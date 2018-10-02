import { Character } from './../../profile/shared/user-profile';
export class User {
    userId: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    characters: Character[];
}
