'use server'

import { sendMail, validateInputs } from '@/lib/email-transporter'

export async function sendContactEmail(formData: FormData) {
  const email = formData.get('email') as string
  const firstName = formData.get('firstName') as string
  const lastName = formData.get('lastName') as string
  const phone = formData.get('phone') as string
  const company = formData.get('company') as string
  const contents = formData.get('message') as string

  try {
    await validateInputs({ email, contents, firstName, lastName, phone, company })
    const info = await sendMail({ email, contents, firstName, lastName, phone, company })

    if (info && typeof info === 'object' && 'error' in info && info.error) {
      return { success: false, message: info.error.message || 'Failed to send email' }
    }

    let messageId = 'sent';
    const infoAny = info as any;

    if (infoAny && infoAny.data && infoAny.data.id) {
      messageId = infoAny.data.id;
    } else if (infoAny && infoAny.messageId) {
      messageId = infoAny.messageId;
    }

    return { success: true, messageId }
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return { success: false, message }
  }
}