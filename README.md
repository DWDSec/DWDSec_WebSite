# DWDSec_WebSite

Git repo of DWDSec official website
官网的git管理

## 安装流程
```bash
# 1. 安装Node.js（LTS版本）

# 2. 将代码克隆到本地
git clone https://github.com/DWDSec/dwdsec.github.io.git
cd dwdsec.github.io

# 3. 安装项目依赖
npm install

# 4. 运行官网
npm run docs:dev
```

## 目录结构说明
```
- docs
    -- intro        //协会简介
    -- teams        //协会战队
    -- members      //协会成员
    -- .vuepress    //vuepress资源配置等文件
```

## 修改好后提交代码
```bash
# 1. 提交文件到本地缓存区
git add -A

# 2. 提交说明信息
git commit -m 'update'

# 3. 上传
git push
```

## 部署上线
```powershell
./deploy.ps1
```
