import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
} from "antd";
import React, { useState } from "react";
import * as style from "./NewWorker.module.scss";

function NewWorker({ sendWorker, fnUpdate }) {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      dob: fieldsValue.dob.format("YYYY-MM-DD"),
    };
    setVisible(false);
    sendWorker(values);
    fnUpdate();
  };
  const onFinishFailed = (fel) => console.log("fel", fel);

  return (
    <>
      <button onClick={showModal} className={style.btn}>
        <PlusOutlined />
      </button>
      <Modal
        title="Новый работник"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form
          name="new"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="ФИО"
            name="fullName"
            rules={[{ required: true, message: "Введите ФИО" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Контакты"
            name="contact"
            rules={[{ required: true, message: "Введитe контакты" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Должность"
            name="status"
            rules={[{ required: true, message: "Введитe должность" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Оклад"
            name="salary"
            rules={[
              { type: "number", required: true, message: "Введите оклад" },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item name="dob" label="Дата рождения">
            <DatePicker format="YYYY-MM-DD" />
          </Form.Item>

          <Form.Item
            name="gender"
            // className="collection-create-form_last-form-item"
          >
            <Radio.Group>
              <Radio value="male">М</Radio>
              <Radio value="female">Ж</Radio>
            </Radio.Group>
            {/* </Radio> */}
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default NewWorker;
