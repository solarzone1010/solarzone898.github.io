function FS(a,n){
  if(a==''){return'';}
  if(a.slice(-2)=='[]'){return a.slice(0,-2);}
  if(a=='[W]'){return '['.repeat(n)+']'.repeat(n);}
  let x=a.lastIndexOf('[]')+1;
  let i=x;
  let p=-2;
  while(p!=0){i--;p+=(a[i]=='[')?1:-1}
  let o=a.slice(0,i)+(a.slice(i,x-1)+']').repeat(n);
  let l=o.split('[').length-o.split(']').length;
  o+=']'.repeat(l);
  return o;
}
function fancy(a){
  if(/^(\[])*$/.test(a)){return (a.length/2).toString()}
  else{
  let x=a[0];
  let i=1;
  let p=2;
  while(p!=0){i++;p+=(a[i]=='[')?1:-1}
  let e=a.slice(1,i);
  let k=a.slice(0,i+1);
  let c=a.slice(i+1);
  i=0;
  while(a.slice(i,i+k.length)==k){i+=k.length;}
  i=i/k.length;
  c=c.slice(k.length*(i-1));
  let s='';
  if(e=='[]'){s='&omega;';}
  else{s=`&omega;<sup>${fancy(e)}</sup>`;}
  if(i>1){s+=`${i}`;}
  if(c!=''){s+=`+${fancy(c)}`};
  return s;
  }
}
function r(a){return a.replaceAll(']','!')}
function binary(a){
  a=a+'1';
  let x='';
  let y='[W]';
  let d='';
  for(let i of a){
    let t=0;
    while(r(FS(y,t))<=r(x)){t++;}
    d=FS(y,t);
    if(i=='0'){y=d;}
    else{x=d;}
    if(y.slice(-2)=='[]'){return'?';}
  }
  return d;
}
function click(a){
  const k=document.getElementById(a);
  let e=document.body.getElementsByTagName("*");
  let f=[]
  for(let i of e){f.push(i.id);}
  if(!(a+'1'in e)){
    const p=Number(k.style.marginLeft.slice(0,-2))+20
    a=a.slice(1);
    let x0=null;
    if(binary(a+'0')!='?'){
      x0=document.createElement('div');
      let q=fancy(binary(a+'0'));
      console.log(q);
      if(/^\d*$/.test(q)){q=(Number(q)-1).toString()}
      x0.innerHTML=q;
      x0.id='_'+a+'0';
      x0.style=`margin-left:${p}px`;
    }
    let x1=document.createElement('div');
    let q=fancy(binary(a+'1'));
    if(/^\d*$/.test(q)){q=(Number(q)-1).toString()}
    x1.innerHTML=q;
    x1.id='_'+a+'1';
    x1.style=`margin-left:${p}px`;
    if(binary(a+'0')!='?'){
      k.before(x0);
      k.after(x1);
      function F0(){click(x0.id);}
      x0.addEventListener('click',F0);
      function F1(){click(x1.id);}
      x1.addEventListener('click',F1);
    }
    else{
      k.after(x1);
      function F1(){click(x1.id);}
      x1.addEventListener('click',F1)}
  }
}
function begin(){click('_');}
