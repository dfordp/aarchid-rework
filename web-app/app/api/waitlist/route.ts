import { db } from '@/lib/db'
import { waitlist } from '@/lib/schema'
import { NextRequest, NextResponse } from 'next/server'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, role } = body

    if (!email || !role) {
      return NextResponse.json(
        { error: 'Email and role are required' },
        { status: 400 }
      )
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Valid email required' },
        { status: 400 }
      )
    }

    try {
      await db.insert(waitlist).values({
        email,
        role,
      })

      return NextResponse.json(
        { message: 'Successfully joined waitlist' },
        { status: 201 }
      )
    } catch (dbError: unknown) {
      if (dbError instanceof Error) {
        if (
          dbError.message.includes('unique constraint') ||
          (dbError as any).code === '23505'
        ) {
          return NextResponse.json(
            { error: 'Already on the waitlist' },
            { status: 409 }
          )
        }
      }

      console.error('Database error:', dbError)
      return NextResponse.json(
        { error: 'Something went wrong' },
        { status: 500 }
      )
    }
  } catch (error: unknown) {
    console.error('Request error:', error)
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    )
  }
}
