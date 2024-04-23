cd docs/.vuepress/dist
git init
git remote add origin https://github.com/DWDSec/dwdsec.github.io.git
git add -A
git commit -m deploy
git push -f origin master:gh-pages