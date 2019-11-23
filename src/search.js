const axios = require("axios");
const {makeRequest} = require("./apiRequest");



// class Search {
//   constructor(title) {
//     this.query= title,
//     this.result = this.setResult(this.query)
//   }
var title = "surfing"

const findBooks = async (title) => {
let results = {}

  let books = await makeRequest(title)

  for(var i = 0; i < 5; i++) {
    results[i+1] = [books[i]['volumeInfo']['title'],books[i]['volumeInfo']['authors'][0], books[i]['volumeInfo']['publisher']];
  }
  return results;

}




  //
  // setResult(title) {
  //   const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyA_-Z2h_CCnptDgqekcj0oRGjMnoMl0Ymw`
  //   const response = makeRequest(url)
  //   // console.log(response);

    // const response = this.callApi(this.query)
    // this.sortResponse(response);







// have api request in different file as a const funciton. import into here. then make a new book out of each result.


//   async function callApi(title) {
//
//     const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyA_-Z2h_CCnptDgqekcj0oRGjMnoMl0Ymw`);
// const myJson = await response.json();
// console.log(JSON.stringify(myJson));
//
//
//



  //   axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${title}&key=AIzaSyA_-Z2h_CCnptDgqekcj0oRGjMnoMl0Ymw`)
  //   .then(function(response) {
  //    return response.data['items'];
  //   })
  //   .catch(function (error) {
  //  console.log(error);
  // })


//  sortResponse(response) {
// //   console.log("YOU FUCK CUNT");
//    console.log(this.result);
// }














module.exports = {
       findBooks
     };

    findBooks("surfing")

    // search.callApi("america"));
