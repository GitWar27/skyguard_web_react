import React from 'react'
import logo from '../../assets/images/logo.png'
import { SafetyCertificateTwoTone, SecurityScanFilled } from '@ant-design/icons';
import { BackTop } from 'antd';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <img src={logo} alt='logo' />
          <a href="http://google.com">&nbsp;Skyguard Security Agency</a><br />
          <span>Address: UNIT 11 4/F EXANNE BLDG., ONE ASIA BUSINESS CENTER SAN ANTONIO, BIÑAN CITY, 4024 <br />
             Telephone No. 049-501-4357 <br />
            Mobile No. 0968-267-9278/0917-575-0445 <br />
            Email Address: skyguard.sai@gmail.com</span>
        </div>
        <ul className="socials">
          <li><a href="localhost:3000"><SecurityScanFilled />&nbsp;Terms and Condition </a></li>
          <li><SafetyCertificateTwoTone />&nbsp;LTO #: PSA-T-04-02191-2022</li>
          <li><SafetyCertificateTwoTone />&nbsp;BPLO Permit No. 2022-03235</li>
          <li><SafetyCertificateTwoTone />&nbsp;ROIVA-LPO-DO174-0322-024-N</li>
          <li><SafetyCertificateTwoTone />&nbsp;SEC#2021100029467-02</li>
          <li><SafetyCertificateTwoTone />&nbsp;PADPAO##2022-0224-11</li>
        </ul>
        <div className="copyright">Copyright &copy; 2022 Skyguard Security</div>
        <BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </BackTop>
      </div>
    </div>
  )
}


export default Footer