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

export const RESUME = `
    query applicant($query: ApplicantQuery!) {
      applicants(query: $query) {
        id
        email
        resume
      }
    }
`;