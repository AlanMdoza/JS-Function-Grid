//Write your function calls below this line
for (var i = 0; i< 20; i++){
    for(var x= 0; x< 20; x++){
        if(x%5==0 && i%5==0){
        setColor(i,x,"red");
        }
        else if(x%2==0 && i%2==0){
             setColor(i,x,"blue");
        }
    }
}