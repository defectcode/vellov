"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const yoo_checkout_1 = require("@a2seven/yoo-checkout");
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma.service");
const checkout = new yoo_checkout_1.YooCheckout({
    shopId: process.env['YOOKASSA_SHOP_ID'],
    secretKey: process.env['YOOKASSA_SECRET_KEY']
});
let OrderService = class OrderService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createPayment(dto, userId) {
        const orderItems = dto.items.map(item => ({
            quantity: item.quantity,
            price: item.price,
            product: {
                connect: {
                    id: item.productId
                }
            },
            store: {
                connect: {
                    id: item.storeId
                }
            }
        }));
        const total = dto.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
        }, 0);
        const order = await this.prisma.order.create({
            data: {
                status: dto.status,
                items: {
                    create: orderItems
                },
                total,
                user: {
                    connect: {
                        id: userId
                    }
                }
            }
        });
        const payment = await checkout.createPayment({
            amount: {
                value: total.toFixed(2),
                currency: 'RUB'
            },
            payment_method_data: {
                type: 'bank_card'
            },
            confirmation: {
                type: 'redirect',
                return_url: `${process.env.CLIENT_URL}/thanks`
            },
            description: `Оплата заказа в магазине TeaShop. Id платежи: #${order.id}`
        });
        return payment;
    }
    async updateStatus(dto) {
        if (dto.event === 'payment.waiting_for_capture') {
            const capturePayment = {
                amount: {
                    value: dto.object.amount.value,
                    currency: dto.object.amount.currency
                }
            };
            return checkout.capturePayment(dto.object.id, capturePayment);
        }
        if (dto.event === 'payment.succeeded') {
            const orderId = dto.object.description.split('#')[1];
            await this.prisma.order.update({
                where: {
                    id: orderId
                },
                data: {
                    status: client_1.EnumOrderStatus.PAYED
                }
            });
            return true;
        }
        return true;
    }
};
exports.OrderService = OrderService;
exports.OrderService = OrderService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], OrderService);
//# sourceMappingURL=order.service.js.map