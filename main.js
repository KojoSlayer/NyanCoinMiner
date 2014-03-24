
var nyanCoin = 0;

function nyanClick(number){
    nyanCoin = nyanCoin + number;
	var nyanCoinRounded = Math.round(nyanCoin * 100) / 100;
    document.getElementById("nyanCoin").innerHTML = nyanCoinRounded;
};

function updatenyanPer(){
    var nyanPer = (cursors * (cursorsCPS * cursorsPercent)) + (oldlaptops * (oldlaptopsCPS * cleanlaptopsPercent)) + (raspberrypis * (raspberrypisCPS * hirepisPercent)) + (cheapdesktops * cheapdesktopsCPS) + (graphicscards * graphicscardsCPS) + (amdcards * amdcardsCPS) + (asicminers * asicminersCPS) + (miningrigs * miningrigsCPS) + (supercomputers * supercomputersCPS) + (shops * shopsCPS) + (farms * farmsCPS);
	
	var nyanPerRounded = Math.round(nyanPer * 100) / 100;
    document.getElementById('nyanCoinPer').innerHTML = nyanPerRounded;
};

function updatenyanperClick(){
	var nyanCoinPerClick = (1 + quickfingers);
	document.getElementById('nyanCoinPerClick').innerHTML = nyanCoinPerClick;
}


// Shop Item One Start
var cursors = 0;
var cursorsCPS = 0.25;
function buyCursor(){
    var cursorCost = Math.floor(50 * Math.pow(1.05,cursors));     //works out the cost of this cursor
    if(nyanCoin >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	nyanCoin = nyanCoin - cursorCost;                          //removes the nyanCoin spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('nyanCoin').innerHTML = nyanCoin;  //updates the number of nyanCoin for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.05,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
	updatenyanPer();
};
//Shop Item One End

// Shop Item Two Start
var oldlaptops = 0;
var oldlaptopsCPS = 0.50;
function buyoldlaptop(){
    var oldlaptopCost = Math.floor(1000 * Math.pow(1.025,oldlaptops));   
    if(nyanCoin >= oldlaptopCost){                                   
        oldlaptops = oldlaptops + 1;                                   
    	nyanCoin = nyanCoin - oldlaptopCost;                         
        document.getElementById('oldlaptops').innerHTML = oldlaptops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(1000 * Math.pow(1.025,oldlaptops));       
    document.getElementById('oldlaptopCost').innerHTML = nextCost;
	updatenyanPer();
};
//Shop Item Two End

// Shop Item Three Start
var raspberrypis = 0;
var raspberrypisCPS = 1;
function buyraspberrypi(){
    var raspberrypiCost = Math.floor(5000 * Math.pow(1.050,raspberrypis));   
    if(nyanCoin >= raspberrypiCost){                                   
        raspberrypis = raspberrypis + 1;                                   
    	nyanCoin = nyanCoin - raspberrypiCost;                         
        document.getElementById('raspberrypis').innerHTML = raspberrypis;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(5000 * Math.pow(1.050,raspberrypis));       
    document.getElementById('raspberrypiCost').innerHTML = nextCost;
	updatenyanPer();
};
//Shop Item Three End

// Shop Item Four Start
var cheapdesktops = 0;
var cheapdesktopsCPS = 5;
function buycheapdesktop(){
    var cheapdesktopCost = Math.floor(10000 * Math.pow(1.1,cheapdesktops));   
    if(nyanCoin >= cheapdesktopCost){                                   
        cheapdesktops = cheapdesktops + 1;                                   
    	nyanCoin = nyanCoin - cheapdesktopCost;                         
        document.getElementById('cheapdesktops').innerHTML = cheapdesktops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(10000 * Math.pow(1.1,cheapdesktops));       
    document.getElementById('cheapdesktopCost').innerHTML = nextCost;
	document.getElementById('cheapdesktopsCPS').innerHTML = cheapdesktopsCPS;
	updatenyanPer();
};
//Shop Item Four End

// Shop Item Five Start
var graphicscards = 0;
var graphicscardsCPS = 10;
function buygraphicscard(){
    var graphicscardCost = Math.floor(15000 * Math.pow(1.15,graphicscards));   
    if(nyanCoin >= graphicscardCost){                                   
        graphicscards = graphicscards + 1;                                   
    	nyanCoin = nyanCoin - graphicscardCost;                         
        document.getElementById('graphicscards').innerHTML = graphicscards;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(15000 * Math.pow(1.15,graphicscards));       
    document.getElementById('graphicscardCost').innerHTML = nextCost;
	document.getElementById('graphicscardsCPS').innerHTML = graphicscardsCPS;
	updatenyanPer();
};
//Shop Item Five End

// Shop Item Six Start
var amdcards = 0;
var amdcardsCPS = 20;
function buyamdcard(){
    var amdcardCost = Math.floor(25000 * Math.pow(1.25,amdcards));   
    if(nyanCoin >= amdcardCost){                                   
        amdcards = amdcards + 1;                                   
    	nyanCoin = nyanCoin - amdcardCost;                         
        document.getElementById('amdcards').innerHTML = amdcards;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(25000 * Math.pow(1.25,amdcards));       
    document.getElementById('amdcardCost').innerHTML = nextCost;
	document.getElementById('amdcardsCPS').innerHTML = amdcardsCPS;
	updatenyanPer();
};
//Shop Item Six End

// Shop Item Seven Start
var asicminers = 0;
var asicminersCPS = 40;
function buyasicminer(){
    var asicminerCost = Math.floor(150000 * Math.pow(1.30,asicminers));   
    if(nyanCoin >= asicminerCost){                                   
        asicminers = asicminers + 1;                                   
    	nyanCoin = nyanCoin - asicminerCost;                         
        document.getElementById('asicminers').innerHTML = asicminers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(150000 * Math.pow(1.30,asicminers));       
    document.getElementById('asicminerCost').innerHTML = nextCost;
	document.getElementById('asicminersCPS').innerHTML = asicminersCPS;
	updatenyanPer();
};
//Shop Item Seven End

// Shop Item Eight Start
var miningrigs = 0;
var miningrigsCPS = 100;
function buyminingrig(){
    var miningrigCost = Math.floor(250000 * Math.pow(1.40,miningrigs));   
    if(nyanCoin >= miningrigCost){                                   
        miningrigs = miningrigs + 1;                                   
    	nyanCoin = nyanCoin - miningrigCost;                         
        document.getElementById('miningrigs').innerHTML = miningrigs;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(250000 * Math.pow(1.40,miningrigs));       
    document.getElementById('miningrigCost').innerHTML = nextCost;
	document.getElementById('miningrigsCPS').innerHTML = miningrigsCPS;
	updatenyanPer();
};
//Shop Item Eight End

// Shop Item Nine Start
var supercomputers = 0;
var supercomputersCPS = 500;
function buysupercomputer(){
    var supercomputerCost = Math.floor(500000 * Math.pow(1.50,supercomputers));   
    if(nyanCoin >= supercomputerCost){                                   
        supercomputers = supercomputers + 1;                                   
    	nyanCoin = nyanCoin - supercomputerCost;                         
        document.getElementById('supercomputers').innerHTML = supercomputers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(500000 * Math.pow(1.50,supercomputers));       
    document.getElementById('supercomputerCost').innerHTML = nextCost;
	document.getElementById('supercomputersCPS').innerHTML = supercomputersCPS;
	updatenyanPer();
};
//Shop Item Nine End

// Shop Item Ten Start
var shops = 0;
var shopsCPS = 1000;
function buyshop(){
    var shopCost = Math.floor(1000000 * Math.pow(1.70,shops));   
    if(nyanCoin >= shopCost){                                   
        shops = shops + 1;                                   
    	nyanCoin = nyanCoin - shopCost;                         
        document.getElementById('shops').innerHTML = shops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(1000000 * Math.pow(1.70,shops));       
    document.getElementById('shopCost').innerHTML = nextCost;
	document.getElementById('shopsCPS').innerHTML = shopsCPS;
	updatenyanPer();
};
//Shop Item Ten End

// Shop Item Eleven Start
var farms = 0;
var farmsCPS = 10000;
function buyfarm(){
    var farmCost = Math.floor(10000000 * Math.pow(2,farms));   
    if(nyanCoin >= farmCost){                                   
        farms = farms + 1;                                   
    	nyanCoin = nyanCoin - farmCost;                         
        document.getElementById('farms').innerHTML = farms;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(10000000 * Math.pow(2,farms));       
    document.getElementById('farmCost').innerHTML = nextCost;
	document.getElementById('farmsCPS').innerHTML = farmsCPS;
	updatenyanPer();
};
//Shop Item Eleven End

//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// Upgrade Item One Start
var quickfingers = 0;
function buyQuickfingers(){
    var quickfingersCost = Math.floor(100 * Math.pow(2,quickfingers));   
    if(nyanCoin >= quickfingersCost){                                   
        quickfingers = quickfingers + 1;                                   
    	nyanCoin = nyanCoin - quickfingersCost;                         
        document.getElementById('quickfingers').innerHTML = quickfingers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(100 * Math.pow(2,quickfingers));       
    document.getElementById('quickfingersCost').innerHTML = nextCost;
	updatenyanperClick();
};
//Upgrade Item One End

// Upgrade Item Two Start
var autoscripts = 0;
var cursorsPercent = 1;
function buyautoscripts(){
    var autoscriptsCost = Math.floor(20 * Math.pow(1.15,autoscripts));   
    if(nyanCoin >= autoscriptsCost){                                   
        autoscripts = autoscripts + 1; 
		cursorsPercent = cursorsPercent + 0.1;
    	nyanCoin = nyanCoin - autoscriptsCost;                         
        document.getElementById('autoscripts').innerHTML = autoscripts;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(20 * Math.pow(1.15,autoscripts));       
    document.getElementById('autoscriptsCost').innerHTML = nextCost;
	
	var cursorsCPSTotal = Math.round((cursorsCPS * cursorsPercent) * 100) / 100;
	document.getElementById('cursorCPS').innerHTML = cursorsCPSTotal;
	updatenyanPer();
	

};
//Upgrade Item Two End


// Upgrade Item Three Start
var cleanlaptops = 0;
var cleanlaptopsPercent = 1;
function buycleanlaptops(){
    var cleanlaptopsCost = Math.floor(50 * Math.pow(1.20,cleanlaptops));   
    if(nyanCoin >= cleanlaptopsCost){                                   
        cleanlaptops = cleanlaptops + 1; 
		cleanlaptopsPercent = cleanlaptopsPercent + 0.15;
    	nyanCoin = nyanCoin - cleanlaptopsCost;                         
        document.getElementById('cleanlaptops').innerHTML = cleanlaptops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(50 * Math.pow(1.20,cleanlaptops));       
    document.getElementById('cleanlaptopsCost').innerHTML = nextCost;
	
	var cleanlaptopsCPSTotal = Math.round((oldlaptopsCPS * cleanlaptopsPercent) * 100) / 100;
	document.getElementById('oldlaptopCPS').innerHTML = cleanlaptopsCPSTotal;
	updatenyanPer();

};
//Upgrade Item Three End


// Upgrade Item Four Start
var hirepis = 0;
var hirepisPercent = 1;
function buyhirepis(){
    var hirepisCost = Math.floor(100 * Math.pow(1.20,hirepis));   
    if(nyanCoin >= hirepisCost){                                   
        hirepis = hirepis + 1; 
		hirepisPercent = hirepisPercent + 0.15;
    	nyanCoin = nyanCoin - hirepisCost;                         
        document.getElementById('hirepis').innerHTML = hirepis;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(100 * Math.pow(1.20,hirepis));       
    document.getElementById('hirepisCost').innerHTML = nextCost;
	
	var hirepisCPSTotal = Math.round((raspberrypisCPS * hirepisPercent) * 100) / 100;
	document.getElementById('raspberrypisCPS').innerHTML = hirepisCPSTotal;
	updatenyanPer();

};
//Upgrade Item Four End


//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// Random Item One Start
var begRedditNumber = 0;
function begReddit(){
	begRedditNumber = begRedditNumber + 1;
	var redditBeg = Math.floor(Math.random()*2) + 1;
	nyanCoin = nyanCoin + redditBeg;
    document.getElementById('begRedditNumber').innerHTML = begRedditNumber;  
	document.getElementById('nyanCoin').innerHTML = nyanCoin; 
}
// Random Item One End


// Random Item Two Start
var soloMineNumber = 0;
function soloMine(){
	soloMineNumber = soloMineNumber + 1;
	var soloblock = Math.random() * 999 + 1;
		if (soloblock < 999){ // 0-999
			var soloMineNyan = 0;
			}
		else { // 1000
			var soloMineNyan = 337;
			}
	nyanCoin = nyanCoin + soloMineNyan;
	document.getElementById('soloMineNumber').innerHTML = soloMineNumber;  
	document.getElementById('nyanCoin').innerHTML = nyanCoin; 
}
// Random Item Two End

// Random Item Three Start
var poolMineNumber = 0;
function poolMine(){
	poolMineNumber = poolMineNumber + 1;
	var poolblock = Math.random() * 999 + 1;
		if (poolblock < 990){ // 0-990
			var poolMineNyan = 0;
			}
		else { // 991-1000
			var poolMineNyan = 50;
			}
	nyanCoin = nyanCoin + poolMineNyan;
	document.getElementById('poolMineNumber').innerHTML = poolMineNumber;  
	document.getElementById('nyanCoin').innerHTML = nyanCoin; 
}
// Random Item Three End

//Start Loop
window.setInterval(function(){
		
	nyanClick(cursors * (cursorsCPS * cursorsPercent));
	nyanClick(oldlaptops * (oldlaptopsCPS * cleanlaptopsPercent));
	nyanClick(raspberrypis * (raspberrypisCPS * hirepisPercent));
	nyanClick(cheapdesktops * cheapdesktopsCPS);
	nyanClick(graphicscards * graphicscardsCPS);
	nyanClick(amdcards * amdcardsCPS);
	nyanClick(asicminers * asicminersCPS);
	nyanClick(miningrigs * miningrigsCPS);
	nyanClick(supercomputers * supercomputersCPS);
	nyanClick(shops * shopsCPS);
	nyanClick(farms * farmsCPS);
	updatenyanPer();
	updatenyanperClick();
	
}, 1000);
//End Loop
