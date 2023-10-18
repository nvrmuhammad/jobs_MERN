import { CompanyCategory } from '../Schema/Category.js'

export const updateCategoryService = async ({ params, user, body }) => {
  const { name } = body

  if (user.role !== 'admin') {
    return 'You are not admin'
  }

  const updated = await CompanyCategory.findByIdAndUpdate(
    {
      _id: params.id,
    },
    { name },
    { new: true }
  )
  return { updated, msg: 'Successfully updated' }
}
