import React from 'react'
import logo from '../../assets/images/logo.png'
import { Menu } from 'antd';
import { Anchor, Drawer, Button, Popover } from 'antd';
import { MailTwoTone, PhoneTwoTone, MobileTwoTone } from '@ant-design/icons';

const { Link } = Anchor;
const sub_menu = (
    <div>
        <Link href="#career" title="Career" />
        <Link href="#services" title="Services" />
    </div>
  );


const { SubMenu } = Menu;
const Navbar = (props:any) => {
    console.log(props)
    // const handleSelectItem = data => {
    //     history.push(data?.key);
    //   };
    return (
        <div className="container-fluid">
            {/* <div className='contact_info'>               
                <span>
                    <MailTwoTone /> &nbsp;&nbsp;skyguard.sai@gmail.com&nbsp;&nbsp;
                    <PhoneTwoTone /> &nbsp;&nbsp;49-501-4357&nbsp;&nbsp;
                    <MobileTwoTone /> &nbsp;&nbsp;0968-267-9278/0917-575-0445
               </span>
            </div> */}
            <div className="header">
                <div className="logo"><img src={logo} alt='logo' />&nbsp;&nbsp;<a href="/">Skyguard Security Agency Inc.</a> 
            </div>
            <div className="mobileHidden">
            {/* <Anchor targetOffset={150}>
                <Link href="#security" title="Home" />
                    <Link href="#about" title="About" className='about-menu'>
                        <div className='about-submenu'>
                            <Link href="#whyus" title="Why Us?" />
                            <Link href="#clients" title="Our Clients" />
                            <Link href="#career" title="Career" />
                            <Link href="#services" title="Services" />
                        </div>
                    </Link>

                <Link href="#gallery" title="Gallery" />
                <Link href="#faq" title="FAQ" />
                <Link href="#contact" title="Contact Us" />
            </Anchor> */}
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['home']}>
                <Menu.Item key="/" >Home</Menu.Item>
                <SubMenu key="/about" title="About" >
                    <Menu.Item key="/whyus" >Why Us</Menu.Item>
                    <Menu.Item key="/clients">Clients</Menu.Item>
                    <Menu.Item key="/services">Services</Menu.Item>
                    <Menu.Item key="/career">Careers</Menu.Item>
                </SubMenu>
                <Menu.Item key="/gallery">Gallery</Menu.Item>
                <Menu.Item key="/faq">FAQ</Menu.Item>
                <Menu.Item key="/contactus">Contact Us</Menu.Item>
            </Menu>
            </div>
        </div>
    )
}

export default Navbar