---
title: SSH配置
date: 2016-09-02 15:53:07
tags: [Course]
category: [Linux]
toc: true
comments: true
---
## 前提
```
$ sudo pacman -S openssh
```
## 开机 启动
```
$ sudo systemctl enable sshd
$ sudo reboot
```
## 配置
`/etc/ssh/sshd_config`文件中添加：
```
Port 22 # 端口
MaxAuthTries 3 # 输错 三次机会
```
## 登录 密码
```
$ sudo passwd 用户名
```

