import { CollectionConfig } from 'payload/types'

const Pages: CollectionConfig = {
  slug: 'pages',
  fields: [
    {
        type: 'upload',
        name: 'image',
        relationTo: 'media',
    }
  ],
  access: {
    read: () => true
  }
}

export default Pages
