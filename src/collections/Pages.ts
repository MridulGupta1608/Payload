import { CollectionConfig } from 'payload/types';
import { isAdmin } from '../access/isAdmin';
import { isAdminOrHasSiteAccess } from '../access/isAdminOrHasSiteAccess';
// import { isAdminHasSiteAccess } from '../access/isAdminHasSiteAccess';
import { isLoggedIn } from '../access/isLoggedIn';

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  versions: {
    drafts: true,
  },
  access: {
    create: isLoggedIn,
    update: isAdminOrHasSiteAccess(),
    read: isLoggedIn,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'site',
      type: 'relationship',
      relationTo: 'sites',
      required: true,
      defaultValue: ({ user }) => {
        if (!user.roles.includes('admin') && user.sites?.[0]) {
          return user.sites[0];
        }
      }
    }
  ],
}