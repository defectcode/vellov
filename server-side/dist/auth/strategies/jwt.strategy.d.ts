import { ConfigService } from '@nestjs/config';
import { Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private userService;
    constructor(configService: ConfigService, userService: UserService);
    validate({ id }: {
        id: string;
    }): Promise<{
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
}
export {};
