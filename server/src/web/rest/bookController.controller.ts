import {
    Body,
    Controller,
    Delete,
    Get,
    Logger,
    Param,
    Post as PostMethod,
    Put,
    UseGuards,
    Req,
    UseInterceptors,
} from '@nestjs/common';
import { ApiBearerAuth, ApiUseTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Request } from 'express';
import { AuthGuard, Roles, RolesGuard, RoleType } from '../../security';
import { LoggingInterceptor } from '../../client/interceptors/logging.interceptor';

@Controller('api/bookControllers')
@UseGuards(AuthGuard, RolesGuard)
@UseInterceptors(LoggingInterceptor)
@ApiBearerAuth()
@ApiUseTags('bookControllers')
export class BookControllerController {
    logger = new Logger('BookControllerController');

    @Get('/')
    @Roles(RoleType.USER)
    @ApiResponse({
        status: 200,
        description: 'List all records',
    })
    async getAll(@Req() req: Request): Promise<any> {
        // call your async service with await..next an example
        await new Promise<any>((resolve) => {
            resolve(this.logger.log(req));
        });
        new Promise<any>((resolve) => {
            resolve('to implement');
        });
    }

    @Get('/:id')
    @ApiResponse({
        status: 200,
        description: 'The found record',
    })
    async getOne(@Param('id') id: number): Promise<any> {
        // call your async service with await..next an example
        await new Promise<any>((resolve) => {
            resolve(this.logger.log(id));
        });
        new Promise<any>((resolve) => {
            resolve('to implement');
        });
    }

    @PostMethod('/')
    @ApiOperation({ title: 'Create ' })
    @ApiResponse({
        status: 201,
        description: 'The record has been successfully created.',
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async post(@Req() req: Request, @Body() bodyReq: any): Promise<any> {
        // call your async service with await..next an example
        await new Promise<any>((resolve) => {
            resolve(this.logger.log(req + ' ' + bodyReq));
        });
        new Promise<any>((resolve) => {
            resolve('to implement');
        });
    }

    @Put('/')
    @ApiOperation({ title: 'Update ' })
    @ApiResponse({
        status: 200,
        description: 'The record has been successfully updated.',
    })
    async put(@Req() req: Request, @Body() bodyReq: any): Promise<any> {
        // call your async service with await..next an example
        await new Promise<any>((resolve) => {
            resolve(this.logger.log(req + ' ' + bodyReq));
        });
        new Promise<any>((resolve) => {
            resolve('to implement');
        });
    }

    @Delete('/:id')
    @ApiOperation({ title: 'Delete ' })
    @ApiResponse({
        status: 204,
        description: 'The record has been successfully deleted.',
    })
    async remove(@Req() req: Request, @Param('id') id: number): Promise<void> {
        // call your async service with await..next an example
        await new Promise<any>((resolve) => {
            resolve(this.logger.log(req + ' ' + id));
        });
        new Promise<any>((resolve) => {
            resolve('to implement');
        });
    }
}
