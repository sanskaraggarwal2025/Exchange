import express from "express";
import cors from "cors";
import { depthRouter } from "./routes/depth";
import { orderRouter } from "./routes/order";
import { tickersRouter } from "./routes/ticker";
import { tradesRouter } from "./routes/trades";



const app = express();
app.use(express.json());
app.use(cors());


app.use("api/v1/order",orderRouter);
app.use("api/v1/depth",depthRouter);
app.use("api/v1/trades",tradesRouter);
app.use("api/v1/klines");
app.use("api/v1/tickers",tickersRouter);

app.listen(3000,() => {
 console.log('listening on port 3000');
 
})
