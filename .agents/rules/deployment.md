# Deployment Rules for GlobeSpark

When the user commands "deploy" or "deploy the site":
1. Run `git add .`
2. Run `git commit -m "<descriptive message>"`
3. Run `git push origin master` (or `powershell ./deploy.ps1`)
4. Confirm to the user when the push completes so Vercel builds the live site automatically.
