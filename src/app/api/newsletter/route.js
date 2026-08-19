import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    console.log('[Codesoftic Newsletter Subscription]:', {
      timestamp: new Date().toISOString(),
      email: email.trim(),
    });

    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to the Codesoftic Intelligence digest.',
    });
  } catch (error) {
    console.error('Newsletter API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error processing subscription.' },
      { status: 500 }
    );
  }
}
