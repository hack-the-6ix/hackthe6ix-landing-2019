const storage = window.localStorage

export const auth = {
  fetch_user() {
    const token = storage.getItem('ht6-token') || null
    const access_scopes = (storage.getItem('ht6-access-scopes') || "").split(',').filter((s) => s)
    return {
      token,
      access_scopes
    }
    
  },
  set_user(auth_user) {
    storage.setItem('ht6-token', auth_user.token)
    storage.setItem('ht6-access-scopes', auth_user.access_scopes)
  },
  has_admin_access(auth_user) {
    return auth_user.access_scopes.includes('admin')
  }
}