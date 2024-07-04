import { connect } from "../helpers/db/connect.js";
import { movies } from "./module/movies.js";

let mongo = new movies();
console.log(await mongo.getAllMovies())