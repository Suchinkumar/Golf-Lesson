var crsr=document.querySelector("#cursor")
var blur=document.querySelector('#cursorblur')
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x-12.5+"px"
    crsr.style.top=dets.y-12.5+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
})

gsap.to("#bg",{
    backgroundColor:"black",
    duration:1,
    height:"120px",
    scrollTrigger:{
        trigger:"#bg",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor:"black",
    height: "400vh",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -4%",
        // end:"bottom",
        scrub:2
    }
})


var h4all=document.querySelectorAll("#bg h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale=2
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #95C11E"
        crsr.style.backgroundColor="#95C11E"
    })
})
gsap.from("#aboutus img,#aboutusin",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 50%",
        end:"top 30%",
        scrub:3
    }
    })
    
    gsap.from("#card-container",{
        scale:0.8,
        opacity:0,
        // duration:1,
        stagger:0.5,
        scrollTrigger:{
            trigger:"#card-container",
            scroller:"body",
            start:"top 90%",
            end:"top 80%",
            scrub:3
        }
    })
    gsap.from("#colon1",{
        y:-100,
         x:-100,
        scrollTrigger:{
            trigger:"#colon1",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:8
        }
    })
    gsap.from("#colon2",{
        y:-100,
        x:100,
        scrollTrigger:{
            trigger:"#colon2",
            scroller:"body",
            start:"top 75%",
            end:"top 70%",
            scrub:8
        }
    })

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:7
    }
})
