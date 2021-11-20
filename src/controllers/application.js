import { async } from "regenerator-runtime";

class Application {
    static sendApplication = async(req, res) =>{
        console.log(req.body)
    }
}
export default Application;