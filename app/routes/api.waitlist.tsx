import { json } from '@remix-run/node';
import { kv } from '@vercel/kv';

interface WaitlistResponse {
  success?: boolean;
  error?: string;
}

export async function action({ request }: { request: Request }) {
  if (request.method !== 'POST') {
    return json<WaitlistResponse>({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const formData = await request.formData();
    const email = formData.get('email')?.toString();
    const name = formData.get('name')?.toString();

    if (!email || !name) {
      return json<WaitlistResponse>({ error: 'Email and name are required' }, { status: 400 });
    }

    // Store in Vercel KV
    const timestamp = new Date().toISOString();
    await kv.hset(`waitlist:${email}`, {
      email,
      name,
      timestamp,
    });

    return json<WaitlistResponse>({ success: true });
  } catch (error) {
    console.error('Waitlist error:', error);
    return json<WaitlistResponse>({ error: 'Failed to join waitlist' }, { status: 500 });
  }
}
