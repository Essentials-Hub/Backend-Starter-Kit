import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

import { CryptographyModule } from './cryptography/cryptography.module';
import { envSchema } from './env';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: (env) => envSchema.parse(env),
      isGlobal: true,
    }),
    CryptographyModule,
    HttpModule,
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}
