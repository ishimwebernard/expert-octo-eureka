import Express from "express"
import bodyParser from "body-parser";
import cors from 'cors'
import routes from "./routes/index"
const app  = Express();

app.use(bodyParser.json())
app.use(cors());
app.use("/", routes)
app.listen(5000, () => {
    console.log('Server Started');
})
export default app;