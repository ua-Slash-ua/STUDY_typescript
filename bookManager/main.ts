import { BookManager } from './bookmanager';
import { IntBook } from './book.interface';

// Початковий масив книг
const initialBooks: IntBook[] = [
    { id: 1, title: 'Dune', author: 'Frank Herbert', available: true },
    { id: 2, title: 'Hobbit', author: 'J.R.R. Tolkien', available: true },
];

// Створюємо екземпляр менеджера
const manager = new BookManager(initialBooks);

// Додаємо нову книгу
manager.addBook({
    id: 3,
    title: '1984',
    author: 'George Orwell',
    available: false,
});

// Отримуємо всі книги
manager.getAllBooks();

// Пошук книги за ID
manager.getBookById(2);

// Видалення книги
manager.removeBook(1);

// Перевірка залишку
manager.getAllBooks();
