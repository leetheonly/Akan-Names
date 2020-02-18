function akanName() {
    var dd = parseInt(document.getElementById("DD").value);
    var mm = parseInt(document.getElementById("MM").value);
    var yy = parseInt(document.getElementById("YY").value);
    var femaleGender = document.getElementById("femaleGender");
    var maleGender = document.getElementById("maleGender");
    var date = new Date(yy + "-" + mm + "-" + dd);
    var dayBorn = date.getDay();
    var maleNames = [ "Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    if (dd < 1 || dd > 31) {
      alert("Enter a valid day!");
    }
    if (mm < 1 || mm > 12) {
      alert("Enter valid month");
    }
  
    if (yy.toString().length !== 4) {
      alert("Enter a valid year");
    } else if (maleGender.checked) {
      alert(
        "Your day of birth is, " +
          daysOfTheWeek[dayBorn] +
          " and your Akan name is " +
          maleNames[dayBorn]); 
    } else {
      alert(
        "Your day of birth is, " +
          daysOfTheWeek[dayBorn] +
          " and your Akan name is " +
          femaleNames[dayBorn]);
    }
  }
  