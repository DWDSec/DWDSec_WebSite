# DWDSec_WebSite
协会官网的代码仓库 \
基于[VuePress v2](https://vuejs.press/zh/)和[VuePress Theme Hope v2](https://theme-hope.vuejs.press/zh/)构建

## 安装流程
```bash
# 1. 安装Node.js（LTS版本）

# 2. 将代码克隆到本地
git clone https://github.com/DWDSec/DWDSec_WebSite.git
cd DWDSec_WebSite

# 3. 安装项目依赖
npm install

# 4. 运行官网
npm run docs:dev
```

## 目录结构说明
```
.
├── docs
│   ├── .vuepress
│   │   ├── dist            # 生成的静态文件夹（gh-pages分支）
│   │   ├── public          # 图片等静态资源
│   │   │   ├── avatars     # 成员头图
│   │   │   └── logos       # 协会和战队Logo
│   │   └── config.ts       # VuePress配置文件
│   ├── intro               # 协会简介
│   ├── teams               # 协会战队
│   └── members             # 协会成员
│       ├── MatrixBreaker   # 破阵成员
│       ├── ReverseBlade    # 逆锋成员
│       ├── WisdomGuardian  # 智鉴成员
│       ├── ShieldForge     # 铸安成员
│       └── others          # 其他成员
├── .gitignore              # 不上传到代码仓库的文件和文件夹
├── deploy.ps1              # PowerShell部署上线脚本
├── deploy.sh               # Shell部署上线脚本
└── README.md               # 项目说明（本文件）
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

## 手动部署上线
```bash
# PowerShell
./deploy.ps1

# Shell
./deploy.sh
```
