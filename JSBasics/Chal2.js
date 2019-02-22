var bill=[];
var tip=[];
var tbill=[];
//Push All Bills here
bill.push(124);
bill.push(48);
bill.push(268);

for(var i=0;i<bill.length;i++){
    if(bill[i]<50){
        tip[i]=(bill[i]*0.2);
       tbill[i]=(bill[i]+tip[i]);
    }else if(bill[i]>200){
        tip[i]=(bill[i]*0.1);
       tbill[i]=(bill[i]+tip[i]);
    }else
        tip[i]=(bill[i]*0.15);
       tbill[i]=(bill[i]+tip[i]);
}

console.log("Initial bill  "+bill);
console.log("Tip calculated  "+tip);
console.log("Total payment "+tbill);
