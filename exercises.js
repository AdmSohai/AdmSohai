function loadExcercises(){
    document.getElementById('btn1').addEventListener('click', function() {
        workoutText.innerHTML = `
          <h3>Day 1 (Monday): Upper-Body Strength Training</h3>
          <ul>
            <li>Warm-Up: 5-10 minutes of jogging in place or jumping jacks</li>
            <li>Upper Body Strength Training (3 sets of 12-15 reps):</li>
            <ul>
              <li>Push-Ups</li>
              <li>Pike Push-Ups</li>
              <li>Tricep Dips</li>
              <li>Jump Pull-Ups</li>
              <li>Planks</li>
              <li>Diamond Push-Ups</li>
            </ul>
            <li>Cool Down: Stretching for lower body.</li>
          </ul>
        `;
      });
    
      document.getElementById('btn2').addEventListener('click', function() {
        workoutText.innerHTML =  `
          <h3>Day 2 (Tuesday): Zone 3 Run + HIIT</h3>
          <ul>
            <li>Warm-Up: 5-10 minutes of dynamic stretching</li>
            <li>Zone 3 Run: 30 minutes of running at moderate intensity (Zone 3 heart rate)</li>
            <li>Exercises (3 sets of 12-15 reps - TABATA):</li>
            <ul>
              <li>Push-Ups</li>
              <li>Tricep Dips</li>
              <li>Plank</li>
              <li>Flutter Kicks</li>
              <li>Bodyweight Squats</li>
              <li>Lunge Jumps</li>
              <li>Crunches</li>
              <li>Knee Push-Ups</li>
            </ul>
            <li>Cool Down: Stretching for upper body and core.</li>
          </ul>
        `;
      });
    
      document.getElementById('btn3').addEventListener('click', function() {
        workoutText.innerHTML = `
          <h3>Day 3 (Wednesday): Core Strength Training</h3>
          <ul>
            <li>Warm-Up: 5-10 minutes of light cardio</li>
            <li>Core Strength Training (3 sets of 12-15 reps):</li>
            <ul>
              <li>Push-Up Plank</li>
              <li>Regular Plank</li>
              <li>Bicycle Kicks</li>
              <li>Flutter Kicks</li>
              <li>Leg Raises</li>
              <li>Crunches</li>
              <li>Push-Ups</li>
              <li>Mountain Climbers</li>
            </ul>
            <li>Cool Down: Stretching for upper body and core.</li>
          </ul>
        `;
      });
    
      document.getElementById('btn4').addEventListener('click', function() {
        workoutText.innerHTML = `
          <h3>Day 4 (Thursday): Interval Runs + HIIT</h3>
          <ul>
            <li>5-10 minutes of light jogging or dynamic stretching</li>
            <li>Interval Runs: 5 sets of 2-minute high-intensity runs with 2 minutes of rest. </li>
            <li>Exercises (3 sets of 12-15 reps - TABATA):</li>
            <ul>
              <li>Push-Ups</li>
              <li>Tricep Dips</li>
              <li>Plank</li>
              <li>Flutter Kicks</li>
              <li>Bodyweight Squats</li>
              <li>Lunge Jumps</li>
              <li>Crunches</li>
              <li>Knee Push-Ups</li>
            </ul>
            <li>Cool Down: Stretching for upper body and core.</li>
        `;
      });
    
      document.getElementById('btn5').addEventListener('click', function() {
        workoutText.innerHTML = `
          <h3>Day 5 (Friday): Lower Body Strength Training</h3>
          <ul>
            <li>Warm-Up: 5-10 minutes of light cardio</li>
            <li>Lower Body Strength Training (3 sets of 12-15 reps):</li>
            <ul>
              <li>Wall Sits (hold for 30-60 seconds)</li>
              <li>Bodyweight Squats</li>
              <li>Calf Raises</li>
              <li>Side Lunges</li>
              <li>Reverse Lunges</li>
              <li>Bicycle Kicks</li>
            </ul>
            <li>Cool Down: Stretching for lower body.</li>
          </ul>
        `;
      });    
      
      document.getElementById('btn6').addEventListener('click', function() {
        workoutText.innerHTML = `
          <h3>Gym Day: Replace non-running day</h3>
          <ul>
            <li>Warm-Up: 5-10 minutes of light cardio</li>
            <li>Exercises (3 sets of 8 reps - FAILURE):</li>
            <ul>
              <li>Lat Pulldown</li>
              <li>Seated Rows</li>
              <li>Shoulder Press</li>
              <li>Chest Press</li>
              <li>Bicep Curls</li>
              <li>Tricep Curls</li>
              <li>Lateral Raises</li>
              <li>Forearm Curls</li>
            </ul>
            <li>Cool Down: Stretching for upper body and core.</li>
          </ul>
        `;
      });
}
