# outputs.tf
output "website_url" {
  description = "URL du site web"
  value       = "https://${aws_cloudfront_distribution.website.domain_name}"
}

output "cloudfront_domain_name" {
  description = "Nom de domaine CloudFront"
  value       = aws_cloudfront_distribution.website.domain_name
}

output "cloudfront_distribution_id" {
  description = "ID de la distribution CloudFront"
  value       = aws_cloudfront_distribution.website.id
}

output "s3_bucket_name" {
  description = "Nom du bucket S3"
  value       = aws_s3_bucket.website.id
}

output "s3_bucket_arn" {
  description = "ARN du bucket S3"
  value       = aws_s3_bucket.website.arn
}

output "aws_s3_sync_command" {
  description = "Commande pour synchroniser les fichiers locaux vers S3"
  value       = "aws s3 sync website/ s3://${aws_s3_bucket.website.id}/ --delete"
}

output "cloudfront_invalidation_command" {
  description = "Commande pour invalider le cache CloudFront"
  value       = "aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.website.id} --paths '/*'"
}
