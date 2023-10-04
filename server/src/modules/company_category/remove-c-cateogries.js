import { CompanyCategory } from './Category.js'

export const removeCategoryService = async ({ params, user }) => {
  if (user.role !== 'admin') {
    return 'You are not admin'
  }

  const removed = await CompanyCategory.findByIdAndDelete({
    _id: params.id,
  })
  return removed
}
