# DWDSec_WebSite

Git repo of DWDSec official website

## 安装流程
```bash
# 1. 安装node.js

# 2. 安装yarn
npm install --global yarn

# 3. 安装vuepress
yarn add -D vuepress@next

# 4.运行官网
yarn docs:dev
```

## 目录结构说明
```
- docs
    -- members      //成员介绍
    -- articles     //实验室文章
    -- projects     //实验室所开设的项目
    -- .vuepress    //vuepress资源配置等文件
```

## 修改好后提交代码
```bash
# 1. 提交文件到本地缓存区
git add -A

# 2. 提交说明信息
git commit -m "update"

# 3. 上传
git push
```