const title=document.getElementById("title");
const description=document.querySelector(".description");
//////////

title.textContent="Exercise 02: DOM Manipulation";
description.textContent="This is the description paragraph.";
title.style.fontStyle="italic";
description.style.fontStyle="sans-serif";

description.classList.add("active");

