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
- [💰 Coûts AWS](#-coûts-aws)
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

**🌐 Site de démonstration :** `https://votre-distribution.cloudfront.net`

---

## 🏗️ **Architecture**
