export const listExperience = async (req, res, next) => {
  try {
    const result = await ExperienceService()

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
