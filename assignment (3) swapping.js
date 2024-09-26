let arr=[1,2,3,4,5,6,7];
let len=arr.length;
let temp;
for (i=0,j=len-1;i<len/2;i++,j--){
    temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

console.log(arr);
