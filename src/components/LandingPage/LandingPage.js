import {
  Avatar,
  Layout,
  Menu,
  DatePicker,
  Badge,
  Dropdown,
  Input,
  Row,
  Col,
  Button,
  Modal,
  Card,
  Table,
} from 'antd'
import './LandingPage.css'
import { BellOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons'
import logo from '../../Assets/download.png'
import GridLayout from 'react-grid-layout';

export const LandingPage = () => {
  const { Header, Content, Footer } = Layout

  const { Search } = Input

  const onSearch = value => console.log(value)

  const layout = [
    {i: 'a', x: 1, y: 0, w: 4, h: 13.5,isResizable:false},
    {i: 'b', x: 1, y: 0, w: 4, h: 8,isResizable:false},
    {i: 'c', x: 1, y: 0, w: 4, h: 8,isResizable:false},
    {i: 'd', x: 1, y: 0, w: 4, h: 8,isResizable:false},
    {i: 'e', x: 1, y: 0, w: 4, h: 8,isResizable:false}
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Bob',
      age: 42,
      address: '10 Ning Street',
    },
    {
      key: '4',
      name: 'Tan',
      age: 42,
      address: '10 Tan Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>Profile</Menu.Item>
      <Menu.Item>Log Out</Menu.Item>
    </Menu>
  )

  return (
    <Layout>
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
            defaultSelectedKeys={['1']}
          >
            <Menu.Item className='items'>Home</Menu.Item>
            <Menu.Item className='items'>Leaves</Menu.Item>
            <Menu.Item className='items'>Claims</Menu.Item>
            <Menu.Item className='items'>Payslips</Menu.Item>
          </Menu>
        </Col>

        <Col span={10}>
          <Search
            placeholder='input search text'
            onSearch={onSearch}
            style={{
              float: 'right',
              width: 200,
              marginTop: 15,
              marginRight: 10
            }}
            enterButton
          />
        </Col>
        <Col span={2}>
          <Button
            className='avatar'
            icon={<LogoutOutlined />}
            style={{ background: '#c4c4c4' }}
          >
            Log Out
          </Button>

          {/*<Dropdown overlay={menu} placement='bottomLeft'>
        <Avatar className='avatar' icon={<UserOutlined />} />
  </Dropdown>*/}
        </Col>
      </Row>
      <Content className="layout">
        <GridLayout
          className='layout'
          containerPadding={[0, 0]}
          layout={layout}
          cols={24}
          rowHeight={10}
          width={1500}
        >
          <div className= 'card' key='a'>
            <Card>
              <Table size="small"dataSource={dataSource} columns={columns} pagination={{ pageSize: 3 }}/>
            </Card>
          </div>
          <div className= 'card' key='b'>b</div>
          <div className= 'card' key='c'>c</div>
          <div className= 'card' key='d'>d</div>
        </GridLayout>
      </Content>
    </Layout>
  )
}
export default LandingPage
