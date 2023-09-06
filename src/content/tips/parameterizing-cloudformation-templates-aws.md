---
kind: aws-cloudformation
title: Parameterizing AWS CloudFormation Templates
description: Parameterizing AWS CloudFormation templates enhances the flexibility, maintainability,and reusability of infrastructure code.
contributor: https://github.com/brivu
snippet: |
    AWSTemplateFormatVersion: '2010-09-09'
    Description: EC2 Instance with Parameterized Settings

    Parameters:
    InstanceTypeParameter:
        Type: String
        Description: EC2 instance type
        Default: t2.micro
        AllowedValues:
        - t2.micro
        - t2.small
        - t2.medium
        ConstraintDescription: Must be a valid EC2 instance type.

    KeyNameParameter:
        Type: AWS::EC2::KeyPair::KeyName
        Description: Name of an existing EC2 KeyPair to enable SSH access to the instance.

    Resources:
    MyEC2Instance:
        Type: AWS::EC2::Instance
        Properties:
        InstanceType: !Ref InstanceTypeParameter
        KeyName: !Ref KeyNameParameter
        ImageId: ami-12345678 # Replace with your desired AMI ID
---

AWS Cloudformation templates enable users to define and provision AWS infrastructure and resources in a declarative manner. Parameterizing your CloudFormation template is considered a best practice because it enhances the flexibility, maintainability, and reusability of your infrastructure code. These templates serve as a blueprint during the deployment process.

In the example template, we have declared two parameters: `InstanceTypeParameter` and `KeyNameParameter`. These parameters must be provided by the user during the deployment process. Lets break them down:

1. **`InstanceTypeParameter`**: This enables users to choose the instance type when the stack is created. A valid type must be used (e.g., t2.micro, t2.small, t2.medium). If the user specifies a type that in not an allowed `AllowedValues`, the deployment will fail. If no instance type is specified, the deployment will use `t2.micro` by default.

```yaml
InstanceTypeParameter:
    Type: String
    Description: EC2 instance type
    Default: t2.micro
    AllowedValues:
    - t2.micro
    - t2.small
    - t2.medium
    ConstraintDescription: Must be a valid EC2 instance type.
```

2. **`KeyNameParameter`**: This lets the users select an existing EC2 KeyPair, which enables SSH access to the instance. Since there is no `Default` value, the user is required to specify one during deployment. Otherwise, the deployment will fail.

```yaml
KeyNameParameter:
Type: AWS::EC2::KeyPair::KeyName
Description: Name of an existing EC2 KeyPair to enable SSH access to the instance.
```

Finally, these parameters are specified during the deployment process. For example, if using the `AWS CLI` to create the stack, here's what the command would look like:

```bash
aws cloudformation create-stack --stack-name MyStackName \
--template-body file://my-template.yaml \
--parameters ParameterKey=InstanceTypeParameter,ParameterValue=t2.micro \ ParameterKey=KeyNameParameter,ParameterValue=my-key-pair-name
```

Parameterizing templates is particularly useful because they're reusable, eliminating the need to create a new unique template for every deployment.

For example, if we wanted to use create another EC2 instance, but using a `t2.medium` type instead, we can still use same template. We would just need to specify a different value for the `InstanceTypeParameter`:

```bash
    aws cloudformation create-stack --stack-name NewStackName \
    --template-body file://my-template.yaml \
    --parameters ParameterKey=InstanceTypeParameter,ParameterValue=t2.medium \
    ParameterKey=KeyNameParameter,ParameterValue=my-key-pair-name
```

For more details, you can refer to the [AWS CloudFormation documentation](https://docs.aws.amazon.com/cloudformation/).
