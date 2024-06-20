
 
 

# GodCron
   
 
## 1. 基本介绍

### 1.1 项目介绍

> GodCron是一个分布式任务管理系统。
> 提供可视化界面便于管理各个主机的任务

测试用户名：admin

测试密码：admin123456

 
 

## 2. 使用说明

```
- node版本 > v16.8.3
- golang版本 >= v1.22
- IDE推荐：Goland
```

### 2.1 Agent


```bash
# 启动Agent
nohup ./godagent >/dev/null 2>&1 &

```

### 2.2 manager

```bash
# 启动Manager
nohup ./godcron >/dev/null 2>&1 &

#登录 web
http://127.0.0.1:6588
账号:admin
密码:admin123456

```

 

 
## 3. 技术选型

- 前端：用基于 [Vue](https://vuejs.org) 的 [Element](https://github.com/ElemeFE/element) 构建基础页面。
- 后端：用 [Gin](https://gin-gonic.com/) 快速搭建基础restful风格API，[Gin](https://gin-gonic.com/) 是一个go语言编写的Web框架。
- 数据库：采用`MySql` > (5.7) 版本 数据库引擎 InnoDB，使用 [gorm](http://gorm.cn) 实现对数据库的基本操作。
- 配置文件：使用 [fsnotify](https://github.com/fsnotify/fsnotify) 和 [viper](https://github.com/spf13/viper) 实现`yaml`格式的配置文件。
- 日志：使用 [zap](https://github.com/uber-go/zap) 实现日志记录。

## 4. 项目架构

#### 4.1 创建任务
<img src="./server/docs/create_job.jpg">

#### 4.2 查看任务
<img src="./server/docs/job_list.jpg">

#### 4.3 创建主机
<img src="./server/docs/create_agent.jpg">
 



## 5. 主要功能

- 权限管理：基于`jwt`和`casbin`实现的权限管理。
- 用户管理：系统管理员分配用户角色和角色权限。
- 角色管理：创建权限控制的主要对象，可以给角色分配不同api权限和菜单权限。
- 菜单管理：实现用户动态菜单配置，实现不同角色不同菜单。
- api管理：不同用户可调用的api接口的权限不同。
- 配置管理：配置文件可前台修改(在线体验站点不开放此功能)。
 
 
 
## 7. 联系方式
 
 

## 9. 捐赠
<img src="./server/g/w.jpg" width="200">

如果你觉得这个项目对你有帮助，你可以请作者喝饮料 




