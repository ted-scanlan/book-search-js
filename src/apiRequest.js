const axios = require("axios");


const makeRequest = async (title) => {

  try {

  let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyA_-Z2h_CCnptDgqekcj0oRGjMnoMl0Ymw`)
    return res.data['items']
}
catch(err) {
  console.log(err);
}

  // const response = await axios(url);

  // const books = response['items']
  // console.log(books);
  // return books



}

module.exports = {
       makeRequest
     };
