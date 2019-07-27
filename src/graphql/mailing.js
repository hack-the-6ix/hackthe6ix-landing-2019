export const SUBSCRIBE = `
  mutation sub($email: String!, $source: String) {
    subscribeMailingList(email: $email, source: $source) {
        message
    }
  }
`;

export const UNSUBSCRIBE = `
  mutation unsub($email: String!) {
    unsubscribeMailingList(email: $email) {
      message
    }
  }
`;
