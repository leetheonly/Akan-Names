function output() {
    var day = document.getElementById("day").value ;
var dd = parseInt(day);
var day = [Sunday,Monday,Teusday,Wednesday,Thursday,Friday,Saturday]
var month = document.getElementById("month").value;
var mm = parseInt (month);
var year = documents.getElementById("year").value
var yy = parseInt("year")
var result = parseInt(((cc / 4) -2* cc-1) + ((5*yy / 4)) + ((26 * (mm+1) / 10 )) + dd) % 7
var male = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
var female = ["Akosua","Adwo","Abenaa","Akua","Yaa","Afua","Ama"]
if (document.getElementById("gender").checked) {
    var gender = 'male';
}
else {
    var gender = 'female';
}
if (mm < 1 || mm > 12 ){
    alert("Invalid month");
}
else if (dd < 1|| dd > 31) {
    alert("Invalid day")
    
} else  if (Math.ceil(result) == 1 && gender === 'male'){
    document.getElementById("outcome").innerHTML  =
    ("born on Sunday , your Akan name is " + male[0])
}
else  if (Math.ceil(result) == 2 && gender === 'male'){
    document.getElementById("outcome").innerHTML  =
    ("born on Monday , your Akan name is " + male[1])
}
else  if (Math.ceil(result) == 3 && gender === 'male'){
        document.getElementById("outcome").innerHTML  =
        ("born on Tuesday , your Akan name is " + male[2])
}
        else  if (Math.ceil(result) == 4 && gender === 'male'){
            document.getElementById("outcome").innerHTML  =
            ("born on Wednesday , your Akan name is " + male[3])
        }
            else  if (Math.ceil(result) == 5 && gender === 'male'){
                document.getElementById("outcome").innerHTML  =
                ("born on Thursday , your Akan name is " + male[4])
            }
            else  if (Math.ceil(result) == 6 && gender === 'male'){
                document.getElementById("outcome").innerHTML  =
                ("born on Friday , your Akan name is " + male[5])
            }
            else  if (Math.ceil(result) == 7 && gender === 'male'){
                document.getElementById("outcome").innerHTML  =
                ("born on Saturday , your Akan name is " + male[6])
            }
            else  if (Math.ceil(result) == 1 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Sunday , your Akan name is " + female[0])
            }
            else  if (Math.ceil(result) == 2 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Monday , your Akan name is " + female[1])
            }
            else  if (Math.ceil(result) == 3 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Teusady , your Akan name is " + female[2])
            }
            else  if (Math.ceil(result) == 4 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Wednesday , your Akan name is " + female[3])
            }
            else  if (Math.ceil(result) == 5 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Thursday , your Akan name is " + female[4])
            }
            else  if (Math.ceil(result) == 6 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Friday , your Akan name is " + female[5])
            }
            else  if (Math.ceil(result) == 7 && gender === 'female'){
                document.getElementById("outcome").innerHTML  =
                ("born on Saturday , your Akan name is " + female[6])
            }
            else{
                alert("enter information");
            }
        function submitResults() {
            window.location.submit();
        }

}















