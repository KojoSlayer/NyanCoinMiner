

var nyanCoin = 0;

function nyanClick(number){
    nyanCoin = nyanCoin + number;
    document.getElementById("nyanCoin").innerHTML = nyanCoin;
};

function updatenyanPer(){
    var nyanPer = (cursors * cursorsCPS) + (oldlaptops * oldlaptopsCPS) + (raspberrypis * raspberrypisCPS) + (cheapdesktops * cheapdesktopsCPS) + (graphicscards * graphicscardsCPS) + (amdcards * amdcardsCPS) + (asicminers * asicminersCPS) + (miningrigs * miningrigsCPS) + (supercomputers * supercomputersCPS) + (shops * shopsCPS) + (farms * farmsCPS);
    document.getElementById('nyanCoinPer').innerHTML = nyanPer;
};

function updatenyanperClick(){
	var nyanCoinPerClick = (1 + quickfingers);
	document.getElementById('nyanCoinPerClick').innerHTML = nyanCoinPerClick;
}


// Shop Item One Start
var cursors = 0;
var cursorsCPS = 0.25;
function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.05,cursors));     //works out the cost of this cursor
    if(nyanCoin >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	nyanCoin = nyanCoin - cursorCost;                          //removes the nyanCoin spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('nyanCoin').innerHTML = nyanCoin;  //updates the number of nyanCoin for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.05,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
	document.getElementById('cursorCPS').innerHTML = cursorsCPSTrue;
	updatenyanPer();
};
//Shop Item One End

// Shop Item Two Start
var oldlaptops = 0;
var oldlaptopsCPS = 0.50;
function buyoldlaptop(){
    var oldlaptopCost = Math.floor(100 * Math.pow(1.025,oldlaptops));   
    if(nyanCoin >= oldlaptopCost){                                   
        oldlaptops = oldlaptops + 1;                                   
    	nyanCoin = nyanCoin - oldlaptopCost;                         
        document.getElementById('oldlaptops').innerHTML = oldlaptops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(100 * Math.pow(1.025,oldlaptops));       
    document.getElementById('oldlaptopCost').innerHTML = nextCost;
	document.getElementById('oldlaptopCPS').innerHTML = oldlaptopsCPS;
	updatenyanPer();
};
//Shop Item Two End

// Shop Item Three Start
var raspberrypis = 0;
var raspberrypisCPS = 1;
function buyraspberrypi(){
    var raspberrypiCost = Math.floor(500 * Math.pow(1.050,raspberrypis));   
    if(nyanCoin >= raspberrypiCost){                                   
        raspberrypis = raspberrypis + 1;                                   
    	nyanCoin = nyanCoin - raspberrypiCost;                         
        document.getElementById('raspberrypis').innerHTML = raspberrypis;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(500 * Math.pow(1.050,raspberrypis));       
    document.getElementById('raspberrypiCost').innerHTML = nextCost;
	document.getElementById('raspberrypisCPS').innerHTML = raspberrypisCPS;
	updatenyanPer();
};
//Shop Item Three End

// Shop Item Four Start
var cheapdesktops = 0;
var cheapdesktopsCPS = 5;
function buycheapdesktop(){
    var cheapdesktopCost = Math.floor(1000 * Math.pow(1.1,cheapdesktops));   
    if(nyanCoin >= cheapdesktopCost){                                   
        cheapdesktops = cheapdesktops + 1;                                   
    	nyanCoin = nyanCoin - cheapdesktopCost;                         
        document.getElementById('cheapdesktops').innerHTML = cheapdesktops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(1000 * Math.pow(1.1,cheapdesktops));       
    document.getElementById('cheapdesktopCost').innerHTML = nextCost;
	document.getElementById('cheapdesktopsCPS').innerHTML = cheapdesktopsCPS;
	updatenyanPer();
};
//Shop Item Four End

// Shop Item Five Start
var graphicscards = 0;
var graphicscardsCPS = 10;
function buygraphicscard(){
    var graphicscardCost = Math.floor(1500 * Math.pow(1.15,graphicscards));   
    if(nyanCoin >= graphicscardCost){                                   
        graphicscards = graphicscards + 1;                                   
    	nyanCoin = nyanCoin - graphicscardCost;                         
        document.getElementById('graphicscards').innerHTML = graphicscards;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(1500 * Math.pow(1.15,graphicscards));       
    document.getElementById('graphicscardCost').innerHTML = nextCost;
	document.getElementById('graphicscardsCPS').innerHTML = graphicscardsCPS;
	updatenyanPer();
};
//Shop Item Five End

// Shop Item Six Start
var amdcards = 0;
var amdcardsCPS = 20;
function buyamdcard(){
    var amdcardCost = Math.floor(2500 * Math.pow(1.25,amdcards));   
    if(nyanCoin >= amdcardCost){                                   
        amdcards = amdcards + 1;                                   
    	nyanCoin = nyanCoin - amdcardCost;                         
        document.getElementById('amdcards').innerHTML = amdcards;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(2500 * Math.pow(1.25,amdcards));       
    document.getElementById('amdcardCost').innerHTML = nextCost;
	document.getElementById('amdcardsCPS').innerHTML = amdcardsCPS;
	updatenyanPer();
};
//Shop Item Six End

// Shop Item Seven Start
var asicminers = 0;
var asicminersCPS = 40;
function buyasicminer(){
    var asicminerCost = Math.floor(15000 * Math.pow(1.30,asicminers));   
    if(nyanCoin >= asicminerCost){                                   
        asicminers = asicminers + 1;                                   
    	nyanCoin = nyanCoin - asicminerCost;                         
        document.getElementById('asicminers').innerHTML = asicminers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(15000 * Math.pow(1.30,asicminers));       
    document.getElementById('asicminerCost').innerHTML = nextCost;
	document.getElementById('asicminersCPS').innerHTML = asicminersCPS;
	updatenyanPer();
};
//Shop Item Seven End

// Shop Item Eight Start
var miningrigs = 0;
var miningrigsCPS = 100;
function buyminingrig(){
    var miningrigCost = Math.floor(25000 * Math.pow(1.40,miningrigs));   
    if(nyanCoin >= miningrigCost){                                   
        miningrigs = miningrigs + 1;                                   
    	nyanCoin = nyanCoin - miningrigCost;                         
        document.getElementById('miningrigs').innerHTML = miningrigs;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(25000 * Math.pow(1.40,miningrigs));       
    document.getElementById('miningrigCost').innerHTML = nextCost;
	document.getElementById('miningrigsCPS').innerHTML = miningrigsCPS;
	updatenyanPer();
};
//Shop Item Eight End

// Shop Item Nine Start
var supercomputers = 0;
var supercomputersCPS = 500;
function buysupercomputer(){
    var supercomputerCost = Math.floor(50000 * Math.pow(1.50,supercomputers));   
    if(nyanCoin >= supercomputerCost){                                   
        supercomputers = supercomputers + 1;                                   
    	nyanCoin = nyanCoin - supercomputerCost;                         
        document.getElementById('supercomputers').innerHTML = supercomputers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(50000 * Math.pow(1.50,supercomputers));       
    document.getElementById('supercomputerCost').innerHTML = nextCost;
	document.getElementById('supercomputersCPS').innerHTML = supercomputersCPS;
	updatenyanPer();
};
//Shop Item Nine End

// Shop Item Ten Start
var shops = 0;
var shopsCPS = 1000;
function buyshop(){
    var shopCost = Math.floor(100000 * Math.pow(1.70,shops));   
    if(nyanCoin >= shopCost){                                   
        shops = shops + 1;                                   
    	nyanCoin = nyanCoin - shopCost;                         
        document.getElementById('shops').innerHTML = shops;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(100000 * Math.pow(1.70,shops));       
    document.getElementById('shopCost').innerHTML = nextCost;
	document.getElementById('shopsCPS').innerHTML = shopsCPS;
	updatenyanPer();
};
//Shop Item Ten End

// Shop Item Eleven Start
var farms = 0;
var farmsCPS = 10000;
function buyfarm(){
    var farmCost = Math.floor(1000000 * Math.pow(2,farms));   
    if(nyanCoin >= farmCost){                                   
        farms = farms + 1;                                   
    	nyanCoin = nyanCoin - farmCost;                         
        document.getElementById('farms').innerHTML = farms;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(1000000 * Math.pow(2,farms));       
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
    var quickfingersCost = Math.floor(10 * Math.pow(1.01,quickfingers));   
    if(nyanCoin >= quickfingersCost){                                   
        quickfingers = quickfingers + 1;                                   
    	nyanCoin = nyanCoin - quickfingersCost;                         
        document.getElementById('quickfingers').innerHTML = quickfingers;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(10 * Math.pow(1.01,quickfingers));       
    document.getElementById('quickfingersCost').innerHTML = nextCost;
	updatenyanperClick();
};
//Upgrade Item One End

// Upgrade Item Two Start
var autoscripts = 0;
function buyautoscripts(){
    var autoscriptsCost = Math.floor(20 * Math.pow(1.25,autoscripts));   
    if(nyanCoin >= autoscriptsCost){                                   
        autoscripts = autoscripts + 1;                                   
    	nyanCoin = nyanCoin - autoscriptsCost;                         
        document.getElementById('autoscripts').innerHTML = autoscripts;  
        document.getElementById('nyanCoin').innerHTML = nyanCoin; 
    };
    var nextCost = Math.floor(20 * Math.pow(1.25,autoscripts));       
    document.getElementById('autoscriptsCost').innerHTML = nextCost;
	
};
//Upgrade Item Two End



//Start Loop
window.setInterval(function(){
	
	nyanClick(cursors * cursorsCPS);
	nyanClick(oldlaptops * oldlaptopsCPS);
	nyanClick(raspberrypis * raspberrypisCPS);
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
