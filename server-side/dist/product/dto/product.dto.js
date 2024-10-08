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
exports.ProductDto = void 0;
const class_validator_1 = require("class-validator");
class ProductDto {
}
exports.ProductDto = ProductDto;
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Название обязательно'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Название не может быть пустым' }),
    __metadata("design:type", String)
], ProductDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Описание обязательно' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Описание не может быть пустым' }),
    __metadata("design:type", String)
], ProductDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Цена должна быть числом' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Цена не может быть пустой' }),
    __metadata("design:type", Number)
], ProductDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Укажите хотя бы одну картинку',
        each: true
    }),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Должна быть хотя бы одна картинка' }),
    (0, class_validator_1.IsNotEmpty)({
        each: true,
        message: 'Путь к картинке не может быть пустым'
    }),
    __metadata("design:type", Array)
], ProductDto.prototype, "images", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Категория обязательна'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID категории не может быть пустым' }),
    __metadata("design:type", String)
], ProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, class_validator_1.IsString)({
        message: 'Цвет обязателен'
    }),
    (0, class_validator_1.IsNotEmpty)({ message: 'ID цвета не может быть пустым' }),
    __metadata("design:type", String)
], ProductDto.prototype, "colorId", void 0);
//# sourceMappingURL=product.dto.js.map