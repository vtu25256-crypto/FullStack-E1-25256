# Terraform Configuration: Secure AWS Web Infrastructure
# Generated using Prompt Engineering (Task 23)

provider "aws" {
  region = "us-east-1"
}

# 1. VPC Configuration
resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_hostnames = true
  tags = { Name = "SecureVPC" }
}

# 2. Subnets
resource "aws_subnet" "public" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.1.0/24"
  tags       = { Name = "PublicSubnet" }
}

resource "aws_subnet" "private" {
  vpc_id     = aws_vpc.main.id
  cidr_block = "10.0.2.0/24"
  tags       = { Name = "PrivateSubnet" }
}

# 3. Security Groups
resource "aws_security_group" "web_sg" {
  name        = "web-server-sg"
  description = "Allow HTTPS and restricted SSH"
  vpc_id      = aws_vpc.main.id

  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["YOUR_OFFICE_IP/32"] # Restricted access
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

# 4. EC2 Instance
resource "aws_instance" "web" {
  ami           = "ami-0c55b159cbfafe1f0" # Amazon Linux 2
  instance_type = "t2.micro"
  subnet_id     = aws_subnet.private.id
  vpc_security_group_ids = [aws_security_group.web_sg.id]

  tags = { Name = "WebServer" }
}
