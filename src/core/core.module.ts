import { Global, Module } from '@nestjs/common';
import { MongooseModule, MongooseModuleFactoryOptions } from '@nestjs/mongoose';

@Global()
@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async (): Promise<MongooseModuleFactoryOptions> => {
        return {
          uri: process.env.DATABASE ?? 'mongodb://localhost:27017/cataloger',
          serverSelectionTimeoutMS: 5000,
        };
      },
    }),
  ],
})
export class CoreModule {}
