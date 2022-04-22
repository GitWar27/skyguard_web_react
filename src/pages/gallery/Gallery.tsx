import React, { useState } from 'react'
import image1 from '../../assets/images/presenting-skyguard.jpg';
import image2 from '../../assets/images/permit-granted.jpg';
import image3 from '../../assets/images/ready_2serve.jpg';
import image4 from '../../assets/images/role_model.jpg';
// import image5 from '../../assets/images/unlimited-features.jpg';
// import image6 from '../../assets/images/advanced-option.jpg';

import { Row, Col, Popover, Card, Modal } from 'antd';

const { Meta } = Card
const text = <span>Title</span>


const Gallery = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);


  return (
    <div id="gallery" className="block featureBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>News and events in Skyguard</h2>
          <p>Latest news and our milestones!</p>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Our Identity" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Permit Finally" />
            </Card>

          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="We are the Skyguard" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Ready to serve" />
            </Card>
          </Col>
          {/* <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Unlimited Features" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Advanced Options" />
            </Card>
          </Col> */}
        </Row>
      </div>
    </div>
  )
}

export default Gallery