const express = require("express");
const connectDb = require("./src/Db/db.connection");
const setupRoutes = require("./src/RouteHandler/user.routehandler"); 

const app = express();

app.use(express.json());

setupRoutes(app)
connectDb().then(() => {
    app.listen(5000, () => {
        console.log("Server is connected on port 5000");
    });
}).catch((error) => {
    console.log("Internal server error due to connection failure:", error);
});
