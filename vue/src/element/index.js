// 导入部分组件
import { Button, Select, Form, FormItem, Input, Message, Notification } from 'element-ui'
const element = {
  install: (Vue) => {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
    Vue.use(Message)
    Vue.use(Notification)
  },
}
export default element
