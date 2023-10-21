export const listJob = async (req, res, next) => {
  try {
    const result = await listJobServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
