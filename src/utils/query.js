/**
 * queryConfig hook options
 * @typedef {Object} queryConfig
 * @property {object} variables - Query variables
 */

/**
 * 
 * @param {string} query - Key for GraphQL query
 * @param {queryConfig} config - Configuration for query
 */
export const query = async (query, variables = {}) => {
    const token = localStorage.getItem('token');
    const raw = await fetch(
        process.env.VUE_APP_GRAPHQL,
        {
            headers: {
                'Content-Type': 'application/json',
                ...(token ? { 'Authorization': `Bearer ${ token }` } : {})
            },
            method: 'POST',
            body: JSON.stringify({ query, variables })
        }
    );
    const res = await raw.json();
    if (res.errors) throw new Error(res.errors[0].message);
    return res.data[Object.keys(res.data)[0]];
}