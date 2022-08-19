let $firstButton = $("#firstButton");
let $sectionTwo = $("#sectionTwo");
let $sectionTwoClose = $("#twoMain i");
let $questText = $("#questText");
let $answerText = $("#answerText");
let $saveButton = $("#saveButton");
let $threeMain = $("#threeMain");
$firstButton.click(function (){
    $sectionTwo.css("display", "flex");
    $questText.val(null);
    $answerText.val(null);
    $sectionTwoClose.click(function (){
        $sectionTwo.css("display", "none");
        $questText.val(null);
        $answerText.val(null);
    })
    $saveButton.click(function (){
        if ($questText.val() == 0 && $answerText.val() == 0){
            return;
        }else{
            $threeMain.append(`<div id="threeMainDiv"><div id="threeMainDivUp"> <h3>`+$questText.val()+`</h3><p>`+$answerText.val()+`</p></div><div id="threeMainDivDown"><button id="threeLeftBtn">Edit</button><button id="threeRightBtn">Delete</button></div></div>`);
            let $threeMainDiv = $("#threeMainDiv");
            let $threeLeftBtn = $("#threeLeftBtn");
            let $threeRightBtn = $("#threeMain div button:nth-child(2)");
            console.log($threeRightBtn);
            $questText.val(null);
            $answerText.val(null);
            $threeLeftBtn.click(function(){
                $threeMainDiv.css("background-color", "gray");
            })
            $threeRightBtn.click(function(){
                $(this).parent().parent().remove();
            })
        }

    })
})
