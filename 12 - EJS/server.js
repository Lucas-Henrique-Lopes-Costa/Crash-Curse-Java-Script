const express = require("express")
const app = express();

app.set("view engine", "ejs")
app.get("/", function (req, res) {
  const items = [
    {
      title: "Lucas",
      message: "Criador principal"
    },
    {
      title: "Marcos",
      message: "Irmão"
    },
  ]
  res.render("pages/index", {
    item: items,
  })
})

app.get("/sobre", function (req, res) {
  res.render("pages/about")
})

app.listen(8080)
console.log("🚀 Rodando 🚀")