import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    // Server-side validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { error: 'Please provide a valid full name (minimum 2 characters).' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid business email address.' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { error: 'Please provide a descriptive project scope (minimum 10 characters).' },
        { status: 400 }
      );
    }

    // In a production environment, send to CRM / Email dispatcher (e.g. Resend, SendGrid, HubSpot)
    console.log('[Codesoftic Antigravity Lead Received]:', {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim(),
      company: company?.trim() || 'N/A',
      service: service || 'Website Design',
      budget: budget || 'Not Specified',
      message: message.trim(),
    });

    // Simulated short async delay for realism
    await new Promise((resolve) => setTimeout(resolve, 600));

    return NextResponse.json({
      success: true,
      message: 'Your briefing has been received. Our team will contact you within 4 hours.',
      inquiryId: `CS-${Date.now().toString(36).toUpperCase()}`,
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing your request. Please try again or email us directly.' },
      { status: 500 }
    );
  }
}
