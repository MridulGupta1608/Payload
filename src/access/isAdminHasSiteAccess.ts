// export const isAdminHasSiteAccess = ({ req: { user } }) => {
//   if (user) {
//     if (user.roles.includes('admin')) return true;
//     if (user.roles.includes('editor') && user.sites?.length > 0) {
//       return {
//         or: [
//           {
//             site: {
//               in: user.sites
//             }
//           },
//           {
//             site: {
//               exists: false,
//             }
//           }
//         ]
//       }
//     }
//   }

//     return false;
// }