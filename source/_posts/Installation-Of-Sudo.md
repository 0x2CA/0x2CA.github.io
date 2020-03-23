---
title: Sudo的安装
date: 2016-08-30 10:18:40
tags: [Course]
category: [Linux]
toc: true
comments: true
---
## 安装 Sudo
```bash
$ pacman -S sudo
```

<!--more-->
## 配置 Sudo
`/etc/sudoers`文件中添加：
```
用户名 ALL=(ALL) ALL
```

