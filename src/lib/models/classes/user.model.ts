import type { IUser } from '$models/interfaces/iuser.interface';
import type { IDeserializable } from '$models/interfaces/ideserializable.interface';

export class UserModel implements IDeserializable<IUser>, IUser {
	public name = '';
	public job = '';
	public id = '';

	deserialize(input: IUser): this {
		Object.assign(this, input);
		return this;
	}
}
