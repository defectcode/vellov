import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
export declare class AuthService {
    private jwt;
    private userService;
    private prisma;
    private configService;
    EXPIRE_DAY_REFRESH_TOKEN: number;
    REFRESH_TOKEN_NAME: string;
    constructor(jwt: JwtService, userService: UserService, prisma: PrismaService, configService: ConfigService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
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
    getNewTokens(refreshToken: string): Promise<{
        accessToken: string;
        refreshToken: string;
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
    issueTokens(userId: string): {
        accessToken: string;
        refreshToken: string;
    };
    private validateUser;
    validateOAuthLogin(req: any): Promise<{
        accessToken: string;
        refreshToken: string;
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
    addRefreshTokenToResponse(res: Response, refreshToken: string): void;
    removeRefreshTokenFromResponse(res: Response): void;
}
