npm run docs:build

pushd docs/.vuepress/dist

'dwdsec.top' | out-file CNAME -nonewline -encoding ascii

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/DWDSec/DWDSec_WebSite.git
git push -f origin master:gh-pages

popd