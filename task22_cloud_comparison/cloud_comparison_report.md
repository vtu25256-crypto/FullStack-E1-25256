# Task 22: Cloud Service Provider Comparison

This report compares the "Big Three" cloud service providers—Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP)—across their core service categories.

## 1. Core Service Comparison

| Category | AWS | Microsoft Azure | Google Cloud (GCP) |
| :--- | :--- | :--- | :--- |
| **Compute** | **EC2** (VMs), **Lambda** (Serverless), **Fargate** (Containers) | **Virtual Machines**, **Azure Functions**, **AKS** (Kubernetes) | **Compute Engine**, **Cloud Functions**, **GKE** (Kubernetes) |
| **Storage** | **S3** (Object), **EBS** (Block), **EFS** (File) | **Blob Storage**, **Disk Storage**, **Azure Files** | **Cloud Storage**, **Persistent Disk**, **Filestore** |
| **Databases** | **RDS** (SQL), **DynamoDB** (NoSQL), **Aurora** | **Azure SQL**, **Cosmos DB** (NoSQL), **Database for MySQL** | **Cloud SQL**, **Cloud Spanner**, **Firestore** (NoSQL) |
| **Networking** | **VPC**, **Route 53** (DNS), **CloudFront** (CDN) | **VNet**, **Azure DNS**, **Azure CDN** | **VPC**, **Cloud DNS**, **Cloud CDN** |
| **AI/ML** | SageMaker, Rekognition | Azure Machine Learning, Cognitive Services | Vertex AI, Vision AI, AutoML |

## 2. Pricing Models: Pay-As-You-Go

All three providers primarily operate on a **Pay-as-you-use (PAYG)** model, which offers several advantages:

*   **No Upfront Costs**: You don't need to purchase physical hardware or licenses.
*   **Elasticity**: You pay only for the resources you consume. If you shut down a server, you stop paying for it (mostly).
*   **Granular Billing**: Billing is usually calculated by the second or hour, depending on the service.
*   **Free Tiers**:
    *   **AWS**: Offers 12 months of "Free Tier" for many services.
    *   **Azure**: Offers a $200 credit for 30 days + some always-free services.
    *   **GCP**: Offers a $300 credit + a generous "Always Free" tier for small instances.

### Cost Optimization Strategies
*   **Reserved Instances / Committed Use**: Significant discounts (up to 70%) if you commit to using a resource for 1 or 3 years.
*   **Spot Instances**: Using spare cloud capacity at a fraction of the cost (but resources can be reclaimed by the provider).

## 3. Which one to choose?

*   **AWS**: The market leader with the most extensive set of services and a massive global infrastructure. Best for general purpose and high-scale requirements.
*   **Azure**: The natural choice for enterprises already heavily invested in Microsoft software (Active Directory, Windows Server, Office 365).
*   **Google Cloud**: Best for data analytics, machine learning, and containerized applications (as the creators of Kubernetes).

---
*Report generated for Task 22: Cloud Exploration.*
