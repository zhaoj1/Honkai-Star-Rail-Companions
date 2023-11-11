export default function CharacterList({character, createAssetUrl}) {
  const {name, additions, attributes, element, level, light_cone, path, portrait, rank_icons, relic_sets, relics, skills } = character 
  return (
    <div className="flex justify-center items-center flex-col">
      <div>
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
      </div>
    </div>
  )
}