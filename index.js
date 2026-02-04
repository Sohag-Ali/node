const express = require("express");
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("User server is available ");
});

const users = [
  { id: 1, name: "sohag", email: "sohag@gmail.com" },
  { id: 2, name: "sohag ali", email: "ali@gmail.com" },
  { id: 3, name: "sohag sarkar", email: "sarkar@gmail.com" },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.post('/users', (req,res) => {
    console.log('post method called', req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

echo "# node" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Sohag-Ali/node.git
git push -u origin maingi