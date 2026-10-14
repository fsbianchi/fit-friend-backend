import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Permite que o front-end (React) consiga comunicar com esta API
  app.enableCors();

  // --- Configuração do Swagger ---
  const config = new DocumentBuilder()
    .setTitle('API FitFriends')
    .setDescription('Documentação da API do projeto integrador.')
    .setVersion('1.0')
    .addTag('usuarios')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // -------------------------------

  await app.listen(3000);
}
bootstrap();