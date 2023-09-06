---

kind: aws-cloudformation
title: Modularize AWS CloudFormation Templates
description: Modularize AWS CloudFormation templates to enhance reusability, flexibility, and maintainability of infrastructure code.
contributor: https://github.com/brivu
snippet: |
    # s3-module.yaml
    AWSTemplateFormatVersion: '2010-09-09'
    Description: S3 Bucket Module

    Parameters:
        BucketName:
        Type: String
        Description: Name for the S3 bucket
        AccessControl:
        Type: String
        Description: Access control for the bucket (e.g., private, public-read)
        Default: private
        AllowedValues:
            - private
            - public-read

    Resources:
        MyS3Bucket:
        Type: AWS::S3::Bucket
        Properties:
            BucketName: !Ref BucketName
            AccessControl: !Ref AccessControl

    # main-template.yaml
    AWSTemplateFormatVersion: '2010-09-09'
    Description: Main Stack Template

    Resources:
        MyPrivateBucket:
        Type: AWS::CloudFormation::Stack
        Properties:
            TemplateURL: 'https://s3.amazonaws.com/your-bucket/s3-bucket.yaml'
            Parameters:
            BucketName: my-private-bucket
            AccessControl: private

        MyPublicBucket:
        Type: AWS::CloudFormation::Stack
        Properties:
            TemplateURL: 'https://s3.amazonaws.com/your-bucket/s3-bucket.yaml'
            Parameters:
            BucketName: my-public-bucket
            AccessControl: public-read
---

In this example, a reusable module for Amazon S3 bucket is created with it's own template in `s3-module.yaml`. The Main Stack Template creates two buckets using same template.

Modularizing the AWS S3 Bucket creation into a separate template and reusing it in the main stack promotes code reusability and maintainability. Additional S3 buckets can easily be added by including additional stack resources in the main template without duplicating the S3 configuration code.

1. **S3 Bucket Module (`s3-module.yaml`)**:
This template defines a reusable S3 Bucket Module with configurable parameters: `BucketName` and `AccessControl`.The template is uploaded into an S3 bucket so that it can be accessed in the Main Stack Template.

    ```yaml
    Parameters:
    BucketName:
        Type: String
        Description: Name for the S3 bucket
    AccessControl:
        Type: String
        Description: Access control for the bucket
        Default: private
        AllowedValues:
        - private
        - public-read
    ```

1. **Main Stack Template `main-template.yaml`**: In the `main-template.yaml`, the same S3 Bucket Module is used twice to create two separate buckets. Both buckets reference the same S3 module using the `TemplateURL` key:

    `TemplateURL: 'https://s3.amazonaws.com/your-bucket/s3-module.yaml'`

For more details, you can refer to the [AWS CloudFormation documentation](https://docs.aws.amazon.com/cloudformation/).
