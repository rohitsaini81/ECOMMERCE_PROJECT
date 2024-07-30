import express from 'express'
import cors from 'cors'
import {errorMiddleware} from './middlewares/error.js'
import dotenv from 'dotenv'
import router from './routes/Getr.js';
import path from 'path';
import { fileURLToPath } from 'url';

  dotenv.config({path: './.env',});

  export const envMode = process.env.NODE_ENV?.trim() || 'DEVELOPMENT';
  const port = process.env.PORT || 3000;


  const app = express();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Define the path to your static folder
const staticFolderPath = path.join(__dirname, 'public');

// Use express.static middleware to serve static files
app.use(express.static(staticFolderPath));


 app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin:' * ',credentials:true})); 




  // your routes here
app.use(router)
  
  app.get("*", (req, res) => {
    res.status(404).json({
      success: false,
      message: 'Page not found'
    });
  });

  app.use(errorMiddleware);
  
  
  app.listen(port, () => console.log('Server is working on Port:'+port+' in '+envMode+' Mode.'));
