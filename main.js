document.getElementById("submitbtn").addEventListener("click", submitQuiz);

function submitQuiz() {
    //collect scores
    var health1 = document.quiz.health1.value;
    var healthsys = document.quiz.healthsys.value;
    var freetrade = document.quiz.freetrade.value;
    var markets = document.quiz.markets.value;
    var carbon = document.quiz.carbon.value;
    var corp = document.quiz.corp.value;
    var ubi = document.quiz.ubi.value;
    var gaym = document.quiz.gaym.value;
    var affa = document.quiz.affa.value;
    var immig = document.quiz.immig.value;
    var openbor = document.quiz.openbor.value;
    var gmo = document.quiz.gmo.value;
    var vacc = document.quiz.vacc.value;
    var police = document.quiz.police.value;
    var speech = document.quiz.speech.value;
    
    //set baseline score
    var econ = 50;
    var soci = 50;

    //set question values
    if (health1 === "A") {
        soci++;
    } else if (health1 === "B") {
        soci--;
    }

    if (healthsys === "A") {
        soci++;
        econ--;
    } else if (healthsys === "B" || healthsys ==="C") {
        soci++;
    } else if (healthsys === "D") {
        soci--;
    }

    if (freetrade === "A") {
        econ++;
    } else if (freetrade === "B") {
        econ--;
    }

    if (markets === "A") {
        econ += 4;
    } else if (markets === "B") {
        econ++;
    } else if (markets === "C") {
        econ--;
    } else if (markets === "D") {
        econ -= 4;
    }

    if (carbon === "A") {
        econ --;
    } 

    if (corp === "A") {
        econ --;
    } else if (corp === "B"){
        econ ++;
    }

    if (ubi === "A") {
        econ --;
    } else if (ubi === "B") {
        econ ++;
    }

    if (rent === "A") {
        econ --;
    } else if (rent === "B") {
        econ ++;
    }

    if (gaym === "A") {
        soci++;
    } else if (gaym === "B") {
        soci--;
    }

    if (affa === "A") {
        soci++;
    } else if (affa === "B") {
        soci--;
    }
    
    if (immig === "A") {
        soci++;
    } else if (immig === "B") {
        soci--;
    }

    if (openbor === "A") {
        soci++;
    } else if (openbor === "B") {
        soci--;
    }

    if (gmo === "A") {
        soci--;
    } else if (gmo === "B") {
        soci++;
    }

    if (vacc === "A") {
        soci--;
    } else if (vacc === "B") {
        soci++;
    }

    if (police === "A") {
        soci--;
    } else if (police === "B") {
        soci++;
    }

    if (speech === "A") {
        soci++;
    } else if (speech === "B") {
        soci--;
    }


    //set value results
    document.getElementById("message").textContent = "You scored " + soci + " socially and " + econ + " economically";
    console.log("You scored " + soci + " socially and " + econ + " economically");
}
//Accordian Function

var acc = document.getElementsByClassName("expand");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}