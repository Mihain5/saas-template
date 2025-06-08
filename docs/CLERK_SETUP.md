# Clerk Setup Guide

Clerk handles all user authentication - sign up, sign in, and organization management.

## What You'll Get

- User registration and login
- Organization/team management
- Secure authentication
- Beautiful pre-built UI components
- User profiles and management

## Step 1: Create Your Clerk Account

1. Go to [clerk.com](https://clerk.com)
2. Click "Get started"
3. Sign up with email or GitHub
4. Verify your email

## Step 2: Create a New Application

1. In your dashboard, click "Create application"
2. Fill in the details:
   - **Application name**: Your SaaS name
   - **Sign-in options**: Enable these:
     - ✅ Email address
     - ✅ Google (optional but recommended)
     - ✅ Others as needed
3. Click "Create application"

## Step 3: Enable Organizations

This is crucial for multi-tenancy:

1. In your app dashboard, go to "Organizations" (left sidebar)
2. Click "Enable organizations"
3. Configure settings:
   - **Creation**: "Anyone can create"
   - **Membership limit**: Leave empty for unlimited
   - **Roles**: Keep default for now

## Step 4: Get Your API Keys

1. Go to "API Keys" in the sidebar
2. You'll see two keys:
   - **Publishable key**: Starts with `pk_test_` or `pk_live_`
   - **Secret key**: Starts with `sk_test_` or `sk_live_`
3. Copy both keys

## Step 5: Configure Sign-in/Sign-up URLs

1. Go to "Paths" in the sidebar
2. Set these paths:
   - **Sign-in URL**: `/sign-in`
   - **Sign-up URL**: `/sign-up`
   - **After sign-in URL**: `/dashboard`
   - **After sign-up URL**: `/dashboard`
3. Save changes

## Step 6: Save Your Keys

Create a temporary text file with:
```
Clerk Publishable Key: [your-publishable-key]
Clerk Secret Key: [your-secret-key]
```

You'll need these for:
- MCP configuration (Secret Key)
- Vercel environment variables (both keys)

## Important Notes

⚠️ **Secret Key**: Never expose this in client-side code or public repositories!

💡 **Test Mode**: You'll start in test mode (keys start with `_test`). This is perfect for development!

## Customization (Optional)

You can customize:
1. **Appearance**: Go to "Customization" → "Theme"
2. **Branding**: Add your logo and colors
3. **Email templates**: Customize welcome emails

## How to Know It's Working

Your Clerk setup is complete when:
- Organizations are enabled
- You have both API keys
- Paths are configured
- You see "Active" status

## Webhook Setup (Do This After Vercel Deployment)

We'll configure webhooks later to sync users with your database. Make a note to come back to this!

## Next Steps

Now set up your Vercel account for hosting! 