# 🚀 terraform-aws-static-website-simple

**Déploiement automatisé d'un site web statique sur AWS avec Terraform**

![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-orange) ![Terraform](https://img.shields.io/badge/Terraform-1.0%2B-purple) ![HTTPS](https://img.shields.io/badge/HTTPS-Enabled-green)

## 📋 **Aperçu**

Infrastructure as Code pour héberger un site web statique avec S3 (privé) + CloudFront (CDN) + HTTPS automatique.

**Architecture :** `Internet → CloudFront → S3 Bucket (Privé)`

## 🛠️ **Installation rapide**

### Prérequis
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) configuré
- [Terraform](https://terraform.io/downloads) installé

```bash
aws configure  # Configurer AWS
# 1. Cloner le projet
git clone https://github.com/votre-username/terraform-aws-static-website-simple.git
cd terraform-aws-static-website-simple

# 2. Ajouter votre site web dans app/
echo '<h1>🚀 Mon site AWS !</h1>' > app/index.html

# 3. Déployer l'infrastructure
terraform init
terraform apply  # Tapez "yes"

# 4. Uploader le contenu
aws s3 sync app/ s3://$(terraform output -raw s3_bucket_name)/

# 5. Accéder au site
terraform output website_url

**terraform-aws-static-website-simple/
├── main.tf              # Infrastructure AWS
├── variables.tf         # Configuration
├── outputs.tf           # URLs et infos
├── app/                 # Votre site web
│   ├── index.html
│   └── style.css
└── README.md
**
