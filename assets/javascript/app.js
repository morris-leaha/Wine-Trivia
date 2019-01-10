$(document).ready(function() {
    //what's showing on start screen
    $("#submit-btn").hide();
    $("#currentQ").hide();
    $("#user-report").hide();
    $("#reset").hide();
    $(".timer").html("Time Remaining: " + " 00:30").hide();

    //functions when button clicks happen 
    $("#start-btn").on("click", start);
    $("#submit-btn").on("click",report);
    $("#reset").on("click", reset);

    var intervalId;
    var time = 30;
    var correct = 0;

    function start() {
        $("#currentQ").show();
        $("#submit-btn").show();
        $(".timer").show();
        $("#start-btn").hide();
        currentQuestion();
    }

    function decrement() {
        time--;
        var converted = timeConverter(time);
        $(".timer").html("Time Remaining: " + converted);
    
        if (time === 0) {
            report();
        }
    }
    
    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
    
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
    
        if (minutes === 0) {
            minutes = "0";
        }
    
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
    }

    function report() {
        clearInterval(intervalId);
        $("#currentQ").hide();
        $("#submit-btn").hide();
        $(".timer").hide();
        $("#user-report").show();
        $("#reset").show();
        
        if (correct === 10) {
            $("#msg").html("Perfect Score -- You must be a wine connoisseur!");
        } else if (correct < 10 && correct >= 6) {
            $("#msg").html("Nicely Done! You must be a wine lover! -- Try Again?");
        } else if (correct < 6 && correct >= 1) {
            $("#msg").html("Better Luck Next Time! -- Try Again?");
        } else {
            $("#msg").html("Wah, Wah, Wah... -- Try Again?");
        }
    }

    function reset() {
        correct = 0;
        incorrect = 0;
        unanswered = 10;
        
        $("#currentQ").hide();
        $("#user-report").hide();
        $("#submit-btn").hide();
        $("#reset").hide();
        $("#start-btn").show();
    
        //function to uncheck radio buttons
        // $('#questions').find("input:radio:checked").prop('checked', false);
    }

    var questionNum = 0;
    var correctAnswer = "";
    var currentQ;

    function currentQuestion () {
        clearInterval(intervalId);
        time = 30;
        intervalId = setInterval(decrement,1000);

        var title = $("<h6>")
            .addClass("card-header")
            .text("Question #: " + questionNum + 1);
        var body = $("<div>")
            .addClass("card-body");
        var text = $("<h5>")
            .addClass("card-text")
            .text(questions[questionNum].question);

        title.append("#current-question");
        body.append("#current-question");
        text.append("#current-question");
        
        //for loop
    }


    var questions = [{
        question: "Wine is made through what process?",
        choices: ["Fermentation", "Oxidation", "Glycolysis", "Citric Acid Cycle"],
        correct: "Fermentation",
    },
    {
        question: "Which pair are byproducts of wine fermentation?",
        choices: ["Sulfites and Carbon Dioxide", "Ethanol and Sulfites", "Sulfites and Oxygen", "Ethanol and Carbon Dioxide"],
        correct: "Ethanol and Sulfites",
    }, 
    {
        question: "What country is generally acknowledged to be the birthplace of wine?",
        choices: ["Romania", "France", "Georgia", "Italy"],
        correct: "Georgia",
    },
    {
        question: "Terroir is defined as the set of all environmental factors, specific to a region, that have an effect on the end product.  What environmental factors affect wine production?",
        choices: ["Soil Composition", "Climate and seasonal weather", "Elevation", "All of the above"],
        correct: "All of the above",
    },
    {
        question: "The ranking and classification of wines can be confusing and complicated because the terms possess different meanings in different locations around the world.  However, the historical region of Burgundy, France has refined the hierarchy over hundreds of years.  In Burgundy, which is the highest-ranking classification denoting the most important vineyards and wines?",
        choices: ["Premier Cru", "Grand Cru", "Grands Cru", "Premier Grand Cru Class&#233;"],
        correct: "Grand Cru",
    },
    {
        question: "What is the average age of a French oak tree when harvested to use in the creation of the best French wine barrels?",
        choices: ["25 years old", "75 years old", "150 years old", "250 years old"],
        correct: "150 years old",
    },
    {
        question: "In the 19th century, the ____________ epidemic destroyed most of the vineyards for wine grapes in Europe, most notably in France.",
        choices: ["Phylloxera", "Xylella fastidiosa", "European Grapevine Moth", "Leafroll Disease"],
        correct: "Phylloxera",
    },
    {
        question: "The famous French wine Chablis is made from which grape variety?",
        choices: ["Sauvignon blanc", "Chenin blanc", "Chardonnay", "Pinot blanc"],
        correct: "Chardonnay",
    },
    {
        qquestion: "Chianti wines come from which region of Italy?",
        choices: ["Lombardy", "Florence", "Piedmont", "Tuscany"],
        correct: "Tuscany",
    },
    {
        question: "The famous white wine of Sancerre is made from which grape varietal?",
        choices: ["Chenin blanc", "Sauvignon blanc", "Sangiovese", "Pinot gris"],
        correct: "Sauvignon blanc",
    },
    ];


});