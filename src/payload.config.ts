import { buildConfig } from 'payload/config';
import path from 'path';
import {Users} from './collections/Users';
import { Sites } from './collections/Sites';
import { Pages } from './collections/Pages';
import { seed } from './seed';

export default buildConfig({
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Sites,
    Pages,
  ],
  onInit: async (payload) => {
      await seed(payload);
  }
});
