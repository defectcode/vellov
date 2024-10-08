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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
const common_1 = require("@nestjs/common");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const color_service_1 = require("./color.service");
const color_dto_1 = require("./dto/color.dto");
let ColorController = class ColorController {
    constructor(colorService) {
        this.colorService = colorService;
    }
    async getByStoreId(storeId) {
        return this.colorService.getByStoreId(storeId);
    }
    async getById(id) {
        return this.colorService.getById(id);
    }
    async create(storeId, dto) {
        return this.colorService.create(storeId, dto);
    }
    async update(id, dto) {
        return this.colorService.update(id, dto);
    }
    async delete(id) {
        return this.colorService.delete(id);
    }
};
exports.ColorController = ColorController;
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-storeId/:storeId'),
    __param(0, (0, common_1.Param)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "getByStoreId", null);
__decorate([
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Get)('by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "getById", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Post)(':storeId'),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, color_dto_1.ColorDto]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "update", null);
__decorate([
    (0, common_1.HttpCode)(200),
    (0, auth_decorator_1.Auth)(),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ColorController.prototype, "delete", null);
exports.ColorController = ColorController = __decorate([
    (0, common_1.Controller)('colors'),
    __metadata("design:paramtypes", [color_service_1.ColorService])
], ColorController);
//# sourceMappingURL=color.controller.js.map