const express = require("express");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const files = require("./files");
const { response } = require("express");

admin.initializeApp();

const app = express();

app.get("/", (request, response) => {
    // response.send("Hello world");
    files.getFiles().then((files) => {
        response.send(files);
    });
});

app.post("/", (request, response) => {
    // console.log(request);
    files.addFile({ ...request.query, date: new Date() });
    response.send("File added");
});

exports.myCloud = functions.https.onRequest(app);
