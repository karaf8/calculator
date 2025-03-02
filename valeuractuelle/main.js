function updateResult() {
    let interestType = document.getElementById("interestType").value;
    let timeType = document.getElementById("timeType").value;
    let rate = parseFloat(document.getElementById("amount").value);
    let an = parseFloat(document.getElementById("an").value);
    let moi = parseFloat(document.getElementById("mo").value);
    let jo = parseFloat(document.getElementById("jo").value);
    let vf = parseFloat(document.getElementById("vf").value);
    let n = 0;

    let va = 0;

    console.log(rate)
    rate/=100;


    if(timeType=="annuel"){
        n+=an;
        n+=moi/12;
        n+=jo/360;
    }

    if(timeType=="semestriel"){
        n+=an*2;
        n+=moi/6;
        n+=jo/180;
        rate/=2;
    }

    if(timeType=="trimestriel"){
        n+=an*4;
        n+=moi/3;
        n+=jo/90;
        rate/=4;
    }

    if(timeType=="mensuel"){
        n+=an*12;
        n+=moi;
        n+=jo/30;
        rate/=12;
    }

    if(timeType=="quotidien"){
        n+=an*360;
        n+=moi*30;
        n+=jo;
        rate/=360;
    }



    console.log(n)

    if (interestType === "simple") {
        console.log("Calculating Simple Interest...");
        va = vf/(1+n*rate);
        














        // Add your simple interest calculation logic here
    } else if (interestType === "compose") {
        console.log("Calculating Compound Interest...");
        va = vf/Math.pow(1+rate, n);







        // Add your compound interest calculation logic here
    }

    console.log(vf)


    let resultBox = document.getElementById("result");
    resultBox.textContent = va;
    resultBox.classList.add("show");
    setTimeout(() => resultBox.classList.remove("show"), 500);

}
