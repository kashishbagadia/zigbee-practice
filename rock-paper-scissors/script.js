const handOptions = {
    "rock": "assets/Rock.png",
    "paper": "assets/Paper.png",
    "scissors": "assets/Scissors.png"
  }

const pickUserHand = (hand) => {
    let hands = document.querySelector(".hands");
    hands.style.display = "none";

    let contest = document.querySelector(".contest");
    contest.style.display = "flex";

    // if (hand == "rock"){
    //     document.getElementById("userPickImage").src = "assets/Rock.png"
    // }
    
    document.getElementById("userPickImage").src = handOptions[hand];

    let cpHand = pickComputerHand();

}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"]
    let cpHand = hands[Math.floor(Math.random() * 3)]

    document.getElementById("computerPickImage").src = handOptions[cpHand];

    return cpHand;
}

const referee = (userHand, cpHand) => {
    if (userHand == "paper" && cpHand=="scissors"){
        setDecision("YOU LOSE!")
    } else if (userHand == "paper" && cpHand=="rock"){
        setDecision("YOU WIN!")
    }
}

const setDecision = (decision) => {
    console.log(decision);
}

const setScore = (score) => {
    console.log(score)
}
