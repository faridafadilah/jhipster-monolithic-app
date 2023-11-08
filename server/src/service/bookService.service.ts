import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class BookServiceService {
    logger = new Logger('BookServiceService');
}
