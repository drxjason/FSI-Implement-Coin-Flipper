// TODO: Declare any global variables we need

let headsRolls = 0
let tailsRolls = 0
let totalRolls = 0

document.addEventListener('DOMContentLoaded', function () {
    // Implement Flipped coin mechanism

    document.getElementById('flip').addEventListener('click', () => {
        let flippedHeads = Math.random() < 0.5

        if (flippedHeads) {
            document.getElementById('penny-picture').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = "Flipped Heads"

            headsRolls++
            totalRolls++
        }

        else {
            document.getElementById('penny-picture').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = "Flipped Tails"

            tailsRolls++
            totalRolls++
        }

        let headsPercent = Math.round((headsRolls / totalRolls) * 100)
        let tailsPercent = Math.round((tailsRolls / totalRolls) * 100)

        document.getElementById('heads-percent').textContent = `${headsPercent}%`
        document.getElementById('tails-percent').textContent = `${tailsPercent}%`

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('tails').textContent = tailsRolls

        console.log(totalRolls)
    })

    // Reset all variables to 0 and set message to default

    document.getElementById('clear').addEventListener('click', () => {
        headsRolls = 0
        tailsRolls = 0
        totalRolls = 0
        let headsPercent = 0
        let tailsPercent = 0

        document.getElementById('heads').textContent = headsRolls
        document.getElementById('tails').textContent = tailsRolls
        document.getElementById('heads-percent').textContent = `${headsPercent}%`
        document.getElementById('tails-percent').textContent = `${tailsPercent}%`
        document.getElementById('message').textContent = "Lets Get Rolling!"
    })
})