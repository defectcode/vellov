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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll(searchTerm) {
        if (searchTerm)
            return this.getSearchTermFilter(searchTerm);
        return this.prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                category: true
            }
        });
    }
    async getSearchTermFilter(searchTerm) {
        return this.prisma.product.findMany({
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    },
                    {
                        description: {
                            contains: searchTerm,
                            mode: 'insensitive'
                        }
                    }
                ]
            },
            include: {
                category: true
            }
        });
    }
    async getByStoreId(storeId) {
        return this.prisma.product.findMany({
            where: {
                storeId
            },
            include: {
                category: true,
                color: true
            }
        });
    }
    async getById(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id
            },
            include: {
                category: true,
                color: true,
                reviews: {
                    include: {
                        user: true
                    }
                }
            }
        });
        if (!product)
            throw new common_1.NotFoundException('Товар не найден');
        return product;
    }
    async getByCategory(categoryId) {
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    id: categoryId
                }
            },
            include: {
                category: true
            }
        });
        if (!products)
            throw new common_1.NotFoundException('Товары не найдены');
        return products;
    }
    async getMostPopular() {
        const mostPopularProducts = await this.prisma.orderItem.groupBy({
            by: ['productId'],
            _count: {
                id: true
            },
            orderBy: {
                _count: {
                    id: 'desc'
                }
            }
        });
        const productIds = mostPopularProducts.map(item => item.productId);
        const products = await this.prisma.product.findMany({
            where: {
                id: {
                    in: productIds
                }
            },
            include: {
                category: true
            }
        });
        return products;
    }
    async getSimilar(id) {
        const currentProduct = await this.getById(id);
        if (!currentProduct)
            throw new common_1.NotFoundException('Текущий товар не найден');
        const products = await this.prisma.product.findMany({
            where: {
                category: {
                    title: currentProduct.category.title
                },
                NOT: {
                    id: currentProduct.id
                }
            },
            orderBy: {
                createdAt: 'desc'
            },
            include: {
                category: true
            }
        });
        return products;
    }
    async create(storeId, dto) {
        return this.prisma.product.create({
            data: {
                title: dto.title,
                description: dto.description,
                price: dto.price,
                images: dto.images,
                categoryId: dto.categoryId,
                colorId: dto.colorId,
                storeId
            }
        });
    }
    async update(id, dto) {
        await this.getById(id);
        return this.prisma.product.update({
            where: { id },
            data: dto
        });
    }
    async delete(id) {
        await this.getById(id);
        return this.prisma.product.delete({
            where: { id }
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map