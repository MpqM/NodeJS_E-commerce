import multer from 'multer'
import path from 'path'

  const storage = multer.diskStorage({
    destination: function (req, file, cb) { cb(null, 'uploads/'); },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const filename = file.originalname.split('.')[0]
      cb(null, filename + "-" + uniqueSuffix + ".png");
    }
  })

  const upload = multer({storage: storage}).single("file")

export default upload;


