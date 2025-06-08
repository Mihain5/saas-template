# 🚀 100% Cloud Deployment Guide

This guide walks through deploying the SaaS template entirely in the cloud - NO LOCAL SETUP NEEDED!

## 📋 Pre-Deployment Checklist

Before starting, ensure you have:
- [ ] Cursor AI installed
- [ ] Created accounts for all services
- [ ] Have credit cards ready for paid services

## 🔧 Step-by-Step Deployment

### Step 1: MCP Configuration in Cursor

1. Open Cursor and navigate to this template folder
2. Edit `.cursor/mcp.json` with your actual API keys
3. Restart Cursor to activate MCP tools

### Step 2: Create GitHub Repository

Using Cursor's terminal or GitHub MCP:
```
# Via GitHub MCP
1. Create new repository
2. Push all template files
```

### Step 3: Clerk Setup

1. **Create Clerk Application**
   - Go to clerk.com and sign up
   - Create new application
   - Enable "Organizations" feature
   - Choose "Next.js" as framework

2. **Get Your Keys**
   - Navigate to API Keys section
   - Copy:
     - Publishable Key (starts with `pk_`)
     - Secret Key (starts with `sk_`)

3. **Configure Webhook (after Vercel deployment)**
   - We'll come back to this in Step 6

### Step 4: Supabase Setup

1. **Create Supabase Project**
   - Go to supabase.com
   - Create new project
   - Choose region closest to your users
   - Wait for project to initialize

2. **Get Your Keys**
   - Go to Settings > API
   - Copy:
     - Project URL
     - Anon Key (public)
     - Service Role Key (secret)

3. **Create Database Schema via Supabase MCP**
   ```sql
   -- Use Supabase MCP to execute this SQL
   -- The schema supports both B2B and B2B2C patterns
   ```

### Step 5: Vercel Deployment

1. **Create Vercel Project via MCP**
   - Use Vercel MCP to create new project
   - Link to your GitHub repository

2. **Set ALL Environment Variables in Vercel Dashboard**
   
   Navigate to your project settings > Environment Variables and add:

   ```bash
   # CLERK AUTHENTICATION (Required)
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard

   # SUPABASE DATABASE (Required)
   NEXT_PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGci...
   SUPABASE_SERVICE_ROLE_KEY=eyJhbGci...

   # CLERK WEBHOOK (Add after getting webhook secret)
   CLERK_WEBHOOK_SECRET=whsec_...

   # STRIPE PAYMENTS (Optional - add when ready)
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # ADDITIONAL SERVICES (As needed)
   # Add any other service keys here
   ```

3. **Deploy**
   - Click "Deploy" in Vercel
   - Wait for build to complete
   - Note your deployment URL (e.g., `your-app.vercel.app`)

### Step 6: Configure Clerk Webhook

1. **In Clerk Dashboard**
   - Go to Webhooks
   - Click "Add Endpoint"
   - URL: `https://your-app.vercel.app/api/webhooks/clerk`
   - Select events:
     - `user.created`
     - `user.updated`
     - `user.deleted`
     - `organization.created`
     - `organization.updated`
     - `organizationMembership.created`
     - `organizationMembership.updated`

2. **Get Webhook Secret**
   - Copy the webhook secret (starts with `whsec_`)
   - Add to Vercel environment variables as `CLERK_WEBHOOK_SECRET`

3. **Redeploy**
   - Trigger a redeployment in Vercel to apply new environment variable

### Step 7: Verify Deployment

1. **Test Authentication**
   - Visit your Vercel URL
   - Click "Sign Up"
   - Create an account
   - Verify you can sign in

2. **Test Multi-Tenancy**
   - Create an organization in Clerk
   - Check Supabase to verify data was created

3. **Test Access Control**
   - Try accessing `/dashboard` without authentication
   - Verify redirect to sign-in page

## 🔒 Security Checklist

- [ ] All environment variables set in Vercel (not in code)
- [ ] Webhook secrets are unique and secure
- [ ] RLS policies are enabled in Supabase
- [ ] Middleware protects all dashboard routes

## 🛠️ Post-Deployment

### Adding Custom Domain

1. In Vercel project settings
2. Go to "Domains"
3. Add your domain
4. Update DNS records as instructed

### Setting Up Stripe (When Ready)

1. Create Stripe account
2. Get API keys from Stripe dashboard
3. Add to Vercel environment variables
4. Create webhook endpoint in Stripe
5. Implement payment components

### Monitoring

1. **Vercel Analytics** - Built-in performance monitoring
2. **Clerk Dashboard** - User activity and authentication logs
3. **Supabase Dashboard** - Database metrics and logs
4. **Stripe Dashboard** - Payment analytics (if using)

## 🚨 Troubleshooting

### Common Issues

1. **"Missing environment variables" error**
   - Double-check all required variables in Vercel
   - Redeploy after adding variables

2. **"User not syncing to Supabase"**
   - Verify webhook is configured correctly
   - Check webhook logs in Clerk dashboard
   - Ensure `CLERK_WEBHOOK_SECRET` matches

3. **"RLS policy violation" errors**
   - Check user roles in database
   - Verify RLS policies are correctly set up
   - Test with Supabase SQL editor

### Debug Steps

1. **Check Vercel Function Logs**
   - Go to Vercel dashboard > Functions
   - Look for errors in webhook endpoints

2. **Check Clerk Webhook Logs**
   - Clerk dashboard > Webhooks
   - View delivery attempts and responses

3. **Test Database Connection**
   - Use Supabase SQL editor
   - Run test queries as different users

## 📚 Next Steps

1. **Customize the template** for your specific SaaS
2. **Add your business logic** using modular components
3. **Implement payment flows** when ready
4. **Scale as needed** - all services auto-scale!

Remember: Everything happens in the cloud. No local development needed! 