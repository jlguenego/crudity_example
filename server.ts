import express from "express";
import { crudity } from "crudity";
import { Article } from "./dto/article.dto";

const app = express();
app.use("/ws/articles", crudity<Article>());

app.listen(3000, () => console.log("Server started on port 3000"));
