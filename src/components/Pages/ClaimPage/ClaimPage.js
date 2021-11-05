import { useState } from 'react'
import {
  Layout,

  Row,

  Button,

  Table,

} from 'antd'
import './ClaimPage.css'
import { PlusOutlined} from '@ant-design/icons'
import { Pie } from '@ant-design/charts'
import Navbar from '../../Navbar/Navbar'
import ClaimModal from '../../Modals/ClaimModal/ClaimModal'

export const ClaimPage = () => {
  const { Content, Footer } = Layout

  const [isClaimVisible, setisClaimVisible] = useState(false)

  const data = [
    {
      type: 'Medical',
      value: 27
    },
    {
      type: 'Meal',
      value: 25
    },
    {
      type: 'Transport',
      value: 18
    },
    {
      type: 'Dental',
      value: 15
    },
    {
      type: 'Misc.',
      value: 10
    }
  ]

  const dataSource = [
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

  const columns = [
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
  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    label: {
      type: 'inner',
      content: '{name} {percentage}'
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }]
  }
  return (
    <Layout>
      <Navbar name="claim"/>
      <Content className="pie">
        <Row
          style={{ background: '#fff', justifyContent: 'center', height: 400 }}
        >
          <Pie {...config} />
        </Row>
        <Row style={{ backgroundColor: '#fff', float: 'right', marginTop: 10 }}>
          <Button
            type='primary'
            icon={<PlusOutlined />}
            onClick={() => {
              setisClaimVisible(true)
            }}
          >
            New Claims
          </Button>
          <ClaimModal
            isClaimVisible={isClaimVisible}
            setisClaimVisible={setisClaimVisible}
          />
        </Row>
        <Row
          style={{
            background: '#fff',
            justifyContent: 'center',
            marginTop: 50
          }}
        >
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ y: 350 }}
          />
        </Row>
      </Content>
      <Footer>Ayylmao</Footer>
    </Layout>
  )
}

export default ClaimPage
