const exerciseList = [
    "Push-ups (3 sets of 10 reps)",
    "Bodyweight Squats (3 sets of 12 reps)",
    "Sit-ups (3 sets of 15 reps)",
    "Lunges (each leg) (3 sets of 10 reps)",
    "Plank (3 sets of 20-30 seconds)",
    "Jumping Jacks (3 sets of 15-20 reps)",
    "Leg Raises (3 sets of 10 reps)",
    "Wall Sits (3 sets of 20-30 seconds)",
    "Arm Circles (3 sets of 15-20 reps)",
    "Superman (3 sets of 10 reps)",
    "Tricep Dips (3 sets of 10 reps)",
    "Mountain Climbers (3 sets of 15-20 reps)",
    "Bicycle Crunches (3 sets of 10 reps)",
    "Burpees (3 sets of 5-10 reps)",
    "Russian Twists (3 sets of 10 reps)",
    "High Knees (3 sets of 15-20 reps)",
    "Shoulder Taps (3 sets of 10 reps)",
    "Inchworms (3 sets of 5-10 reps)",
    "Bird Dogs (3 sets of 10 reps)",
    "Box Jumps (3 sets of 5-10 reps)",
    "Squats with Dumbbells (3 sets of 10 reps)",
    "Plank Leg Lifts (3 sets of 12 reps per leg)",
    "Step-Ups (3 sets of 12 reps per leg)",
    "Jumping Lunges (3 sets of 12 reps per leg)",
    "Diamond Push-ups (3 sets of 10 reps)",
    "Russian Twists with a Medicine Ball (3 sets of 10 reps)",
    "Side Plank (3 sets of 15-20 seconds per side)",
    "Knee Push-ups (3 sets of 10-15 reps)",
    "Crunches with a Twist (3 sets of 12 reps per side)",
    "Calf Raises (3 sets of 15-20 reps)",
    "Flutter Kicks (3 sets of 20 reps per leg)",
    "Chair Dips (3 sets of 10-15 reps)",
];

const stepChallengeList = [
    "6,000 steps",
    "7,000 steps",
    "8,000 steps",
    "9,000 steps",
    "10,000 steps",
    // Add more step goals here
];

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function createDailyChallenge() {
    const stepsChallenge = getRandomElement(stepChallengeList);
    const exercise1 = getRandomElement(exerciseList);
    let exercise2 = getRandomElement(exerciseList);
    while (exercise2 === exercise1) {
        exercise2 = getRandomElement(exerciseList);
    }

    const challengeText = `Take <u>${stepsChallenge}</u> <br> do <u>${exercise1}</u> <br>and <u>${exercise2}</u>`;
    

    // Store the challenge in localStorage
    localStorage.setItem('dailyChallenge', challengeText);

    return challengeText;
}

const challengeText = document.getElementById('challenge-text');
const generateChallengeButton = document.getElementById('generate-challenge');

generateChallengeButton.addEventListener('click', () => {
    const challenge = createDailyChallenge();
    challengeText.innerHTML = challenge; // Use innerHTML instead of textContent
});


document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the challenge from localStorage and display it
    const storedChallenge = localStorage.getItem('dailyChallenge');
    if (storedChallenge) {
        challengeText.innerHTML = storedChallenge;
    }
});
