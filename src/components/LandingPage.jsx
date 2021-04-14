import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function LandingPage() {
  const [value, onChange] = useState(new Date());
  
  function onClickDay(date){
    console.log(date);
  }
    return (
        <div className="landing">
          <div className="container">
          <div className="item">
          <h3>Calendar View</h3>
          <Calendar
            onChange={onChange}
            onClickDay={onClickDay}
            value={value}
          />
          </div>
          <div className="item">
            <h3>Upcoming events</h3>
            <ul className="list-group">
              <li className="list-group-item ">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          </div>
          <div className="container-form">
          <div className="item">
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Person"/>
                </div>
                <div className="col">
    <input className="form-control" type="date" placeholder="Date" id="example-date-input"/>    
    </div>
                <div className="col">
                  <input className="btn btn-primary" type="submit" value="Add new event"/>
                </div>
              </div>
            </form>
          </div>
          </div>
        </div>
  );
}