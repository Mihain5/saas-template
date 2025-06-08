# Environment Variables Setup Guide

Environment variables are like secret passwords that your app needs to connect to services. Let's add them to Vercel!

## What Are Environment Variables?

Think of them as:
- Passwords for your services
- Settings that change between environments
- Secrets that should never be in your code

## Step 1: Go to Your Project Settings

1. Log in to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Click "Settings" tab (top navigation)
4. Click "Environment Variables" (left sidebar)

## Step 2: Add Clerk Variables

Add these one by one (click "Add" after each):

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key | ✅ All |
| `CLERK_SECRET_KEY` | Your Clerk secret key | ✅ All |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | `/sign-in` | ✅ All |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | `/sign-up` | ✅ All |
| `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL` | `/dashboard` | ✅ All |
| `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL` | `/dashboard` | ✅ All |

## Step 3: Add Supabase Variables

Continue adding:

| Key | Value | Environment |
|-----|-------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | ✅ All |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | ✅ All |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key | ✅ All |

## Step 4: Add Webhook Secret (After First Deploy)

This one comes later:

| Key | Value | Environment |
|-----|-------|-------------|
| `CLERK_WEBHOOK_SECRET` | Get from Clerk after webhook setup | ✅ All |

## How to Add Each Variable

For each variable:
1. Type the key name EXACTLY as shown
2. Paste your value (from your saved text file)
3. Keep "Encrypted" checked for secrets
4. Select all environments (Production, Preview, Development)
5. Click "Save"

## Step 5: Redeploy Your Project

After adding all variables:
1. Go to "Deployments" tab
2. Click the three dots on latest deployment
3. Click "Redeploy"
4. Wait 1-2 minutes

## How to Know It's Working

Success indicators:
- ✅ All variables show in the list
- ✅ Deployment succeeds (green checkmark)
- ✅ Your site loads without errors
- ✅ You can see the sign-in page

## Common Mistakes to Avoid

❌ **Don't add quotes** around values
❌ **Don't add spaces** before or after values
❌ **Don't forget NEXT_PUBLIC** prefix where shown
❌ **Don't mix up** publishable vs secret keys

## Security Notes

⚠️ **Secret Keys**: Never share these or commit to code
⚠️ **Service Role Key**: Has full database access - extra careful!
⚠️ **NEXT_PUBLIC**: These are visible in browser - only for public data

## Troubleshooting

**"Invalid API Key" Errors**:
- Double-check you copied the full key
- Ensure no extra spaces
- Verify you're using the right key type

**"Build Failed" After Adding Variables**:
- Check for typos in key names
- Ensure all required variables are added
- Try redeploying again

## What's Next?

Now your app should be live! Next, we'll set up the webhook to sync users with your database. 