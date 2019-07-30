export const APPLY = `
    mutation create($app: ApplicantInput!) {
        createApplicant(
            applicant: $app
        ) {
          applicant {
            id
          }
          user_errors {
            message
          }
        }
    }
`;

export const HAS_EMAIL = `
    query hasEmail($email: String!) {
      hasEmail(email: $email)
    }
`;

export const GENDER_ENUM = {
  male: 'Male',
  female: 'Female',
  prefer_not_to_say: 'Prefer not to say',
};

export const YEAR_OF_STUDY_ENUM = {
  highschool: 'High School',
  first_year: 'First Year',
  second_year: 'Second Year',
  third_year: 'Third Year',
  fourth_year: 'Fourth Year',
  fifth_year: 'Fifth Year',
  sixth_year: 'Sixth Year',
  graduated: 'Graduated',
};
