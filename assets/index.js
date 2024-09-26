let text = document.querySelectorAll(".text")
bumpGenerator(text)




function bumpGenerator(textElement) {
    textElement.forEach(element => {
        const arr = Array.from(element.innerText)
        element.innerHTML = "";
        arr.forEach(e => {
            if(e == " "){
                element.innerHTML += e
            }
            else{
                element.innerHTML += `<span class="span">${e}</span>`;
            }
        });
        let span = document.querySelectorAll("span")
        span.forEach(element => {
            element.addEventListener("mouseover", ()=>{
                element.classList.add("bump");
            })
            element.addEventListener("mouseout", ()=>{
                setTimeout(()=>{
    
                    element.classList.remove("bump");
                }, 600)
            })
        });
       
    }); 
}


function portfolio(){
    pageLoader.style.opacity = "1";
    main.forEach(t => {
        t.style.display = "none"
    });
    linkBtn.forEach(btn => btn.classList.remove("selected"))
    setTimeout(()=>{     
        homePage.style.display = "block"
    },500)
    setTimeout(()=>{
        pageLoader.style.opacity = "0"
    }, 600)
}

let projectImage = document.querySelector(".project-img")
let proImage = projectImage.firstElementChild
let projectVideo = document.querySelector(".pro-video")
let main = document.querySelectorAll("main")
let projectPage = document.querySelector(".projects")
let technologyPage = document.querySelector(".technology")
let aboutPage = document.querySelector(".about-main")
let pageLoader = document.querySelector(".loader")
let homePage = document.querySelector(".home") 


// projectImage.addEventListener("mouseover", ()=>{
//     projectImage.style.transform = "scaley(1.1)"
//     // projectVideo.muted = true
//     proImage.style.display = "none";
//     projectVideo.style.display = "block";
//     projectVideo.play()
// });
// projectImage.addEventListener("mouseout", ()=>{
//     projectImage.style.transform = "scale(1)"
//     proImage.style.display = "block";
//     projectVideo.style.display = "none";
//     projectVideo.pause()
// });

linkBtn = document.querySelectorAll(".btn-a")
projectBtn = document.querySelector(".project-btn")
technologyBtn = document.querySelector(".technology-btn")
aboutBtn = document.querySelector(".about-btn")


projectBtn.addEventListener("click", ()=>{
    pageLoader.style.opacity = "1";
    main.forEach(t => {
        t.style.display = "none"
    });
    linkBtn.forEach(btn => btn.classList.remove("selected"))
    projectBtn.classList.add("selected")
    setTimeout(()=>{

        projectPage.style.display = "block"
    },500)
    setTimeout(()=>{
        pageLoader.style.opacity = "0"
    }, 600)
})
technologyBtn.addEventListener("click", ()=>{
    pageLoader.style.opacity = "1";
    main.forEach(t => {
        t.style.display = "none"
    });
    linkBtn.forEach(btn => btn.classList.remove("selected"))
    technologyBtn.classList.add("selected")
    setTimeout(()=>{  
        technologyPage.style.display = "flex"
    }, 500)
    setTimeout(()=>{
        pageLoader.style.opacity = "0"
    }, 600)
})
aboutBtn.addEventListener("click", ()=>{
    pageLoader.style.opacity = "1";
    main.forEach(t => {
        t.style.display = "none"
    });
    linkBtn.forEach(btn => btn.classList.remove("selected"))
    aboutBtn.classList.add("selected")
    setTimeout(()=>{     
        aboutPage.style.display = "flex"
    },500)
    setTimeout(()=>{
        pageLoader.style.opacity = "0"
    }, 600)
})
