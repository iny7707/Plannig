import React from 'react';
import Navbar from '../components/Navbar';

function MyFavorite(props) {
    return (
        <div>
            <Navbar />
            <h3 className='pgnametxt'>내 관심가게</h3>
            <div><hr className='shortline'></hr></div>

            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img>5.0</p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_activate.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>

            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img>5.0</p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_activate.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>

            <div className='content'>
                <div className='flex'>
                    <img src='images/Rectangle1.png' alt='' className='info-img'></img>
                    <div className='info'>
                        <div className='info-header'>
                            <h4>가게이름</h4>
                        </div>
                        <div>
                            <span>#종류</span>
                        </div>
                        <p className='address'>주소</p>
                        &nbsp;
                        <div className='rate'>
                            <p><img src='images/star.png' alt=''></img>5.0</p>
                        </div>
                    </div>
                    <div className='favorite-icon'>
                        <button style={{ backgroundColor: 'white', border: 'none' }}><img src='images/Favorite_activate.png' alt=''></img></button>
                    </div>
                </div>
            </div>
            <hr className='longline'></hr>
        </div>
    );
}

export default MyFavorite;