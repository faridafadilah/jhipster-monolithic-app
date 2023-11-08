import { Test, TestingModule } from '@nestjs/testing';
import { BookServiceService } from '../../src/service/bookService.service';

describe('BookService Service', () => {
    let service: BookServiceService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BookServiceService],
        }).compile();

        service = module.get<BookServiceService>(BookServiceService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
