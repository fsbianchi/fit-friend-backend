// Importa o 'NestFactory', classe responsável por instanciar e criar a aplicação NestJS
import { NestFactory } from '@nestjs/core';
// Importa o módulo raiz 'AppModule' e a função/métrica de monitoramento 'ObserveInstrument' do arquivo app.module.js
import { AppModule, ObserveInstrument } from './app.module.js';


// Declara uma função assíncrona chamada 'bootstrap', que é o ponto de entrada tradicional para inicializar a aplicação
async function bootstrap() {  
  // Cria a instância da aplicação NestJS passando o 'AppModule' como módulo principal 
  // e passa uma opção de configuração ativando o instrumento de observabilidade/monitoramento
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  // Inicializa o servidor HTTP escutando a porta definida na variável de ambiente PORT; 
  // se a variável não estiver configurada, utiliza por padrão a porta 3000
  await app.listen(process.env.PORT ?? 3000);
}

// Executa a função 'bootstrap' utilizando o 'top-level await' do ES Modules para iniciar a aplicação
await bootstrap();
