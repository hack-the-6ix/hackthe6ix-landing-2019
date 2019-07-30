export const SUBSCRIBE = `
  mutation sub($email: String!, $source: String) {
    subscribeMailingList(email: $email, source: $source) {
        message
    }
  }
`;

export const UNSUBSCRIBE = `
  mutation unsub($id: ID!) {
    unsubscribeMailingList(id: $id) {
      message
    }
  }
`;
