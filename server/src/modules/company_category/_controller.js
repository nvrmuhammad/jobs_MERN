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
export const cAddCategory = async (req, res, next) => {
  try {
    const result = await addCategoryService({ body: req.body, user: req.user })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const cRemoveCategory = async (req, res, next) => {
  try {
    const result = await removeCategoryService({
      params: req.params,
      user: req.user,
    })

    res.status(200).json({ data: result, msg: 'Successfully deleted' })
  } catch (error) {
    next(error)
  }
}
