# Supabase Setup Guide

Supabase is your database - it stores all your application data securely in the cloud.

## What You'll Get

- A PostgreSQL database (powerful and reliable)
- Automatic backups
- Real-time data updates
- Secure data access with Row Level Security

## Step 1: Create Your Supabase Account

1. Go to [supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub (recommended) or email
4. Verify your email if needed

## Step 2: Create a New Project

1. Click "New project"
2. Fill in the details:
   - **Project name**: Choose something memorable (e.g., "my-saas-db")
   - **Database Password**: Generate a strong password (save this!)
   - **Region**: Choose the closest to your users
   - **Pricing Plan**: Start with Free tier

3. Click "Create new project"
4. Wait 1-2 minutes for setup to complete

## Step 3: Get Your API Keys

Once your project is ready:

1. Go to "Settings" (gear icon)
2. Click "API" in the sidebar
3. You'll need these keys:
   - **Project URL**: Starts with `https://`
   - **Anon Key**: A long string starting with `eyJ`
   - **Service Role Key**: Another long string (keep this extra secure!)

## Step 4: Get Your Access Token

For MCP tools to work:

1. Click your profile icon (top right)
2. Go to "Access Tokens"
3. Click "Generate new token"
4. Name it (e.g., "Cursor MCP")
5. Copy the token immediately (you won't see it again!)

## Step 5: Save Your Keys

Create a temporary text file with:
```
Supabase Project URL: [your-url]
Supabase Anon Key: [your-anon-key]
Supabase Service Role Key: [your-service-key]
Supabase Access Token: [your-access-token]
```

You'll need these for:
- MCP configuration (Access Token)
- Vercel environment variables (all others)

## Important Security Notes

⚠️ **Service Role Key**: This has full database access. Never share it or put it in client-side code!

⚠️ **Access Token**: This gives MCP tools access to your database. Keep it secure!

## How to Know It's Working

Your Supabase project is ready when:
- You see "Your project is ready" message
- You can access the dashboard
- All API keys are visible in settings

## Next Steps

Now you're ready to set up Clerk for user authentication! 