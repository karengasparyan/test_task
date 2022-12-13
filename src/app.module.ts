import {
  Module,
} from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UsersModule } from './users/users.module';
import { AccountsModule } from './accounts/accounts.module';
import db from './database/initialize-sql';

@Module({
  imports: [
    db.initialize(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'web'),
      exclude: ['/api*'],
    }),
    UsersModule,
    AccountsModule,
  ],
  providers: [],
})
export class AppModule {}
