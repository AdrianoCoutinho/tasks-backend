import { v4 as createUuid } from "uuid";

export class User {
  private _id: string;

  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {
    this._id = createUuid();
  }

  public static create(
    id: string,
    name: string,
    email: string,
    password: string
  ) {
    const user = new User(name, email, password);
    user._id = id;
    return user;
  }

  public get id() {
    return this._id;
  }

  public toJson() {
    return {
      _id: this._id,
      name: this.name,
      email: this.email,
    };
  }
}
