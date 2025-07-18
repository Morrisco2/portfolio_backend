import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import sendEmail from "./controllers/resendController.js";


const app = express()

const port = process.env.PORT ||3000;

const frontEndUrl = "https://portfolio-je32.vercel.app/"

app.use(cors(
    {
        origin: function (origin, callback) {
            if (!origin || frontEndUrl.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        },
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        credentials: true,
    }
));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get("/", () => {
    console.log("welcome to Morrisco Tech world");

})



app.post("/sendEmail", sendEmail)




app.listen(port, () => {
    console.log(`server is running on port ${port}`);

})