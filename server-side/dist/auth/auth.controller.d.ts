import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
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
        };
    }>;
    register(dto: AuthDto, res: Response): Promise<{
        accessToken: string;
        user: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            email: string;
            password: string | null;
            picture: string;
        };
    }>;
    getNewTokens(req: Request, res: Response): Promise<{
        accessToken: string;
        user: {
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
        };
    }>;
    logout(res: Response): Promise<boolean>;
    googleAuth(req: any): Promise<void>;
    googleAuthCallback(req: any, res: Response): Promise<void>;
}
