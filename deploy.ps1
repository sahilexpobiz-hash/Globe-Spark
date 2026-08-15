# GlobeSpark Deployment Script
# Run this script to stage, commit, and push changes to GitHub (which triggers Vercel deployment)

param (
    [string]$CommitMessage = "Update site content"
)

Write-Host "🚀 Starting deployment..." -ForegroundColor Cyan

# Stage all files
git add .

# Commit changes if any
git commit -m "$CommitMessage"

# Push to origin
Write-Host "📤 Pushing changes to GitHub..." -ForegroundColor Cyan
git push origin master

Write-Host "✅ Pushed to GitHub! If connected to Vercel, deployment will update live automatically." -ForegroundColor Green
