import {IntBook} from "./book.interface";

export class BookManager{
    private books: IntBook[]
    constructor(books: IntBook[]) {
        this.books = books
    }

    public addBook(book:IntBook):void{
        try {
            this.books.push(book)
            console.log(`Книгу ${book.title} додано!`)
        }catch (e){
            console.log(`Не вдалося додати нигу ${book.title} !\nПомилка ${e}`)
        }

    }
    public getAllBooks():void{
        console.log(`Список книг у бібліотеці`)
        this.books.forEach(book =>{
            console.log(`Книга №${book.id} з назвою ${book.title} і автором ${book.author}, ${book.available?'Доступна':'Недоступна'}`)
        })
    }
    public getBookById(id:number){
        this.books.forEach(book =>{
            if (book.id === id){
                console.log(`Книга №${book.id} знайдена! }`)
            }
        })
    }
    public removeBook(id:number){
        this.books.forEach((book,index) =>{
            if (book.id === id){
                this.books.splice(1, index); // видаляє 1 елемент з індексом 1 (тобто "Hobbit")

                console.log(`Книгу №${book.id} видалено! }`)
            }
        })
    }
}