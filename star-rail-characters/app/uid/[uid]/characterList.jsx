export default function CharacterList({characters, createAssetUrl, currentChar, setCurrentChar}) {
    return (
      <div className="flex justify-center items-center">
        {characters.map((char) => 
          <div className={`rounded-lg ${char.id == currentChar ? "bg-selected-gold" : null} p-1 m-2`} onClick={() => setCurrentChar(char.id)} key={"character-list" + char.name}>
            <div className={`rounded-lg bg-gradient-to-bl ${char.rarity == 4 ? "from-4star-dark" : "from-5star-dark"} ${char.rarity == 4 ? "to-4star-light" : "to-5star-light"}`}>
              <img className="rounded-lg" src={createAssetUrl(char.icon)} />
            </div>
          </div>
        )}
      </div>
    )
}