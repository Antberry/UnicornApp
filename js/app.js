'use strict';

var uniLocation = ["Field", "Barn", "Lake", "Woods"];

var unicorns = [];

var barnTable = document.getElementById("barn");
var fieldTable = document.getElementById("field");
var lakeTable = document.getElementById("lake");
var woodTable = document.getElementById("woods");

var selectName = document.getElementById("name");
var selectLocation = document.getElementById("location");

var locationform = document.getElementById("locationform");

function Unicorn(name){
    this.name = name;
    this.location = "Barn";
    unicorns.push(this);
}

new Unicorn('Shiny Unicorn');
new Unicorn('Pointy Unicorn');
new Unicorn('Hairy Unicorn');
new Unicorn('Happy Unicorn');
new Unicorn('Crappy Unicorn');

function populateBarn(){
    
    //populate barn field
    var ul = document.createElement("ul");
    barnTable.appendChild(ul);
    for(var i = 0; i < unicorns.length; i++){
        if(unicorns[i].location === "Barn"){
            var li = document.createElement("li");
            li.textContent = unicorns[i].name;
            ul.appendChild(li);
        }
    }
}

function populateField(){
    
    //populate field
    var ul = document.createElement("ul");
    fieldTable.appendChild(ul);
    for(var i = 0; i < unicorns.length; i++){
        if(unicorns[i].location === "Field"){
            var li = document.createElement("li");
            li.textContent = unicorns[i].name;
            ul.appendChild(li);
        }
    }
}

function populateWoods(){
    
    //populate woods field
    var ul = document.createElement("ul");
    woodTable.appendChild(ul);
    for(var i = 0; i < unicorns.length; i++){
        if(unicorns[i].location === "Woods"){
            var li = document.createElement("li");
            li.textContent = unicorns[i].name;
            ul.appendChild(li);
        }
    }
}

function populateLake(){
    
    //populate lake field
    var ul = document.createElement("ul");
    lakeTable.appendChild(ul);
    for(var i = 0; i < unicorns.length; i++){
        if(unicorns[i].location === "Lake"){
            var li = document.createElement("li");
            li.textContent = unicorns[i].name;
            ul.appendChild(li);
        }
    }
}

function populateDropDown(){
        //populate name selector
    for(var i = 0; i < unicorns.length; i++){
        var opt = unicorns[i].name;
        var element = document.createElement("option");
        element.textContent = opt;
        element.value = opt;
        selectName.appendChild(element);
    }
    
    //populate location selector
    for(var i = 0; i < uniLocation.length; i++){
        var opt = uniLocation[i];
        element = document.createElement("option");
        element.textContent = opt;
        element.value = opt;
        selectLocation.appendChild(element);
    }
}

function handleFormSubmit(event){
    event.preventDefault();
    var name = event.target.name.value;
    var newLocation = event.target.location.value;
    for(let i = 0; i < unicorns.length; i++){
        if(unicorns[i].name === name){
            unicorns[i].location = newLocation;
        }
    }
    
    // Clear DOM
    clearScreen();
    render();
}

function render(){
    populateBarn();
    populateField();
    populateWoods();
    populateLake();
    populateDropDown();
    
}

function clearScreen(){
    barnTable.innerHTML = '';
    fieldTable.innerHTML = '';
    woodTable.innerHTML = '';
    lakeTable.innerHTML = '';
    selectLocation.innerHTML = '';
    selectName.innerHTML = '';
}

locationform.addEventListener("submit", handleFormSubmit);

render();
