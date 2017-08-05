---
title: Steam的安装
date: 2016-08-30 09:58:47
tags: [Course]
category: [Linux]
toc: true
comments: true
---
## 添加 Multilib源
`/etc/pacman.conf`文件中添加：
```
[multilib]
Include = /etc/pacman.d/mirrorlist
```
## 同步 库
```
$ sudo pacman -Syy
```

## 安装 Steam
```
$ sudo pacman -S steam
```
## 安装 支持库
```
$ sudo pacman -S steam-libs
```
## 禁用 自带库
```
 $ sudo rm ~/.local/share/Steam/ubuntu12_32/steam-runtime/i386/usr/lib/i386-linux-gnu/libstdc++.so.6 && find ~/.steam/root/ -name "libgpg-error.so*" -print -delete
```
```
 $ export STEAM_RUNTIME=0
```
## 安装 Steam字体
```
$ yaourt -S steam-fonts
```

<iframe src="https://invalidcode.github.io/donate/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

