import Image from 'next/image'

export default function CharacterList({characters, createAssetUrl, currentChar, setCurrentChar}) {
    return (
      <div className="flex justify-center items-center h-20">
        {characters.map((char) => 
          <div className={`hover:bg-selected-gold hover:cursor-pointer rounded-lg ${char.id == currentChar ? "bg-selected-gold" : null} p-1 m-2 h-full aspect-square`} onClick={() => setCurrentChar(char.id)} key={"character-list" + char.name}>
            <div className={`h-full rounded-lg bg-gradient-to-bl ${char.rarity == 4 ? "from-4star-dark" : "from-5star-dark"} ${char.rarity == 4 ? "to-4star-light" : "to-5star-light"}`}>
              <div className="h-full rounded-lg relative">
                <Image
                  src={createAssetUrl(char.icon)}
                  fill={true}
                  alt={char.name}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    )
}