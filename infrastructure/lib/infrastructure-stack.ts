import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as route53 from 'aws-cdk-lib/aws-route53';


export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioWebsiteApplication', {
      appName: "PortfolioWebsite",
      // Connect to GitHub repository
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'gsingh1017',
        repository: 'amplify_portfolio_project',
        oauthToken: cdk.SecretValue.secretsManager('github-token-portfolio-website'),
      }),

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting pre-build phase..."',
                'cd portfolio-website',
                'npm ci --no-audit --no-fund',
              ],
            },
            build: {
              commands: [
                'echo "Starting NextJS build phase..."',
                'npm run build',
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

    // Autobuild main branch
    const mainBranch = amplifyApp.addBranch('main', {
      autoBuild: true,
    });

    // Add Route 53 Domain
    amplifyApp.addDomain('gurnik-singh.com', {
      subDomains: [
        {
          branch: mainBranch,
          prefix: '',
        },
        {
          branch: mainBranch,
          prefix: 'www',
        },
      ],
    });
  }
}
