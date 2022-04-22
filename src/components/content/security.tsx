import React from "react";
import { Button, Carousel } from 'antd';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png'


const items = [
    {
      key: '1',
      title: "MISSION",
      content: 'At SKYGUARD, we take pride in providing superior, extraordinaire security, safety services and protection with integrity to all our clients and customers for total satisfaction and peace of mind.',
    },
    {
      key: '2',
      title: 'VISION',
      content: "To be at par with the top security agencies in the country, providing quality services through continuous investment in equipment and well-trained personnel that is committed to excellence to ensure the security and protection of every client’s life and property.",
    },
    {
      key: '3',
      title: "CORE VALUES",
      content: "INTEGRITY, RELIABILITY, ACCOUNTABILITY, PROACTIVITY, RESILIENCE",
    },
  ]

const Security = () => {
    return (
      <div id="security" className="securityBlock">
        <Carousel autoplay autoplaySpeed={7000}>
          {items.map(item => {
            return (
              <div key={item.key} className="container-fluid">
                <div className="content" id="security_content">
                  <h1 className="blue">SKYGUARD SECURITY AGENCY INC.</h1>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                  <div className="btnHolder">
                    <Button type="primary" size="large">Learn More</Button>
                  </div>
                </div>
              </div>  
            );
          })}
        </Carousel>
      </div>
    )
}

export default Security