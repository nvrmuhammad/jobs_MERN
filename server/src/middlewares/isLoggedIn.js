import jwt from 'jsonwebtoken'

export const verify = (req, res, next) => {
  try {
    const token = req.headers['authorization']
    
    if (!token) {
      return res.status(401).json({
        error: 'Token not given or you have not access ',
        data: null,
      })
    }

    const verify = jwt.verify(token, process.env.SECRET_KEY)

    req.user = verify

    next()
  } catch (error) {
    res.status(401).json({ error: error.message, data: null })
  }
}
