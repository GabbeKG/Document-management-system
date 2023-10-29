import { dbQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request,{ params }: { params: { id: any } }) {
    const { id } = params;
    const result = await dbQuery({
        sql: "SELECT content FROM Documents WHERE id=?", 
        values:[id]
        
    })
    console.log("getById: ",result);
    
    return NextResponse.json(result)
    
}