import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="bg-cover text-white bg-gradient-radial from-dark-blue from-50% to-dark-purple h-full flex items-center justify-center">
      <Image
        src="https://raw.githubusercontent.com/Mar-7th/StarRailRes/master/icon/logo/bg.png"
        fill={true}
        alt="star-rail"
        className="opacity-10 absolute object-contain"
      />
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