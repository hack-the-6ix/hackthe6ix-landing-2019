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
    mutation rsvp($id: ID!, $attending: Boolean!) {
        rsvp(applicant_id: $id, attending: $attending) {
            success
        }
    }
`;
