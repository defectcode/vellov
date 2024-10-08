import { PrismaService } from 'src/prisma.service';
import { ProductService } from 'src/product/product.service';
import { ReviewDto } from './dto/review.dto';
export declare class ReviewService {
    private prisma;
    private productService;
    constructor(prisma: PrismaService, productService: ProductService);
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
    getById(id: string, userId: string): Promise<{
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
    }>;
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
