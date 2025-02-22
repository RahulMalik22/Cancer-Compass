# Cancer Compass
A scalable, AI-powered platform to enhance cancer patient navigation using open datasets and APIs.

## Overview
Cancer Compass empowers navigators, patients, and caregivers by integrating open data (e.g., TCGA, SEER) and APIs (e.g., Aunt Bertha, FHIR) to streamline social needs screening, care monitoring, appointment scheduling, and service connections. Built for the *Transforming Cancer Navigation with Open Data & APIs Challenge*.

## Features
- AI-driven SDOH risk scoring and care predictions
- Real-time API integrations for healthcare and social services
- Scalable microservices architecture with Docker and Kubernetes support

## Getting Started
### Prerequisites
- Node.js 18.x, Python 3.9, Docker, Docker Compose
- API keys for Aunt Bertha, FHIR, etc.

### Installation
1. Clone: `git clone https://github.com/RahulMalik22/cancer-compass.git`
2. Install: `make install`
3. Configure: Copy `backend/.env.example` to `backend/.env` and update vars
4. Run: `make up`

### Usage
- Frontend: `http://localhost:8080`
- API: `http://localhost:8080/api`

## Deployment
- Local: `docker-compose up`
- Production: AWS ECS/EKS with Kubernetes manifests in `/infra/kubernetes`

## Contributing
Fork, create a feature branch, and submit a PR. See [CONTRIBUTING.md](#) for details.

## License
MIT License - see [LICENSE](LICENSE) for details.
