import { CompanyCategory } from './Category.js'

export const cCategoriesService = async () => {
  const categories = await CompanyCategory.find()

  return categories
}
