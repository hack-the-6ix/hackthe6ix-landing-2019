export const FETCH_INFO = `
    query fetch($id: ID!) {
        applicants(query: {id: [$id]}) {
            id
            application_status
            lname
            name
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
`