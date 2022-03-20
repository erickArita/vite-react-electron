import { Form, Input, Button, Checkbox, Space } from "antd";
import { useEffect, useState } from "react";
import { OrderJob } from "../../../main/models/OrderJob";

export const Demo = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
    const res = window.api.invoke("post/jobOrder/", {
      add: "sas",
      address: "sasas",
      age: 19,
      alt: "sas",
      dis: "sas",

      name: "Ericl",
      lentType: "sas",
      phone: "sas",
      modelAro: "wqwqw",
      observation: "lorem",
      od: "sas",
      oi: "sas",
      tel: "12122112",
    } as OrderJob);
  };

  const [orders, setOrders] = useState<OrderJob[]>([]);

  useEffect(() => {
    window.api.on("post/jobOrder/", (event, args) => {
      setOrders((orders) => [...orders, args]);
    });
  }, []);

  useEffect(() => {
    const getAl = async () => {
      const res = await window.api.invoke("get/jobOrder/getAll");
      console.log(res);
    };
    getAl();
  }, ["ssss"]);

  const onFinishFailed = () => {};

  return (
    <Space align="center" style={{ width: "100%" }}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Password" name="password">
          <Input.Password />
        </Form.Item>

        {/* <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Space>
  );
};
