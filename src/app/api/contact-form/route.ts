import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function buildEmailHTML(data: {
  name: string;
  email: string;
  budget: string;
  phone: string;
  description: string;
  nda: boolean;
  sms: boolean;
  submittedAt: string;
}) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>New Contact Form Submission – ZynTech Labs</title>
</head>
<body style="margin:0;padding:0;background:#070b16;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070b16;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="620" cellpadding="0" cellspacing="0" style="background:#14141c;border-radius:20px;overflow:hidden;border:1px solid #1e2d4a;">
          <tr>
            <td style="background:linear-gradient(135deg,#0d1b38,#091525);padding:32px 36px;border-bottom:1px solid #1e2d4a;">
              <p style="margin:0;font-size:11px;font-family:monospace;color:#2dd4bf;letter-spacing:2px;text-transform:uppercase;">ZynTech Labs</p>
              <h1 style="margin:8px 0 0;font-size:22px;font-weight:900;color:#ffffff;">Turn Vision Into Reality — New Inquiry</h1>
              <p style="margin:6px 0 0;font-size:13px;color:#94a3b8;">A new enquiry was submitted via the Contact Us form.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:32px 36px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr><td style="padding-bottom:16px;">
                  <p style="margin:0 0 4px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Full Name</p>
                  <p style="margin:0;font-size:16px;font-weight:700;color:#f1f5f9;">${data.name}</p>
                </td></tr>
                <tr><td style="padding-bottom:16px;">
                  <p style="margin:0 0 4px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Work Email</p>
                  <a href="mailto:${data.email}" style="margin:0;font-size:15px;font-weight:600;color:#2dd4bf;text-decoration:none;">${data.email}</a>
                </td></tr>
                <tr><td>
                  <table width="100%" cellpadding="0" cellspacing="0"><tr>
                    <td style="padding-bottom:16px;padding-right:12px;width:50%;">
                      <p style="margin:0 0 4px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Budget</p>
                      <span style="display:inline-block;background:#0f2020;border:1px solid #14532d;color:#4ade80;font-size:12px;font-weight:700;padding:4px 12px;border-radius:20px;">${data.budget}</span>
                    </td>
                    <td style="padding-bottom:16px;width:50%;">
                      <p style="margin:0 0 4px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Contact Number</p>
                      <p style="margin:0;font-size:15px;font-weight:600;color:#f1f5f9;">${data.phone}</p>
                    </td>
                  </tr></table>
                </td></tr>
              </table>
              <div style="background:#070b16;border:1px solid #1e2d4a;border-left:3px solid #2dd4bf;border-radius:12px;padding:20px 24px;margin-bottom:28px;">
                <p style="margin:0 0 10px;font-size:10px;font-family:monospace;color:#64748b;letter-spacing:1px;text-transform:uppercase;">Project Description</p>
                <p style="margin:0;font-size:14px;color:#cbd5e1;line-height:1.7;white-space:pre-wrap;">${data.description}</p>
              </div>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:8px;font-size:13px;color:#94a3b8;">
                    ${data.nda ? '✅' : '❌'} Requested NDA before project kick-off
                  </td>
                </tr>
                <tr>
                  <td style="font-size:13px;color:#94a3b8;">
                    ${data.sms ? '✅' : '❌'} Opted in to receive SMS / WhatsApp updates
                  </td>
                </tr>
              </table>
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr><td align="center" style="padding-bottom:24px;">
                  <a href="mailto:${data.email}?subject=RE: Your Enquiry – ZynTech Labs"
                     style="display:inline-block;background:linear-gradient(135deg,#2dd4bf,#06b6d4);color:#000000;font-weight:800;font-size:14px;padding:14px 32px;border-radius:12px;text-decoration:none;">
                    ↩ Reply to ${data.name}
                  </a>
                </td></tr>
              </table>
              <p style="margin:0;font-size:11px;color:#475569;font-family:monospace;text-align:center;">Submitted: ${data.submittedAt}</p>
            </td>
          </tr>
          <tr>
            <td style="background:#070b16;border-top:1px solid #1e2d4a;padding:20px 36px;text-align:center;">
              <p style="margin:0;font-size:11px;color:#475569;">Auto-generated by <strong style="color:#2dd4bf;">ZynTech Labs</strong> · <a href="https://zyntechlabs.io" style="color:#475569;">zyntechlabs.io</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildAutoReplyHTML(name: string) {
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1.0"/></head>
<body style="margin:0;padding:0;background:#070b16;font-family:'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#070b16;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#14141c;border-radius:20px;overflow:hidden;border:1px solid #1e2d4a;">
        <tr>
          <td style="background:linear-gradient(135deg,#0d1b38,#091525);padding:32px 36px;text-align:center;border-bottom:1px solid #1e2d4a;">
            <p style="margin:0 0 8px;font-size:11px;font-family:monospace;color:#2dd4bf;letter-spacing:2px;text-transform:uppercase;">ZynTech Labs</p>
            <h1 style="margin:0;font-size:24px;font-weight:900;color:#ffffff;">Turn Vision Into Reality</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:36px;">
            <p style="margin:0 0 16px;font-size:15px;color:#cbd5e1;">Hi <strong style="color:#ffffff;">${name}</strong>,</p>
            <p style="margin:0 0 16px;font-size:14px;color:#94a3b8;line-height:1.7;">Thank you for reaching out to <strong style="color:#2dd4bf;">ZynTech Labs</strong>. Our experts will get in touch with you shortly to listen to your vision and objectives with full attention.</p>
            <p style="margin:0 0 28px;font-size:14px;color:#94a3b8;line-height:1.7;">Professional consultation and an implementation strategy will be provided for you.</p>
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr><td align="center">
                <a href="https://zyntechlabs.io" style="display:inline-block;background:linear-gradient(135deg,#2dd4bf,#06b6d4);color:#000;font-weight:800;font-size:13px;padding:13px 28px;border-radius:12px;text-decoration:none;">Explore Our Work →</a>
              </td></tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:#070b16;border-top:1px solid #1e2d4a;padding:18px 36px;text-align:center;">
            <p style="margin:0;font-size:11px;color:#475569;">© ${new Date().getFullYear()} ZynTech Labs · <a href="https://zyntechlabs.io" style="color:#2dd4bf;text-decoration:none;">zyntechlabs.io</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const name = formData.get('name')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const budget = formData.get('budget')?.toString() || '';
    const phone = formData.get('phone')?.toString() || '';
    const description = formData.get('description')?.toString() || '';
    const nda = formData.get('nda')?.toString() === 'true';
    const sms = formData.get('sms')?.toString() === 'true';
    const file = formData.get('file') as File | null;

    if (!name || !email || !phone || !budget || !description) {
      return NextResponse.json({ error: 'Please fill in all required fields.' }, { status: 400 });
    }

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'full',
      timeStyle: 'short',
    });

    const toEmail = process.env.CONTACT_TO_EMAIL || 'jerryaitech17@gmail.com';
    const resend = new Resend(process.env.RESEND_API_KEY);

    const attachments =
      file && file.size > 0
        ? [
            {
              filename: file.name,
              content: Buffer.from(await file.arrayBuffer()),
            },
          ]
        : undefined;

    await resend.emails.send({
      from: 'ZynTech Labs <onboarding@resend.dev>',
      to: [toEmail],
      replyTo: email,
      subject: `📩 New Contact Form Submission from ${name}`,
      html: buildEmailHTML({ name, email, budget, phone, description, nda, sms, submittedAt }),
      attachments,
    });

    await resend.emails.send({
      from: 'ZynTech Labs <onboarding@resend.dev>',
      to: [email],
      subject: `We received your request, ${name}! – ZynTech Labs`,
      html: buildAutoReplyHTML(name),
    });

    return NextResponse.json({
      success: true,
      message: 'Your request has been sent successfully.',
    });
  } catch (error) {
    console.error('Contact Form API Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please email us directly at sales@zyntechlabs.io' },
      { status: 500 }
    );
  }
}
