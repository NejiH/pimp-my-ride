//let tripToParse = "Perdita 8 10 8"
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
    }
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

/*function getTripsPrice(voyages) {
    let totalPrice = 0
    for (let i = 0; i < voyages.length; i++) {
        totalPrice += parseInt(voyages[i].prix)
    }

    return totalPrice
}*/

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

//console.log(checkCompatibility(listeVoyages[0], listeVoyages[1]))

function findCompatibilities(trips) {
    const compatibilites = []
    for (let i = 0; i < trips.length; i++) {
        compatibilites.push([trips[i]])
        for (let j = 0; j < trips.length; j++) {
            if (checkCompatibility(trips[i], trips[j])) {
                compatibilites.push([trips[i], trips[j]])

            }
        }
    }
    return compatibilites
}

let resultatsCompatibles = findCompatibilities(listeVoyages)
//console.log(resultatsCompatibles)

function findBestPrice(trips) {
    let prixMax = 0;
    let prixActuel = 0;
    let client = [];
    let topClient = [];
    let message;

    for (let i = 0; i < trips.length; i++) {
        if (trips[i].length === 2) {
            prixActuel = parseInt(trips[i][0].prix) + parseInt(trips[i][1].prix)
            client = [trips[i][0].client, trips[i][1].client]
        } else {
            prixActuel = parseInt(trips[i][0].prix)
            client = [trips[i][0].client]
        }
        if (prixActuel > prixMax) {
            prixMax = prixActuel
            topClient = client
            if (trips[i].length === 2) {
                message = `Le vol le plus rentable est ${topClient[0]} - ${topClient[1]} : ${prixMax} euros`
            } else {
                message = `Le vol le plus rentable est ${topClient[0]} : ${prixMax} euros`

            }

        }
    }
    return message
}
let finalPrice = findBestPrice(resultatsCompatibles)
console.log(finalPrice)