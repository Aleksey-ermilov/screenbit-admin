export function parseCharacteristics (characteristics) {
    let charCategories = []
    let char = []
    characteristics.forEach((item,i) => {
        const id = i
        charCategories.push({title: item[0], id})
        item[1].forEach((thing,index) => {
            char.push({title: thing[0],value: thing[1],category: id, id: `${id}${index}`})
        })
    })
    return { charCategories, char}
}

export function backParseCharacteristics (charCategories, char) {
    const characterist = charCategories.map(thing => {
        const charact = char.filter(item => item.category === thing.id).map(item => [item.title,item.value] )
        return [thing.title, charact]
    })
    return { characterist }
}