export default function SkillTrace({ skill, createAssetUrl, type }) {
  const {icon, level, type_text} = skill[0]
  return (
    <div className={`flex flex-col items-center ${type == "Ultimate"?"translate-y-14":null}`}>
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