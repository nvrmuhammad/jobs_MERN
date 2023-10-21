export const listRequest = async (req, res, next) => {
  try {
    const result = await listRequestServices({ user: req.user })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
