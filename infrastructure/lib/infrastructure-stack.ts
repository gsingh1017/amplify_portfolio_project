import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';


export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // IAM Role for Amplify
    const amplifyRole = new cdk.aws_iam.Role(this, 'AmplifyRole', {
      assumedBy: new cdk.aws_iam.ServicePrincipal('amplify.amazonaws.com'),
      managedPolicies: [
        cdk.aws_iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess-Amplify'),
      ]
    });

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioWebsiteApplication', {
      appName: "PortfolioWebsite",
      // Connect to GitHub repository
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'gsingh1017',
        repository: 'amplify_portfolio_project',
        oauthToken: cdk.SecretValue.secretsManager('github-token-portfolio-website'),
      }),

      // Attach IAM Role
      role: amplifyRole,

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting pre-build phase..."',
                'cd portfolio-website',
                'npm install',
              ],
            },
            build: {
              commands: [
                'echo "Starting NextJS build phase..."',
                'npm run build-and-export',
                'echo "Build completed successfully!"',
              ],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio-website/out',
            files: ['**/*'],
          },
          cache: {
            paths: [
              'node_modules/**/*',
              '.next/cache/**/*',
            ],
          },
        },
      }),
    });

    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
    });

  }
}
