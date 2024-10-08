import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    getAll(searchTerm?: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    })[]>;
    getByStoreId(storeId: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
        color: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            storeId: string | null;
            value: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    })[]>;
    getById(id: string): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
        color: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            storeId: string | null;
            value: string;
        };
        reviews: ({
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
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    }>;
    getbyCategory(categoryId: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    })[]>;
    getMostPopular(): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    })[]>;
    getSimilar(id: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string;
            storeId: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    })[]>;
    create(storeId: string, dto: ProductDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    }>;
    update(id: string, dto: ProductDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    }>;
    delete(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        description: string;
        price: number;
        images: string[];
        storeId: string | null;
        categoryId: string | null;
        colorId: string | null;
        userId: string | null;
    }>;
}
