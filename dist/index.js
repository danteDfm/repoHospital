"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = require("./routes");
//init
dotenv_1.default.config();
const app = (0, express_1.default)();
//settings 
app.set('puerto', process.env.PORT);
//middlewares
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//routes 
(0, routes_1.indexRouter)(app);
app.listen(app.get('puerto'), () => {
    console.log("SERVER EN EL PUERTO " + app.get('puerto'));
});
