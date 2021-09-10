import { AxiosPromise } from "axios";
import { IUser } from '../models/IUser';
import axios from 'axios';


export default class UserService {
	static async getUsers(): Promise<AxiosPromise<IUser[]>> {
		return axios.get<IUser[]>('./users.json');
	}
};