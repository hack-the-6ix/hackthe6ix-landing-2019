export const ATTEND = `
  mutation attend($applicant: ID!, $event: String) {
    attendEvent(applicant_id: $applicant, event_id: $event) {
        message
        success
    }
  }
`;
