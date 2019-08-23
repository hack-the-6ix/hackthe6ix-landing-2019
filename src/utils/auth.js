const storage = window.localStorage;

export const auth = {
  fetch_user() {
    const token = storage.getItem('ht6-token') || null;
    const access_scopes = (storage.getItem('ht6-access-scopes') || '')
      .split(',')
      .filter(s => s);
    return {
      token,
      access_scopes,
    };
  },
  set_user(auth_user) {
    storage.setItem('ht6-token', auth_user.token);
    storage.setItem('ht6-access-scopes', auth_user.access_scopes);
  },
  clear_user() {
    storage.clear();
  },
  has_admin_access(auth_user) {
    return auth_user.access_scopes.includes('admin');
  },
  has_volunteer_access(auth_user) {
    return (
      auth_user.access_scopes.includes('admin') ||
      auth_user.access_scopes.includes('volunteer')
    );
  },
};
