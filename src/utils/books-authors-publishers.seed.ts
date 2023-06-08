import mongoose from "mongoose";

import { connect } from "../domain/repositories/mongo-repository"; // Importamos el archivo de conexión a la BBDD

import { resetAuthors } from "./resetAuthors";
import { resetPublishers } from "./resetPublishers";
import { resetBooks } from "./resetBooks";
import { bookRelations } from "./bookRelations";

const seedFunction = async (): Promise<void> => {
  try {
    await connect();
    await resetAuthors();
    await resetPublishers()
    await resetBooks()
    await bookRelations()
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
  }
};

void seedFunction();
