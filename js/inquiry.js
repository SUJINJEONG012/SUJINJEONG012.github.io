//문의 입력 함수시작


const sendClick = () => {
    emailjs.init('WIONjTdb-e_EXRdIT');

    let templateParams = {
        company: document.getElementById('company').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    }

    console.log(templateParams);

    let userCompany = document.getElementById('company').value;
    let userEmail = document.getElementById('email').value;
    let userPhone = document.getElementById('phone').value;
    let userMessage = document.getElementById('message').value;


    //정규식선언

    let companyReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;
    let emailReg = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let phoneReg = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    let messageReg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/;

    //정규식 선언과 빈값 여부 체크 구문
    if (!companyReg.test(userCompany) || userCompany.trim() === '') {
        alert('회사명을 형식에 맞춰 입력해주세요!');
        document.getElementById('company').focus();
        document.getElementById('company').value = '';
        return false;
    } else if (!emailReg.test(userEmail) || userEmail.trim() === '') {
        alert('이메일 형식에 맞춰 입력해주세요!');
        document.getElementById('email').focus();
        document.getElementById('email').value = '';
        return false;
    } else if (!phoneReg.test(userPhone) || userPhone.trim() === '') {
        alert('휴대폰번호 형식에 맞춰 입력해주세요!')
        document.getElementById('phone').focus();
        document.getElementById('phone').value = '';
        return false;
    } else if (!messageReg.test(userMessage) || userMessage.trim() === '') {
        alert('문의내용을 형식에 맞춰 입력해주세요!')
        document.getElementById('message').focus();
        document.getElementById('message').value = '';
    } else {
        alert('문의하기가 성공적으로 보내졌습니다!');
    }


    //이메일
    emailjs.send('service_uwosysg', 'template_6ncbv98', templateParams).then(function (response) {
        console.log('Success!', response.status, response.text);

    }, function (error) {
        console.log('Failed...', error);

    })
}

