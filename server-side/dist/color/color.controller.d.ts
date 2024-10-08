import { ColorService } from './color.service';
import { ColorDto } from './dto/color.dto';
export declare class ColorController {
    private readonly colorService;
    constructor(colorService: ColorService);
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
