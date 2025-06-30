import { readFileSync } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const content = readFileSync(
    path.join(process.cwd(), '.curriculum/student-materials/lesson_zero_reference.md'),
    'utf8'
  )
  return new NextResponse(content)
}