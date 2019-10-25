const firebase = require('firebase');
const firebaseConfig = require('firebaseConfig');
const database = firebase.database();
const ref = database.ref();

firebase.initializeApp(firebaseConfig);

var schedule = document.getElementById("schedule");

schedule.appendChild(train);

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.timepicker');
    var options = "defaultTime";
    var instances = M.Timepicker.init(elems, options);
});


document.on("click", function(){
    


    })
})


