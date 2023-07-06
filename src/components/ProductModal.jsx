import React from 'react'
import {Modal , Form ,Butto}
const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  import {
    Upload,
    AutoComplete,
    Cascader,
    Checkbox,
    Col,
    Form,
    Input,
    InputNumber,
    Row,
    Select,
  } from "antd";
function ProductModal() {
  return (
    <Modal
    title="Add Product Details"
    open={isaddopen}
    onOk={handleAddOk}
    footer={null}
    onCancel={handleAddCancel}
    style={{ paddingTop: "2rem" }}
  >
    <Form

      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
        draft: true,
      }}
      onFinish={(values) => handleAdd(values)}
    >
      <div className="addcontainer">
        <Form.Item
          label="Image      "
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          {" "}
          <center>
            <Upload action="/upload.do" listType="picture-card">
              <div>
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </div>
            </Upload>
          </center>
        </Form.Item>
        <Form.Item
          name="product_name"
          label="Name"
          tooltip="What do you want others to call you?"
          rules={[
            {
              message: "Please input your nickname!",
              whitespace: true,
            },
          ]}
        >
          <Input style={{ width: "22rem", marginLeft: "2.2rem" }} />
        </Form.Item>
        <Form.Item label="Desciption" name="description">
          <TextArea
            rows={4}
            style={{ width: "22rem", marginLeft: "1.6rem" }}
          />
        </Form.Item>
        <Form.Item
          name="product_price"
          label="Price"
          rules={[
            {
              message: "Please input your price!",
              whitespace: true,
            },
          ]}
        >
          <Input style={{ width: "10rem", marginLeft: "4rem" }} />
        </Form.Item>

        <Form.Item
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
          name="draft"
        >
          <Checkbox  style={{ paddingTop: "1rem" }}>
            <p style={{ paddingTop: "2.8px" }}>Add to Draft</p>{" "}
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            style={{
              width: "100px",
              backgroundColor: "black",
              paddingLeft: "1rem",
              height: "3rem",
              borderRadius: "1rem",
              marginRight: "1rem",
            }}
            onClick={handleAdd}
            type="primary"
            htmlType="submit"
          >
            Add
          </Button>
        </Form.Item>
      </div>
    </Form>
  </Modal>
  )
}

export default ProductModal