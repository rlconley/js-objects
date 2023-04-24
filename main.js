let dazedNConfused = []
// array to represent the band

let leadGuitar = {
    name: 'Teddy',
    favoriteFood: 'lobster',
    instruments: ['guitar', 'glockenspiel', 'digeridoo']
}

let bass = {
    name: 'Meagan',
    favoriteFood: 'potatoes',
    instruments: ['bass guitar', 'fiddle']
}

let drums = {
    name: 'Q',
    favoriteFood: "McD's",
    instruments: ['drum kit', 'table']
}

dazedNConfused.push(leadGuitar)
dazedNConfused.push(bass)
dazedNConfused.push(drums)

let desiredData = 'name'

for (let member of dazedNConfused) {
    console.log(member.name)
    // we can access the values for attributes of the object using dot notation OR
    console.log(member[desiredData])
    // bracket notation
}

