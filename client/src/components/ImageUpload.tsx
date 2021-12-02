import { message, Modal, Upload } from "antd";
import { PlusOutlined } from '@ant-design/icons';
import React from "react";
import { UploadFile } from "antd/lib/upload/interface";
import { IResponseError, IResponstData } from "../services/CommonTypes";

interface IImageUploadProps {
  curImageUrl?: string
  onChange: (imageUrl: string) => void
}
interface IShowState {
  showModal: boolean
}
export default class extends React.Component<IImageUploadProps, IShowState> {
  state: IShowState = {
    showModal: false
  }

  private getUploadContent() {
    if (this.props.curImageUrl) {
      return null
    } else {
      return (
        <div>
          <PlusOutlined></PlusOutlined>
          <div>点击上传</div>
        </div>
      )
    }
  }

  private getFileList(): UploadFile[] {
    if (this.props.curImageUrl) {
      return [{
        uid: this.props.curImageUrl,
        name: this.props.curImageUrl,
        url: this.props.curImageUrl
      }]
    }
    return []
  }
  private async handleRequest(p: any) {
    let formData = new FormData()
    formData.append(p.filename, p.file)

    const request = new Request(p.action, {
      method: "post",
      body: formData
    })

    const resp: IResponseError | IResponstData<string> = await fetch(request).then(res => res.json())

    if (resp.err) {
      message.error('上传失败')
    } else {
      console.log(resp.data, 'data')
      this.props.onChange(resp.data!)
    }
  }

  render() {
    return (
      <div>
        <Upload
          action="/api/upload"
          name="imagefile"
          listType="picture-card"
          accept=".jpg,.png,.jiff,.jpeg,.bmp,.gif"
          fileList={this.getFileList()}
          customRequest={this.handleRequest.bind(this)}
          onRemove={
            () => { this.props.onChange('') }
          }
          onPreview={
            () => {
              this.setState({
                showModal: true
              })
            }
          }
        >
          {this.getUploadContent()}
        </Upload>
        <Modal
          width={500}
          visible={this.state.showModal}
          onCancel={() => {
            this.setState({
              showModal: false
            })
          }}
          footer={[]}
        >
          <img alt="example" style={{ width: '95%', margin: 'auto' }} src={this.props.curImageUrl} />
        </Modal>
      </div>
    )
  }
}