import  { UserModel,IUser } from "../models/user.model";

class UserService {
//   id: number;
  username: string;
  password: string;
  email: string;
  role: 'admin' | 'user';

  constructor(username: string, password: string, email: string, role: 'admin' | 'user') {
    // this.id = 0;
    this.username = username;
    this.password = password;
    this.email = email;
    this.role = role;
  }

  private async setId() {
    const usersList = await UserModel.find({});
    const usersId = usersList.map(u => u.id);
    // this.id = Math.max(...usersId) + 1;
  }

  async save() {
    await this.setId();
    const user = new UserModel({
    //   id: this.id,
      username: this.username,
      password: this.password,
      email: this.email,
      role: this.role
    });
    await user.save();
    return user;
  }
}

export default UserService;
