import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, projectType, budget, message } = req.body;

  if (!name || !email || !projectType || !budget || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;

  // Graceful fallback for local development if the API key is not yet set
  if (!RESEND_API_KEY) {
    console.log("=== Lead Capture (Development Mode - No Resend Key) ===");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Project Type: ${projectType}`);
    console.log(`Budget: ${budget}`);
    console.log(`Message: ${message}`);
    console.log("======================================================");

    // Return a mocked success for smooth user testing
    return res.status(200).json({
      success: true,
      message: "Lead captured successfully (Development Mode). Please set RESEND_API_KEY in .env.local for live emails!",
    });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LycanWeb Lead <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "ganesh.tomar.dev@gmail.com",
        subject: `🐺 New Lycan Lead: ${name} (${projectType})`,
        html: `
          <div style="background-color: #000; color: #fff; padding: 30px; font-family: sans-serif; border-radius: 12px; border: 1px solid #222;">
            <h2 style="color: #8b5cf6; border-bottom: 1px solid #222; padding-bottom: 10px; margin-top: 0;">🐺 NEW LEAD BluePrint</h2>
            <p style="margin: 15px 0;"><strong>Name:</strong> <span style="color: #ddd;">${name}</span></p>
            <p style="margin: 15px 0;"><strong>Email:</strong> <span style="color: #ddd;"><a href="mailto:${email}" style="color: #a78bfa; text-decoration: none;">${email}</a></span></p>
            <p style="margin: 15px 0;"><strong>Project Type:</strong> <span style="color: #ddd;">${projectType}</span></p>
            <p style="margin: 15px 0;"><strong>Budget:</strong> <span style="color: #ddd; font-weight: bold;">${budget}</span></p>
            <div style="margin: 20px 0; background-color: #0b0b0c; border: 1px solid #111; padding: 15px; border-radius: 8px;">
              <strong style="color: #8b5cf6; display: block; margin-bottom: 8px;">Message Payload:</strong>
              <p style="color: #aaa; margin: 0; line-height: 1.5; white-space: pre-wrap;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #555; margin-top: 30px; border-top: 1px solid #111; padding-top: 15px; text-align: center;">
              LycanWeb Lead Engine — Powered securely by Resend
            </p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API failed:", errorText);
      return res.status(response.status).json({ error: "Failed to send email through Resend API" });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error in lead send API:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
