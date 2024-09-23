import React, { useState, useEffect } from 'react';
import './App.css';
import { Card, Row, Col } from 'antd';
import Navbar from './Navbar.jsx';
import Footer from './footer.jsx';
const App = () => {
  
  const prelimsDate = new Date('2025-05-25'); 
  const mainsDate = new Date('2025-08-22');   
  const accentureDriveDate = new Date('2024-10-03'); 
  
  const [prelimsDays, setPrelimsDays] = useState(0);
  const [mainsDays, setMainsDays] = useState(0);
  const [accentureDays, setAccentureDays] = useState(0);

  useEffect(() => {
    const calculateDaysRemaining = (eventDate, setDays) => {
      const today = new Date();
      const differenceInTime = eventDate.getTime() - today.getTime();
      const daysRemaining = Math.ceil(differenceInTime / (1000 * 60 * 60 * 24));
      setDays(daysRemaining);
    };

    calculateDaysRemaining(prelimsDate, setPrelimsDays);
    calculateDaysRemaining(mainsDate, setMainsDays);
    calculateDaysRemaining(accentureDriveDate, setAccentureDays);

    
    const interval = setInterval(() => {
      calculateDaysRemaining(prelimsDate, setPrelimsDays);
      calculateDaysRemaining(mainsDate, setMainsDays);
      calculateDaysRemaining(accentureDriveDate, setAccentureDays);
    }, 1000 * 60 * 60 * 24);

    return () => clearInterval(interval); 
  }, [prelimsDate, mainsDate, accentureDriveDate]);

  return (
    <>
    <Navbar/>
     <div id="back">
      
      <Row justify="center" align="middle" gutter={[32, 32]} style={{ height: '100vh' }}>
        <Col span={6}>
          <Card bordered={true} className="custom-card">
            <h2 id="prelims-title">UPSC Prelims</h2>
            <p id="prelims-days">{prelimsDays}</p>
            <p id="prelims-text">days remaining</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true} className="custom-card">
            <h2 id="mains-title">UPSC Mains</h2>
            <p id="mains-days">{mainsDays}</p>
            <p id="mains-text">days remaining</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card bordered={true} className="custom-card">
            <h2 id="accenture-title">Accenture</h2>
            <p id="accenture-days">{accentureDays}</p>
            <p id="accenture-text">days remaining</p>
          </Card>
        </Col>
      </Row>
    </div>
    <Footer/>
  </>
  );
}

export default App;