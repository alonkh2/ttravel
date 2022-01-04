const admin = require("firebase-admin");

const getFiles = async () => {
    console.log("getting files...");
    const files = [];
    const db = admin.firestore();
    const filesDB = await db.collection("files").get();
    filesDB.forEach((doc) => {
        files.push(doc.data());
    });

    return files;
};

const addFile = async (file) => {
    console.log("adding file...");
    const db = admin.firestore();
    await db.collection("files").add(file);
};

exports.getFiles = getFiles;
exports.addFile = addFile;
