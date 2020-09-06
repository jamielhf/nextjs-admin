import { computed, observable, action, autorun } from "mobx";

interface showModel {
  modelTitle: string,
  modelContent: string,
  onOk: () => void
  onCancel: () => void,
}

class Model {
  /**
   *是否显示弹窗
   *
   * @type {boolean}
   * @memberof Model
   */
  @observable isShowModel: boolean = false;
  /**
   * 弹窗内容
   * @type {string}
   */
  @observable modelContent: string = '';
  /**
   * 弹窗标题
   *
   * @type {string}
   * @memberof Model
   */
  @observable modelTitle: string = '提示';
  /**
   * 确认回调
   */
  @observable onOk = () => { this.isShowModel = false; console.log('确认回调') };
  /**
   * 取消回调
   */
  @observable onCancel = () => { this.isShowModel = false; console.log('取消回调') };


  @action
  async showModel({ modelTitle = this.modelTitle, modelContent = this.modelContent, onOk = this.onOk, onCancel = this.onCancel }: Partial<showModel>) {
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