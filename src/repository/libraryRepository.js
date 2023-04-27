import axios from "../custom-axios/axios";

const LibraryService = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchBooks: () => {
        return axios.get("/books");
    },
    addBook: (name, category, author, availableCopies) => {
        return axios.post("/add", {
            name: name,
            category: category,
            author: author,
            availableCopies: availableCopies,
        });
    },
    editBook: (id, name, category, author, availableCopies) => {
        return axios.put(`/edit/${id}`, {
            name: name,
            category: category,
            author: author,
            availableCopies: availableCopies,
        });
    },
    getBook: (id) => {
        return axios.get(`/${id}`);
    },
    markAsTaken: (id) => {
        return axios.put(`/take/${id}`);
    },
    deleteBook: (id) => {
        return axios.delete(`/delete/${id}`);
    },
};

export default LibraryService;
