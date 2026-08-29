import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, industry, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    console.log('Discovery Call Request received:', {
      name,
      email,
      company,
      industry,
      budget,
      message,
      submittedAt: new Date().toISOString(),
    });

    // Here you can hook up Resend, Sendgrid, Slack Webhook, or CRM
    return NextResponse.json({
      success: true,
      message: 'Discovery inquiry received successfully. Our team will contact you within 24 hours.',
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing contact submission.' },
      { status: 500 }
    );
  }
}
