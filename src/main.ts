import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './feature/app/app.module';
declare const module: any;

// 入口程序
async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // swragger配置项
  const options = new DocumentBuilder()
    .setTitle('BlogDocs')  // 文档标题
    .setDescription('The blogs API description') // 文档描述
    .setVersion('1.0') // 文档版本
    .build();
  const document = SwaggerModule.createDocument(app, options); // 设置文档
  SwaggerModule.setup('api-docs', app, document); // 生成文档

  // webpack热部署
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

  await app.listen(3001);
  console.log('Server is running on 3001...')
}
bootstrap();
