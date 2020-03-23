---
title: DDE安装
toc: true
comments: true
date: 2017-08-20 15:57:44
tags: [Course]
category: [Linux]
---
## 安装
```
$yaourt -S deepin deepin-extra lightdm xorg-server
```
<!--more-->

## 配置
编辑文件`/etc/lightdm/lightdm.conf`

```
.....
[Seat:*]
greeter-session=lightdm-deepin-greeter
.....
```

## 开机启动服务
```
$sudo systemctl enable lightdm.service
$sudo systemctl start lightdm.service
```



















