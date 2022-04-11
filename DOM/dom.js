// export const heading = document.getElementById("heading");
// // heading.style.color = "red";
// // heading.style.backgroundColor = "black";

// heading.className = "changeBG";

// console.log(heading);
// // const heading2 = document.getElementById("heading");
// // console.log(heading);

// export const list = document.getElementById("list");

// QuerySelector 
// export const list = document.querySelector("ul");

// export const li = document.querySelector("li");

// export const lis = document.querySelectorAll("li");
// lis[1].style.backgroundColor = "red";
//changes the style of all the list element.
// for (let i = 0; i <lis.length; i++){
//     lis[i].style.backgroundColor = "royalblue";
// }
// lis[0].style.cssText = "background-color: coral; color:white; font-size:25px";


// export const listItem = document.querySelectorAll(".listItem");
// console.log(listItem);


// export const heading = document.querySelector(".heading");
// export const btn = document.querySelector(".btn");
// export const paragraph = document.querySelector(".paragraph");
// console.log(paragraph.getAttribute("id"));
// console.log(paragraph.getAttribute("class"));

// // SET ATTRIBUTE
// paragraph.setAttribute("style", "background-color: coral");

// // Remove attribute
// paragraph.removeAttribute("style");

// // has attribute
// console.log(paragraph.hasAttribute("class"));

export const listItem = document.getElementById("list-item");
console.log(listItem.parentNode);

export const list = document.querySelector(".list");
console.log(list.childNodes);

//create list and add text inside the list
const newE1 = document.createElement("li");
const text = document.createTextNode("Helloooo");
newE1.appendChild(text);
console.log(newE1);

// add the new list in the exsiting list
list.appendChild(newE1)
console.log(list);