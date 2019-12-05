const aws = require('aws-sdk')
const config = require('./config')

let connect = async function() {


try {

aws.config.setPromisesDependency()

aws.config.update( {
    accessKeyId: config.accessKeyID,
    secretAccessKey: config.secretKey,
    region: config.region
})
const s3 = new aws.S3()
const response = await s3.listObjectsV2( {
    Bucket: config.bucket
}).promise()

console.log(response)

} catch (e) {
    console.log(e)
}


}

connect()