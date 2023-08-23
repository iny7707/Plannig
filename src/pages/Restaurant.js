import React from 'react';
import Navbar from '../components/Navbar';
import Review from '../components/Review';
import './style.css';
import './Restaurant.css';


function Restaurant(props) {

      const reviewCount = 0;

      const info = {
            store:'협재섬바다',
            star:'5',
            area:'제주시 한립읍',
            heart:'00',
            review:'00',
            address:'제주특별자치도 제주시 한림읍 금능남로 53',
            number:'0647960053',
            category:'한식',
            price:'만원 미만~1만원대',
            time:'월일 | 8시 30분~20시 30분'
      }

      const menu = [
            {
                  name: '갈치정식',
                  price: '10000'
            },
            {
                  name: '보말 칼국수',
                  price: '10000'
            },
            {
                  name: '갈치정식',
                  price: '10000'
            },
            {
                  name: '보말 칼국수',
                  price: '10000'
            },
            {
                  name: '갈치정식',
                  price: '10000'
            },
            {
                  name: '보말 칼국수',
                  price: '10000'
            },
            {
                  name: '갈치정식',
                  price: '10000'
            },
            {
                  name: '보말 칼국수',
                  price: '10000'
            },
      ]

      function Menu({name, price}){
            return(
                <li><p>{name}</p><p>{price}원</p></li>
            );
          }

      const menulist = 
      menu.map (menu => <Menu name = {menu.name} price = {menu.price}/> )
      

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

      

    return (
        <div>
            <Navbar/>
            <div id="restaurant_visual"></div>

            <div className='inner'>
                  <div id="restaurant">
                        <div id="restaurant_title">
                                    <h4>{info.store}</h4>
                                    <div id='star_rating'>{Star(info.star)}</div> 
                                    <button className='btn'>관심가게</button>
                        </div>
                        <div id="restaurant_subtitle">
                                    <h5>{info.area}</h5>
                                    <p>
                                          <img src="images2/heart.png" alt=""></img>
                                          {info.heart}</p>
                                    <p>
                                          <img src="images2/pencil.png" alt=""></img>
                                          {info.review}</p>
                        </div>

                        

                        <div id="restaurant_info">
                              <span></span>
                              
                              <ul>
                                    <li><p>주소</p><p>{info.address}</p></li>
                                    <li><p>전화번호</p><p>{info.number}</p></li>
                                    <li><p>음식종류</p><p>{info.category}</p></li>
                                    <li><p>가격대</p><p>{info.price}</p></li>
                                    <li><p>영업시간</p><p>{info.time}</p></li>
                              </ul>

                              <div id="restaurant_menu">
                                   <p>메뉴</p>
                                    <ul>
                                    
                                    {menulist}
                                                {/* <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li>
                                                <li><p>메뉴 이름</p><p>0원</p></li> */}
                                    </ul>
                                    
                                    <a>더보기<div></div></a> 
                                    
                                    
                              </div>
                              

                        </div>

                  </div>
                  <div id="map"></div>
            </div>

            

            <div className='inner' id="review_write">
                  <h5>리뷰 (<strong>{reviewCount}</strong>건)</h5>
                  <div id="review_box">
                        <div>
                              <div id="rating">☆☆☆☆☆</div>
                              <button className='btn'>음식이 맛있어요</button>
                              <button className='btn'>분위기가 좋아요</button>
                              <button className='btn'>가성비가 좋아요</button>
                              <button className='btn'>서비스가 친절해요</button>
                              <p>해당하는 것을 석택해주세요.</p>
                        </div>
                        <div className='line'></div>
                        <textarea placeholder='리뷰를 남겨주세요.'></textarea>
                        
                  </div>
                  <button className='btn'>완료</button>
            </div>


            <div  className='inner' id="review_check">
                  <span></span>

                  <Review/>
                  <Review/>
                  {/* <div class='review_index'>
                        <div><img src="images2/user1.jpg" alt=""></img>
                              </div>
                        <div>
                              <div>
                                    <h6>아이디</h6><p id='star_rating'>☆☆☆☆☆</p><p>2023.00.00</p>
                              </div>
                              <div>
                                    <div>음식이 맛있어요</div>
                                    <div>분위기가 좋아요</div>
                                    <div>가성비가 좋아요</div>
                                    <div>서비스가 친절해요</div>
                              </div>
                              <p>리뷰내용</p>
                        </div>
                        <div><img src="images2/review1.jpg" alt=""></img></div>
                        <span></span>

                  </div> */}
                  


                  {/* <div class='review_index'>
                        <div><img src="images2/user2.jpg" alt=""></img>
                              </div>
                        <div>
                              <div>
                                    <h6>아이디</h6><p id='star_rating'>☆☆☆☆☆</p><p>2023.00.00</p>
                              </div>
                              <div>
                                    <div>음식이 맛있어요</div>
                                    <div>분위기가 좋아요</div>
                                    <div>가성비가 좋아요</div>
                                    <div>서비스가 친절해요</div>
                              </div>
                              <p>리뷰내용</p>
                        </div>
                        <div><img src="images2/review2.jpg" alt=""></img></div>
                        <span></span>
                  </div> */}
                  

                  <a>더보기<div></div></a>
            </div>


        </div>
    );
}

export default Restaurant;