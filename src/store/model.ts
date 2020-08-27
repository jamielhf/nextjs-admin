import { computed, observable, action, autorun } from "mobx";

class Model {
  @observable isShowModel: boolean = false; // 是否显示弹窗
  @observable modelContent: string = ''; // 弹窗内容
  @observable modelTitle: string = '提示'; // 弹窗标题
  @observable onOk = () => { }; // 确认回调
  @observable onCancel = () => { }; // 取消回调

  /**
   * 显示弹窗
   *
   * @param {string} modelTitle
   * @param {string} modelContent
   * @param {*} [onOk=() => { }]
   * @param {*} [onCancel=() => { }]
   * @memberof Model
   */
  @action
  async showModel(modelTitle: string, modelContent: string, onOk = () => { }, onCancel = () => { },) {
    this.isShowModel = true;
    this.modelTitle = modelTitle;
    this.modelContent = modelContent;
    this.onOk = onOk;
    this.onCancel = onCancel;
  }
  /**
   * 关闭弹窗 
   *
   * @memberof Model
   */
  @action
  async closeModel() {
    this.isShowModel = false;
  }
}

export default Model