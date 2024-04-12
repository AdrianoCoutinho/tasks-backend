import { TypeormConnection } from "./main/database/typeorm.connection";
import { Server } from "./main/server/express.server";

Promise.all([TypeormConnection.init()]).then(Server.run);
