export default function SkillTrace({ skill, createAssetUrl, type }) {
  const {icon, level, type_text, desc} = skill[0]
  return (
    <div className={`group flex flex-col items-center relative ${type == "Ultimate"?"translate-y-14 z-[5]":null}`}>
      {console.log(skill)}
      <span className="flex flex-col gap-3 absolute scale-0 translate-x-56 bg-dark-grey/[0.95] z-10 p-2 rounded-md text-s text-white text-sm w-96 group-hover:scale-100">{
        skill.map(s => 
          <div key={"trace-" + s.name} className="flex flex-col text-sm">
            <span className="mb-1 text-light-blue">
              {s.name}
            </span>
            <span>
              {s.desc}
            </span>
          </div>
        )
      }</span>
      <img className="bg-medium-grey rounded-full p-1 w-14 h-14 border border-white"  src={createAssetUrl(icon)} />
      <div className="bg-dark-grey rounded-full p-1 w-6 h-6 flex justify-center items-center -translate-y-3 border border-white">
        {level}
      </div>
      <div className="-translate-y-3">
        {type_text}
      </div>
    </div>
  )
}