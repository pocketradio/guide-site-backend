import {
    S3Client,
    PutObjectCommand,
    CreateBucketCommand,
    DeleteObjectCommand,
    DeleteBucketCommand,
    paginateListObjectsV2,
    GetObjectCommand,
} from "@aws-sdk/client-s3";

const s3client = new S3Client({ region: "us-east-2" });

async function checkCredentials(req, res) {
    res.send("hi");
}

async function createBucket(req, res) {
    const bucketName = "ldg-guides-images";
    const result = await s3client.send(
        new CreateBucketCommand({
            Bucket: bucketName,
        }),
    );
    res.send(result);
}

async function uploadFile(req, res) {
    console.log({
        title: req.file.originalname,
        url: req.file.path,
        filename: req.file.filename,
        // folderId: +req.body.id,
    });
    res.send({
        title: req.file.originalname,
        url: req.file.path,
        filename: req.file.filename,
        // folderId: +req.body.id,
    });
}

async function test(req, res) {
    console.log("received file get request");
    res.send({ message: "hi8" });
}

export default { test, createBucket, uploadFile, checkCredentials };
