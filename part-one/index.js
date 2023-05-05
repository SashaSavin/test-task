const inputEl = document.querySelector("input")
const buttonEl = document.querySelector("button")
const timerEl = document.querySelector("span")

const createTimerAnimator = () => {
  return (seconds) => {
    let hours, minutes, remainingSeconds
    setInterval(() => {
      if (seconds > 0) {
        seconds--
        hours = Math.floor(seconds / 3600)
        minutes = Math.floor((seconds % 3600) / 60)
        remainingSeconds = seconds % 60
        timerEl.textContent = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
      }
    }, 1000)
  }
}

const animateTimer = createTimerAnimator()

inputEl.addEventListener("input", () => {
  const cleanedValue = inputEl.value.replace(/[^\d]/g, "").trim()
  inputEl.value = cleanedValue
})

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value)
  animateTimer(seconds)
  inputEl.value = ""
})
