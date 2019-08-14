export const APPLICANTS = `
  query admin {
    applicants {
      id
      name
      lname
      email
      application_status
      gender
      school
      year_of_study
      hack_count
      portfolio
      github
      dietary_restrictions
      team_members
      pitch
    }
  }
`;

export const AUTH_ADMIN = `
    mutation auth($email: String!, $password: String!) {
        authUser(id: $email, password: $password) {
            access_scopes
            token
        }
    }
`;

export const RESUME = `
    query applicant($query: ApplicantQuery!) {
      applicants(query: $query) {
        id
        email
        resume
      }
    }
`;

export const UPDATE_APPLICANT = `
    mutation update($id: [ID!]!, $applicant: ApplicantInput!) {
      updateApplicant(id: $id, applicant: $applicant) {
        success
        message
        user_errors {
          message
        }
      }
    }
`

export const STATUSES = [
  'applied',
  'accepted',
  'waitlist',
  'rejected',
  'invalid',
  'attending',
  'not_attending',
]