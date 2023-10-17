import { Transport, ClientOptions } from "@nestjs/microservices";
import { join } from "path";

export const heroServiceOptions: ClientOptions = {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      url: process.env.HERO_URL || '0.0.0.0:50002',
      protoPath: join(__dirname, '../src/proto/hero.proto'),
      loader: {
        keepCase: true,
        json: true,
        objects: true,
      },
    },
  };