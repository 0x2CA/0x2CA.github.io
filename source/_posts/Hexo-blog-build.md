---
title: Hexo博客搭建
date: 2016-08-29 14:50:30
tags: [Hexo]
category: [Linux]
toc: true
comments: true
---
## 安装前提
安装`Hexo`相当简单。然而在安装前，您必须检查电脑中是否已安装下列应用程序：
* Node.js
* Git

<!--more-->
## 安装 Git
```bash
$ sudo pacman -S git
```
## 安装 Node.js
```bash
$ wget -qO- https://raw.github.com/creationix/nvm/master/install.sh | sh
```
安装完成后，重启终端并执行下列命令即可安装`Node.js`
```bash
$ nvm install stable
```
## 安装 Hexo
所有必备的应用程序安装完成后，即可使用`npm`安装`Hexo`
```bash
$ npm install -g hexo-cli
```
## 建站
安装`Hexo`完成后，请执行下列命令，`Hexo`将会在指定文件夹中新建所需要的文件
```bash
$ hexo init <folder>
$ cd <folder>
$ npm install
```
新建完成后，指定文件夹的目录如下：
```
.
├── _config.yml
├── package.json
├── scaffolds
├── source
|   ├── _drafts
|   └── _posts
└── themes
```
## NEW 文章
```bash
$ hexo new "标题"
```
文章在`source/_posts/`下
```
---
title: 标题
date: 2016-08-29 12:54:12
tags: [标签]
category: [分类]
---
#MarkDown内容
```
## 博客预览
```bash
$ hexo server
```

## 生成静态网页
```bash
$ hexo g
```
文件在`pubilc/`

