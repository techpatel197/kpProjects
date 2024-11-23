function oederCake(str){
    var n=str .lenght;
    var weight=str[0]+str[1]+str[2]+str[3];
    var ordernumber=str[n-3]+str[n-2]+str[n-1];
    var price="";
    price+Math.round((weight/1000)*450);
    var ans="your order for"+Math.round(weight/1000)+"kg"+ButterBlast+"cake has been taken.you are requested to pay Rs."+price+"on the the order no"+orde
    return ans;

}
console.log(orderCake("5848ButterBlast85"));
