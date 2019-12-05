const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
const config = require('./config')
 
aws.config.update( {
    accessKeyId: config.accessKeyID,
    secretAccessKey: config.secretKey,
    region: config.region
})

const s3 = new aws.S3()
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: config.bucket ,
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'No se que ta pasando'});
    },
    key: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
})

 
module.exports = upload