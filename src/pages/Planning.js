import React from 'react';
import Navbar from '../components/Navbar';
import './style.css';
import './Planning.css';

// import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./Planning_swiper.css";

import { useState } from 'react';
import Calendar from 'react-calendar';
import './Planning_calendar.css';

import Modal from 'react-modal';


function Planning(props) {

    const [value, onChange] = useState(new Date());

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modal2IsOpen, setModal2IsOpen] = useState(false);

    //날짜 선택
    // let setStartMonth=0;
    let setStartMonth;
    let setStartDate;
    
    const onClickComplete = (event) => {
        setStartMonth =  value.getMonth()+1;
        setStartDate =  value.getDate();
        
        
        console.log(setStartMonth);
        console.log(setStartDate);

    }


//모달에서 정보 업데이트



    //일정표
    const [plan1, setPlan1] = useState([
        {time: '30', contents: '점심 먹기', category:'food' },
        {time: '20', contents: '이동', category:'transport' },
        {time: '30', contents: '관광지', category:'tour' },
        {time: '40', contents: '점심 먹기', category:'food' },
        {time: '50', contents: '점심 먹기', category:'food' },
        {time: '30', contents: '점심 먹기', category:'food' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' }
    ]);

    const plan2 =[
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' }
    ];

    const plan3 =[
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' },
        {time: '' , contents: '', category:'' }
    ];



    // 일정 추가하기
    let day;
    let start_time_h;
    let start_time_m;
    let end_time_h;
    let end_time_m;
    let schedule;
    let kategorie;
    
    const putIn = () => {
        console.log("putin");
        console.log(setStartMonth);
        console.log(setStartDate);
    };

    const onselectStartHour = (event) => {
        start_time_h=event.target.value;
    }
    const onselectStartMinute = (event) => {
        start_time_m=event.target.value;
    }
    const onselectEndHour = (event) => {
        end_time_h=event.target.value;
    }
    const onselectEndMinute = (event) => {
        end_time_m=event.target.value;
    }
    
    const setAddDay = (event) => {
        day=event;
    }

    const setAddSchedule = event =>{
        schedule=event.target.value;
    }

    const setAddKategorie = (event) => {
        kategorie=event;
    }






    return (
        <div>
            <Navbar />
            <div id='plannig' className='inner'>
                <div id='calender'>
                        <p>일정을 추가할 날짜를 선택해주세요</p>
                        <button onClick={onClickComplete} className='btn' id='complete_btn'>선택완료</button>

                        <div>
                            <Calendar onChange={onChange} value={value} />
                                
                        </div>

                </div>
                
                

   

                <div id='plan'>
                    <form>
                        <input type="text" maxlength = "10" placeholder='여행일정표'></input>
                        <img src="images2/pen.png" alt=""></img>
                    </form>

                    <button onClick={()=> setModal2IsOpen(true)} className='btn' id='save_btn'>일정표 저장하기</button>
                                        <Modal
                                            isOpen={modal2IsOpen}
                                            onRequestClose={() => setModal2IsOpen(false)}
                                            style={
                                                {
                                                    overlay: {
                                                        backgroundColor: 'rgba(220,220,220, 0.5)',
                                                        top: 0,
                                                        left: 0,
                                                        right: 0,
                                                        bottom: 0,
                                                        zIndex: 10
                                                    },
                                                    content: {
                                                        flexDirection: 'column',
                                                        backgroundColor: 'white',
                                                        color: 'black',
                                                        top: '25%',
                                                        left: '770px',
                                                        borderRadius: '10px',
                                                        width: '440px',
                                                        height: '195px',
                                                        zIndex: 10,
                                                        padding: '30px'
                                                    }
                                                }
                                            }



                                            >

                                        <h6 id='save_btn_title'> 일정표를 현재 상태로 저장하시겠습니까?</h6>

                                        <div className="save_box">
                                            <button id='save_btn' onClick={() =>{ setModal2IsOpen(false); putIn()}}>저장하기</button>
                                            <button id='cancle_btn' onClick={() =>{ setModal2IsOpen(false); putIn()}}>취소</button>
                                        </div>



                                        </Modal>




                    <div className='plan_swiper' >
                            

                    <>
                    
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={20}
                        pagination={{clickable: true,}}

                        slidesOffsetBefore={350}
                        centeredSlides={true}

                        slideToClickedSlide = {true}

                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">{setStartMonth}/{setStartDate} (요일)</th>
                                    <th class="tg-th-2">장소</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="tg-td, tg-td-1">1</td>
                                        <td class="tg-td">{plan1[0].time}</td>
                                        <td class="tg-td">{plan1[0].contents}</td>
                                        <td class="tg-td">{plan1[0].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">2</td>
                                        <td class="tg-td">{plan1[1].time}</td>
                                        <td class="tg-td">{plan1[1].contents}</td>
                                        <td class="tg-td">{plan1[1].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">3</td>
                                        <td class="tg-td">{plan1[2].time}</td>
                                        <td class="tg-td">{plan1[2].contents}</td>
                                        <td class="tg-td">{plan1[2].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">4</td>
                                        <td class="tg-td">{plan1[3].time}</td>
                                        <td class="tg-td">{plan1[3].contents}</td>
                                        <td class="tg-td">{plan1[3].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">5</td>
                                        <td class="tg-td">{plan1[4].time}</td>
                                        <td class="tg-td">{plan1[4].contents}</td>
                                        <td class="tg-td">{plan1[4].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">6</td>
                                        <td class="tg-td">{plan1[5].time}</td>
                                        <td class="tg-td">{plan1[5].contents}</td>
                                        <td class="tg-td">{plan1[5].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">7</td>
                                        <td class="tg-td">{plan1[6].time}</td>
                                        <td class="tg-td">{plan1[6].contents}</td>
                                        <td class="tg-td">{plan1[6].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">8</td>
                                        <td class="tg-td">{plan1[7].time}</td>
                                        <td class="tg-td">{plan1[7].contents}</td>
                                        <td class="tg-td">{plan1[7].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">9</td>
                                        <td class="tg-td">{plan1[8].time}</td>
                                        <td class="tg-td">{plan1[8].contents}</td>
                                        <td class="tg-td">{plan1[8].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">10</td>
                                        <td class="tg-td">{plan1[9].time}</td>
                                        <td class="tg-td">{plan1[9].contents}</td>
                                        <td class="tg-td">{plan1[9].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">11</td>
                                        <td class="tg-td">{plan1[10].time}</td>
                                        <td class="tg-td">{plan1[10].contents}</td>
                                        <td class="tg-td">{plan1[10].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">12</td>
                                        <td class="tg-td">{plan1[11].time}</td>
                                        <td class="tg-td">{plan1[11].contents}</td>
                                        <td class="tg-td">{plan1[11].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">13</td>
                                        <td class="tg-td">{plan1[12].time}</td>
                                        <td class="tg-td">{plan1[12].contents}</td>
                                        <td class="tg-td">{plan1[12].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">14</td>
                                        <td class="tg-td">{plan1[13].time}</td>
                                        <td class="tg-td">{plan1[13].contents}</td>
                                        <td class="tg-td">{plan1[13].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">15</td>
                                        <td class="tg-td">{plan1[14].time}</td>
                                        <td class="tg-td">{plan1[14].contents}</td>
                                        <td class="tg-td">{plan1[14].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">16</td>
                                        <td class="tg-td">{plan1[15].time}</td>
                                        <td class="tg-td">{plan1[15].contents}</td>
                                        <td class="tg-td">{plan1[15].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">17</td>
                                        <td class="tg-td">{plan1[16].time}</td>
                                        <td class="tg-td">{plan1[16].contents}</td>
                                        <td class="tg-td">{plan1[16].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">18</td>
                                        <td class="tg-td">{plan1[17].time}</td>
                                        <td class="tg-td">{plan1[17].contents}</td>
                                        <td class="tg-td">{plan1[17].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">19</td>
                                        <td class="tg-td">{plan1[18].time}</td>
                                        <td class="tg-td">{plan1[18].contents}</td>
                                        <td class="tg-td">{plan1[18].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">20</td>
                                        <td class="tg-td">{plan1[19].time}</td>
                                        <td class="tg-td">{plan1[19].contents}</td>
                                        <td class="tg-td">{plan1[19].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">21</td>
                                        <td class="tg-td">{plan1[20].time}</td>
                                        <td class="tg-td">{plan1[20].contents}</td>
                                        <td class="tg-td">{plan1[20].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">22</td>
                                        <td class="tg-td">{plan1[21].time}</td>
                                        <td class="tg-td">{plan1[21].contents}</td>
                                        <td class="tg-td">{plan1[21].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">23</td>
                                        <td class="tg-td">{plan1[22].time}</td>
                                        <td class="tg-td">{plan1[22].contents}</td>
                                        <td class="tg-td">{plan1[22].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">24</td>
                                        <td class="tg-td">{plan1[23].time}</td>
                                        <td class="tg-td">{plan1[23].contents}</td>
                                        <td class="tg-td">{plan1[23].category}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">0/00 (요일)</th>
                                    <th class="tg-th-2">장소</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="tg-td, tg-td-1">1</td>
                                        <td class="tg-td">{plan2[0].time}</td>
                                        <td class="tg-td">{plan2[0].contents}</td>
                                        <td class="tg-td">{plan2[0].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">2</td>
                                        <td class="tg-td">{plan2[1].time}</td>
                                        <td class="tg-td">{plan2[1].contents}</td>
                                        <td class="tg-td">{plan2[1].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">3</td>
                                        <td class="tg-td">{plan2[2].time}</td>
                                        <td class="tg-td">{plan2[2].contents}</td>
                                        <td class="tg-td">{plan2[2].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">4</td>
                                        <td class="tg-td">{plan2[3].time}</td>
                                        <td class="tg-td">{plan2[3].contents}</td>
                                        <td class="tg-td">{plan2[3].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">5</td>
                                        <td class="tg-td">{plan2[4].time}</td>
                                        <td class="tg-td">{plan2[4].contents}</td>
                                        <td class="tg-td">{plan2[4].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">6</td>
                                        <td class="tg-td">{plan2[5].time}</td>
                                        <td class="tg-td">{plan2[5].contents}</td>
                                        <td class="tg-td">{plan2[5].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">7</td>
                                        <td class="tg-td">{plan2[6].time}</td>
                                        <td class="tg-td">{plan2[6].contents}</td>
                                        <td class="tg-td">{plan2[6].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">8</td>
                                        <td class="tg-td">{plan2[7].time}</td>
                                        <td class="tg-td">{plan2[7].contents}</td>
                                        <td class="tg-td">{plan2[7].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">9</td>
                                        <td class="tg-td">{plan2[8].time}</td>
                                        <td class="tg-td">{plan2[8].contents}</td>
                                        <td class="tg-td">{plan2[8].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">10</td>
                                        <td class="tg-td">{plan2[9].time}</td>
                                        <td class="tg-td">{plan2[9].contents}</td>
                                        <td class="tg-td">{plan2[9].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">11</td>
                                        <td class="tg-td">{plan2[10].time}</td>
                                        <td class="tg-td">{plan2[10].contents}</td>
                                        <td class="tg-td">{plan2[10].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">12</td>
                                        <td class="tg-td">{plan2[11].time}</td>
                                        <td class="tg-td">{plan2[11].contents}</td>
                                        <td class="tg-td">{plan2[11].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">13</td>
                                        <td class="tg-td">{plan2[12].time}</td>
                                        <td class="tg-td">{plan2[12].contents}</td>
                                        <td class="tg-td">{plan2[12].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">14</td>
                                        <td class="tg-td">{plan2[13].time}</td>
                                        <td class="tg-td">{plan2[13].contents}</td>
                                        <td class="tg-td">{plan2[13].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">15</td>
                                        <td class="tg-td">{plan2[14].time}</td>
                                        <td class="tg-td">{plan2[14].contents}</td>
                                        <td class="tg-td">{plan2[14].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">16</td>
                                        <td class="tg-td">{plan2[15].time}</td>
                                        <td class="tg-td">{plan2[15].contents}</td>
                                        <td class="tg-td">{plan2[15].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">17</td>
                                        <td class="tg-td">{plan2[16].time}</td>
                                        <td class="tg-td">{plan2[16].contents}</td>
                                        <td class="tg-td">{plan2[16].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">18</td>
                                        <td class="tg-td">{plan2[17].time}</td>
                                        <td class="tg-td">{plan2[17].contents}</td>
                                        <td class="tg-td">{plan2[17].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">19</td>
                                        <td class="tg-td">{plan2[18].time}</td>
                                        <td class="tg-td">{plan2[18].contents}</td>
                                        <td class="tg-td">{plan2[18].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">20</td>
                                        <td class="tg-td">{plan2[19].time}</td>
                                        <td class="tg-td">{plan2[19].contents}</td>
                                        <td class="tg-td">{plan2[19].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">21</td>
                                        <td class="tg-td">{plan2[20].time}</td>
                                        <td class="tg-td">{plan2[20].contents}</td>
                                        <td class="tg-td">{plan2[20].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">22</td>
                                        <td class="tg-td">{plan2[21].time}</td>
                                        <td class="tg-td">{plan2[21].contents}</td>
                                        <td class="tg-td">{plan2[21].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">23</td>
                                        <td class="tg-td">{plan2[22].time}</td>
                                        <td class="tg-td">{plan2[22].contents}</td>
                                        <td class="tg-td">{plan2[22].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">24</td>
                                        <td class="tg-td">{plan2[23].time}</td>
                                        <td class="tg-td">{plan2[23].contents}</td>
                                        <td class="tg-td">{plan2[23].category}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div>
                            <table class="tg">
                                <thead>
                                <tr>
                                    <th class="tg-th-1" colspan="2">0/00 (요일)</th>
                                    <th class="tg-th-2">장소</th>
                                    <th class="tg-th-3">분류</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="tg-td, tg-td-1">1</td>
                                        <td class="tg-td">{plan3[0].time}</td>
                                        <td class="tg-td">{plan3[0].contents}</td>
                                        <td class="tg-td">{plan3[0].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">2</td>
                                        <td class="tg-td">{plan3[1].time}</td>
                                        <td class="tg-td">{plan3[1].contents}</td>
                                        <td class="tg-td">{plan3[1].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">3</td>
                                        <td class="tg-td">{plan3[2].time}</td>
                                        <td class="tg-td">{plan3[2].contents}</td>
                                        <td class="tg-td">{plan3[2].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">4</td>
                                        <td class="tg-td">{plan3[3].time}</td>
                                        <td class="tg-td">{plan3[3].contents}</td>
                                        <td class="tg-td">{plan3[3].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">5</td>
                                        <td class="tg-td">{plan3[4].time}</td>
                                        <td class="tg-td">{plan3[4].contents}</td>
                                        <td class="tg-td">{plan3[4].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">6</td>
                                        <td class="tg-td">{plan3[5].time}</td>
                                        <td class="tg-td">{plan3[5].contents}</td>
                                        <td class="tg-td">{plan3[5].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">7</td>
                                        <td class="tg-td">{plan3[6].time}</td>
                                        <td class="tg-td">{plan3[6].contents}</td>
                                        <td class="tg-td">{plan3[6].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">8</td>
                                        <td class="tg-td">{plan3[7].time}</td>
                                        <td class="tg-td">{plan3[7].contents}</td>
                                        <td class="tg-td">{plan3[7].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">9</td>
                                        <td class="tg-td">{plan3[8].time}</td>
                                        <td class="tg-td">{plan3[8].contents}</td>
                                        <td class="tg-td">{plan3[8].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">10</td>
                                        <td class="tg-td">{plan3[9].time}</td>
                                        <td class="tg-td">{plan3[9].contents}</td>
                                        <td class="tg-td">{plan3[9].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">11</td>
                                        <td class="tg-td">{plan3[10].time}</td>
                                        <td class="tg-td">{plan3[10].contents}</td>
                                        <td class="tg-td">{plan3[10].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">12</td>
                                        <td class="tg-td">{plan3[11].time}</td>
                                        <td class="tg-td">{plan3[11].contents}</td>
                                        <td class="tg-td">{plan3[11].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">13</td>
                                        <td class="tg-td">{plan3[12].time}</td>
                                        <td class="tg-td">{plan3[12].contents}</td>
                                        <td class="tg-td">{plan3[12].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">14</td>
                                        <td class="tg-td">{plan3[13].time}</td>
                                        <td class="tg-td">{plan3[13].contents}</td>
                                        <td class="tg-td">{plan3[13].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">15</td>
                                        <td class="tg-td">{plan3[14].time}</td>
                                        <td class="tg-td">{plan3[14].contents}</td>
                                        <td class="tg-td">{plan3[14].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">16</td>
                                        <td class="tg-td">{plan3[15].time}</td>
                                        <td class="tg-td">{plan3[15].contents}</td>
                                        <td class="tg-td">{plan3[15].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">17</td>
                                        <td class="tg-td">{plan3[16].time}</td>
                                        <td class="tg-td">{plan3[16].contents}</td>
                                        <td class="tg-td">{plan3[16].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">18</td>
                                        <td class="tg-td">{plan3[17].time}</td>
                                        <td class="tg-td">{plan3[17].contents}</td>
                                        <td class="tg-td">{plan3[17].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">19</td>
                                        <td class="tg-td">{plan3[18].time}</td>
                                        <td class="tg-td">{plan3[18].contents}</td>
                                        <td class="tg-td">{plan3[18].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">20</td>
                                        <td class="tg-td">{plan3[19].time}</td>
                                        <td class="tg-td">{plan3[19].contents}</td>
                                        <td class="tg-td">{plan3[19].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">21</td>
                                        <td class="tg-td">{plan3[20].time}</td>
                                        <td class="tg-td">{plan3[20].contents}</td>
                                        <td class="tg-td">{plan3[20].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">22</td>
                                        <td class="tg-td">{plan3[21].time}</td>
                                        <td class="tg-td">{plan3[21].contents}</td>
                                        <td class="tg-td">{plan3[21].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">23</td>
                                        <td class="tg-td">{plan3[22].time}</td>
                                        <td class="tg-td">{plan3[22].contents}</td>
                                        <td class="tg-td">{plan3[22].category}</td>
                                    </tr>
                                    <tr>
                                        <td class="tg-td, tg-td-1">24</td>
                                        <td class="tg-td">{plan3[23].time}</td>
                                        <td class="tg-td">{plan3[23].contents}</td>
                                        <td class="tg-td">{plan3[23].category}</td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    </>

                    </div>

                    <button onClick={()=> setModalIsOpen(true)} className='btn'>일정 추가하기</button>
                    <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={
                            {
                                overlay: {
                                    backgroundColor: 'rgba(220,220,220, 0.5)',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    zIndex: 10
                                },
                                content: {
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    color: 'black',
                                    top: '25%',
                                    left: '610px',
                                    borderRadius: '10px',
                                    width: '700px',
                                    height: '415px',
                                    zIndex: 10,
                                    padding: '30px'
                                }
                            }
                        }



                        >

                    <h6 className='add_plan_title'>
                        일정 추가하기
                    <button onClick={() => setModalIsOpen(false)} style={{ float: 'right', border: 'none', backgroundColor: 'white' }}>
                        <img src='images/close_btn.png' alt=''></img></button>
                    </h6>

                    <div className='add_plan_box'>
                        <div>
                            <p>날짜</p>
                            <button onClick={()=> setAddDay(1)}>1일차</button>
                            <button onClick={()=> setAddDay(2)}>2일차</button>
                            <button onClick={()=> setAddDay(3)}>3일차</button>
                        </div>
                        <div>
                            <p>시간</p>
                            <div className='start_time'>
                                <select onChange={onselectStartHour} 
                                name='start_time' className='choicebox'>
                                    <option value="00">00시</option>
                                    <option value="01">01시</option>
                                    <option value="02">02시</option>
                                    <option value="03">03시</option>
                                    <option value="04">04시</option>
                                    <option value="05">05시</option>
                                    <option value="06">06시</option>
                                    <option value="07">07시</option>
                                    <option value="08">08시</option>
                                    <option value="09">09시</option>
                                    <option value="10">10시</option>
                                    <option value="11">11시</option>
                                    <option value="12">12시</option>
                                    <option value="13">13시</option>
                                    <option value="14">14시</option>
                                    <option value="15">15시</option>
                                    <option value="16">16시</option>
                                    <option value="17">17시</option>
                                    <option value="18">18시</option>
                                    <option value="19">19시</option>
                                    <option value="20">20시</option>
                                    <option value="21">21시</option>
                                    <option value="22">22시</option>
                                    <option value="23">23시</option>
                                </select>
                                <select onChange={onselectStartMinute} name='start_time' className='choicebox'>
                                    <option value="00">00분</option>
                                    <option value="10">10분</option>
                                    <option value="20">20분</option>
                                    <option value="30">30분</option>
                                    <option value="40">40분</option>
                                    <option value="50">50분</option>
                                </select>
                            </div>
                            <p>~</p>
                            <div className='end_time'>
                                <select onChange={onselectEndHour} name='end_time' className='choicebox'>
                                    <option value="00">00시</option>
                                    <option value="01">01시</option>
                                    <option value="02">02시</option>
                                    <option value="03">03시</option>
                                    <option value="04">04시</option>
                                    <option value="05">05시</option>
                                    <option value="06">06시</option>
                                    <option value="07">07시</option>
                                    <option value="08">08시</option>
                                    <option value="09">09시</option>
                                    <option value="10">10시</option>
                                    <option value="11">11시</option>
                                    <option value="12">12시</option>
                                    <option value="13">13시</option>
                                    <option value="14">14시</option>
                                    <option value="15">15시</option>
                                    <option value="16">16시</option>
                                    <option value="17">17시</option>
                                    <option value="18">18시</option>
                                    <option value="19">19시</option>
                                    <option value="20">20시</option>
                                    <option value="21">21시</option>
                                    <option value="22">22시</option>
                                    <option value="23">23시</option>
                                </select>
                                <select onChange={onselectEndMinute} name='end_time' className='choicebox'>
                                    <option value="00">00분</option>
                                    <option value="10">10분</option>
                                    <option value="20">20분</option>
                                    <option value="30">30분</option>
                                    <option value="40">40분</option>
                                    <option value="50">50분</option>
                                </select>
                            </div>
                            
                        </div>
                        <div>
                            <p>일정</p>
                            <form>
                                <input type="text" onChange={setAddSchedule} maxlength = "20"></input>
                            </form>
                        </div>
                        <div>
                            <p>분류</p>
                            <button onClick={()=> setAddKategorie('car')}><img src='images2/car.png' alt=''></img></button>
                            <button onClick={()=> setAddKategorie('food')}><img src='images2/food.png' alt=''></img></button>
                            <button onClick={()=> setAddKategorie('beach')}><img src='images2/beach-chair.png' alt=''></img></button>
                        </div>
                        <button id='put_in_btn' 
                        onClick={() =>{ setModalIsOpen(false); putIn()}}
                        >확인</button>
                    </div>

                    </Modal>
                    

                </div>
            </div>
            
        </div>
    );
}

export default Planning; 