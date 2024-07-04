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


function parseTrips(trips) {
    const tableau = []
    for (let i = 0; i < tripsToParse.length; i++) {
        let lignevol = parseTrip(trips[i])
        tableau.push(lignevol)
    }
    return tableau
}


// function getTripsPrice(voyages) {
//     let totalPrice = 0
//     for (let i = 0; i < voyages.length; i++) {
//         totalPrice += parseInt(voyages[i].prix)
//     }
//     return totalPrice
// }


let listeVoyages = parseTrips(tripsToParse)


function checkCompatibility(tripA, tripB) {
    let arriveeA = parseInt(tripA.depart) + parseInt(tripA.duree)
    if (arriveeA < parseInt(tripB.depart)) {
        return true
    } else {
        return false
    }
}


function findCompatibilities(trips){
    const compatibilites = []
    for (let i = 0; i < trips.length; i++){
        compatibilites.push([trips[i]])
        for (let j = 0; j < trips.length; j++){
            if (checkCompatibility(trips[i], trips[j])){
                compatibilites.push([trips[i], trips[j]])
            }
        }
    }
    return compatibilites
}

let resultatCompatible = findCompatibilities(listeVoyages)


function findBestPrice(trips){
    let prixMax = 0
    let prix = 0
    let message
    for (let i = 0; i < trips.length; i++){
        if (trips[i].length === 2){
            prix = parseInt(trips[i][0].prix) + parseInt(trips[i][1].prix)
        }
        else {
            prix = parseInt(trips[i][0].prix)
        }
        if (prix > prixMax){
            prixMax = prix
            if (trips[i].length === 2){
                message = `Le voyage le plus rentable est '${trips[i][0].client}-${trips[i][1].client}' : ${prixMax} euros.`
            }
            else {
                message = `Le voyage le plus rentable est '${trips[i][0].client}' : ${prixMax} euros.`
            }   
        }
    }
    return message
}

let meilleurPrix = findBestPrice(resultatCompatible)
console.log(meilleurPrix)