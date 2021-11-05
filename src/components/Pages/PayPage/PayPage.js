import { Layout, Row, Button, Table, Typography } from 'antd'
import './PayPage.css'
import { DownloadOutlined, EyeOutlined } from '@ant-design/icons'

import Navbar from '../../Navbar/Navbar'

export const PayPage = () => {
  const { Content, Footer } = Layout

  const { Title } = Typography

  const dataSource = [
    {
      key: '1',
      refer: '2021OCT_HCI',
      year: '2021',
      month: 'October',
      from: '01-10-2021',
      to: '31-10-2021'
    },
    {
      key: '2',
      refer: '2021SEPT_HCI',
      year: '2021',
      month: 'September',
      from: '01-09-2021',
      to: '30-09-2021'
    },
    {
      key: '3',
      refer: '2021AUG_HCI',
      year: '2021',
      month: 'August',
      from: '01-08-2021',
      to: '31-08-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    },
    {
      key: '4',
      refer: '2021JULY_HCI',
      year: '2021',
      month: 'July',
      from: '01-07-2021',
      to: '31-07-2021'
    }
  ]

  const columns = [
    {
      title: 'PaySlip Reference',
      dataIndex: 'refer',
      key: 'refer'
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year'
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month'
    },
    {
      title: 'Date From',
      dataIndex: 'from',
      key: 'from'
    },
    {
      title: 'Date To',
      dataIndex: 'to',
      key: 'to'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => <Button icon={<EyeOutlined />}></Button>
    }
  ]

  return (
    <Layout>
      <Navbar name="payslip"/>
      <Content className='pay'>
        <Row>
          <Title>My Payslips</Title>
          <Button icon={<DownloadOutlined />} className='button'></Button>
        </Row>

        <Table
          rowSelection
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ y: 350 }}
        />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Team 08</Footer>
    </Layout>
  )
}

export default PayPage
