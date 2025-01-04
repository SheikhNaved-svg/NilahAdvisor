import {ref} from 'vue';
import gsap from 'gsap';

export function useNav(){
let togglemenu=ref(false)
let sidebar=ref(null)
let sidemenu=ref(null)

const toggleFunction=()=>{
    togglemenu.value=!togglemenu.value;
    const tl=gsap.timeline();
    const tl2=gsap.timeline();
    if(togglemenu.value){
        tl.to(sidebar.value,{duration:.4,x:'0%',ease:"power1.inOut"})
        tl2.to(sidemenu.value.children, { duration: .5, opacity: 1, stagger: 0.1,delay:.4,y:'0%',ease:'power2.out' });
    }
    else{
        tl.to(sidebar.value,{duration:.3,x:'100%',ease:"power1.inOut"})
        tl.to(sidemenu.value.children,{duration:.5,opacity:0,y:'20px'})
    } 
}

return{
    
        togglemenu,
        sidebar,
        sidemenu,
        toggleFunction,
      
}
}