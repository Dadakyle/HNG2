import mongoose from "mongoose";
import express from "express"
import { createPerson, updatePerson, getSinglePerson, deletePerson } from "./controller/index.js";

const connectMongo = () => mongoose.connect(
  "mongodb+srv://habee:dada223@cluster0.63oib.mongodb.net/hng?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true,}));
// const server = http.Server(app);

app.post('/', createPerson)

app.put('/:id', updatePerson)

app.get('/:id', getSinglePerson)
app.delete('/:id', deletePerson)

app.listen(8000, () => {
  connectMongo()
  console.log(`⚡️[server]: Server is running at http://localhost:8000`);
})