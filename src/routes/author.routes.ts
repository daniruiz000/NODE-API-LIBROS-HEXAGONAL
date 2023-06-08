import express from "express";
import { isAuth } from "../middlewares/auth.middleware";
import { authorService } from "../domain/services/author.service";
import { checkParams } from "../middlewares/checkParams.middleware";

export const authorRouter = express.Router();

authorRouter.get("/", checkParams, authorService.getAuthors);
authorRouter.get("/:id", authorService.getAuthorById);
authorRouter.get("/name/:name", authorService.getAuthorByName);
authorRouter.post("/", authorService.createAuthor);
authorRouter.delete("/:id", isAuth, authorService.deleteAuthor);
authorRouter.put("/:id", isAuth, authorService.updateAuthor);
authorRouter.post("/login", authorService.login);
