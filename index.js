const currentAge = 27; // years
console.log('current age:', currentAge, 'years');
const cigarettesADay = 10;
console.log('cigarettes/day:', cigarettesADay);
const smokingDuration = 5; // years
console.log('smoking duration:', smokingDuration, 'years');
const nonSmokerLifespan = 80; // years
/**
 * 
 * @param {number} cigADay 
 * @param {number} duration in years
 * @returns {number}
 */
function totalCigarettesInDuration(cigADay, duration) {
    return cigADay * duration * 365;
}

/**
 * 
 * @param {number} totalCigs 
 * @returns {int} years lost
 */
function totalTimeLostDueToSmoking(totalCigs) {
    // According to some studies, smoking one cigarette can
    // reduce lifespan by about 11 minutes on average
    const minutesLost = totalCigs * 11;
    return minutesLost / 60 / 24 / 365;
}

const x = 27.8;
let lifeleft = nonSmokerLifespan - currentAge;

// smoking
if (true) {
    lifeleft -= totalTimeLostDueToSmoking(totalCigarettesInDuration(cigarettesADay, smokingDuration));
}
console.log('life left:', lifeleft, 'years');

// if continue smoking
for (let age = currentAge; age < nonSmokerLifespan; age++) {
    console.log('life left after age', age, ':', lifeleft, '\t non-smoker will live:', nonSmokerLifespan - age);
    lifeleft -= 1 + totalTimeLostDueToSmoking(totalCigarettesInDuration(cigarettesADay, 1));
    if (lifeleft <= 0) {
        break;
    }
}

// plot graph of non-smoker vs smoker


