// import the gql tagged template function
const { gql } = require("apollo-server-express");

// create our typeDefs
const typeDefs = gql`

input BookInput {
    authors: [String]
    description: String
    bookId: String!
    image: String 
    title: String!
  }

  type Book {
    authors: [String]
    description: String
    bookId: String!
    image: String
    title: String!
  }

  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
    password: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    getMe: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(book: BookInput): User
    removeBook(bookId: String): User
  }
`;

// export the typeDefs
module.exports = typeDefs;
