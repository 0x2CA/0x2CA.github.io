---
title: Tar命令
date: 2016-08-29 16:49:56
tags: [教程,命令]
category: [Linux]
toc: true
comments: true
---
## 语法
```
$ tar [选项] [参数]
```
## 选项
```
-A或--catenate：新增文件到以存在的备份文件； 
-B：设置区块大小； 
-c或--create：建立新的备份文件； 
-C <目录>：这个选项用在解压缩，若要在特定目录解压缩，可以使用这个选项。 
-d：记录文件的差别； 
-x或--extract或--get：从备份文件中还原文件； 
-t或--list：列出备份文件的内容； 
-z或--gzip或--ungzip：通过gzip指令处理备份文件； 
-Z或--compress或--uncompress：通过compress指令处理备份文件； 
-f<备份文件>或--file=<备份文件>：指定备份文件； 
-v或--verbose：显示指令执行过程； 
-r：添加文件到已经压缩的文件； 
-u：添加改变了和现有的文件到已经存在的压缩文件； 
-j：支持bzip2解压文件；
-J: 支持xz解压文件；
-v：显示操作过程； 
-l：文件系统边界设置； 
-k：保留原有文件不覆盖； 
-m：保留文件不被覆盖； 
-w：确认压缩文件的正确性； 
-p或--same-permissions：用原来的文件权限还原文件； 
-P或--absolute-names：文件名使用绝对名称，不移除文件名称前的“/”号； 
-N <日期格式> 或 --newer=<日期时间>：只将较指定日期更新的文件保存到备份文件里； 
--exclude=<范本样式>：排除符合范本样式的文件。
```
## 参数
文件或目录：指定要打包的文件或目录列表。

## 实例
### 将文件全部打包成tar包：
```bash
$ tar -cvf log.tar log.log 仅打包，不压缩！ 
$ tar -zcvf log.tar.gz log.log 打包后，以 gzip 压缩 
$ tar -jcvf log.tar.bz2 log.log 打包后，以 bzip2 压缩 
$ tar -Jcvf log.tar.xz log.log 打包后，以 xz 压缩
```
### 将tar包解压缩：
```
$ tar -xvf log.tar
$ tar -zxvf log.tar.gz
$ tar -jxvf log.tar.bz2
$ tar -Jxvf log.tar.xz
```
### 保留文件权限:
加`-p`


<iframe src="https://invalidcode.github.io/donate/" style="overflow-x:hidden;overflow-y:hidden; border:0xp none #fff; min-height:240px; width:100%;"  frameborder="0" scrolling="no"></iframe>

