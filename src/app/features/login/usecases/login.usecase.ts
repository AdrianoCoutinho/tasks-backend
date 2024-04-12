import bcrypt from "bcrypt";
import { JwtAdapter } from "../../../shared/util/jwt.adapter";
import { Return } from "../../../shared/util/return.contract";
import { UserRepository } from "../../user/database/user.repository";

interface LoginParams {
  email: string;
  password: string;
}

export class LoginUsecase {
  public async execute(data: LoginParams): Promise<Return> {
    const repository = new UserRepository();

    const hashpassword = await bcrypt.hash(
      data.password,
      "$2b$10$BLOX9oUHmeJZJv6/QonGU."
    );

    const usuario = await repository.getByEmail(data.email, hashpassword);

    if (!usuario) {
      return {
        ok: false,
        message: "Email ou senha incorretos!",
        code: 401,
      };
    }

    if (usuario.password != hashpassword) {
      return {
        ok: false,
        message: "Email ou senha incorretos!",
        code: 401,
      };
    }

    const token = JwtAdapter.createToken(usuario.toJson());

    return {
      ok: true,
      message: "Login feito com sucesso",
      data: {
        ...usuario,
        token,
      },
      code: 200,
    };
  }
}
