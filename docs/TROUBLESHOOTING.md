# Troubleshooting Guide

Solutions to common issues you might encounter while building your SaaS.

## Quick Fixes

Before diving deep, try these:
1. **Refresh the page** (Ctrl/Cmd + R)
2. **Clear browser cache**
3. **Check Vercel deployment status**
4. **Restart Cursor** (for MCP issues)

## Common Issues & Solutions

### 🔴 "Page Not Found" or 404 Error

**Symptoms**: Your Vercel URL shows 404

**Solutions**:
1. Check deployment status in Vercel dashboard
2. Ensure environment variables are set
3. Wait for deployment to complete (2-3 minutes)
4. Try the URL with `/` at the end

### 🔴 "Missing Environment Variables"

**Symptoms**: Build fails with "Missing required environment variables"

**Solutions**:
1. Go to Vercel → Settings → Environment Variables
2. Check all required variables are added
3. No quotes around values
4. No extra spaces
5. Redeploy after adding

### 🔴 Sign In/Sign Up Not Working

**Symptoms**: Auth pages don't load or show errors

**Solutions**:
1. Verify Clerk keys in Vercel:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
2. Check Clerk dashboard is active
3. Ensure URLs are configured in Clerk
4. Clear cookies and try again

### 🔴 Database Connection Failed

**Symptoms**: "Database error" or data not loading

**Solutions**:
1. Check Supabase project is active
2. Verify Supabase keys in Vercel
3. Ensure RLS policies are created
4. Check Supabase dashboard for errors

### 🔴 Users Not Syncing to Database

**Symptoms**: Users can sign in but no data in Supabase

**Solutions**:
1. Webhook not configured:
   - Get Vercel deployment URL
   - Add to Clerk webhooks
   - Add webhook secret to Vercel
2. Check webhook logs in Clerk
3. Verify webhook endpoint exists
4. Redeploy after adding webhook secret

### 🔴 MCP Tools Not Working

**Symptoms**: AI says "I don't have access to tools"

**Solutions**:
1. Check `mcp.json` has correct API keys
2. Completely restart Cursor
3. Verify JSON syntax (no trailing commas)
4. Ensure all quotes are proper

### 🔴 Changes Not Appearing

**Symptoms**: Code changes don't show on live site

**Solutions**:
1. Ensure changes are saved
2. Check if GitHub push succeeded
3. Verify Vercel deployment triggered
4. Clear browser cache
5. Check correct branch is deployed

### 🔴 Build Failed in Vercel

**Symptoms**: Red X on deployment, "Build Failed"

**Common Causes & Fixes**:

**TypeScript Errors**:
- Ask AI to fix TypeScript errors
- Ensure all imports are correct

**Missing Dependencies**:
- Check `package.json` has all packages
- Ask AI to add missing packages

**Environment Variables**:
- All required variables must be set
- Check for typos in variable names

### 🔴 Slow Loading or Performance Issues

**Solutions**:
1. Check Vercel Analytics
2. Optimize images (use next/image)
3. Reduce bundle size
4. Enable caching
5. Use Vercel Edge Functions

### 🔴 Payment/Stripe Issues

**Symptoms**: Payments not working

**Solutions**:
1. Verify Stripe keys (test vs live)
2. Check webhook configuration
3. Ensure products exist in Stripe
4. Test with Stripe test cards
5. Check Stripe logs for errors

## MCP-Specific Issues

### Task Master Not Working

**Fix**:
```
Tell AI: "Reinitialize Task Master for this project"
```

### Supabase MCP Errors

**Fix**:
1. Regenerate access token
2. Update in `mcp.json`
3. Restart Cursor

### GitHub MCP Not Pushing

**Fix**:
1. Check GitHub token permissions
2. Ensure repository access
3. Try manual git commands

## Browser-Specific Issues

### Chrome/Edge
- Disable ad blockers
- Clear cookies for your domain
- Try incognito mode

### Safari
- Enable third-party cookies
- Clear website data
- Check privacy settings

### Firefox
- Clear cache and cookies
- Disable enhanced tracking protection
- Check console for errors

## How to Get Better Help

When asking for help, provide:

1. **Error message** (exact text)
2. **What you were doing** when it happened
3. **Browser and OS** you're using
4. **Screenshot** if possible
5. **Deployment URL**

## Debug Commands

Ask AI to run these:

**Check deployment**:
```
Check Vercel deployment status and logs
```

**Verify database**:
```
Check Supabase connection and tables
```

**Test authentication**:
```
Verify Clerk configuration and test auth flow
```

**Review logs**:
```
Show me recent error logs from Vercel
```

## Prevention Tips

1. **Test after each major change**
2. **Don't skip steps in guides**
3. **Keep one backup of working state**
4. **Monitor Vercel deployments**
5. **Check service status pages**

## Still Stuck?

If nothing works:

1. **Create a fresh deployment**:
   - Ask AI to "Create a fresh Vercel deployment"

2. **Check service status**:
   - [Vercel Status](https://vercel-status.com)
   - [Clerk Status](https://status.clerk.com)
   - [Supabase Status](https://status.supabase.com)

3. **Rollback changes**:
   - In Vercel, promote previous working deployment

4. **Start specific feature over**:
   - Sometimes easier than debugging

## Emergency Contacts

While building:
- Ask AI for help first
- Check this guide
- Review error messages carefully

Remember: Most issues are simple configuration problems. Stay calm and work through the solutions systematically! 