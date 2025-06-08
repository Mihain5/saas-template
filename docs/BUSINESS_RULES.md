# Business Rules Guide

Business rules define how your SaaS should behave. They're like the "laws" of your application - what users can and cannot do.

## Where to Save Your Rules

Create a file called `business-rules.txt` in the `.cursor/rules/` folder.

## What Are Business Rules?

Business rules answer questions like:
- Who can do what?
- When can they do it?
- What happens when they do it?
- What are the limits?

## Business Rules Template

```
BUSINESS RULES FOR [YOUR SAAS NAME]

USER PERMISSIONS:
- [Role]: Can [action], Cannot [action]
- [Role]: Can [action], Cannot [action]

DATA ACCESS:
- Users can only see [what data]
- [Role] can see [additional data]
- Data is isolated by [organization/team/user]

LIMITS:
- Free users: [limits]
- Paid users: [limits]
- Trial period: [duration and features]

WORKFLOWS:
- When [event] happens, then [action]
- [Process] requires [approval/condition]
- [Feature] is available when [condition]

SECURITY:
- [Data type] is [private/public/restricted]
- [Action] requires [permission level]
- [Feature] is restricted to [user type]

BUSINESS LOGIC:
- [Calculation or rule]
- [Condition and outcome]
- [Special cases]
```

## Example Business Rules #1: Project Management SaaS

```
BUSINESS RULES FOR TASKFLOW PRO

USER PERMISSIONS:
- Organization Owner: Can do everything, including delete organization
- Admin: Can manage all projects, users, and settings except billing
- Member: Can create projects, manage own tasks, view all projects
- Guest: Can only view assigned tasks and comment
- Client: Can only view shared projects (read-only)

DATA ACCESS:
- Users can only see data from their organization
- Clients see only explicitly shared projects
- Personal tasks are private unless assigned to others
- Deleted data is soft-deleted for 30 days

LIMITS:
- Free plan: 3 projects, 5 users, 1GB storage
- Pro plan: Unlimited projects, 50 users, 100GB storage
- Enterprise: Unlimited everything, custom contracts
- Trial: 14 days with Pro features

WORKFLOWS:
- New users must be invited by admin
- Projects require at least one admin
- Tasks can't be deleted if they have time logged
- Completed projects archive after 90 days
- Notifications sent for: assignments, mentions, due dates

SECURITY:
- Passwords must be 8+ characters
- Sessions expire after 7 days
- File uploads scanned for viruses
- API access requires token authentication
- Client links expire after 30 days if not set permanent

BUSINESS LOGIC:
- Task priorities: Urgent > High > Normal > Low
- Overdue tasks automatically marked red
- Time tracking rounds to nearest 15 minutes
- Project completion = all tasks done
- Capacity = 8 hours per person per day
```

## Example Business Rules #2: Customer Feedback SaaS

```
BUSINESS RULES FOR FEEDBACKHQ

USER PERMISSIONS:
- Account Owner: Full access, billing, delete account
- Admin: Manage feedback, team, settings (no billing)
- Member: View/manage assigned feedback only
- Viewer: Read-only access to feedback
- Public: Can submit feedback via widget only

DATA ACCESS:
- Feedback isolated by company account
- Public roadmap shows approved items only
- Voters can see their own votes
- Internal notes hidden from public
- Deleted feedback kept for 60 days

LIMITS:
- Free: 100 feedback items/month, 1 project
- Starter: 1,000 feedback items/month, 3 projects
- Growth: 10,000 feedback items/month, 10 projects
- Trial: 30 days of Growth features

WORKFLOWS:
- New feedback triggers email to assignee
- Status changes notify original submitter
- Duplicate feedback merged automatically
- Spam detection blocks suspicious entries
- Weekly digest emails on Mondays

SECURITY:
- Widget submissions rate-limited: 10/hour per IP
- Email verification required for voting
- Private feedback requires authentication
- API rate limit: 1000 requests/hour
- Export limited to account owners

BUSINESS LOGIC:
- Sentiment scored: Positive/Neutral/Negative
- Priority = (votes × recency × account_tier)
- Feedback older than 1 year archives
- Roadmap items sorted by vote count
- Response time SLA: 24hrs for paid accounts
```

## Common Business Rules to Consider

### Access Control
- Who can see what?
- Who can edit what?
- Who can delete what?
- How is data isolated?

### Limits & Quotas
- Storage limits
- User limits
- Feature limits
- API rate limits
- Trial limitations

### Workflows
- Approval processes
- Notification triggers
- Automated actions
- Status transitions
- Email rules

### Data Retention
- How long to keep data?
- Soft delete vs hard delete?
- Backup policies
- Archive rules

### Compliance
- GDPR requirements
- Data export rights
- Audit trails
- Age restrictions

## Tips for Writing Business Rules

### BE SPECIFIC
Instead of: "Admins have more permissions"
Write: "Admins can delete projects, regular users cannot"

### THINK EDGE CASES
- What if a user is in multiple organizations?
- What if the last admin leaves?
- What happens at plan limits?

### CONSIDER GROWTH
- Rules that work for 10 users might break at 1000
- Plan for scalability
- Consider future features

### SECURITY FIRST
- Default to restrictive
- Explicitly grant permissions
- Log important actions

## Using Business Rules

The AI will:
1. Read your business rules
2. Implement them in the code
3. Create proper security checks
4. Set up the right database structure
5. Ensure rules are enforced everywhere

You can always update rules as you learn more about your users' needs! 