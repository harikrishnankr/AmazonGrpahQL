import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);
    if (gqlHost.getType() === 'http') {
      const ctx = host.switchToHttp();
      const response = ctx.getResponse();
      const request = ctx.getRequest();
      const status =
        exception instanceof HttpException
          ? exception.getStatus()
          : HttpStatus.INTERNAL_SERVER_ERROR;
      console.log(request, ctx, request, status, exception);
      const responseBody = {
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
        error:
          exception instanceof HttpException
            ? exception.getResponse()
            : exception.message || 'Internal server error',
      };

      response.status(status).json(responseBody);
    } else {
      return new Error(exception.message);
    }
  }
}
