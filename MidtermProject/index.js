let squatContainer = document.getElementById("squatContainer");
    fetch("./data.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        writeData(data);
        console.log("success");
      })
      .catch(function (err) {
        console.log('error:' + err);
      })

    function writeData(data) {
      for (let exerciseName in data) {
        console.log(exerciseName)
        for (let element of data[exerciseName]) {
          if(exerciseName == 'Squat'){
            let div = document.getElementById("squatTitle");
            div.innerHTML = `${element['exerciseName']}`
            let div2 = document.getElementById("squatDifficulty");
            div2.innerHTML = `${element["difficulty"]}`;
            let div3 = document.getElementById("squatDescription");
            div3.innerHTML = `${element["shortDescription"]}`;
          }
          else if(exerciseName == 'Bench Press'){
            let div4 = document.getElementById("benchTitle");
            div4.innerHTML = `${element["exerciseName"]}`;
            let div5 = document.getElementById("benchDifficulty");
            div5.innerHTML = `${element["difficulty"]}`;
            let div6 = document.getElementById("benchDescription");
            div6.innerHTML = `${element["shortDescription"]}`;
          }
          else if(exerciseName == 'Deadlift'){
            let div7 = document.getElementById("deadliftTitle");
            div7.innerHTML = `${element["exerciseName"]}`;
            let div8 = document.getElementById("deadliftDifficulty");
            div8.innerHTML = `${element["difficulty"]}`;
            let div9 = document.getElementById("deadliftDescription");
            div9.innerHTML = `${element["shortDescription"]}`;
          }
          else if(exerciseName == 'Bicep Curls'){
            let div10 = document.getElementById("curlTitle");
            div10.innerHTML = `${element["exerciseName"]}`;
            let div11 = document.getElementById("curlDifficulty");
            div11.innerHTML = `${element["difficulty"]}`;
            let div12 = document.getElementById("curlDescription");
            div12.innerHTML = `${element["shortDescription"]}`;
          }
        }
      }
    }