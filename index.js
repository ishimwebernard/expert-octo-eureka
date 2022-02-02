import Express from "express"
import bodyParser from "body-parser";
import cors from 'cors'
import routes from "./src/routes/index"
const app  = Express();

app.use(bodyParser.json())
app.use(cors());
app.use("/", routes)
app.listen(process.env.PORT || 5000, () => {
    console.log('Server Started');
})
export default app;