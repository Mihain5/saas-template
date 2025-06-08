# GitHub-Vercel Connection Guide

This guide shows you how to connect your GitHub repository to Vercel for automatic deployments.

## Why This Connection?

When connected:
- Every code change automatically deploys
- You get preview URLs for testing
- No manual deployment needed
- Your site updates within minutes

## Prerequisites

Make sure you have:
- ✅ Your code pushed to GitHub
- ✅ Vercel account created
- ✅ Vercel authorized to access GitHub

## Step 1: Start Import Process

1. Go to [vercel.com/new](https://vercel.com/new)
2. You'll see "Import Git Repository"
3. If you don't see your repository:
   - Click "Add GitHub Account"
   - Select your GitHub account
   - Choose "All repositories" or select specific ones

## Step 2: Select Your Repository

1. Find your SaaS repository in the list
2. Click "Import"

## Step 3: Configure Your Project

Vercel will show configuration options:

1. **Project Name**: 
   - Vercel suggests one
   - You can keep it or change it
   - This becomes part of your URL

2. **Framework Preset**:
   - Should auto-detect "Next.js"
   - If not, select it manually

3. **Root Directory**:
   - Leave as-is (should be `./`)

4. **Build Settings**:
   - Leave all defaults

5. **Environment Variables**:
   - Skip for now (we'll add these next)

## Step 4: Deploy

1. Click "Deploy"
2. Wait 2-3 minutes for first deployment
3. You'll see a success screen with:
   - Your live URL
   - A preview of your site
   - Deployment details

## Step 5: Note Your URLs

You now have:
- **Production URL**: `your-project.vercel.app`
- **Dashboard URL**: Where you manage settings

Save these - you'll need them!

## How to Know It's Working

Success indicators:
- ✅ "Congratulations" message appears
- ✅ You can visit your live URL
- ✅ Site loads (might show auth screen)
- ✅ No error messages

## What Happens Now?

From now on:
1. You make changes in Cursor
2. AI pushes to GitHub
3. Vercel automatically deploys
4. Changes are live in ~1 minute

## Common Issues

**"Build Failed" Error**:
- Usually means environment variables are missing
- We'll add these in the next step

**"404 Not Found"**:
- Normal if you haven't added auth keys yet
- Will be fixed when we add environment variables

## Next Steps

Now we need to add your environment variables to make everything work! 