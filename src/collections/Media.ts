import { CollectionConfig } from 'payload/types'

const Media: CollectionConfig = {
  slug: 'media',
  fields: [],
  upload: true,
  access: {
    read: () => true
  }
}

export default Media;
