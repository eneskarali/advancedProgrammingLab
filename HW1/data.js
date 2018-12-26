"use strict";
function add() {
    
	data.push(inputName.value);
	data.push(inputMid.value);
	data.push(inputFinal.value);
	
	inputName.value='';
	inputMid.value='';
	inputFinal.value='';
	
	statuss.innerText = "Added!";

	}

	function print() {
	
	var table = document.getElementById("printTable");
	var Tindex=0;
    
	var i;
	for(i=2;i<=data.length;i=i+3){
	
	Tindex=Tindex+1;
	var row = table.insertRow(Tindex);
	
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	
	cell1.innerHTML=data[i-2];
	cell2.innerHTML=data[i-1];
	cell3.innerHTML=data[i];
	
	}
	
	statuss.innerText = "Printed!";
}
function average() {
    var table = document.getElementById("averageTable");
	var Tindex=0;
	
	var i;
    for(i=2;i<=data.length;i=i+3){
	
	Tindex=Tindex+1;
	var row = table.insertRow(Tindex);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	
	cell1.innerHTML=data[i-2];
	cell2.innerHTML=(Number(data[i-1])+Number(data[i]))/2;
	
	}
	
	statuss.innerText = "Calculated!";

}

function maximum() {
	var i=0;
	var max=0;
	var maxIndex=0;
	for(i=0;i<data.length;i=i+1){
		if(i%3!=0){
			if((Number(data[i])+Number(data[i+1]))>max){
				max=Number(data[i])+Number(data[i+1]);
				maxIndex=i;
			}
			i=i+1;
		}
	}
	if(maxIndex>0 || max>0){
	var table = document.getElementById("maxTable");
	var row = table.insertRow(1);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	cell1.innerHTML=data[maxIndex-1];
	cell2.innerHTML=max/2;
	}
	
	statuss.innerText = "Found!";
}