import { StatisticsService } from './statistics.service';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
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
}
