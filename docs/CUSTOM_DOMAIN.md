# Custom Domain Setup Guide

Want your SaaS to live at `www.yourdomain.com` instead of `yourproject.vercel.app`? This guide shows you how!

## When to Add a Custom Domain

Add a custom domain when:
- ✅ Your app is working properly
- ✅ You've tested core features
- ✅ You're ready for real users
- ✅ You own a domain name

## Prerequisites

You need:
- A domain name (buy from Namecheap, GoDaddy, etc.)
- Access to your domain's DNS settings
- Your Vercel project deployed and working

## Step 1: Add Domain to Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Click on your project
3. Go to "Settings" tab
4. Click "Domains" in sidebar
5. Type your domain (e.g., `www.yourdomain.com`)
6. Click "Add"

## Step 2: Choose Configuration

Vercel will ask how to configure:

### Option A: Recommended (www + root domain)
- `www.yourdomain.com` → Your app
- `yourdomain.com` → Redirects to www
- Choose this for most cases

### Option B: Root domain only
- `yourdomain.com` → Your app
- No www version
- Choose if you prefer no www

### Option C: Subdomain
- `app.yourdomain.com` → Your app
- Good for keeping main website separate

## Step 3: Configure DNS

Vercel will show you DNS records to add. Here's what to do:

### If Using Vercel's Nameservers (Easiest)
1. Vercel gives you nameservers like:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`
2. Go to your domain registrar
3. Change nameservers to Vercel's
4. Wait 24-48 hours

### If Using Your Own DNS (More Control)
1. Vercel shows records like:
   - A record: `76.76.21.21`
   - CNAME: `cname.vercel-dns.com`
2. Go to your DNS provider
3. Add each record exactly as shown
4. Save changes

## Step 4: Common DNS Providers

### Namecheap
1. Login → Domain List → Manage
2. Advanced DNS tab
3. Add records as shown by Vercel

### GoDaddy
1. Login → My Products → DNS
2. Add records as shown by Vercel
3. Save all changes

### Cloudflare
1. Login → Select domain
2. DNS tab
3. Add records (turn OFF proxy/orange cloud)

## Step 5: Wait for Propagation

DNS changes take time:
- Usually: 10-30 minutes
- Sometimes: Up to 48 hours
- Check status in Vercel (will show ✅ when ready)

## Step 6: Update Your App Settings

Once domain is active:

1. **Update Clerk**:
   - Go to Clerk dashboard
   - Add your domain to allowed URLs
   - Update webhook URL if needed

2. **Update Environment Variables**:
   - May need to add domain to CORS settings
   - Update any hardcoded URLs

## How to Know It's Working

Success indicators:
- ✅ Vercel shows "Valid Configuration"
- ✅ Green checkmark next to domain
- ✅ Your domain loads your app
- ✅ HTTPS works automatically

## Troubleshooting

### "Invalid Configuration"
- Double-check DNS records
- Ensure no typos
- Remove any proxy settings (Cloudflare)

### Site Not Loading
- Wait longer (DNS can be slow)
- Clear browser cache
- Try incognito mode

### SSL Certificate Error
- Vercel provides SSL automatically
- If error persists, remove and re-add domain

### Redirect Loops
- Check Cloudflare SSL settings
- Should be "Full" not "Flexible"

## Email Considerations

⚠️ **Important**: Adding domain to Vercel only affects website hosting, not email!

If you use email on your domain:
- Keep email DNS records unchanged
- Only modify A/CNAME records for website
- MX records should stay the same

## Multiple Domains

You can add multiple domains:
- All point to same app
- Good for .com, .net, .org versions
- Or different regions (.co.uk, .de)

## Removing a Domain

If needed:
1. Vercel → Settings → Domains
2. Click "..." next to domain
3. Click "Remove"
4. Update DNS to point elsewhere

## Best Practices

1. **Test First**: Ensure app works on Vercel URL
2. **Backup DNS**: Screenshot current DNS settings
3. **Use www**: Better for cookies and performance
4. **Monitor**: Check domain stays active

## Next Steps

After domain is connected:
1. Update all marketing materials
2. Set up domain email (separate service)
3. Configure analytics for new domain
4. Update any API callbacks

Congratulations! Your SaaS now has a professional domain! 🎉 