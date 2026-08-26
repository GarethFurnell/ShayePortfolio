import { ImageResponse } from 'next/og'
import { promises as fs } from 'fs'
import path from 'path'

// Route segment config
export const runtime = 'nodejs'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default async function Icon() {
  const imagePath = path.join(process.cwd(), 'src/app/original-icon.jpeg')
  const imageData = await fs.readFile(imagePath)
  const base64Image = imageData.toString('base64')
  
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          overflow: 'hidden',
          background: 'white',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`data:image/jpeg;base64,${base64Image}`}
          alt="icon"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
