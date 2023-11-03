function getCurrentDate() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // Get only the date part (YYYY-MM-DD)
}

function getLastVisitDate() {
  return localStorage.getItem('lastVisitDate');
}

function setLastVisitDate() {
  const currentDate = getCurrentDate();
  localStorage.setItem('lastVisitDate', currentDate);
  return currentDate;
}

function hasDateChanged() {
  const lastVisitDate = getLastVisitDate();
  const currentDate = getCurrentDate();
  return lastVisitDate !== currentDate;
}

function pressButtonIfDateChanged() {
  if (hasDateChanged()) {
    const generateChallengeButton = document.getElementById('generate-challenge');
    if (generateChallengeButton) {
      generateChallengeButton.click();
    }
    setLastVisitDate();
  }
}

window.addEventListener('load', pressButtonIfDateChanged);