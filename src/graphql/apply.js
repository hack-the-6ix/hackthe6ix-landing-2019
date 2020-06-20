export const APPLY = `
    mutation create($app: ApplicantInputPublic!) {
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
  ug_first_year: 'Undergraduate Year 1',
  ug_second_year: 'Undergraduate Year 2',
  ug_third_year: 'Undergraduate Year 3',
  ug_fourth_year: 'Undergraduate Year 4+',
  graduate_school: 'Gradate School',
  new_grad: 'New Grad',
};
