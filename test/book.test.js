const {Book} = require('../src/book')


describe('Book', () => {
  describe('Constructor',() => {
    it('stores title', () => {
      const book = new Book('harry potter', 'JK rowling', 123)
      expect(book.getTitle()).toEqual('harry potter')
    })
  })


})
