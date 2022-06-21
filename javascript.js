/* Assigning varibles */
output=0;
uwu=0;
nwns=0.01;
nps=0;
displaynpsps=0;
truenps=0;
npsps=0;
truenpsps=0;
uwups=0;
mply=0;
mplier=0;
boost=1;
allboost=1;
buy=0;
buy2=0;
buy3=0;
buy41=0;
price1=10;
price2=500;
price3=7500;
price4=100000;
price5=750000;
price6=5000000;
price7=1;
price8=5;
price9=10;
num1=0;
num2=0;
num3=0;
num4=0;
num5=0;
num6=0;
num7=0;
num8=0;
num9=0;
limit1=90;
limit2=50;
limit3=30;
auto=0;
auto2=0;
timer=0;
uwuboost=1;
prestigecount=0;
uwuprestige=1;
truwuprestige=1;
pass1=0;
pass2=0;
pass3=0;
pass4=0;
pass5=0;
owoinquin=1;
difficultyLevel=1;
subtractMode=0;
subtract=0.01;
themeNumber=1;
count=0;
income1=0;
income2=0;
income3=0;
income4=0;
income5=0;
income6=0;

/* Click counter */
function philip() {
    output=output+((truenps*0.1)+1)*(1/difficultyLevel);
	count=count+1;
    document.getElementById("clicount").innerHTML=Math.round(count) + " Clicks";
}

/* UwU prestige function */
function prestige() {
        uwu=uwu+truwuprestige;
        nps=0;
		truenps=0;
		npsps=0;
		truenpsps=0;
		if (uwu >= 10) {
			output=10;
		} else {
			output=0;
		}
        boost=1;
		allboost=(1/difficultyLevel);
        buy=0;
		buy2=0;
		buy3=0;
        mplier=uwu*100;
        num1=0;
        num2=0;
        num3=0;
		num4=0;
		num5=0;
		num6=0;
        price1=10;
        price2=500;
        price3=7500;
		price4=100000;
		price5=750000;
		price6=5000000;
		subtract=0.01;
		prestigecount=prestigecount+1;
		if (prestigecount >= 5 && buy41 == 0) {
			document.getElementById("UwUupgrade").style.display="block";
		}
		document.getElementById("tremaining").style.display="block";
		document.getElementById("tremaining2").style.display="none";
		document.getElementById("tier3").style.display="block";
		document.getElementById("prestige").style.display=("none")
		document.getElementById("upgrade1").style.display=("none")
		document.getElementById("upgrade2").style.display=("none")
		document.getElementById("upgrade3").style.display=("none")
		document.getElementById("price4").style.display=("none")
		document.getElementById("price5").style.display=("none")
		document.getElementById("price6").style.display=("none")
		document.getElementById("uwu").innerHTML=Math.round(uwu) + " UwUs"
		document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
		document.getElementById("prestigecount").innerHTML= prestigecount + " Prestiges"
        document.getElementById("price1").innerHTML = "+1  OwOPS (-" + Math.round(price1) + " OwOs) (" + num1 + ")"
        document.getElementById("price2").innerHTML = "+10 OwOPS (-" + Math.round(price2) + " OwOs) (" + num2 + ")"
        document.getElementById("price3").innerHTML = "+100 OwOPS (-" + Math.round(price3) + " OwOs) (" + num3 + ")"
		document.getElementById("price4").innerHTML = "+1 OwOPSPS (-" + Math.round(price4) + " OwOs) (" + num4 + ")"
		document.getElementById("price5").innerHTML = "+10 OwOPSPS (-" + Math.round(price5) + " OwOs) (" + num5 + ")"
		document.getElementById("price6").innerHTML = "+100 OwOPSPS (-" + Math.round(price6) + " OwOs) (" + num6 + ")"
		document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
}

/* Tier one buildings */
function philipEvil(){
    if (output >= price1) {
        output=output-price1;
        num1=num1+1;
        price1=price1*1.1;
        nps=nps+(((1)*boost)*allboost);
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}
function philipEvil2(){
    if (output >= price2) {
        output=output-price2;
        num2=num2+1;
        price2=price2*1.1;
        nps=nps+(((10)*boost)*allboost);
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}
function philipEvil3(){
    if (output >= price3) {
        output=output-price3;
        num3=num3+1;
        price3=price3*1.1;
        nps=nps+(((100)*boost)*allboost);
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}

/* Tier two buildings */
function building11(){
    if (output >= price4) {
        output=output-price4;
        num4=num4+1;
        price4=price4*1.1;
        npsps=npsps+((1)*allboost);
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}
function building12(){
    if (output >= price5) {
        output=output-price5;
        num5=num5+1;
        price5=price5*1.1;
        npsps=npsps+((10)*allboost);
        document.getElementById("price5").innerHTML = "+10 OwOPSPS (-" + Math.round(price5) + " OwOs) (" + num5 + ")"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}
function building13(){
    if (output >= price6) {
        output=output-price6;
        num6=num6+1;
        price6=price6*1.1;
        npsps=npsps+((100)*allboost);
        document.getElementById("price6").innerHTML = "+100 OwOPSPS (-" + Math.round(price6) + " OwOs) (" + num6 + ")"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}

/* Tier three buildings */
function building21(){
    if (uwu >= price7) {
        uwu=uwu-price7;
        num7=num7+1;
		price7=price7*1.05;
        uwups=uwups+0.00027777777778
		document.getElementById("uwus").innerHTML="+" + uwups*uwuboost + " UwUPS"
        document.getElementById("price7").innerHTML = "+1 UwUPH (-" + Math.round(price7*100)/100 + " UwUs) (" + num7 + ")"
		document.getElementById("uwu").innerHTML=Math.round(uwu*100)/100 + " UwUs"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
		document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
    }
}
function building22(){
    if (uwu >= price8) {
        uwu=uwu-price8;
        num8=num8+1;
		price8=price8*2.1;
        uwuboost=uwuboost*2;
		document.getElementById("uwus").innerHTML="+" + uwups*uwuboost + " UwUPS"
        document.getElementById("price8").innerHTML = "UwUPH*2 (-" + Math.round(price8*100)/100 + " UwUs) (" + num8 + ")"
		document.getElementById("uwu").innerHTML=Math.round(uwu*100)/100 + " UwUs"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
		document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
    }
}
function building23(){
    if (uwu >= price9) {
        uwu=uwu-price9;
        num9=num9+1;
		price9=price9*3;
        uwuprestige=(uwuprestige*2);
		document.getElementById("uwus").innerHTML="+" + uwups*uwuboost + " UwUPS"
        document.getElementById("price9").innerHTML = "UwU on prestige*2 (-" + Math.round(price9*100)/100 + " UwUs) (" + num9 + ")"
		document.getElementById("uwu").innerHTML=Math.round(uwu*100)/100 + " UwUs"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
		document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
    }
}

/* Buy max buttons */
function but1BuyMax() {
	while (output >= price1) {
		philipEvil();
	}
}
function but2BuyMax() {
	while (output >= price2) {
		philipEvil2();
	}
}
function but3BuyMax() {
	while (output >= price3) {
		philipEvil3();
	}
}
function but4BuyMax() {
	while (uwu >= price7) {
		building21();
	}
}
function bclick(){
	while (output >= price6 && buy2 == 1) {
		building13();
	}
	while (output >= price5 && buy2 == 1) {
		building12();
	}
	while (output >= price4 && buy2 == 1) {
		building11();
	}
    while (output >= price3) {
		philipEvil3();
	}
	while (output >= price2) {
		philipEvil2();
	}
	while (output >= price1) {
		philipEvil();
	}
}

/* Auto buy button */
function autoBuy() {
	if (auto == 1) {
		auto = 0;
		document.getElementById("autoButton").innerHTML="Auto (OFF)"
	} else {
		auto = 1;
		document.getElementById("autoButton").innerHTML="Auto (ON)"
		autoBuy2();
	}
}
function autoBuy2() {
	setTimeout(autoBuy2, 10);
	if (auto == 1) {
		while (output >= price6 && buy2 == 1) {
		building13();
		}
		while (output >= price5 && buy2 == 1) {
			building12();
		}
		while (output >= price4 && buy2 == 1) {
			building11();
		}
		while (output >= price3 && num3 < limit3) {
			philipEvil3();
		}
		while (output >= price2 && num2 < limit2) {
			philipEvil2();
		}
		while (output >= price1 && num1 < limit1) {
			philipEvil();
		}
	}
}

/* Upgrades */
function philipEvil4(){
    if (output >= 50000) {
        output=output-50000;
        nps=nps*2;
        boost=boost*2
        buy=1;
        document.getElementById("upgrade1").style.display="none";
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
		income1=(((1)*boost)*allboost);
		document.getElementById("price1").innerHTML = "+" + income1 + " OwOPS (-" + Math.round(price1) + " OwOs) (" + num1 + ")"
		income2=(((10)*boost)*allboost);
		document.getElementById("price2").innerHTML = "+" + income2 + " OwOPS (-" + Math.round(price2) + " OwOs) (" + num2 + ")"
		income3=(((100)*boost)*allboost);
		document.getElementById("price3").innerHTML = "+" + income3 + " OwOPS (-" + Math.round(price3) + " OwOs) (" + num3 + ")"
    }
}
function upgrade2(){
    if (output >= 200000) {
        output=output-200000;
		document.getElementById("price4").style.display="block";
		document.getElementById("price5").style.display="block";
		document.getElementById("price6").style.display="block";
        buy2=1;
        document.getElementById("upgrade2").style.display="none";
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
    }
}
function upgrade3(){
    if (output >= 10000000) {
        output=output-10000000;
		nps=nps*4;
		npsps=npsps*4
        allboost=allboost*4
        buy3=1;
        document.getElementById("upgrade3").style.display="none";
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
    }
}
function upgrade4(){
	if (buy41 == 0) {
		if (uwu >= 5) {
        uwu=uwu-5;
		buy41=1;
		}
		document.getElementById("UwUupgrade").style.display="none";
		document.getElementById("price9").style.display="block";
		document.getElementById("uwus").innerHTML="+" + uwups*uwuboost + " UwUPS"
		document.getElementById("uwu").innerHTML=Math.round(uwu*100)/100 + " UwUs"
        document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
        document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
		document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
	}
}

/* Auto upgrades button */
function autoUpgr() {
	if (auto2 == 1) {
		auto2 = 0;
		document.getElementById("autoUpgrade").innerHTML="Auto Upgrade (OFF)"
	} else {
		auto2 = 1;
		document.getElementById("autoUpgrade").innerHTML="Auto Upgrade (ON)"
		autoUpgr2();
	}
}
function autoUpgr2() {
	setTimeout(autoUpgr2, 10);
	if (auto2 == 1) {
		while (output >= 1000000000) {
			prestige();
		}
		while (output >= 10000000 && buy3 == 0 && num6 >= 1) {
			upgrade3();
		}
		while (output >= 200000 && buy2 == 0 && buy == 1) {
			upgrade2();
		}
		while (output >= 50000 && buy == 0 && num3 >= 1) {
			philipEvil4();
		}
	}
}

/* Open/Close menus */
function openOptions() {
	document.getElementById("options").style.display="block";
}
function closeOptions() {
	document.getElementById("options").style.display="none";
}
function openConfirm1() {
	document.getElementById("yesno1").style.display="block";
}
function closeConfirm1() {
	document.getElementById("yesno1").style.display="none";
}
function openConfirm2() {
	document.getElementById("yesno2").style.display="block";
}
function closeConfirm2() {
	document.getElementById("yesno2").style.display="none";
	closeConfirm1();
}
function openHardMode() {
	document.getElementById("hardmodeyesno").style.display="block";
}
function closeHardMode() {
	document.getElementById("hardmodeyesno").style.display="none";
}
function openExtremeMode() {
	document.getElementById("extrememodeyesno").style.display="block";
}
function closeExtremeMode() {
	document.getElementById("extrememodeyesno").style.display="none";
}
function openStats() {
	document.getElementById("stats").style.display="block";
}
function closeStats() {
	document.getElementById("stats").style.display="none";
}

/* Idle function (needs to be optimised) */
function idle(){
    output=output+(truenps/27.0270271);
	nps=nps+(truenpsps/27.0270271);
	displaynpsps=(truenpsps*(uwu+1));
	truenpsps=(npsps);
	truenps=(nps*(uwu+1));
	uwu=uwu+((uwups*uwuboost)/27.0270271);
	mplier=uwu*100;
	timer=(1000000000-output)/truenps;
	timer2=(1000000000000000000-output)/truenps;
	owoinquin=nwns*100;
	nwns=output/10000000000000000000;
	document.getElementById("owoequiv").innerHTML=Math.round(owoinquin*10)/10 + " Quintillion OwOs"
	document.getElementById("tremaining").innerHTML=Math.round(timer) + " seconds remaining"
	document.getElementById("tremaining2").innerHTML=Math.round(timer2) + " seconds remaining"
    document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
	document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
	document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
	document.getElementById("uwu").innerHTML=Math.round(uwu*100)/100 + " UwUs"
	document.getElementById("prestige").innerHTML="Sacrifice all OwOs for +" + Math.round(truwuprestige*100)/100 + " UwU"
	document.getElementById("nwncount").innerHTML = Math.round(nwns*1000)/1000 + " ^w^s"
	income1=(((1)*boost)*allboost)*(uwu+1);
    document.getElementById("price1").innerHTML = "+" + Math.round(income1) + " OwOPS (-" + Math.round(price1) + " OwOs) (" + num1 + ")"
	income2=(((10)*boost)*allboost)*(uwu+1);
    document.getElementById("price2").innerHTML = "+" + Math.round(income2) + " OwOPS (-" + Math.round(price2) + " OwOs) (" + num2 + ")"
	income3=(((100)*boost)*allboost)*(uwu+1);
    document.getElementById("price3").innerHTML = "+" + Math.round(income3) + " OwOPS (-" + Math.round(price3) + " OwOs) (" + num3 + ")"
    setTimeout(idle, 37);
	income4=((1)*allboost)*(uwu+1);
    document.getElementById("price4").innerHTML = "+" + Math.round(income4) + " OwOPSPS (-" + Math.round(price4) + " OwOs) (" + num4 + ")"
	income5=((10)*allboost)*(uwu+1);
    document.getElementById("price5").innerHTML = "+" + Math.round(income5) + " OwOPSPS (-" + Math.round(price5) + " OwOs) (" + num5 + ")"
	income6=((100)*allboost)*(uwu+1);
    document.getElementById("price6").innerHTML = "+" + Math.round(income6) + " OwOPSPS (-" + Math.round(price6) + " OwOs) (" + num6 + ")"
	if (buy41 == 1) {
		truwuprestige = (uwuprestige*(num7+num8))+1;
	}
    if (num3 >= 1 && buy == 0) {
        document.getElementById("upgrade1").style.display="block";
    }
	if (buy == 1 && buy2 == 0) {
		document.getElementById("upgrade2").style.display="block";
	}
	if (num6 >= 1 && buy3 == 0) {
		document.getElementById("upgrade3").style.display="block";
	}
    if (output >= 1000000000) {
        document.getElementById("prestige").style.display="block";
		document.getElementById("tremaining").style.display="none";
		if (pass2 == 0) {
			document.getElementById("tremaining2").style.display="block";
		}
    }
	if (output >= 1000000000000000000 && pass2 == 0) {
        document.getElementById("prestige").style.display="none";
		document.getElementById("owoclicker").style.display="none";
		document.getElementById("intermission").style.display="block";
		document.getElementById("message1").style.display="block";
		document.getElementById("tremaining2").style.display="none";
		document.getElementById("bg").className = "bg2";
		document.getElementById("message1").className = "fadetext";
		gametransition1();
		closeOptions();
		closeConfirm1();
		closeConfirm2();
		closeHardMode();
		closeExtremeMode();
		closeStats();
		pass2=1;
	}
	if (subtractMode == 1) {
		subtract=subtract*1.00035;
		output=output-(subtract/27.0270271);
		document.getElementById("subtraction").innerHTML="-" + Math.round(subtract*100)/100 + " OwOPS"
	} else {
		document.getElementById("subtraction").style.display="none"
	}
}

/* Phase 1 to Phase 2 transition */
function gametransition1() {
	setTimeout(gametransition1, 5000);
	if (pass5 == 0) {
		if (pass4 == 1) {
			document.getElementById("message3").style.display="none";
			document.getElementById("^w^clicker").style.display="block";
			pass5=1;
		} else if (pass3 == 1) {
			document.getElementById("message2").style.display="none";
			document.getElementById("message3").style.display="block";
			document.getElementById("message3").className = "fadetext";
			pass4=1;
		} else if (pass1 == 1) {
			document.getElementById("message1").style.display="none";
			document.getElementById("message2").style.display="block";
			document.getElementById("message2").className = "fadetext";
			pass3=1;
		} else {
			pass1=1;
		}
	}
}

/* Phase 2 functions (Unfinished) */
function clickbutton2() {
    document.getElementById("prestige").style.display="block";
	document.getElementById("owoclicker").style.display="block";
	document.getElementById("intermission").style.display="none";
	document.getElementById("message1").style.display="none";
	document.getElementById("tremaining2").style.display="none";
	document.getElementById("bg").className = "bg1";
	document.getElementById("^w^clicker").style.display="none";
	document.getElementById("nwnteleport").style.display="block";
}
function clickbutton3() {
	document.getElementById("prestige").style.display="none";
	document.getElementById("owoclicker").style.display="none";
	document.getElementById("bg").className = "bg2";
	document.getElementById("^w^clicker").style.display="block";
}
function disctransition() {
	document.getElementById("^w^clicker").style.display="none";
	document.getElementById("discordclicker").style.display="block";
}

/* Hotkeys */
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 77) { /* M key (buys max) */
		bclick();
	}
}, true);
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 65) { /* A key (toggles auto buy) */
		autoBuy();
	}
}, true);
document.addEventListener('keydown', function(event) {
	if (event.keyCode == 83) { /* S key (saves game) */
		saveOwO();
	}
}, true);

/* Save/Load function (unfinished) */
function saveOwO(){
    saveList = JSON.stringify(output)
    localStorage.setItem("gameData", saveList)
	saveList2 = JSON.stringify(nps)
    localStorage.setItem("gameData2", saveList2)
	saveList3 = JSON.stringify(price1)
    localStorage.setItem("gameData3", saveList3)
	saveList4 = JSON.stringify(num1)
    localStorage.setItem("gameData4", saveList4)
}
function loadOwO(){
    storedSave = localStorage.getItem("gameData")
    storedSaveData = JSON.parse(storedSave)
	output=storedSaveData;
	storedSave2 = localStorage.getItem("gameData2")
    storedSaveData2 = JSON.parse(storedSave2)
	nps=storedSaveData2;
	storedSave3 = localStorage.getItem("gameData3")
    storedSaveData3 = JSON.parse(storedSave3)
	price1=storedSaveData3;
	storedSave4 = localStorage.getItem("gameData4")
    storedSaveData4 = JSON.parse(storedSave4)
	num1=storedSaveData4;
}

/* Reset game function */
function resetGame() {
	closeConfirm1();
	closeConfirm2();
    uwu=0;
    nps=0;
	truenps=0;
	npsps=0;
	truenpsps=0;
	output=0;
    boost=1;
	allboost=1;
    buy=0;
	buy2=0;
	buy3=0;
    mplier=uwu*100;
    num1=0;
    num2=0;
    num3=0;
	num4=0;
	num5=0;
	num6=0;
	num7=0;
	num8=0;
	num9=0;
	uwups=0;
    price1=10;
    price2=500;
    price3=7500;
	price4=100000;
	price5=750000;
	price6=5000000;
	price7=1;
	price8=5;
	price9=10;
	prestigecount=0;
	uwuboost=1;
	buy41=0;
	uwuprestige=1;
	truwuprestige=1;
	document.getElementById("UwUupgrade").style.display="none";
	document.getElementById("tremaining").style.display="block";
	document.getElementById("tremaining2").style.display="none";
	document.getElementById("tier3").style.display="none";
	document.getElementById("prestige").style.display=("none")
	document.getElementById("upgrade1").style.display=("none")
	document.getElementById("upgrade2").style.display=("none")
	document.getElementById("upgrade3").style.display=("none")
	document.getElementById("price4").style.display=("none")
	document.getElementById("price5").style.display=("none")
	document.getElementById("price6").style.display=("none")
	document.getElementById("uwu").innerHTML=Math.round(uwu) + " UwUs"
	document.getElementById("mplier").innerHTML= "+" + Math.round(mplier) + "% boost"
	document.getElementById("prestigecount").innerHTML= prestigecount + " Prestiges"
    document.getElementById("price1").innerHTML = "+1  OwOPS (-" + Math.round(price1) + " OwOs) (" + num1 + ")"
    document.getElementById("price2").innerHTML = "+10 OwOPS (-" + Math.round(price2) + " OwOs) (" + num2 + ")"
    document.getElementById("price3").innerHTML = "+100 OwOPS (-" + Math.round(price3) + " OwOs) (" + num3 + ")"
	document.getElementById("price4").innerHTML = "+1 OwOPSPS (-" + Math.round(price4) + " OwOs) (" + num4 + ")"
	document.getElementById("price5").innerHTML = "+10 OwOPSPS (-" + Math.round(price5) + " OwOs) (" + num5 + ")"
	document.getElementById("price6").innerHTML = "+100 OwOPSPS (-" + Math.round(price6) + " OwOs) (" + num6 + ")"
	document.getElementById("output").innerHTML=Math.round(output) + " OwOs"
    document.getElementById("nps").innerHTML=Math.round(truenps*10)/10 + " OwOPS (+ " + Math.round(displaynpsps*10)/10 + "PS)"
	document.getElementById("price7").innerHTML = "+1 UwUPH (-" + Math.round(price7*100)/100 + " UwUs) (" + num7 + ")"
	document.getElementById("price8").innerHTML = "UwUPH*2 (-" + Math.round(price8*100)/100 + " UwUs) (" + num8 + ")"
	document.getElementById("price9").innerHTML = "UwU on prestige*2 (-" + Math.round(price9*100)/100 + " UwUs) (" + num9 + ")"
	document.getElementById("uwus").innerHTML="+" + uwups*uwuboost + " UwUPS"
	document.getElementById("UwUupgrade").style.display="none";
	document.getElementById("price9").style.display="none";
	subtract=0.01;
	subtractMode=0;
	difficultyLevel=1;
}

/* Gamemode functions */
function hardMode() {
	resetGame();
	allboost=0.1;
	closeHardMode();
	difficultyLevel=10;
}
function extremeMode() {
	resetGame();
	allboost=1;
	closeExtremeMode();
	subtractMode=1;
	document.getElementById("subtraction").style.display="block";
}

/* Theme Settings */
function themeButton() {
	switch (themeNumber) {
		case 0:
		document.getElementById("bg").className = "bg1";
		themeNumber=themeNumber+1;
		break;
		case 1:
		document.getElementById("bg").className = "darkTheme";
		document.getElementById("options").className = "popoptionsdark truecenter";
		themeNumber=themeNumber+1;
		break;
		case 2:
		document.getElementById("bg").className = "lightTheme";
		document.getElementById("options").className = "popoptions truecenter";
		themeNumber=themeNumber+1;
		break;
		case 3:
		document.getElementById("bg").className = "transTheme";
		themeNumber=themeNumber+1;
		break;
		case 4:
		document.getElementById("bg").className = "transDarkTheme";
		themeNumber=0;
		break;
	}
}

function bigUp1() {
	document.getElementById("bigimg1").style.display="block";
}

/* Playtest buttons */
function dev() {
	uwu = uwu + 1000000000000;
	output = output + 10;
	clickbutton3();
}

/* Unused code
    arraynum = 0
    getElement("save_list").value = "";
    while (arraynum < storedSaveData.length){
        loadedSave = storedSaveData[arraynum]
        arraynum = arraynum + 1
        var list = document.getElementById('save_list');
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(loadedSave));
        list.appendChild(entry);
    }
function setcookie() {
	document.cookie = "MuzzerCookieUwU; max-age="+60*60*24*30*12;
	if (document.cookie){
		alert("Cookie set");
	}
}
*/