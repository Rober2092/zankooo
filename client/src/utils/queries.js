import { gql } from '@apollo/client';

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_SUBCATEGORIES = gql`
  {
    subcategories {
      _id
      name
      category {
        name
      }
    }
  }
`;

export const QUERY_MENSSUBCATEGORIES = gql`
  {
    menssubcategories {
      _id
      name
    }
  }
`;

export const QUERY_WOMENSSUBCATEGORIES = gql`
  {
    womenssubcategories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;