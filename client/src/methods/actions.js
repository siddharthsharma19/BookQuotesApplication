import Cookies from "universal-cookie";
const axios = require("axios").default;
const URL = "http://localhost:5000";

export const signUp = async (email, password, name, username)=>{
    let response;
    response = await axios.post(`${URL}/signup`,{
        email: email,
        password: password,
        name:name,
        username: username,
    })
    return response.status;
}

export const login = async (email, password) => {
  let response;
  const cookie = new Cookies();
  response = await axios.post(`${URL}/login`, {
    headers: {
      authorization: cookie.get("token"),
    },
    email: email,
    password: password,
  });
  return response;
};

export const addbook = async (bookName, author) => {
  let response;
  const cookie = new Cookies()
  console.log(cookie.get("token"));
  response = await axios.post(`${URL}/addbook`,{
    bookName:bookName,
    author: author,},
    {
    headers: {
      authorization: cookie.get("token"),
    },
  });
  return response
}

export const addquote = async (quote, bookid) => {
  let response;
  const cookie = new Cookies()
  response = await axios.post(`${URL}/addquote`, {
      quote: quote, 
      bookid : bookid,},{
      headers : {
        authorization : cookie.get("token")
      }
  })
  return response
}

export const getAllBooks = async() => {
  let response;
  const cookie = new Cookies();
  response = await axios.get(`${URL}/getallbooks`, {
    headers: {
      authorization: cookie.get("token"),
    },
  });
  return response;
}

export const getAllQuotes = async() => {
  let response;
  const cookie = new Cookies();
  response = await axios.get(`${URL}/getallquotes`, {
    headers: {
      authorization: cookie.get("token"),
    },
  });
  return response;
}

export const deletebook = async(bookid) => {
  let response;
  const cookie = new Cookies()
  response = await axios.post(`${URL}/deletebook`, 
    {
      bookid:bookid
    }, {
      headers: {
        authorization: cookie.get("token"),
      }
    })
  return response
}

export const getQuotes = async(bookid) => {
  let response
  const cookie = new Cookies()
  console.log(`bookid: ${bookid}`)
  response = await axios.get(`${URL}/getquotes`, {
    params: {
      bookid : bookid
    },
      headers : {
        authorization : cookie.get("token")
      }
    })
  return response
}

export const editBook = async (bookid, bookName, author) => {
  let response
  const cookie = new Cookies()
  console.log(`Edit Book ID : ${bookid}`);
  response = await axios.post(`${URL}/editbook`, {
    bookid:bookid,
    bookName:bookName,
    author: author
  },
     {
    headers :{
      authorization : cookie.get("token")
    }
  })
  return response
}

export const deleteQuote = async (quoteid) => {
  let response
  response = await axios.post(`${URL}/deletequote`, {
    quoteid : quoteid
  })
  return response
}

export const editQuote = async(quoteid, quote) => {
  let response = await axios.post(`${URL}/editquote`, {
    quoteid : quoteid,
    quote : quote
  })
  return response
}