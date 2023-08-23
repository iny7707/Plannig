import React from 'react';
import Navbar from '../components/Navbar';
import Review from '../components/Review';
import { Link } from 'react-router-dom';
import './Mypage_review.css';

function Mypage_review(props) {

      const reviewCount = 0;


    return (
        <div>
            <Navbar/>
            <div className='pd' id="myreview">
                  <h4><Link to='/Restaurant'>리뷰관리</Link></h4>

                  <div>
                        <h5>내가 쓴 총 리뷰 <strong>{reviewCount}</strong>개</h5> {/* 00개 동적 데이터 */}
                  </div>

                  <Review/>
                  <Review/>
                  <Review/>

            </div>
            
        </div>
    );
}

export default Mypage_review;