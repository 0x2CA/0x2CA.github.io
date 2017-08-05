---
title: wine使用及安装
date: 2016-10-04 15:41:30
tags: [教程]
category: [Linux]
toc: true
comments: true
---
## wine 下载
```
$ sudo pacman -S wine
```
**注意64 位需启用 multilib 仓库才可安装 Wine ，去掉 [multilib] 及其 Include的 “#”即可**
```
$ sudo nano /etc/pacman.conf
```
## 使用 mono gecko
```
$ rm -rf ~/.wine
$ sudo pacman -S wine-mono
$ sudo pacman -S wine_gecko
```
## 使用 winetricks-zh（winetricks 的本地化版本）
```
$ wget https://github.com/hillwoodroc/winetricks-zh/raw/master/winetricks-zh
$ chmod +x winetricks-zh
$ ./winetricks-zh
```
<iframe src="https://invalidcode.github.io/donate/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

