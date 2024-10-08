import 'dayjs/locale/ru';
import { PrismaService } from 'src/prisma.service';
export declare class StatisticsService {
    private prisma;
    constructor(prisma: PrismaService);
    getMainStatistics(storeId: string): Promise<{
        id: number;
        name: string;
        value: number;
    }[]>;
    getMiddleStatistics(storeId: string): Promise<{
        monthlySales: {
            date: string;
            value: number;
        }[];
        lastUsers: {
            id: string;
            name: string;
            email: string;
            picture: string;
            total: number;
        }[];
    }>;
    private calculateTotalRevenue;
    private countProducts;
    private countCategories;
    private calculateAverageRating;
    private calculateMonthlySales;
    private getLastUsers;
}
