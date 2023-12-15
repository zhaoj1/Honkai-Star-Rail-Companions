import Image from 'next/image'

export default function Player({ player, createAssetUrl }) {
  const {nickname, uid, level, avatar} = player
  return (
    <div className="flex justify-center items-center">
      <div className="h-20 aspect-square m-4 bg-light-grey rounded-full border-2 border-white-500 relative">
        <Image
          src={createAssetUrl(avatar.icon)}
          fill={true}
          alt={avatar.name}
        />
      </div>
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          {nickname}
        </span>
        <div className="flex flex-col m-4">
          <span>
            UID{uid}
          </span>
          <span>
            Lv. {level} 
          </span>
        </div>
      </div>
    </div>
  )
}