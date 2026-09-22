'use server';
export interface BookingPayload {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  dogName: string;
  dogBreed: string;
  dogAge: number | string;
  gender: string;
  date: string;
  walkDuration: string;
  timeSlot: string;
  medicalNotes?: string;
}

export async function submitBookingLead(data: BookingPayload) {
  const WEBHOOK_URL = process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

  if (!WEBHOOK_URL) {
    return {
      success: false,
      message: 'Server configuration error: GOOGLE_SCRIPT_WEBHOOK_URL is missing.',
    };
  }

  const payload = {
    'Full Name': data.fullName.trim(),
    'Phone Number': data.phoneNumber.trim(),
    'Email_Id': data.emailAddress.trim(),
    'Address': data.address.trim(),
    'Dog Name': data.dogName.trim(),
    'Dog Breed': data.dogBreed.trim(),
    'Age': data.dogAge,
    'gender': data.gender || 'Not specified',
    'date': data.date || new Date().toISOString().split('T')[0],
    'Walk Duration': data.walkDuration,
    'Time Slot': data.timeSlot,
    'illness': data.medicalNotes?.trim() || 'None',
  };

  try {
    const res = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain;charset=utf-8',
      },
      body: JSON.stringify(payload),
      cache: 'no-store',
    });

    const raw = await res.text();
    let result;
    try {
      result = JSON.parse(raw);
    } catch {
      result = { result: 'success' };
    }

    if (result.result === 'error') {
      throw new Error(result.error || 'Google Script execution error');
    }

    return { success: true };
  } catch (error: unknown) {
    console.error('Lead submission failed:', error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Unable to submit booking. Please try again later.',
    };
  }
}