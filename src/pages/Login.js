import React from 'react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import './Login.css';
import './style.css';

function Login(props) {
    return (
        <div>
            <Logo />
            <div className='pd'>
                <h3 className='pgnametxt'>로그인</h3>
                <div><hr className='middleline'></hr></div>
                <div><input type='text' placeholder='이메일' className='txtbox'></input></div>
                <div><input type='password' placeholder='비밀번호' className='txtbox'></input></div>
                <div className='txt'><Link to='/signup'>회원가입</Link><span style={{marginLeft:'70%'}}><Link to='/password-modify'>비밀번호</Link></span> 찾기</div>
                <button type='submit' className='btn'>로그인</button>
            </div>
        </div>
    );
}

export default Login;