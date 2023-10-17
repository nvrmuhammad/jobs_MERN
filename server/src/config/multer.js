import multer from 'multer'
import path from 'path'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(process.cwd(), 'src', 'public', 'user_avatar'))
  },
  filename: (req, file, cb) => {
    const customeFileName = `${Date.now()}` + path.extname(file.originalname)
    cb(null, customeFileName)
  },
})

const upload = multer({ storage: storage })

export default upload
