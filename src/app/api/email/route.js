import { NextResponse } from 'next/server';

import nodemailer from 'nodemailer';

export async function POST(request) {

  console.log('Request body:', request);

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
    subject: `Message recieved by Harry Hurst`,
    text: `Hi ${name}, I have recieved your message:\n\n "${message}" \n\n I will get back to you at: ${email}`,
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