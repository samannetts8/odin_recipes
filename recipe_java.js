function showIntroPage() {
    document.querySelector('.post_button').style.display='block';
    document.querySelector('#enter_button').style.display='none';
}

//Button Press Animation
const enter_button = document.getElementById("enter_button");

enter_button.addEventListener("click", () => {
    enter_button.classList.add("animate_enter_button");
    setTimeout(() => {enter_button.classList.remove("animate_enter_button");
        showIntroPage();
    },400);

});