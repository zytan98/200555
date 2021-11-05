import { Menu, Row, Col, Button, Layout } from 'antd'

import { LogoutOutlined } from '@ant-design/icons'

import logo from '../../Assets/download.png'

import { Link } from 'react-router-dom'

export const Navbar = (props) => {
  const { Header } = Layout

  return (
    <div>
      <Header style={{ background: '#fff' }}>
        <img className='logo' src={logo} />
        <div style={{ fontWeight: 700 }}>WELCOME AH BOY</div>
      </Header>
      <Row style={{ background: '#001529' }}>
        <Col span={12}>
          <Menu
            theme='dark'
            style={{ marginTop: 10 }}
            mode='horizontal'
            defaultSelectedKeys={[props.name]}
          >
            <Menu.Item className='items' key="main">
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item className='items' key ="leave">
              <Link to='/leave'>Leaves</Link>
            </Menu.Item>
            <Menu.Item className='items' key ="claim"> 
              <Link to='/claim'>Claims</Link>
            </Menu.Item>
            <Menu.Item className='items' key = "payslip">
              <Link to='/payslip'>Payslip</Link>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={12}>
          <Button
            className='avatar'
            icon={<LogoutOutlined />}
            style={{ background: '#c4c4c4' }}
          >
            Log Out
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar
