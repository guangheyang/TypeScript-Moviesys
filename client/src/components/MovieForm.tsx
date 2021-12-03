import { Button, Checkbox, Form, Input, InputNumber, message, Switch } from "antd";
import React from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { IMovie } from "../services/MovieService";
import ImageUpload from "./ImageUpload";
import "reflect-metadata"

const AllAreas: { label: string, value: string }[] = [
  { label: '中国大陆', value: '中国大陆' },
  { label: '中国香港', value: '中国香港' },
  { label: '韩国', value: '韩国' },
  { label: '日本', value: '日本' },
  { label: '美国', value: '美国' }
];
const AllTypes: { label: string, value: string }[] = [
  { label: '爱情', value: '爱情' },
  { label: '喜剧', value: '喜剧' },
  { label: '动作', value: '动作' },
  { label: '战争', value: '战争' },
  { label: '灾难', value: '灾难' }
];


interface IFormProp {
  onSubmit: (movie: IMovie) => Promise<boolean>
  onSuccessCallback: () => void
}
class MovieForm extends React.Component<IFormProp> {
  state = {
    image: ''
  }
  async onFinish(values: IMovie) {
    values.poster = this.state.image
    const res = await this.props.onSubmit(values)
    if (res) {
      message.success('提交成功', 1, () => {
        console.log('over')
        this.props.onSuccessCallback()
      })
    } else {
      message.error('提交失败')
    }
    return res
  };
  onFinishFailed(errorInfo: any) {
    console.log('Failed:', errorInfo);
  };
  render() {
    const normFile = (newUrl: string) => {
      console.log('Upload event:', newUrl);
      this.setState({
        image: newUrl
      })
      console.log(this)
    };
    return (
      <Form
        labelCol={{ span: 5 }}
        wrapperCol={{ span: 20, offset: 1 }}
        style={{ width: '400px' }}
        onFinish={this.onFinish.bind(this)}
        onFinishFailed={this.onFinishFailed.bind(this)}
      >
        <Form.Item label="电影名称" name="name" rules={[{ required: true, message: '请填写电影名称' }]}>
          <Input></Input>
        </Form.Item>
        <Form.Item label="封面图" name="poster" valuePropName="poster" getValueFromEvent={normFile}>
          <ImageUpload curImageUrl={this.state.image} />
        </Form.Item>
        <Form.Item label="地区" name="areas" rules={[{ required: true, message: '请选择地区' }]}>
          <Checkbox.Group
            options={AllAreas}
          ></Checkbox.Group>
        </Form.Item>
        <Form.Item label="类型" name="types" rules={[{ required: true, message: '请选择类型' }]}>
          <Checkbox.Group
            options={AllTypes}
          ></Checkbox.Group>
        </Form.Item>
        <Form.Item label="时长（分钟）" rules={[{ required: true, message: '请填写时长' }]}>
          <InputNumber min={1} step={10} />
        </Form.Item>
        <Form.Item label="正在热映" name="isHot">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="即将上映" name="isComing">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="经典电影" name="isClassic">
          <Switch defaultChecked />
        </Form.Item>
        <Form.Item label="描述" name="description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item labelCol={{ span: 5 }} wrapperCol={{ span: 20, offset: 5 }}>
          <Button type="primary" htmlType="submit">提交</Button>
        </Form.Item>
      </Form>
    )
  }
}

export default MovieForm