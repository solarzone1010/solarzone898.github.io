let ord=[0];
let gens=[0,0,0,0,0,0];
let oldgens=[-1,-1,-1,-1,-1,-1];
//function displayOrd()
function ordIncr_(){ord[0]++;}
function genIncr(n){
  if(ord[0]>=10**(n+1)*(gens[n]+1)**(n+1)){
    gens[n]++;
    ord[0]-=10**(n+1)*gens[n]**(n+1);
  }
}
function genIncr10(n){
  console.log('a');
  for(let i=0;i++;i<10){genIncr(n);}
}


let gen0=undefined
let gen1=undefined
let gen2=undefined
let gen3=undefined
let gen4=undefined
let gen5=undefined

let update=setInterval(()=>{
                             document.getElementById('ord').innerHTML=ord.toString();
                             document.getElementById('t1-gen').innerHTML=`x${gens[0]}`;
                             document.getElementById('t1-gen-cost').innerHTML=''+(gens[0]+1)*10;
                             document.getElementById('t2-gen').innerHTML=`x${gens[1]}`;
                             document.getElementById('t2-gen-cost').innerHTML=''+(gens[1]+1)**2*100;
                             document.getElementById('t3-gen').innerHTML=`x${gens[2]}`;
                             document.getElementById('t3-gen-cost').innerHTML=''+(gens[2]+1)**3*1000;
                             document.getElementById('t4-gen').innerHTML=`x${gens[3]}`;
                             document.getElementById('t4-gen-cost').innerHTML=''+(gens[3]+1)**4*1e4;
                             document.getElementById('t5-gen').innerHTML=`x${gens[4]}`;
                             document.getElementById('t5-gen-cost').innerHTML=''+(gens[4]+1)**5*1e5;
                             document.getElementById('t6-gen').innerHTML=`x${gens[5]}`;
                             document.getElementById('t6-gen-cost').innerHTML=''+(gens[5]+1)**6*1e6;

                             if(oldgens[0]!=gens[0]){
                               clearInterval(gen0);
                               gen0=setInterval(()=>{ord[0]+=gens[0]>20?Math.round(gens[0]/100):1;},gens[0]>0?(gens[0]>=100?10:1000/gens[0]):1e20);
                             }
                             if(oldgens[1]!=gens[1]){
                               clearInterval(gen1);
                               gen1=setInterval(()=>{gens[0]+=gens[1]>20?Math.round(gens[1]/20):1;},gens[1]>0?(gens[1]>=20?10:1000/gens[1]):1e20);
                             }
                             if(oldgens[2]!=gens[2]){
                               clearInterval(gen2);
                               gen2=setInterval(()=>{gens[1]+=gens[2]>20?Math.round(gens[2]/20):1;},gens[2]>0?(gens[2]>=20?10:1000/gens[2]):1e20);
                             }
                             if(oldgens[3]!=gens[3]){
                               clearInterval(gen3);
                               gen3=setInterval(()=>{gens[2]+=gens[3]>20?Math.round(gens[3]/20):1;},gens[3]>0?(gens[3]>=20?10:1000/gens[3]):1e20);
                             }
                             if(oldgens[4]!=gens[4]){
                               clearInterval(gen4);
                               gen4=setInterval(()=>{gens[3]+=gens[4]>20?Math.round(gens[4]/20):1;},gens[4]>0?(gens[4]>=20?10:1000/gens[4]):1e20);
                             }
                             if(oldgens[5]!=gens[5]){
                               clearInterval(gen5);
                               gen5=setInterval(()=>{gens[4]+=gens[5]>20?Math.round(gens[5]/20):1;},gens[5]>0?(gens[5]>=20?10:1000/gens[5]):1e20);
                             }
                             oldgens=gens.slice()
                           },20)
