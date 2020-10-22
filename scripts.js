const utterance = new SpeechSynthesisUtterance();

utterance.text = "Bem vindo ao falatron 2000";
utterance.rate = 2;

function speak() {
  speechSynthesis.speak(utterance);
}
function stop() {
  speechSynthesis.cancel();
}
function setText(event) {
  utterance.text = event.target.innerText;
}