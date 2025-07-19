import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db/prisma'

export async function GET() {
  try {
    // Test database connection by running a simple query
    await prisma.$queryRaw`SELECT 1`
    
    // Get database information
    const databaseInfo = await prisma.$queryRaw`SELECT current_database()`
    const database = databaseInfo[0].current_database
    
    return NextResponse.json({
      status: 'connected',
      database,
      message: `Successfully connected to ${database} database`
    })
  } catch (error) {
    console.error('Database connection error:', error)
    return NextResponse.json({
      status: 'error',
      message: 'Failed to connect to database',
      error: error instanceof Error ? error.message : String(error)
    }, { status: 500 })
  }
}