import { dbQuery } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request,{ params }: { params: { id: any } }) {
    const { id } = params;
    const result = await dbQuery({
        sql: "SELECT id, content, title FROM Documents WHERE id=?", 
        values:[id]
        
    })
    console.log("getById: ",result);
    
    return NextResponse.json(result)
    
}

export async function DELETE(req: Request,{ params }: { params: { id: number } }) {
    const { id } = params;
    const result = await dbQuery({
        sql: "DELETE FROM Documents WHERE id = ?", 
        values:[id]
        
    })
    return NextResponse.json(result)
    
}

export async function PATCH(req: Request,{ params }: { params: { id: number } }) {
    const { id } = params;
    const body = await req.json();
  const { content, title, lastUpdated } = body;
    const result = await dbQuery({
        sql: "UPDATE Documents SET content= ?,title=?, lastUpdated=? WHERE id=?",
        values:[content, title, lastUpdated,id]
    })
    return NextResponse.json(result)
}