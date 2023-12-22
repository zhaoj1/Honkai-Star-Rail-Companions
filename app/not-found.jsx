import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex items-center flex-col relative bg-dark-grey/[0.6] p-5 rounded-lg gap-4">
        <h1 className="text-center text-8xl">
          404
        </h1>
        <div className="text-center text-lg">
          Sorry, we could not find what you were looking for.
        </div>
        <Link className="text-blue-500 underline" href="/">Return Home</Link>
      </div>
    </div>
  )
}