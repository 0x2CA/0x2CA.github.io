---
title: ArchLinux安装指南
date: 2016-10-04 16:16:04
tags: [Course]
category: [Linux]
toc: true
comments: true
---

## 下载 镜像

下载[安装镜像](http://mirrors.163.com/archlinux/iso/)

```
Index of /archlinux/iso/

../
2016.07.01/                                        02-Jul-2016 03:39       -
2016.08.01/                                        02-Aug-2016 01:16       -
2016.09.03/                                        03-Sep-2016 14:38       -
archboot/                                          27-Aug-2016 13:20       -
latest/                                            04-Oct-2016 13:41       -
```

<!--more-->

例如(2016.9.3)：

```
Index of /archlinux/iso/2016.09.03/

../
arch/                                              03-Sep-2016 13:36       -
archlinux-2016.09.03-dual.iso                      03-Sep-2016 13:37    756M
archlinux-2016.09.03-dual.iso.sig                  03-Sep-2016 13:48     287
archlinux-2016.09.03-dual.iso.torrent              03-Sep-2016 13:48     44K
archlinux-bootstrap-2016.09.03-i686.tar.gz         03-Sep-2016 13:44    106M
archlinux-bootstrap-2016.09.03-i686.tar.gz.sig     03-Sep-2016 13:48     287
archlinux-bootstrap-2016.09.03-x86_64.tar.gz       03-Sep-2016 13:45    111M
archlinux-bootstrap-2016.09.03-x86_64.tar.gz.sig   03-Sep-2016 13:48     287
md5sums.txt                                        03-Sep-2016 13:48     220
sha1sums.txt                                       03-Sep-2016 13:48     244
```

下载`iso`文件`archlinux-2016.09.03-dual.iso`,点击即可下载。

## 制作 U盘启动盘

下载[Rufus工具](http://rufus.akeo.ie/?locale=zh_CN)，插入U盘，运行Rufus选择下载的镜像进行制作。

## 进入 LiveCD

插入U盘，设置U盘启动（不会自行百度）。

## 查看 启动方式

```
# efivar -l
```

如果你看到了一大串内容，那就是进入了UEFI安装模式。否则BIOS启动，

## 开启 网络

1. 测试是否有网络

```
# ping 8.8.8.8
```

例如：

```
PING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.
64 bytes from 8.8.8.8: icmp_seq=1 ttl=57 time=7.35 ms
64 bytes from 8.8.8.8: icmp_seq=2 ttl=57 time=6.64 ms
64 bytes from 8.8.8.8: icmp_seq=3 ttl=57 time=7.89 ms
```

`Ctrl + Z`可退出

* WiFi

```
# wifi-menu 
```

* 有线

```
# dhcpcd
```

## 开始 分区

使用`lsblk`命令可查看分区情况例如(安装好的)：

```
NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT
sda      8:0    0 465.8G  0 disk 
├─sda1   8:1    0   512M  0 part 
├─sda2   8:2    0 461.3G  0 part /
└─sda3   8:3    0     4G  0 part [SWAP]
```

使用`cfdisk`进行分区(Lable:UEFI选GPT BIOS选DOS)

```
/dev/sda1  512M  /boot  物理分区
/dev/sda2  剩下 /      物理分区
/dev/sda3  内存的2倍（内存大可不分）  swap   物理分区
```

* `New`可以创建分区
* `Delete`可以删除分区
* `Type`可以更改分区类型
* `Write`可以保存
* `Quit`可以退出 <br>

---

**注意：**

1. BIOS启动 `/dev/sda1` 类型选择`Limux filesystem`否则`EFI System`
2. `/dev/sda2` 类型选择`Limux filesystem`
3. 如果有`swap` 类型选择`Linux swap`
4. 一定要先`Write`再`Quit`
5. UEFI启动用笔和纸记录`/dev/sda2`下方的`UUID`

## 格式化 分区

**UEFI启动**

```
# mkfs.vfat -F32 /dev/sda1
```

**BIOS启动**

```
# mkfs.ext4 /dev/sda1
```

---

通用：

```
# mkfs.ext4 /dev/sda2
# mount /dev/sda2 /mnt
# mkdir -p /mnt/boot
# mount /dev/sda1 /mnt/boot
```

---

如果有`swap`

```
# mkswap /dev/sda3
# swapon /dev/sda3
```

## 安装 Linux

修改链接源，只留下`China`,163可放最前面

```
# nano /etc/pacman.d/mirrorlist
```

例如：

```

##
## Arch Linux repository mirrorlist
## Sorted by mirror score from mirror status page
## Generated on 2016-07-01
##

## Score: 6.2, China
Server = http://mirrors.163.com/archlinux/$repo/os/$arch
## Score: 1.7, China
Server = http://mirrors.tuna.tsinghua.edu.cn/archlinux/$repo/os/$arch
## Score: 2.9, China
Server = http://mirrors.neusoft.edu.cn/archlinux/$repo/os/$arch
## Score: 5.2, China
Server = http://run.hit.edu.cn/archlinux/$repo/os/$arch
## Score: 5.9, China
Server = http://mirrors.cug6.edu.cn/archlinux/$repo/os/$arch
## Score: 6.2, China
Server = http://mirrors.xjtu.edu.cn/archlinux/$repo/os/$arch
## Score: 6.2, China
Server = http://mirrors.hust.edu.cn/archlinux/$repo/os/$arch
## Score: 6.4, China
Server = http://mirrors.cug.edu.cn/archlinux/$repo/os/$arch
## Score: 9.7, China
Server = http://mirrors.cqu.edu.cn/archlinux/$repo/os/$arch
## Score: 9.8, Taiwan
Server = http://archlinux.cs.nctu.edu.tw/$repo/os/$arch
## Score: 28.4, China
Server = http://mirror.lzu.edu.cn/archlinux/$repo/os/$arch
```

* `Ctrl + X` 退出
* `Ctrl + K` 剪切（可当删除）
* `Ctrl + U` 粘贴

---

开始系统安装（一路回车）

```
# pacstrap -i /mnt base base-devel
```

## 系统 配置

先输入

```
# genfstab -U -p /mnt >> /mnt/etc/fstab
```

检查`/mnt/etc/fstab`文件<br>
例如：

```
#
# /etc/fstab: static file system information
#
# <file system> <dir>   <type>  <options>       <dump>  <pass>
# /dev/sda2
UUID=68f286d6-7e5b-4652-85f0-89aafe902f44       /               ext4            rw,relatime,data=ordered        0 1

# /dev/sda1
UUID=5402-0AA5          /boot/EFI       vfat            rw,relatime,fmask=0022,dmask=0022,codepage=437,iocharset=iso8859-1,shortname=mixed,errors=remount-ro    0 2

# /dev/sda3
UUID=37d6a57f-9afd-498c-9469-55fea1c7eb2f       none            swap            defaults        0 0
```

没问题退出

---

进入新系统

```
# arch-chroot /mnt /bin/bash
```

此时命令行前缀改变为`[root@archiso /]# `且颜色为白色

---

本地语言设置

```
# nano /etc/locale.gen
```

去掉这三项前面#号

```
en_US.UTF-8 UTF-8
zh_CN.UTF-8 UTF-8
zh_TW.UTF-8 UTF-8
```

退出保存
然后输入

```
# locale-gen
```

使修改生效
然后输入

```
# echo LANG=en_US.UTF-8 > /etc/locale.conf
```

---

时区设置

```
# tzselect 
```

例如：

```
Please identify a location so that time zone rules can be set correctly.
Please select a continent, ocean, "coord", or "TZ".
 1) Africa
 2) Americas
 3) Antarctica
 4) Asia
 5) Atlantic Ocean
 6) Australia
 7) Europe
 8) Indian Ocean
 9) Pacific Ocean
10) coord - I want to use geographical coordinates.
11) TZ - I want to specify the time zone using the Posix TZ format.
#? 
```

选Asia<br>
然后选china<br>
接着选beijing<br>
然后输入

```
# ln -s /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
```

设置时间为UTC时间

```
# hwclock --systohc --utc
```

---

设置主机名(linux改为你想取的名字)

```
# echo linux > /etc/hostname
```

然后修改`/etc/hosts`(linux改为你想取的名字)
nano /etc/hosts

```
#
# /etc/hosts: static lookup table for host names
#

#<ip-address>   <hostname.domain.org>   <hostname>
127.0.0.1       localhost.localdomain   localhost       linux
::1             localhost.localdomain   localhost       linux

# End of file
```

---

开启有线

```
# ip link
```

例如：

```
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN mode DEFAULT group default qlen 1
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
2: enp4s0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP mode DEFAULT group default qlen 1000
    link/ether d0:50:99:29:64:e3 brd ff:ff:ff:ff:ff:ff
```

然后输入(enp4s0改为你的)

```
# systemctl enable dhcpcd@enp4s0.service
```

开启无线网络

```
# pacman -S iw wpa_supplicant dialog
```

## 安装 引导

**EFI启动**

创建初始ramdisk环境

```
# mkinitcpio -p linux
```

安装bootloader

```
# bootctl install
```

编辑下面两个文件添加启动项
nano nano /boot/loader/loader.conf

```
default arch
timeout 3
editor 0
```

nano /boot/loader/entries/arch.conf

```
title Arch Linux
linux /vmlinuz-linux
initrd /initramfs-linux.img
options root=PARTUUID=8595cacd-1456-4c0f-937b-968afef6bd25 rw
```

注意此处的`8595cacd-1456-4c0f-937b-968afef6bd25`改为之前记录的UUID（小写字母）

---

**BIOS启动**

```
# pacman -S grub
# grub-install --target=i386-pc /dev/sda
# grub-mkconfig -o /boot/grub/grub.cfg
```

## 安装 图形界面

查看显卡型号

```
# lspci | grep -e VGA -e 3D
```

```
厂商	类型	驱动
AMD/ATI	开源	xf86-video-ati
        闭源	catalyst
Intel	开源	xf86-video-intel
Nvidia	开源	xf86-video-nouveau	
        闭源	nvidia
        闭源  nvidia-340xx
        闭源  nvidia-304xx
```

安装显卡驱动

```
# pacman -S xf86-video-intel
```

`xf86-video-intel`改为你的驱动

---

安装`gnome`

```
# pacman -S gnome
```

设置gdm开机启动

```
# systemctl enable gdm
```

设置网络管理开机启动

```
# systemctl enable NetworkManager.service
```

##  其他 驱动

安装ALSA(声卡)

```
# pacman -S alsa-utils
```

安装触摸板驱动

```
pacman -S xf86-input-synaptics
```

## 重启

```
# exit
# reboot
```

