import AWS from 'aws-sdk';

/**
 * @class S3
 * @description Handles file upload to AWS S3.
 * @docs http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
 */
export default class S3 {

  constructor() {

    this.config = {
      bucket: 'storage.pburtchaell.com',
      CacheControl: '',
      GrantRead: ''
    }

    this.ref = new AWS.S3({
      params: {
        Bucket: 'storage.pburtchaell.com'
      }
    });

  }

  /**
   * @function upload
   * @description Uploads a file to S3.
   * @docs http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html#upload-property
   * @param {object} key A unique key for the file being uploaded.
   * @param {string} body The body of data being uploaded.
   * @returns {object} The response from S3.
   */
  upload(key, body) {

    let params = {
      Bucket: this.config.bucket, // required
      Key: key, // required
      Body: body, // required
      CacheControl: this.config.CacheControl,
      GrantRead: this.config.GrantRead
    };

    this.ref.upload(params, (error, data) => {
      if (error) {
        return;
      } else {
        return data;
      }
    });

  }

  /**
   * @function get
   * @description Gets a signed URL for an existing file on S3. Signed URLs
   * will expire after the time period specified in the params.
   * @param {string} key The key of the object you need a URL for.
   * @returns {string} url The signed URL.
   */
  getSignedUrl(key) {

    let params = {
      Bucket: this.config.bucket,
      Key: key,
      Expires: 84600 // 24 hours
    };

    // Get the URL synchronously
    let url = this.ref.getSignedUrl('getObject', params);

    return url;

  }

  /**
   * @function delete
   * @description Deletes a file from S3.
   * @param {object} key
   */
  delete(key) {

    let params = {
      Bucket: this.bucket, // required
      Key: key, // required
    };

    this.ref.deleteObject(params, (error, data) => {
      if (error) {
        return;
      } else {
        return data;
      }
    });

  }

}
