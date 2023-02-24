function FS(a,n){
  if(a=='')return''
  if(a.slice(-2)=='[]'){return a.slice(0,-2)}
  x=a.lastIndexOf('[]')+1;
  y=x;
  p=-2;
  while(p!=0){y-=1;p+=(a[y]=='[')?1:-1}
  o=a.slice(0,y)+(a.slice(y,x-1)+']').repeat(n);
  l=o.split('[').length-o.split(']').length;
  o+=']'.repeat(l);
  return o;
}
