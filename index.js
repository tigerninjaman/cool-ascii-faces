var spigot = require("stream-spigot")

var faces = [
  "Oui oui",
    "k",
    "GovCo is so far",
    "linguistics is so cool",
    "French guys are so hot",
    "Sorry I have rehearsal",
    "Sorry I'm at rehearsal",
    "I had me a boy turned into a man",
    "SymSys",
    "Paris",
    "Baguette",
    "oui",
    "Hey, fuck you, buddy",
    "*wink*",
    "It's snowing!!",
    "I have a performance that night",
    "TAPS stands for 'The Awesomest Part Of Stanford'",
    "Sops on top!",
    "Come drink chamomile tea and read checkhov with me",
    "Anyone else auditioning for the show this quarter?"
]

module.exports = function() {
  return faces[Math.floor(Math.random() * faces.length)]
}

module.exports.faces = faces

module.exports.faceStream = function() {
  return spigot(faces)
}
