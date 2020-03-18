# [风的记忆](https://0x2CA.github.io)

## 搭建
### 环境依赖
- [Node.js](https://nodejs.org/zh-cn/)
- [Hexo](https://hexo.io/)
- [Git](https://git-scm.com/)

### Hexo项目生成
1. 安装hexo
```
$ npm install -g hexo-cli
```
2. 生成项目文件
```
$ hexo init 0x2CA.github.io
```
3. 在项目中初始化
```
npm install
```

### 安装主题Maupassant
1. 安装主题到主题目录
```
$ git clone https://github.com/tufu9441/maupassant-hexo.git themes/maupassant
```
2. 安装基础渲染器
```
$ npm install hexo-renderer-pug --save
$ npm install hexo-renderer-sass --save
```
注：若npm install hexo-renderer-sass安装时报错，可能是国内网络问题，请尝试使用代理或者切换至[淘宝NPM镜像](https://npm.taobao.org/)安装。

3. 如果需要站内搜索需要安装
```
$ npm install hexo-generator-search --save
```
4. RSS功能需要安装
```
$ npm install hexo-generator-feed --save
```
5. 分享功能需要安装
```
$ npm install hexo-helper-qrcode --save
```

## 项目文件说明
1. `package.json`hexo环境
    * npm install -g
    * npm install --save
2. `_config.yml`hexo配置文件
3. `.gitmodules`git子模块
4. `.gitignore`git排除配置
5. `themes/maupassant`主题文件
6. `source`文章源文件
7. `scaffolds`文章模板
8. `.deploy_git @ XXXXX`git部署文件
## 使用
1. 写文章
    * `hexo n '标题'`
2. 渲染
    * `hexo g`
3. 发布
    * `hexo d`
4. 源文件上传
    * `git add --all`
    * `git commit -m '源文件'`
    * `git push -u origin hexo`
