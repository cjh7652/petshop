import React, {useState, useRef/* , useEffect */} from 'react';
import { IoCheckmark } from "react-icons/io5";
import './SignUp.scss';



const SignUp = () => {
  const idInputRef= useRef(null)
  const pwInputRef= useRef(null)
  const nameInputRef= useRef(null)
  const phoneInputRef= useRef(null)
  const emailInputRef= useRef(null)
  const birthInputRef= useRef(null)

  const [id, setId] = useState('') // 아이디
  const [pw, setPw] = useState('') //비밀번호
  const [pw2, setPw2] = useState('') //비밀번호 확인
  const [name, setName] = useState('') //이름
  const [phone, setPhone] = useState('') //휴대폰
  const [email, setEmail] = useState('') //이메일
  const [birth, setBirth] = useState('') //생년월일

  const idRule=/^[a-z0-9]{4,16}$/;
  const pwRule=/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,16}$/
  const nameRule=/^[a-zA-Z가-힣]{1,20}$/
  const phoneRule= /^(?:(010)|(01[1|6|7|8|9]))\d{3,4}(\d{4})$/;
  const emailRule= /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
  const birthRule=/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;

  const [messages, setMessages] = useState({
    id: {text:'', color: ''},
    pw: {text:'', color: ''},
    pw2: {text:'', color: ''},
    name: {text:'', color: ''},
    phone: {text:'', color: ''},
    email: {text:'', color: ''},
    birth: {text:'', color: ''},
  })


  const handleMessageChange=(key, text, color) =>{
    setMessages((prevMessages) =>({
      ...prevMessages,
      [key]: {text, color}
    }))
  }
  //아이디
  const handleId = (event) => {
    const newValue=event.target.value;
    setId(newValue)
    if(idRule.test(newValue)){
      handleMessageChange('id','사용 가능한 아이디 입니다', 'success-color')
    }else if(newValue===""){
      handleMessageChange('id','아이디를 입력해 주세요', 'error-color')
    }else{
      handleMessageChange('id','아이디는 영문소문자/숫자 4글자 이상 16글자 미만으로 사용 가능합니다', 'error-color')
      setId('')
    }
  }
  //패스워드
  const handlePw = (event) => {
    const newPwValue=event.target.value;
    setPw(newPwValue)
    if(pwRule.test(newPwValue)){
      handleMessageChange('pw','사용 가능한 비밀번호 입니다', 'success-color')
    }else if(newPwValue===""){
      handleMessageChange('pw','비밀번호를 입력해 주세요', 'error-color')
    }else{
      handleMessageChange('pw','비밀번호는 영문대소문자/숫자/특수문자 조합, 8글자 이상 16글자 미만으로 사용 가능합니다', 'error-color')
      setPw('')
    }
  }

  //패스워드 확인
  const handlePw2 = (event) => {
    const newPw2Value=event.target.value;
    setPw2(newPw2Value)
    if(pw===""){
      handleMessageChange('pw','비밀번호를 입력해주세요', 'error-color')
    }else if(newPw2Value===pw){
      handleMessageChange('pw2','비밀번호가 일치합니다.', 'success-color')
    }else if(newPw2Value===''){
      handleMessageChange('pw2','비밀번호를 입력해주세요', 'error-color')
    }else{
      handleMessageChange('pw2','비밀번호가 일치하지 않습니다.', 'error-color')
      setPw('')
    }
  }

  //이름
  const handleName = (event) => {
    const newNameValue=event.target.value;
    setName(newNameValue)
    if(nameRule.test(newNameValue)){
      handleMessageChange('name','사용가능한 이름입니다', 'success-color')
    }else if(newNameValue===''){
      handleMessageChange('name','이름을 입력해주세요', 'error-color')
    }else{
      handleMessageChange('name','올바른 이름이 아닙니다', 'error-color')
      setName('')
    }
  }
  
  //휴대폰
  const handlePhone = (event) => {
    const newPhoneValue=event.target.value;
    setPhone(newPhoneValue)
    if(phoneRule.test(newPhoneValue)){
      handleMessageChange('phone','사용가능한 전화번호입니다', 'success-color')
    }else if(newPhoneValue===''){
      handleMessageChange('phone','전화번호 입력해주세요', 'error-color')
    }else{
      handleMessageChange('phone','전화번호를 다시 확인해주세요', 'error-color')
      setPhone('')
    }
  }

  //이메일
  const handleEmail = (event) =>{
		const newEmailValue= event.target.value;
		setEmail(newEmailValue)
		if(emailRule.test(newEmailValue)){
			handleMessageChange('email', '사용 가능한 이메일입니다.', 'success-color');
		}else if(newEmailValue===""){
			handleMessageChange('email', '이메일을 입력해주세요', 'error-color');
			
		}else{
			handleMessageChange('email', '이메일을 다시 한번 확인해주세요', 'error-color');
			setEmail('');
		}
	}

  //birthRule
  const handleBirth = (event) =>{
		const newBirthValue= event.target.value;
		setBirth(newBirthValue)
		if(birthRule.test(newBirthValue)){
			handleMessageChange('birth', '올바른 생년월일입니다', 'success-color');
		}else if(newBirthValue===""){
			handleMessageChange('birth', '생년월일을 입력해주세요', 'error-color');
		}else{
			handleMessageChange('birth', '생년월일을 다시 한번 확인해주세요', 'error-color');
			setBirth('');
		}
	}
  const handleSubmit = () =>{

  }
  return (
    <div className='signWrap'>
      <h2>회원가입</h2>
      <form action="#" method='post' name="signup" onSubmit={handleSubmit}>
        <fieldset className='signUpArea'>
          <ul>
            <li className="id-section">
              <div className="area-style">
                <label htmlFor="idArea" className='label-style'>아이디</label>
                <input ref={idInputRef} type="text" id="idArea" required size={20} value={id} onChange={(event) => {setId(event.target.value)}} onBlur={handleId} />
                <span className={`mes-style ${messages.id.color}`}>{messages.id.text}</span>
                <p className="help-style"><IoCheckmark />영문소문자/숫자, 4-16자</p>
              </div>
            </li>
            <li className="pw-section">
              <div className="area-style">
                <label htmlFor="pwArea" className='label-style'>비밀번호</label>
                <input ref={pwInputRef} type="text" id="pwArea" required size={20} value={pw} onChange={(event) => {setPw(event.target.value)}} onBlur={handlePw} />
                <span className={`mes-style ${messages.pw.color}`}>{messages.pw.text}</span>
                <p className="help-style"><IoCheckmark />영문대소문/숫자/특수문자조합, 8-16자</p>
                <br />

                <label htmlFor="pw2Area" className='label-style'>비밀번호확인</label>
                <input type="text" id="pw2Area" required size={20} value={pw2} onChange={(event) => {setPw2(event.target.value)}} onBlur={handlePw2} />
                <span className={`mes-style ${messages.pw2.color}`}>{messages.pw2.text}</span>
              </div>
            </li>
            <li className="name-section">
              <div className="area-style">
                <label htmlFor="nameArea" className='label-style'>이름</label>
                <input ref={nameInputRef} type="text" id="nameArea" required size={20} value={name} onChange={(event) => {setName(event.target.value)}} onBlur={handleName} />
                <span className={`mes-style ${messages.name.color}`}>{messages.name.text}</span>
              </div>
            </li>
            <li className="phone-section">
              <div className="area-style">
                <label htmlFor="phoneArea" className='label-style'>핸드폰</label>
                <input ref={phoneInputRef} type="text" id="phoneArea" required size={20} value={phone} onChange={(event) => {setPhone(event.target.value)}} onBlur={handlePhone} />
                <span className={`mes-style ${messages.phone.color}`}>{messages.phone.text}</span>
              </div>
            </li>
            <li className="email-section">
							<div className="area-style">
								<label htmlFor="emailArea" className='label-style'>이메일</label>
								<input ref={emailInputRef} type="text" id="emailArea" required size={20} value={email} onChange={(event) => {setEmail(event.target.value)}} onBlur={handleEmail}/>
								<span className={`mes-style ${messages.email.color}`}>{messages.email.text}</span>
							</div>
						</li>
            <li className="birth-section">
							<div className="area-style">
								<label htmlFor="birthArea" className='label-style'>생년월일</label>
								<input ref={birthInputRef} type="text" id="birthArea" required size={8} value={birth} onChange={(event) => {setBirth(event.target.value)}} onBlur={handleBirth}/>
								<span className={`mes-style ${messages.birth.color}`}>{messages.birth.text}</span>
							</div>
						</li>
          </ul>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUp;