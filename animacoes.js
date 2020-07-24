function main(){
    const head = document.querySelector(".headerr");
    const iconsDiv = document.querySelector(".iconsMenu");
    const btnHid = document.querySelector(".btnHid");

    window.addEventListener("scroll",function (e){
        //Header
        if(pageYOffset > 10){
            head.style.transition = "1s";
            head.style.top = "-100px";
            iconsDiv.style.transition = "1s";
            iconsDiv.style.left = "-4em";
        }

        if(pageYOffset < 50){
            head.style.top = "0px";
        } 
    });

    //Icons hidden
    btnHid.addEventListener("click",function(e){
        if(iconsDiv.style.left === "-4em"){
            iconsDiv.style.left = "0em";
        } else {
            iconsDiv.style.left = "-4em"
        }
    })

    //Scroll on click
    const menuBtn = document.querySelectorAll(".fontMenu");
    menuBtn.forEach(item=>{
        item.addEventListener("click",(e)=>e.preventDefault());
        item.addEventListener("click", function scrollProId(event){
            const el = event.target;
            const id = el.getAttribute('href');
            const to = document.querySelector(id).offsetTop;
            
            window.scroll({
                top: to -20,
                behavior: "smooth"
            })
            
        })
    })


}
main()
