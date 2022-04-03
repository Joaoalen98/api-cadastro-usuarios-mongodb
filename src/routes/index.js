import express from "express";
import router from "./routes.js";

const routes = (app) => {
    app.use(
        express.json(),
        router
    )
}

export default routes