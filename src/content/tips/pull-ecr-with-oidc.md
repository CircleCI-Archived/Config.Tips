---
kind: circleci
title: Pull an image from Amazon ECR using OIDC
description: |
  Configure a job to pull an image from AWS ECR using OIDC authentication. OIDC eliminates the need to store long-lived secrets in CircleCI.
snippet: |
  version: 2.1
  jobs:
    pull_from_ecr:
      docker:
        - image: <your-image-uri>
          aws_auth:
            oidc_role_arn: <your-iam-role-arn>
---
OpenID Connect(OIDC) securely connects your pipelines to AWS ECR without the need for storing long-lived secrets in CircleCI. 

To get started:
1. Set up CircleCI as a [trusted identity provider in AWS](https://circleci.com/docs/openid-connect-tokens/#set-up-aws)
2. Grant the CircleCI [role access to ECR](https://circleci.com/docs/pull-an-image-from-aws-ecr-with-oidc/#set-up-iam-role)

Now update your config:
1. Identify the job in your .circleci/config.yml that requires an ECR image
2. Replace <your-image-uri> with the URI of the ECR image you want to pull
    This URI typically follows the format aws_account_id.dkr.ecr.region.amazonaws.com/repository:tag
3. Replace <your-iam-role-arn> with the ARN of the IAM role you want to assume
4. Save changes

The next time this job runs, CircleCI will connect to AWS via OIDC with the specified role. 
If you previously stored AWS credentials for this job, they can now be removed from CircleCI contexts and project variables (make sure they're not being used in other jobs first). 
