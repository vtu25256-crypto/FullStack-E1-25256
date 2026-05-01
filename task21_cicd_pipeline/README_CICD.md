# Task 21: CI/CD Pipeline Implementation

This task demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using **GitHub Actions**.

## Pipeline Overview

The pipeline is defined in `.github/workflows/ci-cd.yml` and consists of two main jobs:

### 1. Build and Test (CI)
*   **Trigger**: Runs on every push or pull request to the `master` branch.
*   **Steps**:
    1.  **Checkout**: Pulls the latest code from the repository.
    2.  **Setup Node.js**: Configures the environment with Node.js v18.
    3.  **Install**: Runs `npm install` to fetch dependencies.
    4.  **Build**: Executes `npm run build` to compile/minify the app.
    5.  **Test**: Runs `npm test` to ensure code quality and prevent regressions.

### 2. Deployment (CD)
*   **Trigger**: Runs only after the `build-and-test` job succeeds AND when the event is a direct push to the `master` branch.
*   **Steps**:
    1.  **Deploy**: Executes `npm run deploy` to push the application to the production environment (e.g., AWS, Heroku, or a web server).

## How to Use
1.  Push this code to a GitHub repository.
2.  Navigate to the **Actions** tab on GitHub to monitor the pipeline execution.
3.  Any failures in the "Test" step will block the "Deploy" step, ensuring that only stable code reaches production.
