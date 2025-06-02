# variables.tf
variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"  # Paris - plus proche de la France
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "static-website-simple"
}

variable "environment" {
  description = "Environment (dev/staging/prod)"
  type        = string
  default     = "dev"
}

variable "price_class" {
  description = "CloudFront price class (PriceClass_100 = US/Europe, PriceClass_All = Global)"
  type        = string
  default     = "PriceClass_100"
  validation {
    condition     = contains(["PriceClass_100", "PriceClass_200", "PriceClass_All"], var.price_class)
    error_message = "Price class must be PriceClass_100, PriceClass_200, or PriceClass_All."
  }
}
