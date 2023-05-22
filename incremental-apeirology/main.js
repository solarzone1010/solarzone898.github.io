let ord=[0];
let gens=[0,0,0,0,0,0,0,0];
let oldgens=[-1,-1,-1,-1,-1,-1,-1,-1];
let layer1Unlocked=0;
let unlockLayer1=0;
let ordPointsX=0;
let tab=0;

function obsfucate(x){return [...Array(x.length)].map(x=>String.fromCodePoint(Math.min(Math.floor(Math.random()*94+33),127))).join('').replaceAll('<','>')}
function displayOrd(x){
  if(x<1e7){return x.toLocaleString('en').replaceAll(',',' ');}
  else{
    let m=0;
    let e=0;
    if(x>=1e21){
      if(x==Infinity){return obsfucate('Infinity');}
      m=x.toString().split('e')[0];
      if(!m.match(/\./)){m+='.'}
      m=m.padEnd(8,'0');
      e=x.toString().split('e')[1].slice(1);
    }
    else{
      m=`${x.toString()[0]}.${x.toString().slice(1)}`.padEnd(8,'0');
      e=x.toString().length-1;
    }
    return `${m.slice(0,5)} ${m.slice(5,8)}∙10<sup>${e}</sup>`
  }
}
function ordIncr_(){ord[0]++;}
function genIncr(n){
  if(ord[0]>=10**(n+1)*(gens[n]+1)**(n+1)){
    gens[n]++;
    ord[0]-=10**(n+1)*gens[n]**(n+1);
  }
}
function genDecr(n){
  if(gens[n]>0){
    ord[0]+=10**(n+1)*gens[n]**(n+1);
    gens[n]--;
  }
}
function genIncr10(n){
  if(ord[0]>=[...Array(10).keys()].map(x=>10**(n+1)*(gens[n]+x+1)**(n+1)).reduce((x,y)=>(x+y))){
    for(let i=0;i<10;i++){
      genIncr(n);
    }
  }
}
function doLayer1(){
  layer1Unlocked++;
  ordPointsX+=layer1Unlocked;
  let i=0;
  let c=setInterval(()=>{gens=[0,0,0,0,0,0,0,0];i++;if(i==2){clearInterval(c);}},50);
  i=0;
  c=setInterval(()=>{ord=[0];i++;if(i==5){clearInterval(c);}},50);
}
function transfer(n){tab=n;}


let gen0=undefined
let gen1=undefined
let gen2=undefined
let gen3=undefined
let gen4=undefined
let gen5=undefined
let gen6=undefined
let gen7=undefined


let update=setInterval(()=>{
                             document.getElementById('ord').innerHTML=displayOrd(ord[0]);
                             document.getElementById('t1-gen').innerHTML=`x${displayOrd(gens[0])}`;
                             document.getElementById('t1-gen-cost').innerHTML=displayOrd((gens[0]+1)*10);
                             document.getElementById('t2-gen').innerHTML=`x${displayOrd(gens[1])}`;
                             document.getElementById('t2-gen-cost').innerHTML=displayOrd((gens[1]+1)**2*100);
                             document.getElementById('t3-gen').innerHTML=`x${displayOrd(gens[2])}`;
                             document.getElementById('t3-gen-cost').innerHTML=displayOrd((gens[2]+1)**3*1000);
                             document.getElementById('t4-gen').innerHTML=`x${displayOrd(gens[3])}`;
                             document.getElementById('t4-gen-cost').innerHTML=displayOrd((gens[3]+1)**4*1e4);
                             document.getElementById('t5-gen').innerHTML=`x${displayOrd(gens[4])}`;
                             document.getElementById('t5-gen-cost').innerHTML=displayOrd((gens[4]+1)**5*1e5);
                             document.getElementById('t6-gen').innerHTML=`x${displayOrd(gens[5])}`;
                             document.getElementById('t6-gen-cost').innerHTML=displayOrd((gens[5]+1)**6*1e6);
                             document.getElementById('t7-gen').innerHTML=`x${displayOrd(gens[6])}`;
                             document.getElementById('t7-gen-cost').innerHTML=displayOrd((gens[6]+1)**7*1e7);
                             document.getElementById('t8-gen').innerHTML=`x${displayOrd(gens[7])}`;
                             document.getElementById('t8-gen-cost').innerHTML=displayOrd((gens[7]+1)**8*1e8);

                             if(!layer1Unlocked){document.getElementById('layer-1').style.display='none';}
                             else{document.getElementById('layer-1').style.display='inline';}
                             if(!unlockLayer1||tab!=0){document.getElementById('unlock-layer-1').style.display='none';}
                             else{
                               if(layer1Unlocked){document.getElementById('unlock-layer-1').innerHTML=`Sacrifice everything for ${layer1Unlocked+1} somethings (WIP)`;}
                               else{document.getElementById('unlock-layer-1').innerHTML=`Sacrifice everything for ${layer1Unlocked+1} `+obsfucate('somethings')+' (WIP)';}
                               document.getElementById('unlock-layer-1').style.display='inline';}

                             if(tab==0){document.getElementById('l0-1').style.display='inline';}
                             else{document.getElementById('l0-1').style.display='none';}

                             if(tab==1){document.getElementById('l1-0').style.display='inline';}
                             else{document.getElementById('l1-0').style.display='none';}

                             if(ord[0]>=1e10*10**layer1Unlocked){unlockLayer1=1;}
                             else{unlockLayer1=0;}

                             if(oldgens[0]!=gens[0]){
                               clearInterval(gen0);
                               let gen0_=gens[0];
                               gen0=setInterval(()=>{ord[0]+=gen0_>50?Math.round(gen0_):1;},gen0_>0?(gen0_>=50?10:1000/gen0_):1e20);
                             }
                             if(oldgens[1]!=gens[1]){
                               clearInterval(gen1);
                               let gen1_=gens[1];
                               gen1=setInterval(()=>{gens[0]+=gens[1]>50?Math.round(gens[1]/50):1;},gens[1]>0?(gens[1]>=50?10:1000/gens[1]):1e20);
                             }
                             if(oldgens[2]!=gens[2]){
                               clearInterval(gen2);
                               let gen2_=gens[2];
                               gen2=setInterval(()=>{gens[1]+=gens[2]>50?Math.round(gens[2]/50):1;},gens[2]>0?(gens[2]>=50?10:1000/gens[2]):1e20);
                             }
                             if(oldgens[3]!=gens[3]){
                               clearInterval(gen3);
                               let gen3_=gens[3];
                               gen3=setInterval(()=>{gens[2]+=gens[3]>50?Math.round(gens[3]/50):1;},gens[3]>0?(gens[3]>=50?10:1000/gens[3]):1e20);
                             }
                             if(oldgens[4]!=gens[4]){
                               clearInterval(gen4);
                               let gen4_=gens[4];
                               gen4=setInterval(()=>{gens[3]+=gens[4]>50?Math.round(gens[4]/50):1;},gens[4]>0?(gens[4]>=50?10:1000/gens[4]):1e20);
                             }
                             if(oldgens[5]!=gens[5]){
                               clearInterval(gen5);
                               let gen5_=gens[5];
                               gen5=setInterval(()=>{gens[4]+=gens[5]>50?Math.round(gens[5]/50):1;},gens[5]>0?(gens[5]>=50?10:1000/gens[5]):1e20);
                             }
                             if(oldgens[6]!=gens[6]){
                               clearInterval(gen6);
                               let gen6_=gens[6];
                               gen6=setInterval(()=>{gens[5]+=gens[6]>50?Math.round(gens[6]/50):1;},gens[6]>0?(gens[6]>=50?10:1000/gens[6]):1e20);
                             }
                             if(oldgens[7]!=gens[7]){
                               clearInterval(gen7);
                               let gen7_=gens[7];
                               gen7=setInterval(()=>{gens[6]+=gens[7]>50?Math.round(gens[7]/50):1;},gens[7]>0?(gens[7]>=50?10:1000/gens[7]):1e20);
                             }
                             oldgens=gens.slice()
                           },20)
