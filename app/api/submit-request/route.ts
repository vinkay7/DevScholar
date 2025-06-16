import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, projectType, description, deadline } = body

    // Validate required fields
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter using Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER || 'devscholar19@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD || 'anwb btzb enel bwtv',
      },
    })

    // Prepare email content
    const emailSubject = `New Project Request: ${projectType} - ${name}`
    const emailText = `
New Project Request Details:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Project Type: ${projectType}
Deadline: ${deadline || 'Not specified'}

Project Description:
${description}

---
This request was submitted through Dev Scholar website.
You can reply directly to the client at: ${email}
    `

    const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #0c1425; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; color: #f4d03f;">New Project Request</h1>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #0c1425; margin-top: 0; border-bottom: 2px solid #f4d03f; padding-bottom: 10px;">
          ${projectType} Request from ${name}
        </h2>
        
        <div style="margin: 20px 0;">
          <div style="display: grid; grid-template-columns: 120px 1fr; gap: 15px; margin-bottom: 20px;">
            <div style="font-weight: bold; color: #0c1425;">Name:</div>
            <div>${name}</div>
            
            <div style="font-weight: bold; color: #0c1425;">Email:</div>
            <div><a href="mailto:${email}" style="color: #f4d03f; text-decoration: none;">${email}</a></div>
            
            <div style="font-weight: bold; color: #0c1425;">Phone:</div>
            <div>${phone || 'Not provided'}</div>
            
            <div style="font-weight: bold; color: #0c1425;">Project Type:</div>
            <div style="background-color: #f4d03f; color: #0c1425; padding: 4px 8px; border-radius: 4px; display: inline-block; font-weight: bold;">${projectType}</div>
            
            <div style="font-weight: bold; color: #0c1425;">Deadline:</div>
            <div>${deadline || 'Not specified'}</div>
          </div>
        </div>
        
        <div style="margin: 25px 0;">
          <h3 style="color: #0c1425; margin-bottom: 10px;">Project Description:</h3>
          <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #f4d03f; border-radius: 4px; line-height: 1.6;">
            ${description.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 6px; border: 1px solid #e9ecef;">
          <p style="margin: 0; color: #6c757d; font-size: 14px;">
            <strong>Next Steps:</strong><br>
            • Reply directly to this email to communicate with ${name}<br>
            • Review the project requirements and prepare a detailed quote<br>
            • Expected response time: Within 24 hours
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
        <p>This request was submitted through Dev Scholar website</p>
      </div>
    </div>
    `

    // Send email to dev scholar
    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'devscholar19@gmail.com',
      to: process.env.GMAIL_USER || 'devscholar19@gmail.com',
      replyTo: email, // Allow direct replies to the client
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    })

    // Send confirmation email to client
    const clientConfirmationHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: #0c1425; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; color: #f4d03f;">Project Request Received</h1>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #0c1425; margin-top: 0;">Hi ${name},</h2>
        
        <p style="line-height: 1.6; color: #333;">
          Thank you for submitting your project request! We have received your ${projectType.toLowerCase()} project details and our team is reviewing your requirements.
        </p>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid #f4d03f;">
          <h3 style="margin-top: 0; color: #0c1425;">Your Request Summary:</h3>
          <p style="margin: 5px 0;"><strong>Project Type:</strong> ${projectType}</p>
          <p style="margin: 5px 0;"><strong>Deadline:</strong> ${deadline || 'To be discussed'}</p>
          <p style="margin: 5px 0;"><strong>Description:</strong> ${description.substring(0, 100)}${description.length > 100 ? '...' : ''}</p>
        </div>
        
        <div style="background-color: #28a745; color: white; padding: 15px; border-radius: 6px; margin: 25px 0;">
          <h3 style="margin: 0 0 10px 0;">✅ What happens next?</h3>
          <ul style="margin: 0; padding-left: 20px;">
            <li>We'll review your project requirements</li>
            <li>You'll receive a detailed quote within 24 hours</li>
            <li>Once approved, we'll begin work immediately</li>
          </ul>
        </div>
        
        <p style="line-height: 1.6; color: #333;">
          If you have any urgent questions or need to add more details to your request, please reply to this email or contact us directly.
        </p>
        
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #6c757d; margin: 0;">
            <strong>Dev Scholar Team</strong><br>
            Email: ${process.env.GMAIL_USER || 'devscholar19@gmail.com'}<br>
            Phone: +234 912 450 3785
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6c757d; font-size: 12px;">
        <p>© ${new Date().getFullYear()} Dev Scholar. All rights reserved.</p>
      </div>
    </div>
    `

    await transporter.sendMail({
      from: process.env.GMAIL_USER || 'devscholar19@gmail.com',
      to: email,
      subject: 'Project Request Received - Dev Scholar',
      html: clientConfirmationHtml,
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Project request submitted successfully! You will receive a confirmation email shortly.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error submitting project request:', error)
    return NextResponse.json(
      { error: 'Failed to submit project request. Please try again.' },
      { status: 500 }
    )
  }
}