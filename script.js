var player,current,dice,i=0,global,numberofsix;
player=[1,2] ;
global_score=[0,0];
document.querySelector("#roll").addEventListener("click",function(){
    if(global_score[i]<20){
    dice=Math.floor(Math.random()*6+1);
    document.querySelector("#dice_number").setAttribute("src",(dice+".png"));
    document.querySelector("#image").style.visibility="visible";
    if(dice==6){
        numberofsix++;
        if(numberofsix==2){
            playerChange();
            numberofsix=0;
            return;
        }
    }
    else{
        numberofsix=0;
    }
    if(dice==1){
        playerChange();
    }
    else{
        
        var temp=document.querySelector("#current_score"+player[i]).innerHTML;
        current=document.querySelector("#current_score"+player[i]).innerHTML=Number(temp)+dice;
    }
    
        
}
})
document.querySelector("#hold").addEventListener("click",function(){
    if(global_score[i]<20){
    var global=document.querySelector("#global"+player[i]).innerHTML;
    global_score[i]=document.querySelector("#global"+player[i]).innerHTML=Number(global)+Number(current);
    }
    if(global_score[i]>=20){
        document.querySelector("#tag"+player[i]).innerHTML="WINNER!!";
        document.querySelector("#image").style.visibility="hidden";
    }
    else
        {
            playerChange();
            numberofsix=0;
        }

})
eventadd("hold");
eventadd("roll");
eventadd("newbtn");
function eventadd(identity){
document.querySelector("#"+identity).addEventListener("mousemove",function(){
    document.querySelector("#"+identity).style.fontSize=13.5+"px";
    document.querySelector("#"+identity).style.outlineStyle="none";
});
document.querySelector("#"+identity).addEventListener("mouseout",function(){
    document.querySelector("#"+identity).style.fontSize=13+"px";

});
}
function playerChange(){
    current=document.querySelector("#current_score"+player[i]).innerHTML=0; 
        document.querySelector("#player"+player[i]).style.backgroundColor="ivory";
        i=Math.abs(i-1);
        document.querySelector("#player"+player[i]).style.backgroundColor="rgb(217, 217, 217)";  
       // document.querySelector("#image").style.visibility="hidden";  
    }
document.querySelector("#newbtn").addEventListener("click",function(){
    document.querySelector("#current_score"+player[i]).innerHTML=0;
    document.querySelectorAll(".global")[0].innerHTML=0;
    document.querySelectorAll(".global")[1].innerHTML=0;
    document.querySelector("#tag"+player[i]).innerHTML="PLAYER "+player[i];    
    global_score[0]=global_score[1]=0;
    current=0;
    numberofsix=0;
    if(i==1){
        playerChange()
    }
    document.querySelector("#image").style.visibility="hidden";

})
