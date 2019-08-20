export const ATTEND = `
  mutation attend($applicant: ID!, $event: ID!) {
    attendEvent(applicant_id: $applicant, event_id: $event) {
        message
        success
    }
  }
`;

export const EVENTS = `
  query admin_events {
    events {
      id
      title
    }
  }
`;
