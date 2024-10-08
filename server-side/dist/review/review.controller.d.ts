import { ReviewDto } from './dto/review.dto';
import { ReviewService } from './review.service';
export declare class ReviewController {
    private readonly reviewService;
    constructor(reviewService: ReviewService);
    getByStoreId(storeId: string): Promise<({
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            picture: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        userId: string | null;
        productId: string | null;
        rating: number;
        text: string;
    })[]>;
    create(userId: string, productId: string, storeId: string, dto: ReviewDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        userId: string | null;
        productId: string | null;
        rating: number;
        text: string;
    }>;
    delete(id: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        userId: string | null;
        productId: string | null;
        rating: number;
        text: string;
    }>;
}
