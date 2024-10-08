import { PrismaService } from 'src/prisma.service';
import { OrderDto } from './dto/order.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
export declare class OrderService {
    private prisma;
    constructor(prisma: PrismaService);
    createPayment(dto: OrderDto, userId: string): Promise<import("@a2seven/yoo-checkout").Payment>;
    updateStatus(dto: PaymentStatusDto): Promise<true | import("@a2seven/yoo-checkout").Payment>;
}
