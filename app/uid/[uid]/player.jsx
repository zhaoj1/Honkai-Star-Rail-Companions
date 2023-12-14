export default function Player({ player, createAssetUrl }) {
  const {nickname, uid, level, avatar} = player
  return (
    <div className="flex justify-center items-center">
      <img className="h-20 m-4 bg-light-grey rounded-full border-2 border-white-500" src={createAssetUrl(avatar.icon)} />
      <div className="flex items-center">
        <span className="text-2xl font-bold">
          {player.nickname}
        </span>
        <div className="flex flex-col m-4">
          <span>
            UID{player.uid}
          </span>
          <span>
            Lv. {player.level} 
          </span>
        </div>
      </div>
    </div>
  )
}