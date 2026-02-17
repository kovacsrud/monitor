const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLID,
} = require("graphql");

const app = express();

//
// 📚 Minta adatok
//
const authors = [
  { id: "1", name: "George Orwell" },
  { id: "2", name: "J.K. Rowling" },
  { id: "3", name: "J.R.R. Tolkien" },
];

const books = [
  { id: "1", title: "1984", authorId: "1" },
  { id: "2", title: "Animal Farm", authorId: "1" },
  { id: "3", title: "Harry Potter", authorId: "2" },
  { id: "4", title: "The Hobbit", authorId: "3" },
];

//
// 👤 Author típus
//
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent) {
        return books.filter(book => book.authorId === parent.id);
      }
    }
  })
});

//
// 📘 Book típus
//
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    authorId: { type: GraphQLID },
    author: {
      type: AuthorType,
      resolve(parent) {
        return authors.find(a => a.id === parent.authorId);
      }
    }
  })
});

//
// 🔍 Root Query
//
const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return books;
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return authors;
      }
    },
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return books.find(b => b.id === args.id);
      }
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return authors.find(a => a.id === args.id);
      }
    }
  }
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // böngészős tesztfelület
  })
);

app.listen(8000, () => {
  console.log("Run");
});