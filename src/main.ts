import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const cors = require('cors');
const corsOptions ={
  origin:'http://localhost:3001', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  app.useGlobalPipes(new ValidationPipe({whitelist:true}));
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
