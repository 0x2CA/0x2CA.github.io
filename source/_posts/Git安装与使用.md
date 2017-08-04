---
title: Git安装与使用
date: 2016-08-29 15:39:15
tags: [教程]
category: [Linux]
toc: true
comments: true
---
## 安装 Git
```bash
$ sudo pacman -S git
```
## 设置
```bash
$ git config --global user.name "用户名"
$ git config --global user.email "邮箱"
```
## 创建 SSH Key
```bash
$ ssh-keygen -t rsa -C "邮箱"
```
**注意:若提示没有找到命令**

```bash
$ sudo pacman -S openssh
```
你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可.

## 添加 SSH Key
登陆GitHub，打开`Account settings`，`SSH Keys`页面，点`Add SSH Key`，填上任意Title，在Key文本框里粘贴`~/.ssh/id_rsa.pub`文件的内容

## 建立 本地库
```bash
$ mkdir 库名
$ cd 库名
$ git init
``` 
## 关联 远程库
```bash
$ git remote add origin git@github.com:用户名/远程库名
```
## 取消关联 远程库
```
$ git remote remove origin
```
## 添加到 暂存区
```bash
$ git add --all
```
## 提交到 HEAD
```bash
$ git commit -m "提交信息"
```
## 提交到 远程库
**第一次提交**

```bash
$ git push -u origin master
```

**下次提交**

```
$ git push
```
## 克隆 远程库
```bash
$ git clone git@github.com:用户名/远程库名
```

