import { OrderDto } from './dto/order.dto';
import { PaymentStatusDto } from './dto/payment-status.dto';
import { OrderService } from './order.service';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    checkout(dto: OrderDto, userId: string): Promise<import("@a2seven/yoo-checkout").Payment>;
    updateStatus(dto: PaymentStatusDto): Promise<true | import("@a2seven/yoo-checkout").Payment>;
}
