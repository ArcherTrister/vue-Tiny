发布包

第一次发布
npm adduser
提示输入账号，密码和邮箱，然后将提示创建成功

非第一次发布包：
在终端输入npm login，然后输入你创建的账号和密码，和邮箱，登陆

【注意】npm adduser成功的时候默认你已经登陆了，所以不需要再接着npm login.
npm publish

安装并使用
npm i vue-creek --save
import VueCreek from 'vue-creek'
//打印组件列表，版本信息等
console.log(VueCreek)
Vue.Use(VueCreek)

更新包
npm update vue-creek --save