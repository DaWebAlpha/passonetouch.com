import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import router from './routes/pageRoutes.js';
import { setupAuth } from './authentication/auth.js';
import paymentRoutes from './routes/paymentRoutes.js';
import sessionConfig from './config/session.js';
import resetRouter from './routes/resetRoutes.js';
import methodOverride from 'method-override';

/* Middleware */
import { cors } from './middleware/cors.js';
import { handleError } from './middleware/handleError.js';
import { notFound } from './middleware/notFound.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* Setup */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('trust proxy', 1); 

/* Middleware Order Matters */
app.use(cors); 
app.use(sessionConfig); 
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static('public'));

/* Bootstrap static assets */
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));

/* Authentication, Routes */
setupAuth(app);
app.use(paymentRoutes);
app.use(resetRouter);
app.use('/', router);

/* Error Handlers */
app.use(notFound);
app.use(handleError);

/* Start Server */
app.listen(PORT, () => {
  console.log(`Server Ready at PORT ${PORT}`);
});
