const userMonth = document.querySelector('#user_month');
const userYear = document.querySelector('#user_year');
const userDay = document.querySelector('#user_day');
const birthdaydBtn = document.querySelector('#birthday_btn');
const error_msg = document.querySelectorAll('.error_msg');
console.log(userMonth,userYear,userDay,birthdaydBtn,error_msg);

//태어난 달을 입력안하고 버튼을 클릭하면 
//error_msg2 출력하기
birthdaydBtn.addEventListener('click',function(){
    //태어난 달의 값이 빈문자열이면 콘솔실행
    if(userMonth.value == '') msg_func(1,'block');
    else msg_func(1);
    //if(userMonth.value == '') error_msg[1].style.display = 'block';
    //else error_msg[1].style.display = 'none';
    //태어난 년도 입력안하고 버튼 클릭시 해당 error_msg 출력하기
    if(userYear.value == '') msg_func(0,'block');
    else msg_func(0);
    //if(userYear.value == '') error_msg[0].style.display = 'block';
    //else error_msg[0].style.display = 'none';
    //태어난 일 입력안하고 버튼 클릭시 해당 error_msg 출력하기
    if(userDay.value == '') msg_func(2,'block');
    else msg_func(2);
    //if(userDay.value == '') error_msg[2].style.display = 'block';
    //else error_msg[2].style.display = 'none';
});

// 반복목적함수 (이벤트 밖)
function msg_func(index,value='none'){
    return error_msg[index].style.display = value;
};