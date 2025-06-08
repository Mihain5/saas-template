# Email Setup Guide

Configure email notifications and templates for your SaaS application.

## Email in Your SaaS

Your app sends emails for:
- Welcome messages
- Password resets
- Team invitations
- Notifications
- Marketing (optional)

## Email Handled by Clerk

Good news! Clerk automatically handles:
- ✅ Sign-up confirmation
- ✅ Password reset emails
- ✅ Magic link sign-in
- ✅ Organization invitations

## Customizing Clerk Emails

### Step 1: Access Email Templates

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Select your application
3. Click "Email Templates" in sidebar

### Step 2: Customize Templates

Each template has:
- **Subject line**: Make it clear and friendly
- **Email body**: Add your branding
- **Variables**: Like `{{user.firstName}}`

### Step 3: Brand Your Emails

1. Click "Branding" in Clerk
2. Upload your logo
3. Set brand colors
4. Choose email footer text

### Common Customizations

**Welcome Email**:
```
Subject: Welcome to [Your SaaS Name]!

Hi {{user.firstName}},

Welcome aboard! We're excited to have you.

Here's how to get started:
1. Complete your profile
2. Invite your team
3. Create your first [project/task/etc]

Need help? Just reply to this email.

Best,
The [Your SaaS] Team
```

**Invitation Email**:
```
Subject: You're invited to join {{organization.name}}

Hi there,

{{inviter.firstName}} has invited you to join {{organization.name}} on [Your SaaS Name].

[Accept Invitation Button]

This invitation expires in 7 days.
```

## Adding Custom Emails

For notifications beyond authentication:

### Option 1: Email Service Provider (Recommended)

Popular choices:
- **SendGrid**: Great API, good free tier
- **Postmark**: Excellent delivery rates
- **Resend**: Modern, developer-friendly
- **Mailgun**: Powerful, scalable

### Option 2: Supabase Email (Simple)

Supabase includes basic email:
1. Limited to auth emails
2. Not for marketing
3. Good for MVPs

## Setting Up SendGrid (Example)

1. **Create Account**:
   - Go to [sendgrid.com](https://sendgrid.com)
   - Sign up for free account
   - Verify your email

2. **Get API Key**:
   - Settings → API Keys
   - Create key with "Mail Send" permission
   - Save the key

3. **Verify Domain** (Optional but recommended):
   - Settings → Sender Authentication
   - Follow domain verification steps
   - Improves delivery rates

4. **Tell AI to Integrate**:
   ```
   Add SendGrid email integration with these features:
   - Send notification when [event happens]
   - Daily summary emails
   - [Other email needs]
   
   Use my SendGrid API key: [your-key]
   ```

## Email Best Practices

### Design Tips
- Keep it simple and scannable
- Use your brand colors sparingly
- Include clear call-to-action buttons
- Mobile-friendly (single column)

### Content Tips
- Personal subject lines
- Get to the point quickly
- One main message per email
- Always include unsubscribe

### Delivery Tips
- Verify your domain
- Warm up sending gradually
- Monitor bounce rates
- Test in different clients

## Common Email Types

### Transactional Emails
- Order confirmations
- Account updates
- Password changes
- System notifications

### Engagement Emails
- Welcome series
- Feature announcements
- Usage tips
- Milestone celebrations

### Retention Emails
- Inactivity reminders
- Subscription renewals
- Win-back campaigns
- Satisfaction surveys

## Testing Emails

Always test:
1. **Content**: Spelling, links, personalization
2. **Design**: Mobile, desktop, dark mode
3. **Delivery**: Spam filters, different providers
4. **Functionality**: Links, buttons, unsubscribe

## Email Analytics

Track these metrics:
- **Open rate**: 20-30% is good
- **Click rate**: 2-5% is typical
- **Bounce rate**: Keep under 2%
- **Unsubscribe rate**: Under 0.5%

## Compliance

Follow email laws:
- **CAN-SPAM** (US): Include physical address, unsubscribe
- **GDPR** (EU): Get explicit consent, allow data deletion
- **CASL** (Canada): Consent before sending

## Troubleshooting

### Emails Going to Spam
- Verify domain (SPF, DKIM)
- Avoid spam trigger words
- Balance text and images
- Include unsubscribe link

### Low Open Rates
- Improve subject lines
- Send at better times
- Segment your audience
- Clean your email list

### High Bounce Rate
- Verify email addresses
- Remove inactive users
- Use double opt-in
- Monitor sender reputation

## Next Steps

1. Customize Clerk templates first
2. Plan additional email needs
3. Choose email service if needed
4. Ask AI to implement
5. Test thoroughly

Remember: Start simple with Clerk's built-in emails, then expand as needed! 