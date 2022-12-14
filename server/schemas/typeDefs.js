const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type MensSubcategory {
    _id: ID
    name: String
  }

  type WomensSubcategory {
    _id: ID
    name: String
  }

  type Subcategory {
    _id: ID
    name: String
    category: Category
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    department: String
    subcategory: String
  }

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    subcategories(category: ID, name: String): [Subcategory]
    menssubcategories: [MensSubcategory]
    womenssubcategories: [WomensSubcategory]
    products(category: ID, name: String, department: String, subcategory: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;
