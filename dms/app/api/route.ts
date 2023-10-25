import { dbQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        sql: "SELECT id, content, title FROM Documents", 
        values:[]
        
    })
    return NextResponse.json(result)
    
}

export async function POST(req: Request, res: Response) {
    const body = await req.json()
    const {content, createdAt, title}=body
    const result = await dbQuery({
        sql: `INSERT INTO Documents (content, createdAt, title) VALUES (?, ?, ?)`, 
        values:[content, createdAt, title]
        
    })
    return NextResponse.json(result, {status:200})
}


