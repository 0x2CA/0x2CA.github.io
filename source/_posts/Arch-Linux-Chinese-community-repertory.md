---
title: Arch Linux 中文社区仓库
date: 2016-08-30 10:13:31
tags: [Course]
category: [Linux]
toc: true
comments: true
---
## 添加 源
`/etc/pacman.conf`文件中添加：
```
[archlinuxcn]
SigLevel = Optional TrustedOnly
Server = http://repo.archlinuxcn.org/$arch
```
## 同步 库
```bash
$ sudo pacman -Syy
```
## 添加 Key
```bash
$ sudo pacman -S archlinuxcn-keyring
```


