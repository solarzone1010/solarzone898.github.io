function parenMatch(a,n,d,k=0){
  p=d;
  i=n;
  while(p!=k){i+=d;p+=(a[i]=='[')?1:-1}
  return i;
}
function FS(a,n){
  if(a==''){return'';}
  if(a.slice(-2)=='[]'){return a.slice(0,-2);}
  if(a=='[W]'){return '['.repeat(n)+']'.repeat(n);}
  let x=a.lastIndexOf('[]')+1;
  let i=parenMatch(a,x,-1,1)
  let o=a.slice(0,i)+(a.slice(i,x-1)+']').repeat(n);
  let l=o.split('[').length-o.split(']').length;
  o+=']'.repeat(l);
  return o;
}  
function fancy(a,n){
  let s='';
  switch(n){
    case 0:{
      if(/^(\[])*$/.test(a)){return (a.length/2).toString()}
      let i=parenMatch(a,0,1)
      let e=a.slice(1,i);
      let k=a.slice(0,i+1);
      let c=a.slice(i+1);
      i=0;
      while(a.slice(i,i+k.length)==k){i+=k.length;}
      i=i/k.length;
      c=c.slice(k.length*(i-1));
      if(e=='[]'){s='&omega;';}
      else{s=`&omega;<sup>${fancy(e,0)}</sup>`;}
      if(i>1){s+=`${i}`;}
      if(c!=''){s+=`+${fancy(c,0)}`};
      break;
    }
    case 1:{
      if(a==''){return'0';}
      let i=parenMatch(a,a.length-1,-1);
      s=`${fancy(a.slice(0,i),1)}${fancy(a.slice(i+1,-1),1)}C`;
      break;
    }
    case 2:{
      if(a==''){return[];}
      let i=parenMatch(a,a.length-1,-1);
      let q=fancy(a.slice(i+1,-1),2);
      for(let i=0;i<q.length;i++){q[i]++;}
      s=fancy(a.slice(0,i),2).concat([0].concat(q));
      break;
    }
    case 3:{
      s=(a=='')?0:a;
      break;
    }
  }
  return s;
}
function trueFancy(a,n){
  let m=fancy(a,n);
  let x=[2]
  if(x.includes(n)){return(strMatrix(m));}
  return m;
}
function strMatrix(a){
  if(a.length==0){return'[empty]';}
  s='';
  for(i of a){
    s+=`(${i})`
  }
  return s;
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
  if(/^(\[])*$/.test(d)){d=d.slice(0,-2);}
  return d;
}
function click(a){
  const k=document.getElementById(a);
  let e=document.body.getElementsByTagName("*");
  let f=[];
  for(let i of e){f.push(i.id);}
  if(!(a+'1'in e)){
    const p=Number(k.style.marginLeft.slice(0,-2))+20
    a=a.slice(1);
    let x0=null;
    if(binary(a+'0')!='?'){
      x0=document.createElement('div');
      let q=trueFancy(binary(a+'0'),format);
      x0.innerHTML=q;
      x0.id='_'+a+'0';
      x0.style=`margin-left:${p}px`;
    }
    let x1=document.createElement('div');
    let q=trueFancy(binary(a+'1'),format);
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
function expandAll(){
  let e=document.body.getElementsByTagName('div');
  let f=[];
  let g=[];
  for(let i of e){f.push(i.id);}
  for(let i of f){
    k=1;
    for(let j of f){if(j.slice(i.length)==i){k=0;}}
    if(k){g.push(i);}
  }
  for(let i of g){
    if(i!=''){click(i);}
  }
}
function changeFormat(){
  let example='[[][]][[]]';
  format=(format+1)%4;
  let e=document.body.getElementsByTagName('div');
  for(let i=0;i<e.length;i++){
    let q=trueFancy(binary(e[i].id.slice(1)),format);
    e[i].innerHTML=q;
  }
  let b=document.getElementById('changeFormat');
  b.innerHTML=`Change format<br>Current format: ${trueFancy(example,format)}`;
}
function clearList(){
  let e=document.body.getElementsByTagName('div');
  let f=[];
  for(let i of e){f.push(i.id);}
  for(let i of f){if(i!='_'){document.getElementById(i).remove();}}
}
function begin(){click('_');}
format=0;
