"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRouter = void 0;
const ficha_tecnica_routes_1 = __importDefault(require("./ficha.tecnica.routes"));
function indexRouter(app) {
    app.use('/paciente', ficha_tecnica_routes_1.default);
}
exports.indexRouter = indexRouter;
