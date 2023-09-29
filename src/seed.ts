export const seed = async (payload) => {
  const site1 = await payload.create({
    collection: 'sites',
    data: {
      title: 'Site 1',
    }
  });

  const site2 = await payload.create({
    collection: 'sites',
    data: {
      title: 'Site 2',
    }
  });

  await payload.create({
    collection: 'users',
    data: {
      email: 'admin@payload.com',
      password: 'test',
      firstName: 'Payload',
      lastName: 'CMS',
      roles: ['admin']
    }
  })

  await payload.create({
    collection: 'users',
    data: {
      email: 'site1@payload.com',
      password: 'test',
      firstName: 'Site1',
      lastName: 'User',
      sites: [site1.id]
    }
  })

  await payload.create({
    collection: 'pages',
    data: {
      _status: 'published',
      title: 'Site 1 Home',
      content: [
        {
          children: [
            {
              text: "Here's some content for Site 1's home page."
            }
          ]
        }
      ],
      site: site1.id
    }
  })

  await payload.create({
    collection: 'pages',
    data: {
      _status: 'published',
      title: 'Site 2 Home',
      content: [
        {
          children: [
            {
              text: "Here's some content for Site 2's home page."
            }
          ]
        }
      ],
      site: site2.id
    }
  })
}