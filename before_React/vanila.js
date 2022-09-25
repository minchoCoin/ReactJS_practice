const button = document.querySelector(".test");
    const span = document.querySelector(".count");
    let counter=0;
    function handleClick(){
        counter++;
        span.innerText = "Total Click :"+counter;
    }
    button.addEventListener("click",handleClick);