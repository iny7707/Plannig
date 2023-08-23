import React, { useState } from 'react';
import Logo from '../components/Logo';
import axios from 'axios';
import './Signup.css';
import './style.css';

function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSignup = () => {
        const data = {
            email: email,
            password: password,
            name: name
        };

        axios.post('http://localhost:3001/api/signup', data)
            .then(response => {
                // 회원가입 성공 시 동작
                console.log(response.data);
            })
            .catch(error => {
                // 회원가입 실패 시 동작
                console.error(error);
            });
    };

    return (
        <div>
            <Logo />
            <div className='pd'>
                <h3 className='pgnametxt'>회원가입</h3>
                <hr className='middleline' />
                <div>
                    <input type='text' placeholder='이메일' className='Stxtbox1' onChange={e => setEmail(e.target.value)} />
                    @
                    <select name='select' className='combox'>
                        <option value="none"></option>
                        <option value="gmail">gmail.com</option>
                        <option value="naver">naver.com</option>
                        <option value="hanmail">hanmail.com</option>
                        <option value="daum">daum.net</option>
                        <option value="nate">nate.com</option>
                    </select>
                </div>
                <div>
                    <input type='password' placeholder='비밀번호(영문과 숫자를 포함하여 8자 이상)' className='Ltxtbox' onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type='password' placeholder='비밀번호 확인' className='Ltxtbox' />
                </div>
                <label className='notice'>비밀번호가 불일치 합니다.</label>
                <div>
                    <input type='text' placeholder='이름' className='Ltxtbox' onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label className='lbl'>가입 약관 동의</label>
                </div>
                <div className='left-space'>
                    <input type='checkbox' id='check1' />
                    <label className='info'>개인정보 제 3차 제공 동의</label>
                </div>
                <button className='btn' onClick={handleSignup}>회원가입</button>
            </div>
        </div>
    );
}

export default Signup;
