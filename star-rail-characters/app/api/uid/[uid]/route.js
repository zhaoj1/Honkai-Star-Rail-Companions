import { NextResponse } from 'next/server'

export async function GET(request, {params}) {
  const uid = params.uid
  const res = await fetch(`https://api.mihomo.me/sr_info_parsed/${uid}?lang=en`)
  const data = await res.json()

  const skills_type_list = [ "Basic ATK", "Ultimate", "Talent", "Skill", "Technique" ]

  for(const char of data.characters){
    var attribute_totals = {}
    char.attributes.map((att) => {
      attribute_totals[att.field] = {value: att.value, percent: att.percent, name: att.name, icon: att.icon}
    })
    char.additions.map((att) => {
      attribute_totals[att.field] ? 
        attribute_totals[att.field].value += att.value
        : 
        attribute_totals[att.field] = {value: att.value, percent: att.percent, name: att.name, icon: att.icon}
    })

    var skills_data = new Map()
    for(const type of skills_type_list){
      skills_data.set(type, char.skills.filter(skill => skill.type_text == type))
    }

    var relic_sets_data = new Map()
    for(const relic_set of char.relic_sets){
      relic_sets_data.set(relic_set.id, relic_set.num)
    }

    char.attribute_totals = attribute_totals
    char.skills = Object.fromEntries(skills_data.entries())
    char.relic_sets_data = Object.fromEntries(relic_sets_data.entries())
  }

  data.skills_type_list = skills_type_list
  
  return NextResponse.json(data)
}
