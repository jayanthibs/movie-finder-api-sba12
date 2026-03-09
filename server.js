import 'dotenv/config'
import express from "express";
import router from './routes/movieRoutes.js';

//creating instance of express server
const app = express();
const port = 3006;

//mounting the routes
app.use('/api', router);

//server is listening to port 3006
app.listen(port, () => {
  console.log("Server is listening to port :" + port);
});
