import { useState } from 'react'
import {
  Layout,
  Menu,
  Input,
  Row,
  Col,
  Button,
  Modal,
  Card,
  Table,
  Checkbox,
  Space,
  Typography,
  Select,
  DatePicker
} from 'antd'
import './LeaveModal.css'
import {
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  PlusOutlined,
  DownloadOutlined,
  EyeOutlined
} from '@ant-design/icons'

export const LeaveModal = (props) => {
    const { TextArea } = Input

    const { RangePicker } = DatePicker

    return (
        <Modal
            title='New Leave Application'
            visible={props.isLeaveVisible}
            okText='Confirm'
            onOk={() => {
              props.setisLeaveVisible(false)
            }}
            onCancel={() => {
                props.setisLeaveVisible(false)
            }}
            zIndex='1'
          >
            <Row>
              <Col>Select Date: </Col>
              <Col style={{ marginLeft: 10 }}>
                <RangePicker></RangePicker>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>Leave Type: </Col>
              <Col style={{ marginLeft: 10 }}>
                <Select
                  style={{ width: 150 }}
                  placeholder='Select Type'
                ></Select>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>Available Days:</Col>
              <Col style={{ marginLeft: 10 }}>PLACEHOLDER</Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>Approver: </Col>
              <Col style={{ marginLeft: 10 }}>
                <Select
                  style={{ width: 150 }}
                  placeholder='Select Type'
                ></Select>
              </Col>
            </Row>
            <Row style={{ marginTop: 10 }}>
              <Col>Remarks:</Col>
              <Col style={{ marginLeft: 10 }}>
                <TextArea></TextArea>
              </Col>
            </Row>
          </Modal>
    )
}
export default LeaveModal
