# Vercel Setup Guide

Vercel hosts your SaaS application and makes it available to the world instantly.

## What You'll Get

- Instant deployments
- Automatic HTTPS/SSL
- Global CDN (fast loading worldwide)
- Automatic deployments when you update code
- Free subdomain (yourproject.vercel.app)

## Step 1: Create Your Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub

## Step 2: Get Your Vercel Token

For MCP tools to deploy automatically:

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click your profile picture (top right)
3. Go to "Settings"
4. Click "Tokens" in the sidebar
5. Click "Create"
6. Fill in:
   - **Token Name**: "Cursor MCP"
   - **Scope**: Full Account
   - **Expiration**: Never (or choose as needed)
7. Click "Create Token"
8. Copy the token immediately (you won't see it again!)

## Step 3: Save Your Token

Add to your temporary text file:
```
Vercel Token: [your-vercel-token]
```

You'll need this for MCP configuration.

## Important Notes

⚠️ **Vercel Token**: This can deploy to your account. Keep it secure!

💡 **No Project Yet**: Don't create a project manually. The AI will do this for you later!

## Free Tier Limits

Vercel's free tier includes:
- Unlimited deployments
- 100GB bandwidth/month
- Automatic HTTPS
- Perfect for getting started!

## How to Know It's Working

Your Vercel setup is ready when:
- You're logged in with GitHub
- You have your API token
- You can see your dashboard

## GitHub Connection

⚠️ **Important**: We'll connect your specific repository to Vercel later. For now, just having Vercel authorized to access GitHub is enough.

## Custom Domain (Later)

You can add a custom domain later:
- It's done after your app is deployed
- Takes 24-48 hours for DNS
- We have a separate guide for this

## Next Steps

Great! Now you have all your service accounts. Time to go back and:
1. Add all API keys to MCP configuration
2. Restart Cursor
3. Continue with the deployment! 