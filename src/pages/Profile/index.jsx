import {useEffect, useState} from 'react';
import './style.scss';
import img from './avatar.jpg';
import axios from 'axios';
function Profile() {
  const[name,setName]=useState('Trần Văn Thành')
  const[point,setPoint]=useState({
    win:13,
    draw:3,
    lose:5,

  });
  var w= point.win*12;
  var widthW={width:String(w)+'px'};
  var d=point.draw*12;
  var widthD={width:String(d)+'px'};
  var l=point.lose*12;
  var widthL={width:String(l)+'px'};
  useEffect(()=>{
    const getPoint= async ()=>{
      try {
        const res=  await axios.get(
          // #
        )
        setPoint(res.data)
      }
      catch(error){
        console.log(error.message);
      }
    }

    getPoint();
  },[])
  
        return(
          <div class = "profile">
          <h1>Thông tin cá nhân</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-6'>
                  <div className='image'>
                    <img src={img}></img>
                  </div>
              </div>
              <div className='col-6'>
                 <h2>Họ Tên : {name}</h2>
                 <h2>Điểm :195 </h2>
                 <h2>ElO : 1200</h2>
                 <h2>Rank : Chua xep hang</h2>
                  
              </div>
            </div>
            <div className='new'>
              <div className='statistical'> 
                <div className='win'>
                  <div className='line' style={widthW}></div>
                  <p>55 Thắng</p>
                </div>
                <div className='draw'>
                  <div className='line' style={widthD}></div>
                  <p>30 Hòa</p>
                </div>
                <div className='lose'>
                  <div className='line' style={widthL}></div>
                  <p>23 Thua</p>
                </div>
              </div>
            </div>
          </div>

          </div>
        ); 
}

export default Profile;
