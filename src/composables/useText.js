import { ref ,onMounted} from "vue";
import gsap from "gsap";
export function useText(){
let textone=ref(null)
let texttwo=ref(null)
let textthree=ref(null)
const fun=()=>{
const tl=gsap.timeline({repeat:-1,ease:"power1.out"});
   tl.to(textone.value,{duration:.7,y:'-100%',opacity:0,delay:1})
   .to(texttwo.value,{duration:.7,y:'-100%'},'<')
   .to(texttwo.value,{duration:.7,y:'-200%',opacity:0,delay:1})
   .to(textthree.value,{duration:.7 ,y:'-200%',},'<')
   .to(textthree.value,{duration:.7,y:'-300%',opacity:0,delay:1})
   .to(textone.value,{y:'0%',opacity:1},'<')
}
onMounted(()=>{
    fun();
})
return{
    textone,textthree,texttwo
}

}