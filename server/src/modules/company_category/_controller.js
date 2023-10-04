import { addCategoryService } from './add-categories.js'
import { cCategoriesService } from './list-c-categories.js'
import { removeCategoryService } from './remove-c-cateogries.js'

export const cListCategories = async (req, res, next) => {
  try {
    const result = await cCategoriesService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
