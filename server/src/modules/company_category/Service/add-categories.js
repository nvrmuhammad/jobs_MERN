import { CompanyCategory } from '../Schema/Category.js'

export const addCategoryService = async ({ body, user }) => {
  const { name } = body
  if (user.role !== 'admin') {
    return { error: 'You are not admin' }
  }

  const exsited = await CompanyCategory.findOne({ name })

  if (exsited) {
    return { error: 'This category has been added' }
  }
  const newCategory = await CompanyCategory.create({ name })
  return newCategory
}
