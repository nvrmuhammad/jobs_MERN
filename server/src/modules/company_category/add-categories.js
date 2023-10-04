import { CompanyCategory } from './Category.js'

export const addCategoryService = async ({ body, user }) => {
  const { name } = body
  if (user.role !== 'admin') {
    return 'You are not admin'
  }

  const exsited = await CompanyCategory.findOne({ name })

  if (exsited) {
    return 'This category has been added'
  }
  const newCategory = await CompanyCategory.create({ name })
  return newCategory
}
