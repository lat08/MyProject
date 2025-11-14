// Next.js API route example
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ 
      message: 'Hello from Next.js API!',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    })
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ message: `Method ${req.method} not allowed` })
  }
}

