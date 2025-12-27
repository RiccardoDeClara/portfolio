'use server'

import { sendMail, validateInputs } from '@/lib/email-transporter'

export async function sendContactEmail(formData: FormData) {
  const email = formData.get('email') as string
  const name = formData.get('name') as string
  const contents = formData.get('message') as string // Changed from 'contents' to 'message' to match form

  try {
    await validateInputs({ email, contents, name })
    const info = await sendMail({ email, contents, name })

    if (info && typeof info === 'object' && 'error' in info && info.error) {
      return { success: false, message: info.error.message || 'Failed to send email' }
    }

    let messageId = 'sent';
    if (info && 'data' in info && info.data?.id) {
      messageId = info.data.id;
    } else if (info && 'messageId' in info) {
      messageId = (info as { messageId: string }).messageId;
    }

    return { success: true, messageId }
  } catch (reason) {
    const message =
      reason instanceof Error ? reason.message : 'Unexpected exception'

    return { success: false, message }
  }
}