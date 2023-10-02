import jwt from 'jsonwebtoken'

export const verify = (req, res, next) => {
  try {
    const token = req.headers['authorization']

    if (!token) {
      return res.status(401).json({ error: 'Token not given ', data: null })
    }
    const verify = jwt.verify(token, process.env.SECRET_KEY)

    req.verifyToken = verify

    next()
  } catch (error) {
    res.status(400).json({ error: 'You have not access to login', data: null })
  }
}
