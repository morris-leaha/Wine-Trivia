$(document).ready(function() {
    //what's showing on start screen
    $("#submit-btn").hide();
    $("#questions").hide();
    $("#user-report").hide();

    //functions when button clicks happen 
    $("#start-btn").on("click", start);
    $("#submit-btn").on("click",report);
    $("#reset").on("click", reset);

    var questionNum = 0;
    var correctAnswer = "";

    function currentQuestion () {
        var title = $("<h6>")
            .addClass("card-header")
            .text("Question #: " + questionNum + 1);
        var body = $("<div>")
            .addClass("card-body");
        var text = $("<h5>")
            .addClass("card-text")
            .text(questions[questionNum].question);
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