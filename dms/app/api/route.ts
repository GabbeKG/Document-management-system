import { dbQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        sql: "SELECT * FROM Documents", 
        values:[]
        
    })
    return NextResponse.json(result)
    
}

export async function POST(req: Request, res: Response) {
    const body = await req.json()
    const {content, createdAt}=body
    const result = await dbQuery({
        sql: `INSERT INTO Documents (content, createdAt) VALUES (?, ?)`, 
        values:[content, createdAt]
        
    })
    return NextResponse.json(result, {status:200})
}


