export const isAdmin = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin'));
}

export const isAdminEntry = ({ req: { user } }) => {
  return Boolean(user?.roles?.includes('admin'));
}