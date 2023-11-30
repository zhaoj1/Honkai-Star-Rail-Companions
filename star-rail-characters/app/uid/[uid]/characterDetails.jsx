import SkillTrace from './skillTrace.jsx'
import Image from 'next/image'

export default function CharacterList({character, createAssetUrl}) {
  const {name, additions, attributes, attribute_totals, element, level, light_cone, path, portrait, rank, rank_icons, relic_sets, relic_sets_data, relics, skills } = character 
  const roman = { 1: "I" , 2: "II", 3: "III", 4: "IV", 5: "V" }
  const skills_type_top = [ "Basic ATK", "Ultimate", "Talent" ]
  const skills_type_bot = [ "Skill", "Technique" ]

  return (
    <div className="flex justify-center items-center">
      {console.log(character)}
      <div className='h-card w-full m-4 rounded-lg p-7 flex justify-between bg-card-bg'>
        <div className="pr-2 w-1/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-4xl">
                {name}
              </div>
              <div className="text-sm">
                Lv. {level}
              </div>
              <div className="flex items-center">
                <img className="w-10 mr-2 mt-2" src={createAssetUrl(path.icon)} /> {path.name}
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-20" src={createAssetUrl(element.icon)} />
            </div>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col items-center w-12">
              <img src={createAssetUrl(light_cone.portrait)} />
              <img className="scale-150 pt-1" src={createAssetUrl("/icon/deco/Rarity" + light_cone.rarity + ".png")} />
            </div>
            <div className="flex flex-col pl-2">
              <span>
                {light_cone.name}
              </span>
              <span className="flex items-center">
                Lv. {light_cone.level} 
                <span className="bg-5star-light rounded-full w-2 h-2 flex justify-center items-center p-2 ml-3 text-xs">
                  {roman[light_cone.rank]}
                </span>
              </span>
              <div className="flex">
                {light_cone.attributes.map((att, index) => 
                  <span key={"attribute-" + index} className="text-sm flex items-center pr-1">
                    <img className="h-7" src={createAssetUrl(att.icon)} /> {att.display}
                  </span>
                  )}
              </div>
            </div>
          </div>
          <div className="z-10 relative mt-10">
            <div className="flex justify-between">
              {skills_type_top.map(type =>
                <div key={"skill-" + type} className="w-1/3">
                  <SkillTrace skill={skills[type]} createAssetUrl={createAssetUrl} type={type} />
                </div>
              )}
            </div>
            <div className="flex justify-between">
              {skills_type_bot.map(type =>
                <div key={"skill-" + type} className="w-1/3">
                  <SkillTrace skill={skills[type]} createAssetUrl={createAssetUrl} type={type} />
                </div>
              )}
            </div>
          </div>
          <div>
            <img className="-translate-y-60 absolute opacity-20" src={createAssetUrl(path.icon)} />
          </div>
        </div>
        <div>
          <img src={createAssetUrl(portrait)} className='h-img w-img' />
          <div className="flex justify-center" >
            <div className='flex flex-row w-rank'>
              {rank_icons.map(((icon, index) => 
                <div key={"eidolon-" + index} className="h-11 w-11 rounded-full border border-white-500 p-1 m-1">
                  <img className="h-9 w-9" src={createAssetUrl(icon)} />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className='flex flex-row-reverse relative bottom-12 w-rank'>
              {rank_icons.slice(rank, 6).map((index => 
                <div key={"eidolon-lock-" + index} className="h-11 w-11 flex flex-row justify-center items-center bg-slate-900/70 rounded-full mx-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-1/4 bg-dark-grey/[0.6] p-2 pr-3 rounded-md">
          {Object.keys(attribute_totals).map(att =>
            <div className="flex justify-between" key={"totals-" + attribute_totals[att].name}>
              <div className="flex flex-row items-center">
                <img className="h-12" src={createAssetUrl(attribute_totals[att].icon)} />
                <span className="pl-1">
                  {attribute_totals[att].name}
                </span>
              </div>
              <div className="flex flex-col justify-center items-end">
                <span className="font-semibold">
                  {attribute_totals[att].percent ? 
                    attribute_totals[att].name == "Energy Regeneration Rate" ?
                      ((attribute_totals[att].value + 1) * 100).toFixed(1) + "%"
                      :
                      (attribute_totals[att].value * 100).toFixed(1) + "%"
                    :
                    Math.floor(attribute_totals[att].value)
                  }
                </span>
                <span className="text-sm">
                  {attributes.find(e => e.field == att)?.display}
                  {additions.find(e => e.field == att)? 
                    <span className="text-light-blue" >
                      {"+" + additions.find(e => e.field == att).display}
                    </span>
                    : null}
                </span>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/5">
          relics
        </div>
      </div>
    </div>
  )
}