import { gql } from '@apollo/client';

export const GET_ME = gql`
  {
    getMe {
      _id
      username
      email
      savedBooks {
        authors
        description
        bookId
        image
        title
      }

    }
}
`;



