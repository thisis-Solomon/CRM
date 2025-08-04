import express, {Request, Response} from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes.js';

import Messenger from './src/controllers/createMessage';

const app = express();
const PORT: number = 3000;

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

const message = new Messenger(PORT)

app.get('/', (req:Request, res:Response) =>
    res.send(message.messagePrint())
);

app.listen(PORT, () =>
    console.log(message.messagePrint())
);