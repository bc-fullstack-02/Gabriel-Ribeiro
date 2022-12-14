require("dotenv").config();
const Minio = require("minio");

const minioClient = new Minio.Client({
  accessKey: process.env.MINIO_ROOT_USER,
  secretKey: process.env.MINIO_ROOT_PASSWORD,
  endPoint: process.env.MINIO_ENDPOINT,
  useSSL: false,
  port: 1 * process.env.MINIO_PORT,
});
  
const bucketName = 'sysmap'

async function createBucket() {
  try {
    console.log(`Criando Bucket: ${bucketName}`);
    await minioClient.makeBucket(bucketName, "us-east-1").catch((e) => {
      console.log(`Erro ao criar o bucket '${bucketName}': ${e.message}`);
    });

    //listando buckets
    const bucketsList = await minioClient.listBuckets();
    console.table(
      `Lista de Buckets: ${bucketsList
        .map((bucket) => bucket.name)
        .join(",\t")}`
    );
  } catch (error) {
    console.log("Houve algum erro ao criar um bucket", error.message);
  }
}

module.exports = {createBucket, minioClient, bucketName}