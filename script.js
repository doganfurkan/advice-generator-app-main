async function getAdvice() {
  document.querySelector("#buttonContainer button").classList.add("loading")
  await fetch("https://api.adviceslip.com/advice",{ cache: "no-cache" })
    .then((adv) => adv.json())
    .then((advice) => {
      document.getElementById("adviceId").innerHTML = advice.slip.id;
      document.getElementById("advice").innerHTML = `"${advice.slip.advice}"`;
      document.querySelector("#buttonContainer button").classList.remove("loading")
    });
}
