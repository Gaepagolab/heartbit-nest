import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerCustomOptions, SwaggerModule } from '@nestjs/swagger';

export function activateSwaggerModule(app: INestApplication) {
  const path = 'api';
  const config = new DocumentBuilder().setTitle('Heartbit API').setVersion('1.0');

  const document = SwaggerModule.createDocument(app, config.build());

  const options: SwaggerCustomOptions = {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: 'none',
    },
    customSiteTitle: 'Heartbit APIs',
    customCssUrl: 'https://cdn.jsdelivr.net/npm/swagger-ui-dist@3.52.5/swagger-ui.css',
    customCss: `
      .topbar { 
        background-color: #0E171D !important; 
        position: fixed;
        width: 100%;
        z-index: 1000;
        top: 0;
      }
      .information-container .info {
        margin-top: 100px;
      }
      .topbar-wrapper img { 
        // content: url('');
        height: 24px;
      }
      .topbar-wrapper a::after { 
        opacity: 0.5;
        content: 'Developer Center';
        margin-left: 8px;
        margin-top: 5px;
        font-size: 14px;
      }`,
    customfavIcon: '',
  };

  SwaggerModule.setup(path, app, document, options);
}
