# Task 23: Vibe Coding & Prompt Engineering

This task explores advanced techniques for collaborating with Generative AI to build robust business applications and cloud infrastructure.

## 1. What is Vibe Coding?
**Vibe Coding** is a paradigm shift where developers focus on the *intent*, *user experience*, and *architectural "vibe"* of an application rather than manually writing every line of boilerplate code. It leverages AI to handle the "how" while the developer steers the "what."

## 2. Prompt Engineering Techniques

### A. Role-Based Prompting
*   **Concept**: Assigning a specific persona to the AI (e.g., "Senior Cloud Architect").
*   **Example**: "Act as a Senior AWS Architect. Design a highly available VPC with public and private subnets."

### B. Chain-of-Thought (CoT)
*   **Concept**: Asking the AI to think step-by-step.
*   **Example**: "Explain the security implications of this code step-by-step before implementing the fix."

### C. Few-Shot Prompting
*   **Concept**: Providing 1-3 examples of the desired output format.
*   **Example**: "Generate a CloudFormation template for an S3 bucket. 
    Example 1: [Bucket definition]
    Example 2: [Bucket with versioning]"

## 3. Real-World Demonstration

### Scenario: Generating a Terraform Template for a Secure Web Server

#### The "Vibe" Prompt (Intent-focused):
> "Build me a secure web server setup on AWS using Terraform. It should follow best practices like using a VPC, a security group that only allows HTTPS, and an EC2 instance in a private subnet. Make it feel production-ready."

#### The "Engineered" Prompt (Structured & Specific):
> "Act as a Terraform Expert. Generate a Terraform configuration to deploy a web application on AWS. 
> **Requirements**:
> 1. Create a VPC with CIDR `10.0.0.0/16`.
> 2. Implement two subnets: one public (for an ALB) and one private (for the EC2).
> 3. Security Group: Allow inbound traffic on port 443 from anywhere, and port 22 ONLY from a specific IP placeholder.
> 4. Use an Amazon Linux 2 AMI.
> 5. Output the public DNS of the Load Balancer.
> **Format**: Provide clean, modular HCL code with comments explaining each resource."

## 4. Evaluation of Output Quality

| Metric | Vibe Coding Output | Engineered Prompt Output |
| :--- | :--- | :--- |
| **Accuracy** | High, but may miss specific CIDR preferences. | Very High; follows all constraints. |
| **Production-Readiness**| Good general structure. | Excellent; includes specific security locks. |
| **Efficiency** | Faster to write the prompt. | Faster to integrate into a real pipeline. |
| **Maintainability** | Requires manual refactoring. | Modular and ready for variable injection. |

---
*Task 23: Exploring the future of AI-assisted development.*
