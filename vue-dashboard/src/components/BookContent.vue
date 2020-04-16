<template>
    <div class="column">
        <div class=" column ">
            <h1 class="title">Books</h1>
            <nav class="level">
                <div class="level-left">
                    <div class="level-item">
                        <p class="subtitle is-5">
                            <strong>6</strong> books
                        </p>
                    </div>
                    <p class="level-item">
                        <a class="button is-success" href="new-book.html">New</a>
                    </p>
                    <div class="level-item is-hidden-tablet-only">
                        <div class="field has-addons">
                            <p class="control">
                                <input class="input" v-model="searchWord" v-on:keyup="searchBooks" type="text"
                                    placeholder="Book name ISBN ...">
                            </p>
                            <p class="control">
                                <button class="button" @click="searchBooks">Search</button>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        Order by
                    </div>
                    <div class="level-item">
                        <div class="select">
                            <select @change="sortBooks">
                                <option value="publishDate">Publish date</option>
                                <option value="price">Price</option>
                                <option value="pageCount">Page count</option>
                            </select>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="columns is-multiline">
                <template v-for="book in books">
                    <div class="column is-12-tablet is-10-desktop is-6-widescreen" :key="book.ISBN">
                        <article class="box">
                            <div class="media">
                                <aside class="media-left">
                                    <img class="is-rounded" :src="book.coverImage" sizes="80">
                                </aside>
                                <div class="media-content">
                                    <p class="title is-4 is-marginless">
                                        <a href="edit-book.html">{{book.name}}</a>
                                    </p>
                                    <p class="subtitle is-marginless">
                                        {{book.price}}
                                    </p>
                                    <div class="content is-small">
                                        {{book.pageCount}} pages
                                        <br> ISBN: {{book.ISBN}}
                                        <br> Year: {{book.publishDate}}
                                        <br>
                                        <a href="edit-book.html">Edit</a>
                                        <span>.</span>
                                        <a>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </template>
</div>
<nav class="pagination">
    <a class="pagination-previous">Prev</a>
    <a class="pagination-next">Next</a>
    <ul class="pagination-list">
        <li>
            <a class="pagination-link">1</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
            <a class="pagination-link">45</a>
        </li>
        <li>
            <a class="pagination-link is-current">46</a>
        </li>
        <li>
            <a class="pagination-link">47</a>
        </li>
        <li>
            <span class="pagination-ellipsis">&hellip;</span>
        </li>
    </ul>
</nav>
</div>
</div>
</template>

<script>
    import Collect from "collect.js";

    export default {
        name: "BookContent",
        data() {
            return {
                books: [{
                    name: "TensorFlow For ML",
                    price: "$22.99",
                    pageCount: 270,
                    ISBN: "9781939902351",
                    coverImage: require('../assets/redhat.png'),
                    publishDate: 2017,
                }, {
                    name: "Docker in Production",
                    price: "$22.99",
                    pageCount: 156,
                    ISBN: "9781939955584",
                    coverImage: require("../assets/docker.png"),
                    publishDate: 2015,
                }, {
                    name: "Advanced Linux FS",
                    price: "$220.99",
                    pageCount: 200,
                    ISBN: "9781939903334",
                    coverImage: require("../assets/linux.png"),
                    publishDate: 2020,
                }, {
                    name: "Advanced Python FS",
                    price: "$300.99",
                    pageCount: 202,
                    ISBN: "232329903334",
                    coverImage: require("../assets/python.png"),
                    publishDate: 2020,
                }, ],

                allBooks: [{
                    name: "TensorFlow For Machine Intelligence",
                    price: "$22.99",
                    pageCount: 270,
                    ISBN: "9781939902351",
                    coverImage: require("../assets/tensorflow.png"),
                    publishDate: 2017,
                }, {
                    name: "Advanced Linux FS",
                    price: "$220.99",
                    pageCount: 200,
                    ISBN: "9781229903334",
                    coverImage: require("../assets/linux.png"),
                    publishDate: 2020,
                }, {
                    name: "Advanced Python FS",
                    price: "$300.99",
                    pageCount: 202,
                    ISBN: "232329903334",
                    coverImage: require("../assets/python.png"),
                    publishDate: 2020,
                }, {
                    name: "Docker in Production",
                    price: "$22.99",
                    pageCount: 156,
                    ISBN: "9781939902184",
                    coverImage: require("../assets/docker.png"),
                    publishDate: 2015,
                }, {
                    name: "Learning Swift",
                    price: "$22.99",
                    pageCount: 342,
                    ISBN: "9781939902115",
                    coverImage: require("../assets/swift.png"),
                    publishDate: 2015,
                }, {
                    name: "Choosing a JavaScript Framework",
                    price: "$19.99",
                    pageCount: 270,
                    ISBN: "9781939902092",
                    coverImage: require("../assets/js.png"),
                    publishDate: 2016,
                }, {
                    name: "Developing a Gulp.js Edge",
                    price: "$22.99",
                    pageCount: 134,
                    ISBN: "9781939902146",
                    coverImage: require("../assets/gulp.png"),
                    publishDate: 2014,
                }, ],

                book: {},
                showNewModal: false,
                showEditModal: false,
                searchWord: "",
            }
        },
        methods: {
            sortBooks(event) {
                let selectValue = String(event.target.value);
                let collection = Collect(this.books);
                let sortedBooks = collection.sortBy(selectValue);
                this.books = Object.assign([], sortedBooks.all());
            },
            searchBooks() {
                if (!this.searchWord) {
                    this.books = Object.assign([], this.allBooks);
                } else {
                    this.books = this.books.filter((book) => {
                        return book.name.toLowerCase().includes(this.searchWord.toLowerCase());
                    });
                }
            },
        },
    };
</script>