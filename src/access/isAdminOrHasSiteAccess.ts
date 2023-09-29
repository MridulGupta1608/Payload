import { Access } from "payload/config";

export const isAdminOrHasSiteAccess = (siteIDFieldName: string = 'site'): Access => ({ req: { user } }) => {
  // Need to be logged in

  if (user) {
    if (user.roles.includes('admin')) return true;

    if (user.roles.includes('user') && user.sites?.length > 0) {

      return {
        or: [
          {
            [siteIDFieldName]: {
              in: user.sites
            }
          },
          {
            [siteIDFieldName]: {
              exists: false,
            }
          }
        ]
      }
    }
  }

  return false;
}
