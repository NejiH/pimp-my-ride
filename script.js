let tripToParse = "Perdita 8 10 8"
let tripsToParse = [
    "Roger 0 5 10",
    "Pongo 3 7 14",
    "Perdita 8 10 8",
    "Anita 16 3 7"
]

function parseTrip(trip) {
    const tripSplit = trip.split(' ')
    const vol = { 'client': '', 'depart': '', 'duree': '', 'prix': '' }

    for (let i = 0; i < tripSplit.length; i++) {
        vol[Object.keys(vol)[i]] = tripSplit[i]
        //console.log(tripSplit[i], Object.keys(vol)[i])
    }
    //console.log('vol:', vol)
    return vol
}
// console.log(parseTrip(tripToParse))

function parseTrips(trips) {
    const tableau = []
    for (let i = 0; i < tripsToParse.length; i++) {
        let lignevol = parseTrip(trips[i])
        tableau.push(lignevol)
    }
    return tableau
}

//console.log(parseTrips(tripsToParse))

function getTripsPrice(voyages) {
    let totalPrice = 0
    for (let i = 0; i < voyages.length; i++) {
        totalPrice += parseInt(voyages[i].prix)
    }

    return totalPrice
}

let listeVoyages = parseTrips(tripsToParse)
//console.log(getTripsPrice(listeVoyages))

function checkCompatibility(tripA, tripB) {
    let heureA = parseInt(tripA.depart) + parseInt(tripA.duree)
    if (heureA < parseInt(tripB.depart)) {
        return true
    } else {
        return false
    }

}

console.log(checkCompatibility(listeVoyages[0], listeVoyages[2]))