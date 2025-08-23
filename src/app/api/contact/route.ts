import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { isValidEmail, sanitizeInput } from '@/lib/resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    let { name, email, project, message } = body;

    // Sanitize inputs
    name = sanitizeInput(name || '');
    email = sanitizeInput(email || '');
    project = sanitizeInput(project || '');
    message = sanitizeInput(message || '');

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email validation
    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
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

    // Send email using Resend API
    try {
      const emailResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'taibui324@gmail.com',
        subject: emailSubject,
        html: emailHtml,
        text: emailText,
      });

      console.log('✅ Email sent successfully via Resend API:', {
        emailId: emailResult.data?.id,
        recipient: 'taibui324@gmail.com',
        subject: emailSubject
      });

      return NextResponse.json(
        { 
          success: true, 
          message: '🔥 Mission request deployed successfully! Response incoming within 24 hours.',
          emailId: emailResult.data?.id || `email_${Date.now()}`
        },
        { status: 200 }
      );

    } catch (emailError) {
      console.error('❌ Resend API error:', emailError);
      return NextResponse.json(
        { error: '📧 Email delivery failed. Please contact directly via taibui324@gmail.com' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: '⚡ Thunder Breathing failed! Please try again or contact directly via email.' },
      { status: 500 }
    );
  }
}
