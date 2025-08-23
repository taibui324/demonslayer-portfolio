/**
 * Webhook Handler for Resend MCP Email Integration
 * 
 * This script can be deployed as a serverless function or webhook endpoint
 * to handle contact form submissions and send emails via Resend MCP.
 * 
 * Deploy this to:
 * - Vercel Functions
 * - Netlify Functions  
 * - AWS Lambda
 * - Or any webhook service
 */

// Example webhook handler (pseudo-code for deployment)
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, project, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Prepare email content
    const emailSubject = `🌊 New Mission Request from ${name} - ${project || 'General Inquiry'}`;
    
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: #ffffff; border-radius: 12px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(90deg, #3b82f6 0%, #06b6d4 100%); padding: 24px; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">⚔️ New Mission Request ⚔️</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.9;">Water Hashira Developer Portfolio</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 32px 24px;">
          <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 8px; padding: 20px; margin-bottom: 24px;">
            <h2 style="margin: 0 0 16px 0; color: #60a5fa; font-size: 18px;">👤 Contact Information</h2>
            <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></p>
            <p style="margin: 8px 0;"><strong>Project Type:</strong> ${project || 'Not specified'}</p>
          </div>
          
          <div style="background: rgba(6, 182, 212, 0.1); border: 1px solid rgba(6, 182, 212, 0.2); border-radius: 8px; padding: 20px;">
            <h2 style="margin: 0 0 16px 0; color: #22d3ee; font-size: 18px;">📋 Mission Details</h2>
            <div style="background: rgba(0, 0, 0, 0.2); border-radius: 6px; padding: 16px; white-space: pre-wrap; line-height: 1.6;">${message}</div>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background: rgba(0, 0, 0, 0.2); padding: 20px 24px; text-align: center; border-top: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            🌊 Sent from your Demon Slayer Portfolio Contact Form<br/>
            <span style="font-size: 12px;">Time: ${new Date().toLocaleString()}</span>
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Mission Request from ${name}

Contact Information:
- Name: ${name}
- Email: ${email}
- Project Type: ${project || 'Not specified'}

Mission Details:
${message}

---
Sent from your Demon Slayer Portfolio Contact Form
Time: ${new Date().toLocaleString()}
    `;

    // Here you would call the Resend MCP or use Resend API directly
    // For MCP environments, use the MCP call
    // For serverless functions, use Resend SDK

    console.log('Email would be sent:', {
      to: 'taibui324@gmail.com',
      from: 'onboarding@resend.dev',
      subject: emailSubject,
      html: emailHtml,
      text: emailText
    });

    // Return success response
    return res.status(200).json({
      success: true,
      message: '🔥 Mission request deployed successfully! Response incoming within 24 hours.',
      emailId: `email_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(500).json({
      error: '⚡ Thunder Breathing failed! Please try again or contact directly via email.'
    });
  }
}

// Instructions for deployment:
// 1. Deploy this as a Vercel Function at /api/webhook-contact
// 2. Update the contact form to POST to this endpoint
// 3. Add Resend API key to environment variables
// 4. Use Resend SDK instead of MCP in production
