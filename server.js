import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import emailController from "./controllers/emailController.js";
import sendEmail from "./controllers/resendController.js";

const app = express()

const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/", () => {
    console.log("welcome to Morrisco Tech world");

})



app.post("/sendEmail", sendEmail )




app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})