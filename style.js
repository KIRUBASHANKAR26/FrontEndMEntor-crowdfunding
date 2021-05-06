///////-------Menu toggle--------------------

const menu = document.getElementById("menu");
const menuContent = document.getElementById("nav-items");

menu.addEventListener("click", () => {
    menuContent.classList.toggle("active");
    menu.classList.toggle("active");
})

//////-------add and remove-the-[back-the-project]-cards----------

const bookmark = document.getElementById("bookmark");
const bookmarkBtn = document.querySelector("#bookmark p");
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("active");
    if (bookmark.classList.contains("active")) {
        bookmarkBtn.innerHTML = "Bookmarked";
    } else {
        bookmarkBtn.innerHTML = "Bookmark";
    };
})
///add
const backCards = document.querySelectorAll(".back-card");
backCards.forEach(backCard => {
    backCard.addEventListener("click", () => {
        removeActiveClass();
        backCard.classList.add("active");
    })
})
///remove
function removeActiveClass() {
    backCards.forEach(backCard => {
        backCard.classList.remove('active');
    })
}




///////---------back the project button--------------
const backBtn = document.getElementById("back-btn");
const projectContent = document.getElementById("back-project-wrapper");
const Close = document.getElementById("close")

backBtn.addEventListener("click", () => {
    projectContent.classList.add("show");
})

Close.addEventListener("click", () => {
    projectContent.classList.remove("show");
})

////////////

const bambooReward = document.getElementById("bamboo-reward");
const blackReward = document.getElementById("Black-Edition-reward");
const sec = document.getElementById("sec")
const thridId = document.getElementById("three");
const checkers = document.querySelectorAll(".checker");
bambooReward.addEventListener("click", () => {
    projectContent.classList.add("show");
    sec.checked=true;
    checkers.forEach((checker,idx) => {
        console.log(checker.checked)
        if(checker.checked == true){
            activeReward(idx)
        }
    })
})
blackReward.addEventListener("click", () => {
    projectContent.classList.add("show");
    thridId.checked=true;
    checkers.forEach((checker,idx) => {
        console.log(checker.checked)
        if(checker.checked == true){
            activeReward(idx)
        }
    })
})

function activeReward(index){
    const backCards = document.querySelectorAll(".back-card");
    backCards.forEach((backCard,idx) => {
        if(idx == index){
            console.log(idx,index);
            removeActiveClass();
            backCard.classList.add("active");
            backCard.scrollIntoView({behavior: "smooth"});
      
        }
    })
}

const amountInput = document.getElementById("pledge-text");
const amountInput2 = document.querySelector(".amount-input");
const wrapperEnter = document.getElementById("wrapper-enter");
const wrapperEnter2 = document.getElementById("wrapper-enter-2");
form = document.getElementById("form");
form2 = document.getElementById("form-2");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})
function checkInput(){
    const amountInputValue = amountInput.value;
    
    if(amountInputValue === ''){
        wrapperEnter.classList.add("error");  
    }
    else{
        confirmation();
        wrapperEnter.classList.remove("error"); 
        amountInput.value="";
    }
}
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputtwo();
})
function checkInputtwo(){
    const amountInputValue2 = amountInput2.value;
    console.log(amountInputValue2);
    if(amountInputValue2 === ''){
        wrapperEnter2.classList.add("error");  
    }
    else{
        confirmation();
        wrapperEnter2.classList.remove("error"); 
        amountInput2.value="";
    }
}

///////------thanks-message---------
function confirmation(){

    const thanksMessage = document.getElementById("thanks-wrapper");
    const continueBtns = document.querySelectorAll("#continue");
    const gotIt = document.getElementById("got-it");
    continueBtns.forEach(continueBtn => {
        //continueBtn.addEventListener("click", () => {
        thanksMessage.classList.add("show");
   
    })
    //})
    gotIt.addEventListener("click", () => {
        thanksMessage.classList.remove("show");
        projectContent.classList.remove("show");
    })
}

