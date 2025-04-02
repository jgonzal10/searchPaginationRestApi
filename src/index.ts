import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import cors from "cors";
import config from "./config";
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());
app.use(cors())
app.use("/", router);
app.listen(config.port, ()=>{
    console.log(`api running on ${config.port}`)
});
export default app;