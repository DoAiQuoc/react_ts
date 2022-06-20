export const authHeaders = (headers = {}) => {
  const token = !!localStorage.getItem('aeonmall_ls');

  return token ? { Authorization: token, ...headers } : { ...headers };
};

//   export const getProfile = () => {
//     return localStorage.getItem('aeonmall_ls') && JSON.parse(localStorage.getItem('aeonmall_ls'))?.auth?.user?.profile;
//   };

//   export const isLoggedIn = () => {
//     return !!localStorage.getItem('aeonmall_ls') && !!JSON.parse(localStorage.getItem('aeonmall_ls'))?.auth?.user?.token;
//   };

//   export const isAdmin = () => {
//     return (
//       !!localStorage.getItem('aeonmall_ls') &&
//       JSON.parse(localStorage.getItem('aeonmall_ls'))?.auth?.user?.profile?.role === 1
//     );
//   };

export const removeAuthenticated = () => {
  localStorage.removeItem('aeonmall_ls');
};
