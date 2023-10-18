import { CompanyCategory } from '../Schema/Category.js'

export const cCategoriesService = async () => {
  const categories = await CompanyCategory.find()

  return { categories, msg: 'List of company categories' }
}
