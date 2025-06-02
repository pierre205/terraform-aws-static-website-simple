# 🚀 terraform-aws-static-website-simple

**Déploiement automatisé d'un site web statique sur AWS avec Terraform**

Un projet d'infrastructure as code pour héberger un site web statique sur AWS avec S3, CloudFront et HTTPS automatique.

![AWS](https://img.shields.io/badge/AWS-S3%20%2B%20CloudFront-orange)
![Terraform](https://img.shields.io/badge/Terraform-1.0%2B-purple)
![HTTPS](https://img.shields.io/badge/HTTPS-Enabled-green)
![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen)

---

## 📋 **Table des matières**

- [🎯 Aperçu](#-aperçu)
- [🏗️ Architecture](#️-architecture)
- [✨ Fonctionnalités](#-fonctionnalités)
- [🛠️ Prérequis](#️-prérequis)
- [🚀 Déploiement rapide](#-déploiement-rapide)
- [📁 Structure du projet](#-structure-du-projet)
- [🔧 Configuration](#-configuration)
- [📝 Commandes utiles](#-commandes-utiles)
- [🌐 Accès au site](#-accès-au-site)
- [🔒 Sécurité](#-sécurité)
- [🚨 Dépannage](#-dépannage)
- [🧹 Nettoyage](#-nettoyage)

---

## 🎯 **Aperçu**

Ce projet déploie automatiquement un site web statique sur AWS avec les meilleures pratiques :

- **S3** pour le stockage (bucket privé)
- **CloudFront** pour la distribution mondiale (CDN)
- **HTTPS** automatique et sécurisé
- **Origin Access Control** (OAC) pour la sécurité
- **Cache optimisé** pour les performances
- **Infrastructure as Code** avec Terraform

**🌐 Site de démonstration :** `(https://d2ypcj0ochkiuk.cloudfront.net/)`

### **Composants AWS créés :**

| Ressource | Description | Fonction |
|-----------|-------------|----------|
| **S3 Bucket** | Stockage privé | Héberge les fichiers statiques |
| **CloudFront Distribution** | CDN mondial | Accélère la livraison du contenu |
| **Origin Access Control** | Sécurité | Contrôle l'accès S3 ↔ CloudFront |
| **S3 Bucket Policy** | Permissions | Autorise uniquement CloudFront |

---

## 🏗️ **Architecture**

```
[👤 Utilisateur] → [🌐 Internet] → [☁️ CloudFront CDN] → [🪣 S3 Bucket Privé]
```

**Flux de données :**
1. L'utilisateur accède au site via l'URL CloudFront
2. CloudFront vérifie son cache global
3. Si nécessaire, CloudFront récupère le contenu depuis S3
4. Le contenu est servi avec HTTPS et mis en cache

---

## ✨ **Fonctionnalités**

### 🔒 **Sécurité**
- ✅ S3 bucket **privé** (pas d'accès public direct)
- ✅ Accès uniquement via **CloudFront**
- ✅ **HTTPS obligatoire** sur toutes les connexions
- ✅ **Origin Access Control** (OAC) moderne

### ⚡ **Performance**
- ✅ **CDN mondial** (150+ edge locations)
- ✅ **Compression Gzip** automatique
- ✅ **Cache optimisé** par type de fichier
- ✅ **HTTP/2** activé

### 🛠️ **DevOps**
- ✅ **Infrastructure as Code** (Terraform)
- ✅ **Déploiement reproductible**
- ✅ **Configuration déclarative**
- ✅ **Outputs informatifs**

---

## 🛠️ **Prérequis**

### Outils requis
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) (v2.0+)
- [Terraform](https://terraform.io/downloads) (v1.0+)
- Compte AWS actif

### Configuration AWS
```bash
# Configurer AWS CLI
aws configure
# AWS Access Key ID: VOTRE_ACCESS_KEY
# AWS Secret Access Key: VOTRE_SECRET_KEY  
# Default region: eu-west-1 (ou votre région)
# Default output format: json

# Vérifier la configuration
aws sts get-caller-identity
```

---

## 🚀 **Déploiement rapide**

### 1️⃣ Clonage et préparation
```bash
# Cloner le repository
git clone https://github.com/pierre205/terraform-aws-static-website-simple.git
cd terraform-aws-static-website-simple

# Créer votre contenu web
mkdir -p app
echo '<!DOCTYPE html>
<html>
<head><title>🚀 Mon Site AWS</title></head>
<body>
  <h1>🎉 Site déployé avec Terraform !</h1>
  <p>Hébergé sur AWS S3 + CloudFront</p>
</body>
</html>' > app/index.html
```

### 2️⃣ Déploiement infrastructure
```bash
# Initializer Terraform
terraform init

# Prévisualiser les changements
terraform plan

# Déployer (confirmer avec "yes")
terraform apply
```

### 3️⃣ Upload du contenu
```bash
# Synchroniser le contenu
aws s3 sync app/ s3://$(terraform output -raw s3_bucket_name)/

# Obtenir l'URL du site
terraform output website_url
```

⏱️ **Temps de déploiement :** 5-10 minutes

---

## 📁 **Structure du projet**

```
terraform-aws-static-website-simple/
│
├── 📄 main.tf              # Infrastructure AWS principale
├── 📄 variables.tf         # Variables de configuration
├── 📄 outputs.tf           # Informations de sortie
├── 📄 terraform.tfvars     # Valeurs des variables (optionnel)
├── 📁 app/                 # Contenu de votre site web
│   ├── 📄 index.html       # Page d'accueil
│   ├── 📄 style.css        # Styles CSS
│   ├── 📄 script.js        # JavaScript
│   └── 📁 images/          # Images et assets
├── 📁 .terraform/          # Cache Terraform (ignoré par Git)
├── 📄 .gitignore           # Fichiers ignorés par Git
└── 📄 README.md            # Documentation
```

---

## 🔧 **Configuration**

### Variables personnalisables (variables.tf)
```hcl
variable "project_name" {
  description = "Nom du projet"
  type        = string
  default     = "my-static-website"
}

variable "environment" {
  description = "Environnement (dev, staging, prod)"
  type        = string
  default     = "prod"
}

variable "region" {
  description = "Région AWS"
  type        = string
  default     = "eu-west-1"
}
```

### Personnalisation (terraform.tfvars)
```hcl
project_name = "mon-super-site"
environment  = "production"
region      = "eu-west-3"
```

---

## 📝 **Commandes utiles**

### 🌐 Gestion du site
```bash
# Voir l'URL du site
terraform output website_url

# Voir toutes les informations
terraform output

# Mettre à jour le contenu
aws s3 sync app/ s3://$(terraform output -raw s3_bucket_name)/ --delete

# Invalider le cache CloudFront (pour voir les changements immédiatement)
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw cloudfront_distribution_id) \
  --paths '/*'
```

### 🔧 Gestion Terraform
```bash
# Voir l'état actuel
terraform show

# Mettre à jour l'infrastructure
terraform apply

# Formater le code
terraform fmt

# Valider la configuration
terraform validate
```

---

## 🌐 **Accès au site**

Après déploiement, votre site est accessible via :

```bash
# URL CloudFront (production)
https://d1234567890abc.cloudfront.net

# Obtenir l'URL via Terraform
terraform output website_url
```

---

## 🔒 **Sécurité**

### ✅ Mesures implémentées
- **Bucket S3 privé** : Aucun accès public direct
- **Origin Access Control (OAC)** : Seul CloudFront peut accéder à S3
- **HTTPS forcé** : Redirection automatique HTTP → HTTPS
- **Headers de sécurité** : Protection contre les attaques courantes

### 🔐 Bonnes pratiques
```bash
# Vérifier la sécurité du bucket
aws s3api get-public-access-block --bucket $(terraform output -raw s3_bucket_name)

# Vérifier que le bucket n'est pas public
aws s3api get-bucket-acl --bucket $(terraform output -raw s3_bucket_name)
```

---

## 🚨 **Dépannage**

### ❌ Site inaccessible (403/404)

**Solutions :**
```bash
# 1. Vérifier que index.html existe
ls -la app/
aws s3 ls s3://$(terraform output -raw s3_bucket_name)/

# 2. Re-synchroniser le contenu
aws s3 sync app/ s3://$(terraform output -raw s3_bucket_name)/ --delete

# 3. Invalider le cache
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw cloudfront_distribution_id) \
  --paths '/*'
```

### ❌ Changements non visibles

**Cause :** Cache CloudFront (24h par défaut)

**Solutions :**
```bash
# Option 1: Invalidation (recommandée)
aws cloudfront create-invalidation \
  --distribution-id $(terraform output -raw cloudfront_distribution_id) \
  --paths '/*'

# Option 2: Attendre ou tester avec ?v=timestamp
curl "https://votre-distribution.cloudfront.net?v=$(date +%s)"
```

### ❌ Erreur Terraform

```bash
# Problème d'état
terraform refresh

# Réinitializer si nécessaire
rm -rf .terraform.lock.hcl .terraform/
terraform init

# Importer des ressources existantes si conflit
terraform import aws_s3_bucket.website your-bucket-name
```

### ❌ Erreurs AWS CLI

```bash
# Vérifier les permissions
aws iam get-user
aws sts get-caller-identity

# Reconfigurer si nécessaire
aws configure
```

---

## 🧹 **Nettoyage**

### ⚠️ Suppression complète

```bash
# 1. Vider le bucket S3 (obligatoire avant destruction)
aws s3 rm s3://$(terraform output -raw s3_bucket_name)/ --recursive

# 2. Detruire l'infrastructure
terraform destroy  # Confirmer avec "yes"

# 3. Nettoyage local
rm -rf .terraform/ terraform.tfstate*
```
</div>
