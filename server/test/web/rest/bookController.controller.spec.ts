import { Test, TestingModule } from '@nestjs/testing';
import { BookControllerController } from '../../../src/web/rest/bookController.controller';

describe('BookController Controller', () => {
    let controller: BookControllerController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BookControllerController],
        }).compile();

        controller = module.get<BookControllerController>(BookControllerController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
