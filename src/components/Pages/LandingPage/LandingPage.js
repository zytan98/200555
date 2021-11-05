import { useState } from 'react'
import { Layout, Col, Row, Button, Modal, Card, Table, Checkbox } from 'antd'
import './LandingPage.css'
import { PlusOutlined, DownloadOutlined, EyeOutlined } from '@ant-design/icons'
import GridLayout from 'react-grid-layout'
import Navbar from '../../Navbar/Navbar'
import ClaimModal from '../../Modals/ClaimModal/ClaimModal'
import LeaveModal from '../../Modals/LeaveModal/LeaveModal'
import Clock from '../../Extras/Clock/Clock'

export const LandingPage = () => {
  const { Content, Footer } = Layout

  const [isModulesVisible, setisModulesVisible] = useState(false)

  const [isClaimVisible, setisClaimVisible] = useState(false)

  const [isLeaveVisible, setisLeaveVisible] = useState(false)

  const [isCheckIn, setisCheckIn] = useState(false)

  const [isChecked,setisChecked] = useState([])

  const toggleCheck = () => setisCheckIn(value => !value)

  const boardCheck = (values) => {
    setisChecked(values)
  }

  const options = [
    { label: 'Check in/out', value: 'check' },
    { label: 'Claims', value: 'claim' },
    { label: 'Leaves', value: 'leave' },
    { label: 'Payslips', value: 'payslip' }
  ]

  const layout = [
    { i: 'add', x: 0, y: 0, w: 11, h: 23, isResizable: false }
  ]

  const paySource = [
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

  const leaveSource = [
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    }
  ]

  const claimSource = [
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    },
    {
      key: '1',
      id: '1',
      refer: '2021OCT_HCI',
      type: 'Dental',
      amount: '213',
      status: 'Approved',
      date: '31-10-2021'
    },
    {
      key: '2',
      id: '2',
      refer: '2021SEPT_HCI',
      type: 'Medical',
      amount: '213',
      status: 'Approved',
      date: '31-09-2021'
    },
    {
      key: '3',
      id: '3',
      refer: '2021AUG_HCI',
      type: 'Meal',
      amount: '213',
      status: 'Approved',
      date: '31-08-2021'
    }
  ]

  const claimsColumns = [
    {
      title: 'Claims ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Reference No.',
      dataIndex: 'refer',
      key: 'refer'
    },
    {
      title: 'Claims Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Claims Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Submission Date',
      dataIndex: 'date',
      key: 'date'
    }
  ]

  const leaveColumns = [
    {
      title: 'Claims ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Reference No.',
      dataIndex: 'refer',
      key: 'refer'
    },
    {
      title: 'Claims Type',
      dataIndex: 'type',
      key: 'type'
    },
    {
      title: 'Claims Amount',
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    },
    {
      title: 'Submission Date',
      dataIndex: 'date',
      key: 'date'
    }
  ]

  const payColumns = [
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
      <Navbar name='main' />
      <Content className='layout'>
        <GridLayout
          className='grid'
          layout={layout}
          cols={22}
          rowHeight={10}
          width={1500}
          isBounded={true}
        >
          {isChecked.includes('check') && <div className='card' key='check' data-grid={{x: 0, y: 0, w: 11, h: 23, isResizable: false}}>
            <Card style={{ height: 'inherit' }} title='Check In/Out'>
              <Row>
                <Col style={{ fontSize: 40 }}>Status:</Col>
                <Col style={{ fontSize: 40, marginLeft: 10, fontWeight: 700 }}>
                  {isCheckIn ? 'Checked-In' : 'Checked-Out'}
                </Col>
              </Row>
              <Row>
                <Col style={{ fontSize: 40 }}>Current Time: </Col>
                <Col>
                  <Clock />
                </Col>
              </Row>
              <Row style={{marginTop:10}}>
                <Button
                  type='primary'
                  className='button'
                  onClick={toggleCheck}
                  size="large"
                > Check In</Button>
              </Row>
            </Card>
          </div>}
          {isChecked.includes('claim') && <div className='card' key='claim' data-grid={{x: 11, y: 0, w: 11, h: 23, isResizable: false}}>
            <Card style={{ height: 'inherit' }} title='Claims'>
              <Table
                dataSource={claimSource}
                columns={claimsColumns}
                pagination={false}
                scroll={{ y: 240 }}
              />
              <Button
                shape='circle'
                type='primary'
                className='button'
                icon={<PlusOutlined />}
                onClick={() => {
                  setisClaimVisible(true)
                }}
              ></Button>
              <ClaimModal
                isClaimVisible={isClaimVisible}
                setisClaimVisible={setisClaimVisible}
              />
            </Card>
          </div>}
          {isChecked.includes('leave') && <div className='card' key='leave' data-grid={{x: 0, y: 0, w: 11, h: 23, isResizable: false }}>
            <Card style={{ height: 'inherit' }} title='Leaves'>
              <Table
                dataSource={leaveSource}
                columns={leaveColumns}
                pagination={false}
                scroll={{ y: 240 }}
              />
              <Button
                shape='circle'
                type='primary'
                className='button'
                icon={<PlusOutlined />}
                onClick={() => {
                  setisLeaveVisible(true)
                }}
              ></Button>
              <LeaveModal
                isLeaveVisible={isLeaveVisible}
                setisLeaveVisible={setisLeaveVisible}
              />
            </Card>
          </div>}
          {isChecked.includes('payslip') && <div className='card' key='payslip' data-grid={{x: 11, y: 0, w: 11, h: 23, isResizable: false}}>
            <Card style={{ height: 'inherit' }} title='Payslips'>
              <Table
                dataSource={paySource}
                columns={payColumns}
                pagination={false}
                scroll={{ y: 240 }}
              />
            </Card>
          </div>}
          <div className='card' key='add'>
            <Card style={{ height: 'inherit' }}>
              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '100px',
                  fontSize: '35px'
                }}
              >
                <div>Add/Remove Modules</div>
              </Row>
              <Row
                style={{
                  justifyContent: 'center',
                  marginTop: '40px',
                  marginBottom: '150px'
                }}
              >
                <Button
                  size='large'
                  shape='circle'
                  type='primary'
                  icon={<PlusOutlined />}
                  onClick={() => {
                    setisModulesVisible(true)
                  }}
                ></Button>
                <Modal
                  title='Add/Remove Modules'
                  visible={isModulesVisible}
                  okText='Confirm'
                  onOk={() => {
                    setisModulesVisible(false)
                  }}
                  onCancel={() => {
                    setisModulesVisible(false)
                  }}
                >
                  <Checkbox.Group options={options} onChange={boardCheck} />
                </Modal>
              </Row>
            </Card>
          </div>
        </GridLayout>
      </Content>
      <Footer>AMOGUS</Footer>
    </Layout>
  )
}
export default LandingPage
