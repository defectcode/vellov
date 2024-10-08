import { PrismaService } from 'src/prisma.service';
import { ColorDto } from './dto/color.dto';
export declare class ColorService {
    private prisma;
    constructor(prisma: PrismaService);
    getByStoreId(storeId: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        value: string;
    }[]>;
    getById(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        value: string;
    }>;
    create(storeId: string, dto: ColorDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        value: string;
    }>;
    update(id: string, dto: ColorDto): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        value: string;
    }>;
    delete(id: string): Promise<{
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        storeId: string | null;
        value: string;
    }>;
}
