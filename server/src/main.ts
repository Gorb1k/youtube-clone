import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const PORT = process.env.SERVER_PORT || 7000
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(PORT, () => console.log(`Server is started on ${PORT} port...`));
}
bootstrap();
