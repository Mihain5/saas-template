# PRD (Product Requirements Document) Template Guide

A PRD tells the AI exactly what you want to build. Write it in plain English - no technical knowledge needed!

## Where to Save Your PRD

Create a file called `prd.txt` in the `.taskmaster/docs/` folder.

## PRD Template

Copy and customize this template:

```
PROJECT NAME: [Your SaaS Name]

DESCRIPTION:
[One paragraph explaining what your SaaS does and who it's for]

TARGET USERS:
- [Type of user 1]
- [Type of user 2]
- [etc.]

CORE FEATURES:
1. [Feature 1 - what it does]
2. [Feature 2 - what it does]
3. [Feature 3 - what it does]
4. [etc.]

USER JOURNEY:
1. User signs up/logs in
2. [What happens next]
3. [Step by step through main features]
4. [etc.]

DESIGN PREFERENCES:
- Style: [Modern, minimalist, colorful, corporate, etc.]
- Colors: [Any specific color preferences]
- Feel: [Professional, playful, serious, etc.]

SPECIAL REQUIREMENTS:
- [Any specific needs]
- [Integration requirements]
- [Compliance needs]
- [etc.]

SUCCESS METRICS:
- [How you'll know it's working]
- [What users should be able to do]
```

## Example PRD #1: Task Management SaaS

```
PROJECT NAME: TaskFlow Pro

DESCRIPTION:
TaskFlow Pro is a simple task management system for small teams (5-20 people). Teams can create projects, assign tasks, track progress, and collaborate in real-time. It's designed for creative agencies and small businesses who find Jira too complex.

TARGET USERS:
- Small creative agencies
- Startup teams
- Freelance collaboratives
- Small marketing teams

CORE FEATURES:
1. Project Boards - Kanban-style boards for each project
2. Task Management - Create, assign, and track tasks with due dates
3. Team Chat - Simple chat for each project
4. Time Tracking - Track time spent on each task
5. Client Portal - Clients can view project progress (read-only)
6. Notifications - Email and in-app notifications
7. File Attachments - Attach files to tasks

USER JOURNEY:
1. Team leader signs up and creates organization
2. Invites team members via email
3. Creates first project and sets up boards
4. Team members join and see their dashboard
5. Tasks are created and assigned
6. Team collaborates via comments and chat
7. Client gets special link to view progress

DESIGN PREFERENCES:
- Style: Clean and modern like Linear.app
- Colors: Blue/purple gradient accents
- Feel: Professional but approachable

SPECIAL REQUIREMENTS:
- Mobile responsive is a must
- Real-time updates (no need to refresh)
- File uploads up to 50MB
- Export project data to CSV

SUCCESS METRICS:
- Team can manage 10+ active projects
- Tasks update in real-time for all users
- Clients can view progress without account
- Search works across all projects
```

## Example PRD #2: Customer Feedback SaaS

```
PROJECT NAME: FeedbackHQ

DESCRIPTION:
FeedbackHQ helps SaaS companies collect, organize, and act on customer feedback. It provides widgets for websites, analyzes sentiment, and helps product teams prioritize features based on user requests.

TARGET USERS:
- SaaS product managers
- Customer success teams
- Small to medium software companies
- Product development teams

CORE FEATURES:
1. Feedback Widget - Embeddable widget for any website
2. Feedback Dashboard - See all feedback in one place
3. Sentiment Analysis - Auto-categorize positive/negative feedback
4. Feature Voting - Users can vote on feature requests
5. Roadmap Display - Public roadmap based on feedback
6. Team Assignments - Assign feedback to team members
7. Status Updates - Notify users when their feedback is addressed

USER JOURNEY:
1. Company signs up and gets widget code
2. Installs widget on their website
3. End users submit feedback via widget
4. Feedback appears in dashboard with sentiment
5. Team reviews and categorizes feedback
6. Popular requests become roadmap items
7. Users get notified of progress

DESIGN PREFERENCES:
- Style: Similar to Canny or ProductBoard
- Colors: Green primary color (trust/growth)
- Feel: Clean and data-focused

SPECIAL REQUIREMENTS:
- Widget must load fast (under 100kb)
- Support multiple languages
- API for custom integrations
- Weekly email summaries

SUCCESS METRICS:
- Widget loads in under 1 second
- Can handle 10,000+ feedback items
- Sentiment analysis is 80%+ accurate
- Email notifications deliver reliably
```

## Tips for Writing Your PRD

### DO:
- ✅ Be specific about what users can do
- ✅ Describe the user journey step-by-step
- ✅ Mention any apps/sites you want it to be like
- ✅ List all the features you want
- ✅ Explain who will use it and why

### DON'T:
- ❌ Use technical jargon
- ❌ Worry about how it will be built
- ❌ Design the database (AI will handle that)
- ❌ Specify technologies (unless you have preferences)
- ❌ Make it too long (2-3 pages maximum)

## What Happens Next?

1. Save your PRD as `prd.txt` in `.taskmaster/docs/`
2. The AI will read it and create a task list
3. You'll review the tasks together
4. AI builds your SaaS feature by feature
5. You test and provide feedback

## Need Ideas?

If you're stuck, start with these questions:
- What problem does it solve?
- Who has this problem?
- How do they solve it now?
- What would make their life easier?
- What similar apps do they use?

Remember: You can always update your PRD as you learn more about what you want! 