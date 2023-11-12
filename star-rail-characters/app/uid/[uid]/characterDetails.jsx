export default function CharacterList({character, createAssetUrl}) {
  const {name, additions, attributes, element, level, light_cone, path, portrait, rank, rank_icons, relic_sets, relics, skills } = character 
  return (
    <div className="flex justify-center items-center">
      <div className='h-card w-full m-4 bg-dark-blue rounded-lg p-4'>
        <img src={createAssetUrl(portrait)} className='h-img' />
        <div className='flex flex-row w-rank'>
          {rank_icons.map((icon => 
            <div className="h-11 w-11 rounded-full border border-white-500 p-1 m-1">
              <img className="h-9 w-9" src={createAssetUrl(icon)} />
            </div>
          ))}
        </div>
        <div className='flex flex-row-reverse relative bottom-12 w-rank'>
          {rank_icons.slice(rank, 6).map((icon => 
            <div className="h-11 w-11 flex flex-row justify-center items-center bg-slate-900/70 rounded-full mx-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        {name}
      </div>
      <div>
        Lv. {level}
      </div>
      <div>
        {additions.map((ele => ele.field))}
      </div>
      <div>
        {attributes.map((ele => ele.field))}
      </div>
      <div className="flex flex-row">
        <img className="h-20" src={createAssetUrl(element.icon)} />
        <img className="h-20" src={createAssetUrl(light_cone.icon)} />
        <img className="h-20" src={createAssetUrl(path.icon)} />
        <img className="h-20" src={createAssetUrl(portrait)} />
      </div>
      <div className="flex flex-row">
        {rank_icons.map((icon => <img className="h-20" src={createAssetUrl(icon)} />))}
      </div>
      <div className="flex flex-row">
        {relic_sets.map((set => <img className="h-20" src={createAssetUrl(set.icon)} />))}
      </div>
      <div className="flex flex-row">
        {relics.map((relic => <img className="h-20" src={createAssetUrl(relic.icon)} />))}
      </div>
      <div className="flex flex-row">
        {skills.map((skill => <img className="h-20" src={createAssetUrl(skill.icon)} />))}
      </div> */}
    </div>
  )
}