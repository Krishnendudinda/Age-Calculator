const button=document.querySelector(".input-box button");
const input=document.querySelector("input[type='date']");
const result=document.querySelector(".result");

button.addEventListener("click",()=>{
    const birthDate = new Date(input.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();

    let today = new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;
    y3 = y2-y1; // year Difference

    if(m2>=m1){ // month Difference
        m3 =m2-m1;
    }else{
        y3--;
        m3 = 12 +m2-m1;   
    }

    if(d2>=d1){ // 
        d3 =d2-d1;
    }else {
        m3--;
        d3 = getDaysInMonth(y2,m2)+d2-d1;
        //d3 = 30+d2-d1;
    }

    if(m3<0){
       y3--;
       m3 = 11;
    }
    result.innerText=`you are ${y3} years, ${m3} months , ${d3} days old`;
});
function getDaysInMonth(year,month){ //The year is leap year or not
    return new Date(year,month+1,0).getDate();
}s
