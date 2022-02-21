// 导入部分组件
import { Button, Select, Form, FormItem, Input } from 'element-ui'
const element = {
  install: (Vue) => {
    Vue.use(Button)
    Vue.use(Select)
    Vue.use(Form)
    Vue.use(FormItem)
    Vue.use(Input)
  },
}
export default element
