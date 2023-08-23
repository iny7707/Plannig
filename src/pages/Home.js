import React from 'react';
import Navbar from '../components/Navbar';
import './Home.css';
import './style.css';

function Home(props) {
    return (
        <div>
            <Navbar />
            <div>
                {/* 배너 */}
                <img src='images/banner.png' alt='' className='banner-img' />
                {/* 검색창 */}
                <div>
                    <div className='content'>
                        <p className='tc'><input type='text' placeholder='검색어 입력' className='searchtxt'></input><button type='button' className='searchbtn'><img src='images/loupe.png' alt='검색' className='loupe-size'></img></button></p>
                    </div>
                    <div className='content'>
                        {/* 음식사진 */}
                        <h6 className='tag'>#한식</h6>
                        <div>
                            <div className='flex'>
                                <img src='images/Rectangle1.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle2.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle3.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle4.png' className='square-fimg' alt=''></img>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <h6 className='tag'>#분위기가 좋아요</h6>
                        <div>
                            <div className='flex'>
                            <img src='images/Rectangle1.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle2.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle3.png' className='square-fimg' alt=''></img>
                                <img src='images/Rectangle4.png' className='square-fimg' alt=''></img>
                            </div>
                        </div>
                        {/* <div className='flex'>
                            <div className='big'>
                                <div>
                                    <img src='images/bossam.jpg' className='bigrec-fimg' alt=''></img>
                                </div>
                            </div>
                            <div className='small'>
                                <div>
                                    <img src='images/bossam.jpg' className='smlrec-fimg' alt=''></img>
                                    <img src='images/bossam.jpg' className='smlrec-fimg' alt=''></img>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;