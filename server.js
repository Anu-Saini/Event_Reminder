// to import // Import express package & modules and use different framework
const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = 3000;

// Initialize our app variable by setting it to the value of express()
const app = express();

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//GET method to return homepage to the client
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

//GET method to return notes page to the client
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);
//GET method to return script and style sheet associated with notes page to the client
app.get("/style", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/assets/css/styles.css"))
);

app.get("/script", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/assets/js/index.js"))
);
// file system module enable us to interact with  json object containing the note records
app.get("/api/notes", (req, res) => {
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});

//POST method to save data on json file
app.post("/api/notes", (req, res) => {
  let content = [];
  let noteData = JSON.parse(fs.readFileSync("./db/db.json"));
  console.log(noteData);
  noteData.push(JSON.stringify(req.body));
  fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
});

//DELETE method to delete a particular data from .json file
app.delete("/api/notes/:id", (req, res) => {
  let noteData = JSON.parse(fs.readFileSync("./db/db.json"));
  const deleteId = req.params.id;

  noteData = noteData.filter((notes) => JSON.parse(notes).id != deleteId);
  console.log(noteData);
  fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
});

// app.get('/api/ts', (req, res) => res.json(notesData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
