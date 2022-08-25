const container = document.querySelector('.container');
container.style.margin = "2rem 0";

const title = document.querySelector('#title');
title.style.fontSize = "2rem";
title.style.textAlign = "center";
title.style.fontFamily = "sans-serif";

const totalNum = document.querySelector('#total-num');
totalNum.style.fontSize = "1.5rem";
totalNum.style.textAlign = "center";
totalNum.style.fontFamily = "sans-serif";

const counter = document.querySelector('#counter');
counter.innerHTML = countries.length;

const subtitle = document.querySelector('#subtitle');
subtitle.style.margin = "5px 0px";
subtitle.style.fontSize = "1rem";
subtitle.style.textAlign = "center";
subtitle.style.fontFamily = "sans-serif";

const author = document.querySelector('#author');
author.style.textDecoration = "underline"
author.style.fontSize = ".8rem";
author.style.margin = "1rem 0px";
author.style.textAlign = "center";
author.style.fontFamily = "sans-serif";

const countriesGenerator = document.querySelector('#countries-generator');
countriesGenerator.style.display = "grid";
countriesGenerator.style.gridTemplateColumns = "repeat(auto-fill, minmax(140px, 1fr)";
countriesGenerator.style.gridAutoRows = "4.5rem";
countriesGenerator.style.gridGap = ".5rem";
countriesGenerator.style.margin = "0 5rem";

const countriesArr = countries;
//console.log(countriesArr);
let itemContainer;
for(const country of countriesArr){
    itemContainer = document.createElement('div');
    itemContainer.style.display = "flex";
    itemContainer.style.alignItems = "center";
    itemContainer.style.justifyContent = "center";
    countriesGenerator.appendChild(itemContainer);
    itemContainer.style.boxShadow = "0 0 4px #ddd";
    item = document.createElement('p');
    item.className = "country";
    item.textContent = country;
    itemContainer.appendChild(item);
    item.style.textAlign = "center";
    item.style.fontFamily = "sans-serif";
    item.style.textTransform = "uppercase";
    item.style.fontSize = ".8rem";
    item.style.fontWeight = "bolder";
}