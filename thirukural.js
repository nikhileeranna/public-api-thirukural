kural();
function kural(number=1){
   
    number = document.getElementsByClassName("input")[0].value;
    
    
    console.log(number);
    fetch(`https://api-thirukkural.vercel.app/api?num=${number}`)
    .then((res)=>res.json())
    .then((res1)=>{
    console.log(res1);

        // let content = document.getElementsByClassName("content");
        
        let kural= document.createElement("div");
        kural.innerHTML=`<br/> ${res1.line1} <br/> ${res1.line2} <br/> <br/>`; 
        kural.style.fontSize="20px";

        // let kural2 = document.createElement("div");
        // kural2.innerHTML=`${res1.line2} <br/> <br/>`;

        let explanation = document.createElement("span");
        explanation.innerHTML="Tamil Explanation";

        let tamil = document.createElement("div");
        tamil.innerHTML=`${res1.tam_exp} <br/> <br/>`;

        let explanation1 = document.createElement("span");
        explanation1.innerHTML="English Explanation";
        
        let English = document.createElement("div");
        English.innerHTML=`${res1.eng_exp} <br/> <br/>`;

        let details= document.createElement("div");
        details.innerHTML=`DETAILS :- <br/><br/> Number - ${res1.number} <br/> Chapter -  ${res1.chap_tam} ( ${res1.chap_eng} ) <br/> Chapter Group - ${res1.chapgrp_tam} ( ${res1.chapgrp_eng} )  <br/> Section - ${res1.sect_tam} ( ${res1.sect_eng} )   <br/> <br/>`

    



        // content.append(kural);
        document.getElementById("content").append(kural,details,explanation,tamil,explanation1,English );
        // document.body.append(kural);

          
        document.onclick = function()
        {
            window.location.reload();
        }


    })
    .catch((err)=>{
    console.log(err);
    });

}