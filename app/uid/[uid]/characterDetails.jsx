import { html2canvas } from 'html2canvas';
import Image from 'next/image'

import SkillTrace from './skillTrace.jsx'

export default function CharacterList({character, createAssetUrl}) {
  const {name, additions, attributes, attribute_totals, element, level, light_cone, path, portrait, rank, rank_icons, relic_sets, relic_sets_data, relics, skills } = character 
  const roman = { 1: "I" , 2: "II", 3: "III", 4: "IV", 5: "V" }
  const skills_type_top = [ "Basic ATK", "Ultimate", "Talent" ]
  const skills_type_bot = [ "Skill", "Technique" ]

  function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
      link.href = uri;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(uri);
    }
  }

  function download(){
    html2canvas(document.getElementById('char-card'), {
      useCORS: true,
      allowTaint: true,
      backgroundColor: null
    })
    .then(function(canvas) {
      saveAs(canvas.toDataURL(), `${character.name}.png`);
    });
  }

  return (
    <div className="flex justify-center items-center flex-col">
      <div id="char-card" className='w-full m-4 rounded-lg p-7 2xl:flex justify-between bg-card-v 2xl:bg-card-h flex-col 2xl:flex-row 2xl:h-card bg-no-repeat bg-cover grid grid-cols-1 md:grid-cols-2'>
        <div className="pr-2 2xl:w-1/5">
          <div className="flex justify-between mb-6">
            <div>
              <div className="text-4xl">
                {name}
              </div>
              <div className="text-sm">
                Lv. {level}
              </div>
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-2 mt-2">
                  <Image
                    src={createAssetUrl(path.icon)}
                    fill={true}
                    alt="path"
                  />
                </div>
                {path.name}
              </div>
            </div>
            <div className="flex items-center">
              <div className="relative h-20 w-20">
                <Image
                  src={createAssetUrl(element.icon)}
                  fill={true}
                  alt="element"
                />
              </div>
            </div>
          </div>
          <div className="flex my-4">
            <div className="flex flex-col items-center w-12">
              <div className="relative h-full w-full">
                <Image
                  src={createAssetUrl(light_cone.portrait)}
                  fill={true}
                  alt="light_cone"
                />
              </div>
              <div className="relative h-4 w-full pt-1">
                <Image
                  src={createAssetUrl("/icon/deco/Rarity" + light_cone.rarity + ".png")}
                  fill={true}
                  alt="rarity"
                  className="scale-150"
                />
              </div>
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
                    <div className="relative h-7 w-7">
                      <Image
                        src={createAssetUrl(att.icon)}
                        fill={true}
                        alt={att.name}
                      />
                    </div>
                    {att.display}
                  </span>
                  )}
              </div>
            </div>
          </div>
          <div className="z-10 relative mt-5">
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
          <div className="flex justify-center">
            <div className="h-48 w-48 -translate-y-52 absolute opacity-20">
              <Image
                src={createAssetUrl(path.icon)}
                fill={true}
                alt={path.name}
              />
            </div>
          </div>
          <div>
            {Object.keys(relic_sets_data).map(set_id => 
              <div key={"set-" + set_id} className="group flex justify-between text-sm bg-dark-grey/[0.6] rounded-lg px-2 py-1 mb-1">
                <span className="absolute scale-0 translate-x-[19rem] bg-dark-grey/[0.95] z-10 p-3 rounded-md text-s text-white text-sm w-96 flex flex-col gap-4 md:group-hover:scale-100">{relic_sets.filter(set => set.id == set_id).map(set => <span key={set.id + set.num}>{set.desc}</span>)}</span>
                <div>
                  {relic_sets_data[set_id].name}
                </div>
                <div>
                  {relic_sets_data[set_id].num}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>
          <div className="relative w-full 2xl:w-img aspect-square">
            <Image
              src={createAssetUrl(portrait)}
              fill={true}
              alt="portrait"
            />
          </div>
          <div className="flex justify-center w-full" >
            <div className='flex flex-row w-rank'>
              {rank_icons.map(((icon, index) => 
                <div key={"eidolon-" + index} className="group mr-1">
                  {/* need eidolon data
                  <span className="absolute scale-0 translate-x-12 bg-dark-grey/[0.95] z-10 p-2 rounded-md text-s text-white text-sm w-96 md:group-hover:scale-100">ok</span> */}
                  <div className="h-11 w-11 rounded-full border border-white-500 p-1">
                    <img className="h-9 w-9" src={createAssetUrl(icon)} />
                  </div>
                  {index >= rank ? 
                    <div className="h-11 w-11 flex flex-row justify-center items-center bg-slate-900/70 rounded-full -translate-y-11">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                    </div>  
                    :
                    null}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="2xl:w-1/4 bg-dark-grey/[0.6] p-2 pr-3 rounded-md flex flex-col justify-evenly">
          {Object.keys(attribute_totals).map(att =>
            <div className="flex justify-between" key={"totals-" + attribute_totals[att].name}>
              <div className="flex flex-row items-center">
                <div className="h-12 w-12 relative">
                  <Image
                    src={createAssetUrl(attribute_totals[att].icon)}
                    fill={true}
                    alt={attribute_totals[att].name}
                  />
                </div>
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
        <div className="mt-5 md:m-0 2xl:w-1/4 flex flex-col">
          {relics.map(relic =>
            <div key={"relic-" + relic.id} className="flex bg-dark-grey/[0.6] p-2 rounded-lg mb-2 h-full md:ml-5 last:mb-0">
              <div>
                <div className={`rounded-lg bg-gradient-to-bl ${relic.rarity == 4 ? "from-4star-dark" : "from-5star-dark"} ${relic.rarity == 4 ? "to-4star-light" : "to-5star-light"}`}>
                  <div className="h-16 w-16 relative">
                    <Image
                      src={createAssetUrl(relic.icon)}
                      fill={true}
                      alt={relic.name}
                    />
                  </div>
                </div>
                <span className="text-sm bg-dark-grey/[0.6] absolute -translate-y-7 translate-x-8 rounded-lg p-0.5">
                  +{relic.level}
                </span>
              </div>
              <div className="flex justify-between grow">
                <div className='flex flex-col items-center w-1/4 pl-2 text-lg font-semibold'>
                  <div className="h-9 w-9 relative">
                    <Image
                      src={createAssetUrl(relic.main_affix.icon)}
                      fill={true}
                      alt={relic.main_affix.name}
                    />
                  </div>
                  <span>
                    {relic.main_affix.display}
                  </span>
                </div>
                <div className="grid grid-rows-2 grid-flow-col gap-2 pl-2 w-3/4">
                  {relic.sub_affix.map(stat =>
                    <div key={"substat-" + stat.type} className='flex'>
                      <div className="h-6 w-6 relative">
                        <Image
                          src={createAssetUrl(stat.icon)}
                          fill={true}
                          alt={stat.name}
                        />
                      </div>
                      <span>
                        +{stat.display}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <button id="download" className="bg-medium-grey py-1 px-4 rounded-lg text-lg hover:bg-light-grey" onClick={download}>Download</button>
    </div>
  )
}