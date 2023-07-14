import React from 'react';
import './styles/dashboad.css'
import whatsapp from './styles/images/whatsapp.svg';
import instagram from './styles/images/instagram.svg';
import facebook from './styles/images/facebook.svg'
import twitter from './styles/images/twitter.svg'
import telegram from './styles/images/telegram.svg'
import Navbar from './Navbar';

import { useSelector } from 'react-redux';
function DashBoard(){
  const user=useSelector(state => state.user.value)
  const card=[
    {
      title: 'Machine Learning',
      tutor: 'Arya',
      time: '23/07/2023'
    },
    {
      title: 'Data Structures',
      tutor: 'Sam',
      time: '18/07/2023'
    },
    {
      title: 'Java Script',
      tutor: 'Balaji',
      time: '18/07/2023'
    }
  ];
  return(
    <div>
      <Navbar/>
      <div className='body-card'>
        <div className='body-upper-part'>

      <div className="dash-card">
        <img src="https://www.avanse.com/viewPagesAssets/img/ticket-to-our-dreams2.webp" alt="John" style={{width: '100%'}} />
        <h2>{user.name}</h2>
        <p className="title">B.Tech - Artifical Intelligence and Data Science</p>
        <p>Krishna College</p>
        <a className='dash-ico'><img src={whatsapp}></img> </a>
        <a className='dash-ico'><img src={instagram}></img> </a>
        <a className='dash-ico'><img src={facebook}></img></a>
        <a className='dash-ico'><img src={twitter}></img> </a>
        <p><button className='con-but'>Student</button></p>
      </div>
    <div className='mini-card'>
      <h1 className='class-text'>Class</h1>
      <div className='card1'>
      <div className='h4'>
        
        <h4>Tutors that will bring out the best in you</h4>
        <h6>Set your Study plan and grow</h6>
      </div>
     
      </div>
      <div className='card2'>
    <div class="piechart"></div>
      </div>
    </div>
    <div className='calander-box'>
    <table id="calendar">
        <caption>September 2023</caption>
        <tbody><tr className="weekdays">
            <th scope="col">Sunday</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
          </tr>
          <tr className="days">
            <td className="day other-month">
              <div className="date">27</div>
            </td>
            <td className="day other-month">
              <div className="date">28</div>
              {/* <div className="event">
                <div className="event-desc">
                  HTML 5 lecture with Brad Traversy from Eduonix
                  </div>
                  <div className="event-time">
                  1:00pm to 3:00pm
                  </div>
                </div> */}
            </td>
            <td className="day other-month">
              <div className="date">29</div>
            </td>
            <td className="day other-month">
              <div className="date">30</div>
            </td>
            <td className="day other-month">
              <div className="date">31</div>
            </td>
            <td className="day">
              <div className="date">1</div>
            </td>
            <td className="day">
              <div className="date">2</div>
              {/* <div className="event">
                <div className="event-desc">
                Career development @ Community College room #402
                </div>
                <div className="event-time">
                2:00pm to 5:00pm
                </div>
                </div>
                <div className="event">
                <div className="event-desc">
                Test event 2
                </div>
                <div className="event-time">
                  5:00pm to 6:00pm
                </div>
              </div> */}
            </td>
          </tr>
          <tr>
            <td className="day">
              <div className="date">3</div>
            </td>
            <td className="day">
              <div className="date">4</div>
            </td>
            <td className="day">
              <div className="date">5</div>
            </td>
            <td className="day">
              <div className="date">6</div>
            </td>
            <td className="day">
              <div className="date">7</div>
              {/* <div className="event">
                <div className="event-desc">
                  Group Project meetup
                </div>
                <div className="event-time">
                6:00pm to 8:30pm
                </div>
              </div> */}
            </td>
            <td className="day">
              <div className="date">8</div>
            </td>
            <td className="day">
              <div className="date">9</div>
            </td>
          </tr>
          <tr>
            <td className="day">
              <div className="date">10</div>
            </td>
            <td className="day">
              <div className="date">11</div>
            </td>
            <td className="day">
              <div className="date">12</div>
            </td>
            <td className="day">
              <div className="date">13</div>
            </td>
            <td className="day">
              <div className="date">14</div>
              {/* <div className="event">
                <div className="event-desc">
                Board Meeting
                </div>
                <div className="event-time">
                1:00pm to 3:00pm
                </div>
              </div> */}
            </td>
            <td className="day">
              <div className="date">15</div>
            </td>
            <td className="day">
              <div className="date">16</div>
            </td>
          </tr>
          <tr>
            <td className="day">
              <div className="date">17</div>
            </td>
            <td className="day">
              <div className="date">18</div>
            </td>
            <td className="day">
              <div className="date">19</div>
            </td>
            <td className="day">
              <div className="date">20</div>
            </td>
            <td className="day">
              <div className="date">21</div>
            </td>
            <td className="day">
              <div className="date">22</div>
              {/* <div className="event">
                <div className="event-desc">
                Conference call
                </div>
                <div className="event-time">
                9:00am to 12:00pm
                </div>
              </div> */}
            </td>
            <td className="day">
              <div className="date">23</div>
            </td>
          </tr>
          <tr>
            <td className="day">
              <div className="date">24</div>
            </td>
            <td className="day">
              <div className="date">25</div>
              {/* <div className="event">
                <div className="event-desc">
                Conference Call
                </div>
                <div className="event-time">
                1:00pm to 3:00pm
                </div>
              </div> */}
            </td>
            <td className="day">
              <div className="date">26</div>
            </td>
            <td className="day">
              <div className="date">27</div>
            </td>
            <td className="day">
              <div className="date">28</div>
            </td>
            <td className="day">
              <div className="date">29</div>
            </td>
            <td className="day">
              <div className="date">30</div>
            </td>
          </tr>
          <tr>
            <td className="day">
              <div className="date">31</div>
            </td>
            <td className="day other-month">
              <div className="date">1</div>
              {/* Next Month */}
            </td>
            <td className="day other-month">
              <div className="date">2</div>
            </td>
            <td className="day other-month">
              <div className="date">3</div>
            </td>
            <td className="day other-month">
              <div className="date">4</div>
            </td>
            <td className="day other-month">
              <div className="date">5</div>
            </td>
            <td className="day other-month">
              <div className="date">6</div>
            </td>
          </tr></tbody></table>
    </div>
    </div>
    <div className='body-lower-part'>
      <div className='part1'>
        <h3>To-do</h3>
        <div className='card3'>
          {card.map((cardvar,index)=>(
            <div className='sub-card3' key={index}>

            <div className='sh-class-name'>
              <h4>{cardvar.tutor}</h4> <p> posted a new assignment on {cardvar.title}</p>
            <div className='sh-time'>
              <h5>Due date :</h5>
              <p>{cardvar.time}</p>
            </div>
            </div>
            </div>
          )
          )}

        </div>
      </div>

    </div>
</div>
</div>
  );
}
export default DashBoard