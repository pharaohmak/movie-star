// Validation for the number inputs. 
// Can NOT be left blank and they CAN only accept positive values. 

document.querySelector("#rank-btn").addEventListener("click", function (e) {
    let dvds = parseInt(document.querySelector("#dvds").value)
    let blueRays = parseInt(document.querySelector("#blue-rays").value)
    let ultraViolets = parseInt(document.querySelector("#ultra-violets").value)

    movies = dvds + blueRays + ultraViolets

    if (movies < 50) {
        document.querySelector("#rank-result").innerHTML = `Your collection contains only ${movies} movies, which makes you a bronze star member.`
        document.querySelector("#rank-img").src = "/img/bronzeStar.jpg"
    } else if (movies > 50 && movies < 100) {
        document.querySelector("#rank-result").innerHTML = `Your collection contains ${movies} movies, which makes you a silver star member.`
        document.querySelector("#rank-img").src = "/img/silverStar.jpg"

    } else if (movies > 100) {
        document.querySelector("#rank-result").innerHTML = `Wow! Your collection contains ${movies} movies, which makes you a gold star member.`
        document.querySelector("#rank-img").src = "/img/goldStar.jpg"

    } else {

    }
})
