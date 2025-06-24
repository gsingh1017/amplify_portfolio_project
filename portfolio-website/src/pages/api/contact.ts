import type { NextApiRequest, NextApiResponse } from 'next';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const sesClient = new SESClient({ region: 'ca-central-1' });

// Main handler for POST requests only
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  // Extract form data
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Email parameters for SES
  const params = {
    Source: 'gurnik.singh579@gmail,com',
    Destination: {
      ToAddresses: ['gurnik.singh579@gmail.com'],
    },
    Message: {
      Subject: {
        Data: `New Contact Form Submission from ${name}`,
      },
      Body: {
        Text: {
          Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
      },
    },
  };    

  // Send email using AWS SES
  try {
    const command = new SendEmailCommand(params);
    await sesClient.send(command);
    return res.status(200).json({ message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email.' });
  }
}