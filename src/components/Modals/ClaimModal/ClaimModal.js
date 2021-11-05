import {
  Input,
  Row,
  Col,
  Button,
  Modal,
  Select,
  InputNumber,
  Upload
} from 'antd'
import './ClaimModal.css'
import { UploadOutlined } from '@ant-design/icons'

export const ClaimModal = props => {
  const { TextArea } = Input

  return (
    <Modal
      title='New Claim Application'
      visible={props.isClaimVisible}
      okText='Confirm'
      onOk={() => {
        props.setisClaimVisible(false)
      }}
      onCancel={() => {
        props.setisClaimVisible(false)
      }}
      zIndex='1'
    >
      <Row>
        <Col>Claim Type: </Col>
        <Col style={{ marginLeft: 10 }}>
          <Select style={{ width: 150 }} placeholder='Select Type'></Select>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>Invoice ID:</Col>
        <Col style={{ marginLeft: 10 }}>
          <Input></Input>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>Claim Amount:</Col>
        <Col style={{ marginLeft: 10 }}>
          <InputNumber></InputNumber>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>Approver: </Col>
        <Col style={{ marginLeft: 10 }}>
          <Select style={{ width: 150 }} placeholder='Select Type'></Select>
        </Col>
      </Row>
      <Row style={{ marginTop: 10 }}>
        <Col>Supporting Documents:</Col>
        <Col style={{ marginLeft: 10 }}>
          <Upload>
            <Button icon={<UploadOutlined />}>Click to Upload</Button>
          </Upload>
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

export default ClaimModal
