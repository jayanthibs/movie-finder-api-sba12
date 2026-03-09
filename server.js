import 'dotenv/config'
import express from "express";
import router from './routes/movieRoutes.js';
const app = express();
const port = 3006;

app.use('/api', router);

app.listen(port, () => {
  console.log("Server is listening to port :" + port);
});
