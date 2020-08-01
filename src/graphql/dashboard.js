export const FETCH_INFO = `
    query fetch($id: ID!) {
        applicants(query: {id: [$id]}) {
            id
            application_status
            lname
            name
            email
        }
    }
`;

export const AUTHENTICATE = `
    mutation auth($id: String!) {
        authUser(id: $id) {
            token
        }
    }
`;

export const FETCH_QR = `
    mutation qrcode($id: String!) {
        qr(code: $id)
    }
`;

export const RSVP = `
    mutation rsvp($id: ID!, $attending: Boolean!, $casl_acceptance: Boolean, $resume_permission: Boolean, $mlh_acceptance: Boolean, $mlh_privacy: Boolean, $mlh_messages: Boolean) {
        rsvp(applicant_id: $id, attending: $attending, casl_acceptance: $casl_acceptance, resume_permission: $resume_permission, mlh_acceptance: $mlh_acceptance, mlh_privacy: $mlh_privacy, mlh_messages: $mlh_messages) {
            success
        }
    }
`;
