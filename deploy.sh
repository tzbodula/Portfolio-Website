set -e
npm run build
cd dist
echo > .nojekyll

echo 'tzbodula.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# git push -f git@github.com/tzbodula/Portfolio-Website.git main:gh-pages

cd -