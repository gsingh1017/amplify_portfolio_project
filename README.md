# Amplify Portfolio Website Project

## Deliverables: 

Access my detailed breakdown on Medium [here](https://medium.com/@gurniksingh/cloud-native-portfolio-website-a-modern-approach-with-next-js-aws-amplify-cdk-26c34cb42752)

Website Architecture:
![Website_Architecture](/portfolio-website/public/images/Website_Architecture.png)

----------------------------------------------------------------

## Project Details 

This repository contains the code and infrastructure definition for a modern, professional cloud engineer portfolio website. The project demonstrates a full CI/CD pipeline using Next.js, AWS Amplify, and AWS Cloud Development Kit (CDK).

----------------------------------------------------------------

## Prerequisites

Before you begin, ensure you have the following installed and configured:

- Download & Install Git
- Download & Install Node.js (npm is included)
- Install & Configure AWS CLI with your AWS credentials.
- AWS CDK CLI: Install globally: npm install -g aws-cdk
- Domain (Optional): If you wish to use a custom domain managed by AWS Route 53

----------------------------------------------------------------

## Quick Start Guide

Ready to get this project running quickly? Follow these steps:

1. Clone the Repository: Clone this GitHub repository to your local machine using ```git clone```.

2. GitHub Token: Generate a GitHub Fine-Grained Personal Access Token (PAT) with Read and write access for this repository and store it securely in AWS Secrets Manager under the name github-token-portfolio-website.

3. Install Dependencies:
 - Navigate to the portfolio-website directory and run ```npm install```.
 - Navigate to the infrastructure directory and run ```npm install @aws-cdk/aws-amplify-alpha aws-cdk-lib```.

4. Deploy Infrastructure: From the infrastructure directory, run ```cdk deploy``` to provision your AWS Amplify application.

5. Verify: Check the AWS Amplify console for deployment status and visit your live website at the deployed URL.