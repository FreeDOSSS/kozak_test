import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Modal,
  Radio,
} from "antd";
import moment from "moment";
import React, { useEffect, useState } from "react";

function EditWorker({ update, show, onClose, item, id, saveEdit }) {
  const [worker, setWorker] = useState(null);

  useEffect(() => {
    setWorker(item(Number(id)));
    if (!show) setWorker(null);
  }, [id, show]);

  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      dob: fieldsValue.dob.format("YYYY-MM-DD"),
    };
    saveEdit({ ...values, id });
    update();
    onClose();
  };

  const dateFormat = "YYYY-MM-DD";
  const formatDate = (data) => moment(data, dateFormat);
  return worker && id ? (
    <Modal
      title={worker.fullName}
      visible={show}
      onCancel={onClose}
      footer={false}
    >
      <Form
        name="edit"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
        initialValues={{
          ...worker,
          dob: formatDate(worker.dob),
        }}
        onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
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
          rules={[{ type: "number", required: true, message: "Введите оклад" }]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item name="dob" label="Дата рождения">
          <DatePicker />
        </Form.Item>

        <Form.Item name="gender">
          <Radio.Group>
            <Radio value="male">М</Radio>
            <Radio value="female">Ж</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  ) : (
    <></>
  );
}

export default EditWorker;
