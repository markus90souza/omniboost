import { EmailTemplate } from '@/components/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API)

export async function POST() {
  try {
    const data: never[] = []

    return Response.json(data)
  } catch (error) {
    return Response.json({ error })
  }
}
