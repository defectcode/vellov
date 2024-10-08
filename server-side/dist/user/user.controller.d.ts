import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    getProfile(id: string): Promise<{
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
    toggleFavorite(userId: string, productId: string): Promise<boolean>;
}
