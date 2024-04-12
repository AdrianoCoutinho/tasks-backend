import bcrypt from "bcrypt";
import { User } from "../../../models/user.model";
import { Return } from "../../../shared/util/return.contract";
import { UserRepository } from "../../user/database/user.repository";

interface RegisterUserParams {
  name: string;
  email: string;
  password: string;
}

export class RegisterUserUsecase {
  public async execute(data: RegisterUserParams): Promise<Return> {
    const repository = new UserRepository();

    const user = await repository.getByEmail(data.email);

    if (user !== null) {
      return {
        ok: false,
        code: 400,
        message: "Usuário já existe",
      };
    }

    const hashpassword = await bcrypt.hash(
      data.password,
      "$2b$10$BLOX9oUHmeJZJv6/QonGU."
    );

    const userRegister = new User(data.name, data.email, hashpassword);

    const result = await repository.create(userRegister);

    return {
      ok: true,
      code: 201,
      message: "Usuário criado com sucesso",
      data: result,
    };
  }
}
