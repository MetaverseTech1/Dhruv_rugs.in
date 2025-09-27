// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const { name, email, phone, message } = await request.json();

//     // Basic validation
//     if (!name || !email || !message) {
//       return NextResponse.json(
//         { error: 'Name, email, and message are required' }, 
//         { status: 400 }
//       );
//     }

//     // Google Sheets Web App URL - Replace with your actual URL
//     const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';

//     // Send to Google Sheets
//     const response = await fetch(GOOGLE_SHEETS_URL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         name,
//         email,
//         phone: phone || '',
//         message,
//         timestamp: new Date().toISOString()
//       }),
//     });

//     if (!response.ok) {
//       throw new Error('Failed to submit to Google Sheets');
//     }

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error('Contact form error:', error);
//     return NextResponse.json(
//       { error: 'Failed to send message. Please try again.' }, 
//       { status: 500 }
//     );
//   }
// }
