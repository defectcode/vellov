import { PrismaService } from 'src/prisma.service';
import { AuthDto } from 'src/auth/dto/auth.dto';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getById(id: string): Promise<{
        stores: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            userId: string | null;
        }[];
        favorites: ({
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
        })[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            total: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
    }>;
    getByEmail(email: string): Promise<{
        stores: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            description: string | null;
            userId: string | null;
        }[];
        favorites: {
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
        }[];
        orders: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string | null;
            status: import(".prisma/client").$Enums.EnumOrderStatus;
            total: number;
        }[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
    }>;
    toggleFavorite(productId: string, userId: string): Promise<boolean>;
    create(dto: AuthDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        password: string | null;
        picture: string;
    }>;
}
