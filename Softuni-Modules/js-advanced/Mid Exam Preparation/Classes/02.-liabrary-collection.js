// 100/100
class LibraryCollection{
    constructor(capacity, books){
    this.capacity = Number(capacity);
    this.books = [];
  
    }

    addBook (bookName, bookAuthor){
    if(this.books.length >= this.capacity){
        throw new Error("Not enough space in the collection.")
    } else {
        let book = {bookName, bookAuthor, payed: false}
        this.books.push(book)
        return `The ${bookName}, with an author ${bookAuthor}, collect.`
    }
    }
    payBook(bookName){
      const findBook = this.books.find(el => el.bookName === bookName);

      if(findBook == undefined){
        throw new Error(`${bookName} is not in the collection.`)
      }

      if(findBook.payed == true){
        throw new Error(`${bookName} has already been paid.`)
      }

      findBook.payed = true;
      return `${bookName} has been successfully paid.`
    }
    removeBook(bookName){
    const findBook2 = this.books.find(el => el.bookName === bookName);
    
    if(findBook2 == undefined){
        throw new Error("The book, you're looking for, is not found.")
    }

    if(findBook2.payed == false){
       throw new Error(`${bookName} need to be paid before removing from the collection.`) 
    }
    
    let index = this.books.indexOf(findBook2);
    this.books.splice(index, 1);
    return `${bookName} remove from the collection.`
    
    }
    getStatistics(bookAuthor){
       let emptySlots = this.capacity - this.books.length;
       let result = [];
       let firstLine = "";
       let sorted = "";
       let paid = "";
       
       if(!bookAuthor){
        result = [];
        firstLine = `The book collection has ${emptySlots} empty spots left.`
        result.push(firstLine)
        sorted = this.books.sort((a,b) => a.bookName - b.bookName);
        sorted.forEach(el => {
            paid = el.payed ? 'Has Paid' : 'Not Paid';
            result.push(`${el.bookName} == ${el.bookAuthor} - ${paid}.`)
        })
        return result.join('\n')
       } else {
         let findBook = this.books.find(b => b.bookAuthor == bookAuthor);
          if (findBook) {
               paid = findBook.payed ? 'Has Paid' : 'Not Paid';
                result.push(`${findBook.bookName} == ${findBook.bookAuthor} - ${paid}.`);
                return result.join('\n').trim();
            } else {
                throw new Error(`${bookAuthor} is not in the collection.`)
       }
    }
    }
}
const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());