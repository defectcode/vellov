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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const argon2_1 = require("argon2");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getById(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            },
            include: {
                stores: true,
                favorites: {
                    include: {
                        category: true
                    }
                },
                orders: true
            }
        });
        return user;
    }
    async getByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email
            },
            include: {
                stores: true,
                favorites: true,
                orders: true
            }
        });
        return user;
    }
    async toggleFavorite(productId, userId) {
        const user = await this.getById(userId);
        const isExists = user.favorites.some(product => product.id === productId);
        await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect' : 'connect']: {
                        id: productId
                    }
                }
            }
        });
        return true;
    }
    async create(dto) {
        return this.prisma.user.create({
            data: {
                name: dto.name,
                email: dto.email,
                password: await (0, argon2_1.hash)(dto.password)
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map