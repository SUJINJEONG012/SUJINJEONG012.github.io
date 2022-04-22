//문의 입력 함수시작

// //화살표 함수로 함수 실행하기
// const sendClick = () => {
    
// console.log('버튼을 클릭하세요.');


// let userCompany = document.getElementById('company').value;
// let userEmail = document.getElementById('email').value;
// let userPhone = document.getElementById('phone').value;
// let serContent = document.getElementById('message').value;


// //정규식선언

// let companyReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
// let emailReg  = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
// let phoneReg =  /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;


// //정규식 선언과 빈값 여부 체크 구문
// if(!companyReg.test(userCompany) ||  userCompany.trim() === ''){
//     alert('형식에 맞춰 입력해주세요!');
//     document.getElementById('company').focus();
//     document.getElementById('company').value = '';
//     return false;
// }else if(!emailReg.test(userEmail) || userEmail.trim() === ''){
//     alert('이메일 형식에 맞춰 입력해주세요!');
//     document.getElementById('email').focus();
//     document.getElementById('email').value ='';
// }else if(!phoneReg.test(userPhone) || userPhone.trim() === ''){
//     alert('휴대폰번호 형식에 맞춰 입력해주세요!')
//     document.getElementById('phone').focus();
//     document.getElementById('phone').value = '';
// }else{
//     alert('문의하기가 성공적으로 보내졌습니다!');
// }


// //이메일 보내기 
// sendClick


// }
// // 함수 끝



 const sendClick = () => {
    emailjs.init('WIONjTdb-e_EXRdIT'); 
    let templateParams  = {
        name : document.getElementById('company').value,
        phone : document.getElementById('email').value,
        email : document.getElementById('phone').value,
        message : document.getElementById('message').value,
    }
    console.log(templateParams);
    emailjs.send('service_uwosysg', 'template_6ncbv98', templateParams).then(function(response){
        console.log('Success!', response.status, response.text);
        
    }, function(error){
        console.log('Failed...', error);
      
    })
}

