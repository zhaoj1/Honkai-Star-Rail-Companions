import { NextResponse } from 'next/server'

export async function GET(request, {params}) {
  const uid = params.uid
  const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${uid}?lang=en`)
  const data = await res.json()
  return NextResponse.json(data)
}
