function showIntroPage() {
    document.querySelector('.post_button').style.display='block';
    document.querySelector('#enter_button').style.display='none';
}

//Button Press Animation
const enter_button = document.getElementById("enter_button");
const main_heading = document.getElementById("main_heading");
const text_intro = document.getElementById("text_intro");
const welcome_message = document.getElementById("welcome_message");
const recipe_links = document.getElementsByClassName("recipe_links")


enter_button.addEventListener("click", () => {
    enter_button.classList.add("animate_enter_button");
    setTimeout(() => {enter_button.classList.remove("animate_enter_button");
        showIntroPage();
    },500);
    setTimeout(() => {main_heading.classList.add("enter_screen");},1000);    
    setTimeout(() => {text_intro.classList.add("enter_screen");},1500);        
    setTimeout(() => {welcome_message.classList.add("enter_screen");},2000);        
    setTimeout(() => {recipe_links.classList.add("enter_screen");},2500);
});