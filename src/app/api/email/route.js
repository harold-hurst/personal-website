import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request) {

  console.log('Received request to send email');
  console.log('Request body:', request.body);

  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'harry.hurst3855@gmail.com',
      pass: 'dpqd ftcc jfqa ysvw',
    },
  });

  const mailOptions = {
    from: 'harry.hurst3855@gmail.com',
    to: 'harry.hurst3855@gmail.com',
    cc: email, // Uncomment to send a copy to the sender
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve('Email sent');
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}