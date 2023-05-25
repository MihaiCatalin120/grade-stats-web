import aws from 'aws-sdk'

aws.config.update({
  secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
  accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY,
})

export const s3 = new aws.S3({
  signatureVersion: 'v4',
  region: import.meta.env.VITE_AWS_REGION,
})