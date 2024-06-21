sidenav = document.querySelector(".sidenav")

function showsidenav(){
    sidenav.style.display="block";
}

function closesidenav(){
    sidenav.style.left="-60%";
}

majortop = document.querySelector(".major-top")
mskill = document.querySelector(".mskill")
mresume = document.querySelector(".mresume")
m1skill = document.querySelector(".m1skill")

function bars(){
    m1skill.style.display="block";
}
function barcl(){
    m1skill.style.display="none";
}

function ishrink(){
    mskill.style.width="60%";
    mresume.style.width="40%";
}
function iexpand(){
    mskill.style.width="40%";
    mresume.style.width="60%";
}
function oshrink(){
    mskill.style.width="50%";
    mresume.style.width="50%";
}

majorbottom = document.querySelector(".major-bottom")
mcontact = document.querySelector(".mcontact")
mproject = document.querySelector(".mproject")
mprojects = document.querySelector(".mprojects")

function proj(){
    mprojects.style.display="block";
}
function projcl(){
    mprojects.style.display="none";
}

function ibshrink(){
    mproject.style.width="60%";
    mcontact.style.width="40%";
}

function ibexpand(){
    mproject.style.width="40%";
    mcontact.style.width="60%";
}

function obshrink(){
    mproject.style.width="50%";
    mcontact.style.width="50%";
}