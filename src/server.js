import express from "express";
import { colors, goods } from "./mockData.js";
import {
  deleteGood, getColorById,
  getColors,
  getGoodById,
  getGoods,
  patchGood,
  postGood
} from "./resolvers.js";
import cors from "cors";


const PORT = 5000;

const app = express();

app.use(cors());


app.use(express.json());

app.get('/goods', getGoods);

app.get('/goods/:id', getGoodById);

app.post('/goods', postGood);

app.patch('/goods/:id', patchGood);

app.delete('/goods/:id', deleteGood);

app.get('/colors', getColors);

app.get('/colors/:id', getColorById);

app.listen(PORT, () => {
  console.log('---###--- Server started ---###---');
  console.log(`Server listening on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
  console.log('---###--------------------###---');
});
