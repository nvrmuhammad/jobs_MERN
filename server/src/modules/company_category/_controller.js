import { validateCategory } from '../../utils/joi.js'
import { addCategoryService } from './Service/add-categories.js'
import { cCategoriesService } from './Service/list-c-categories.js'
import { removeCategoryService } from './Service/remove-c-cateogries.js'
import { updateCategoryService } from './Service/update-c-categories.js'

export const cListCategories = async (req, res, next) => {
  try {
    const result = await cCategoriesService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const cAddCategory = async (req, res, next) => {
  const { error } = validateCategory.validate(req.body)
  if (error) {
    return res.status(400).json({ error: error.message })
  }

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

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const cUpdateCategory = async (req, res, next) => {
  try {
    const result = await updateCategoryService({
      params: req.params,
      user: req.user,
      body: req.body,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
