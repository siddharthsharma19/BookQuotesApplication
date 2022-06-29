var helper = require("./helper")
var User = require("../models/user")
var Book = require("../models/book")
var Quote = require("../models/quotes")

const signUp = (req, res) => {
  if (!req.body.email || !req.body.password || !req.body.username) {
    res.json({ success: false, msg: "Enter all fields" });
  } else {
    var newUser = User({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    User.findOne(
      {
        $or: [{ email: req.body.email }, { username: req.body.username }],
      },
      function (err, user) {
        if (err) throw err;
        if (user) {
          res.status(403).send({ success: false, msg: "User exists" });
        } else {
          newUser.save(function (err, newUser) {
            if (err) {
              console.log(err);
              res.status(403).json({ success: false, msg: "Failed to save" });
            } else {
              res.status(200).json({ success: true, msg: "Successfully Saved" });
            }
          });
        }
      }
    );
  }
};

const login = (req, res) => {
  User.findOne(
    {
      email: req.body.email,
    },
    function (err, user) {
      if (err) throw err;
      if (!user) {
        res.status(404).send({
          success: false,
          msg: "Authentication failed, User not found",
        });
      } else {
        user.comparePassword(req.body.password, function (err, isMatch) {
          if (isMatch && !err) {
            token = helper.encodeToken(user._id, user.username);
            res.json({ success: true, token: token });
          } else {
            res.status(403).send({
              success: false,
              msg: "Authentication failed, wrong password",
            });
          }
        });
      }
    }
  );
};

const addBook = (req, res) => {
    console.log(req.headers);
    console.log(`add book: ${req.headers.authorization}`)
    let userName = helper.getUserId(req).username;
    let newBook = Book({
        bookName: req.body.bookName,
        author: req.body.author,
        user: userName
    })
    newBook.save(function (err, savedBook) {
        if (err) {
            console.log(err);
            res.status(403).json({success : false,  msg: "Faild to add book"})
        } else {
            res.status(200).send(savedBook)
        }
    })
}

const addQuote = (req, res) => {
    let userName = helper.getUserId(req).username
    let newQuote = Quote({
        quote: req.body.quote,
        bookName: req.body.bookName,
        user: userName
    })
    newQuote.save(function(err, savedQuote) {
        if (err) {
            console.log(err);
            res.status(403).json({success:false, msg:"Failed to add quote"})
        } else {
            res.status(200).send(savedQuote)
        }
    })
}

const editBookName = (req, res) => {
    let user = helper.getUserId(req).username;
    let oldBookName = req.body.oldBookName;
    let newBookName = req.body.newBookName;
    Book.findOneAndUpdate(
        {bookName: oldBookName, user:user},
        {$set: {bookName: newBookName}},
        (err, book) => {
            if (err) {
                res.status(403).send(err);
            } else {
                Quote.updateMany(
                    {bookName : oldBookName},
                    {$set : {bookName: newBookName}}, 
                    (err, quote) => {
                        if (err) {
                            res.status(403).send(err)
                        } else{
                            res.status(200).send({bookdetail: book, quotedetail : quote})
                        }
                    })
            }
        })
}

const deleteBook = (req, res) => {
  let user = helper.getUserId(req).username;
  let bookName = req.body.bookName
  Book.findOneAndDelete({bookName: bookName, user:user}, (err, book) => {
    if (err) {
      res.status(403).send(err)
    } else {
      Quote.deleteMany({bookName:bookName}, (err, quote) => {
        if (err) {
          res.status(403).send(err)
        } else {
          res.status(200).send({book: book, quote: quote})
        }
      })
    }
  })
}

const deleteQuote = (req, res) => {
  let user = helper.getUserId(req).username;
  let quote = req.body.quote
  Quote.findOneAndDelete({quote: quote, user:user}, (err, quote) => {
    if (err) {
      res.status(403).send(err)
    } else {
      res.status(200).send({quote:quote})
    }
  })
}

const editAuthorName = (req, res) => {
  let user = helper.getUserId(req).username
  let author = req.body.author
  let bookName = req.body.bookName
  let newAuthorName = req.body.newAuthorName
  Book.findOneAndUpdate({author:author, bookName:bookName, user:user},{$set: {author: newAuthorName}}, (err, result) => {
    if (err) {
      res.status(403).send(err)
    } else {
      res.status(200).send({result:result})
    }
  })
}

const getAllBooks = (req, res) => {
  console.log("getting All books");
  console.log(req.headers.authorization)
  let user = helper.getUserId(req).username
  Book.find({user:user}, (err, books)=>{res.json(books)});
}

const getAllQuotes = (req, res) => {
  console.log("Getting All quotes");
  let user = helper.getUserId(req).username
  Quote.find({user:user}, (err, quotes) => {res.json(quotes)})
}
module.exports = {signUp, login, addBook, addQuote, editBookName, deleteBook, deleteQuote, editAuthorName, getAllBooks, getAllQuotes}