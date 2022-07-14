const express = require("express");
const actions = require("../methods/actions");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/signup", actions.signUp);

router.post("/login", actions.login);

router.post("/addbook", actions.addBook);

router.post("/addquote", actions.addQuote);

router.post("/editbookname", actions.editBookName)

router.post("/deletebook", actions.deleteBook)

router.post("/deletequote", actions.deleteQuote)

router.post("/editauthorname", actions.editAuthorName)

router.get("/getallbooks", actions.getAllBooks)

router.get("/getallquotes", actions.getAllQuotes)

router.get("/getquotes", actions.getQuotes)
module.exports = router