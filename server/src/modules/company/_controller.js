export const listCompanies = async (req, res, next) => {
  try {
    const result = await listCompaniesServices({
      user: req.user,
    })

    res.status(200).json({ data: result })
  } catch (error) {
    next(error)
  }
}
export const registryCompany = async (req, res, next) => {
  try {
    const result = await registryCompanyService({
      body: req.body,
      file: req.file,
    })

    res.status(201).json({ data: result })
  } catch (error) {
    next(error)
  }
}
