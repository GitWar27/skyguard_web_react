import React from 'react'
import { List, Card, Button } from 'antd';
import cctv from '../../assets/images/cctv.jpeg'
import uniform_guard from '../../assets/images/uniform_guard.jpeg'
import security_trainings from '../../assets/images/security_trainings.jpeg'

const data = [
  {
    title: 'Security Cameras & Operators',
    content: [
      {
        image: cctv,
        info_1: 'We offfer security camera setup,',
        info_2: 'trainings and opertion services'
      }
    ]
  },
  {
    title: 'Guards in Uniform',
    content: [
      {
        image: uniform_guard,
        info_1: 'We offer highly trained and trusted',
        info_2: 'guard personnel'
      }
    ]
  },
  {
    title: 'Security Trainings',
    content: [
      {
        image: security_trainings,
        info_1: 'We offer trainings for security guards',
        info_2: 'such as proper mergency handling, etc...'

      }
    ]
  }
];

const services = () => {
  return (
    <div id="services" className="block servicesBlock bgGray">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Services offered</h2>
              <p>We can collaborate on any service that your business needs.</p>
            </div>
            <List
              grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 3,
                lg: 3,
                xl: 3,
                xxl: 3,
              }}
              dataSource={data}
              renderItem={item => (
                <List.Item>
                  <Card title={item.title}>
                    <img alt="services" src={item.content[0].image} className="services_images"/>
                    <p></p>
                    <p>{item.content[0].info_1}</p>
                    <p>{item.content[0].info_2}</p>
                    <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i> Know more</Button>
                  </Card>
                </List.Item>
              )}
            />
          </div>
        </div>  
  )
}

export default services