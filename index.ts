import bodyParser from 'body-parser';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import routes from './src/routes/crmRoutes.js';

import { Settings } from "./settings";
import Messenger, {Enviroment} from './src/controllers/createMessage';

const app = express();
const PORT: number = 3000;

const enviroment: Enviroment = "development"

// mongoose connection
const database: string = 'mongodb://localhost/CRMdb'

mongoose.Promise = global.Promise;
mongoose.connect(database);

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

const message = new Messenger(Settings.PORT, enviroment)

app.get('/', (req:Request, res:Response) =>
    res.send(message.messagePrint())
);

app.listen(Settings.PORT, () =>
    console.log(message.messagePrint())
);