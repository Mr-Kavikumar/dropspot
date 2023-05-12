import { createSchema } from 'sanity'

import { schemaTypes } from 'sanity'
import category from './category'
import restaurant from './restaurant'
import dish from './dish'
import featured from './featured'

export default createSchema({
    name:"default",
    types: schemaTypes[
        restaurant,
        category,
        dish,
        featured
    ],
});
