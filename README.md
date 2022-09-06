# Automobile-info-Aggregation
聚合展示汽车相关的信息


## 1.node.js服务的部署
- 该项目存在一个基于node.js的nodemailer邮件发送后端服务
- 该服务需要服务器上预先安装好npm
- 静态页面的部署基于nginx服务器
- 注意index.js中需要自行修改为自己的smtp邮箱密码和邮件地址，且需要配置自己的跨域政策





部署node.js服务:
### 1) 安装相关依赖



- 在服务器中创建好自己的文件夹后，我们需要先将项目中的node-server放置其中，并进入该目录
- 在该目录下安装相关的依赖:

```shell
cd ./automobile-info-Aggregation-mater/node-server
npm install
```



- 安装运行node.js服务的pm2依赖:

```shell
npm install pm2 -g
```

---







## 2. 部署node.js服务





通过pm2命令部署我们的node.js服务:

```shell
pm2 start index.js
```





更多pm2命令请参照pm2官网:

https://pm2.keymetrics.io/docs/usage/quick-start/