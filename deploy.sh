#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 发布到自定义域名
echo -n 'dwdsec.top' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/DWDSec/DWDSec_WebSite.git
git push -f origin master:gh-pages

cd -