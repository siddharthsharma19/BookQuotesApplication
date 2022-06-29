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

export const addquote = async (quote, bookName) => {
  let response;
  const cookie = new Cookies()
  response = await axios.post(`${URL}/addquote`, {
      quote: quote, 
      bookName : bookName,},{
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