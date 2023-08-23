import React from 'react';
import './Review.css';
import { Link, NavLink } from 'react-router-dom';

const review = {
      userid:'아이디',
      star:'4',
      day:'2023.00.00',
      content:'리뷰내용',
      image:''
}

function Star(star) {
      if(star>=5)
            return '★★★★★';
      else if(star>=4)
            return '★★★★☆';
      else if(star>=3)
            return '★★★☆☆';
      else if(star>=2)
            return '★★☆☆☆';
      else
            return '★☆☆☆☆';
}


const Review = () => {
    return (

            <div class='review_index'>
                  <div><img src="" alt=""></img>
                        </div>
                  <div>
                        <div>
                              <h6>{review.userid}</h6><p id='star_rating'>{Star(review.star)}</p><p>{review.day}</p>
                              <p id='review_fix'>수정</p> <p id='review_del'>삭제</p>
                        </div>
                        <div>
                              <div>음식이 맛있어요</div>
                              <div>분위기가 좋아요</div>
                              <div>가성비가 좋아요</div>
                              <div>서비스가 친절해요</div>
                        </div>
                        <p>리뷰내용</p>
                  </div>
                  <div><img src={review.image} alt={review.userid}></img></div>
                  <span></span>
            </div>
        
    );
};

export default Review;