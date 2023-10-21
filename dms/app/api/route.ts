import { dbQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, res: Response) {
    const result = await dbQuery({
        sql: "SELECT * FROM Documents", 
        values:[]
        
    })
    return NextResponse.json(result)
    
}


