export const listJob = async (req, res, next) => {
  try {
    const result = await listJobServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const showJob = async (req, res, next) => {
  try {
    const result = await showJobServices({ params: req.params })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
