
var personOne = document.getElementById("P1-Vote");
var personOnePersentages = document.getElementById('P1-VotePersent');
var personOneVote = parseFloat(personOne.innerText);


var personTwo = document.getElementById('P2-Vote');
var personTwoPersentages = document.getElementById('P2-VotePersent');
var personTwoVote = parseFloat(personTwo.innerText);

var totalVoat = personOneVote + personTwoVote
var PersonOnePersentage = Math.round((personOneVote / totalVoat) * 100);
  personOnePersentages.innerText = PersonOnePersentage;

var PersonTwoPersentage = Math.round((personTwoVote / totalVoat) * 100);
  personTwoPersentages.innerText = PersonTwoPersentage;

function vote() {
  var UpdatepersonOneVote = personOneVote + 1;
  personOne.innerText = UpdatepersonOneVote;
}



function persantageCount() {


}


