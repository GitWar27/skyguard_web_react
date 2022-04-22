import React, { useState } from 'react'
import { Collapse, Button, Modal, message, Form, Input, Radio } from 'antd';

const { Panel } = Collapse;
const { TextArea } = Input;

const FAQ = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [faq_filter, setFaqFilter] = useState("Service")

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSubmit = () => {
    setIsModalVisible(false);
  };
  return (
    <div id="faq" className="block faqBlock">
          <div className="container-fluid">
            <div className="titleHolder">
              <h2>Frequently Asked Questions</h2>
            </div>
            <Collapse defaultActiveKey={['1']}>
              <Panel header="How to apply?" key="1">
                <p>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
              </Panel>
              <Panel header="How to avail service?" key="2">
                <p>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
              </Panel>
              <Panel header="Do you have personal bodyguard?" key="3">
                <p>Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.</p>
              </Panel>
              <Panel header="Do you support securioty cameras?" key="4">
                <p>Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea velit facete nec.</p>
              </Panel>
            </Collapse>
            <div className="quickSupport">
              <h3>Want quick support?</h3>
              <p>If you have some questions. Please feel free to click the button and send us a message.</p>
              <Button type="primary" size="large" onClick={showModal}><i className="fas fa-envelope"></i> Send us your question</Button>
              <Modal title="FAQ" key="submit" visible={isModalVisible}  width={1000} centered onCancel={handleCancel}
              footer={[
                <Button key="cancel" type="primary"  onClick={handleCancel}>
                  Cancel
                </Button>,                
                <Button key="submit" type="primary"  onClick={handleSubmit}>
                  Submit
                </Button>]}>
                <Form
                  name="normal_login"
                  className="login-form"
                  initialValues={{ remember: true }}
                >
                  <Form.Item name="message_type">
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                      <Radio.Button value="service">Service Applicant</Radio.Button>
                      <Radio.Button value="job">Job Applicant</Radio.Button>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item name="message">
                    <TextArea placeholder="Message" />
                  </Form.Item>
                  <Form.Item>
                    {/* <Button type="primary" htmlType="submit" className="login-form-button">
                      Submit
                    </Button> */}
                  </Form.Item>
                </Form>
              </Modal>
            </div>
          </div>
        </div>  
  )
}

export default FAQ