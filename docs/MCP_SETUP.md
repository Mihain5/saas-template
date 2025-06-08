# MCP (Model Context Protocol) Setup Guide

This guide will help you configure all the AI tools that power your no-code SaaS builder.

## What is MCP?

MCP tools allow AI to perform actions on your behalf, like:
- Managing your project tasks
- Creating database tables
- Setting up user authentication
- Deploying your code
- And much more!

## Step-by-Step MCP Configuration

### 1. Locate the MCP Configuration File

1. In Cursor, look for the `.cursor` folder
2. Open the file called `mcp.json`
3. You'll see a template with placeholders for API keys

### 2. Get Your API Keys

You'll need to sign up for these services and get API keys:

#### Task Master AI Keys
- **Anthropic API Key**: Sign up at [anthropic.com](https://anthropic.com)
- **OpenAI API Key**: Sign up at [openai.com](https://openai.com)
- **Perplexity API Key** (Optional): For enhanced research features

#### Service API Keys
- **Supabase Access Token**: Get from your Supabase account settings
- **Clerk Secret Key**: Get from your Clerk dashboard
- **GitHub Token**: Create a personal access token in GitHub settings

### 3. Add Your API Keys

Replace the placeholder text in `mcp.json` with your actual API keys:

1. Find text like `[YOUR_ANTHROPIC_API_KEY]`
2. Replace it with your actual key (keep the quotes)
3. Do this for all services

### 4. Save and Restart

1. Save the `mcp.json` file
2. Completely close Cursor
3. Open Cursor again
4. Your MCP tools are now ready!

## How to Know It's Working

When you restart Cursor and open your project:
- You should see no error messages
- The AI will be able to use tools when you ask
- You can test by asking: "Check Task Master status"

## Security Note

⚠️ **Important**: Never share your `mcp.json` file or commit it to GitHub. It contains sensitive API keys!

## Troubleshooting

If MCP tools aren't working:

1. **Check your API keys**: Make sure they're correct and active
2. **Verify JSON format**: Ensure no syntax errors in `mcp.json`
3. **Restart Cursor**: Always restart after changing MCP configuration
4. **Check service status**: Make sure all services are active

## Next Steps

Once MCP is configured, you can proceed to create your service accounts for Supabase, Clerk, and Vercel. 
