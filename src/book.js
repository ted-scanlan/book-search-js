
class Book {
  constructor(title, author, serialNo) {
    this.title = title,
    this.author = author,
    this.serialNo = serialNo
  }

  getTitle() {
    return this.title;
  }
  getAuthor() {
    return this.author;
  }

  getSerialNo() {
    return this.serialNo;
  }
}




module.exports = {
       Book
     };
