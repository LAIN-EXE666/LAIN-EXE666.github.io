---
title: "C++ Library Awesome"
author: "Ui_shig"
date: "2025-12-25"
description: "A C++ Library Management Application with Clean UI and Rich Features"
tags: ["C++", "Library Management", "UI", "Raylib", "Dear ImGui", "sqlite3"]
---
<h1 align="center">C++ Library Awesome</h1>
<h4 align ="center">  💻 Clean Ui | 🎉 持续更新 | ❤️ 功能丰富  </h4>  
<p align="center">
  <a href="https://github.com/LAIN-EXE666/LABRARY"> 
   ❤️ 项目链接 ❤️
    </a>  
</p>

## features
- 🎨 **Clean Ui** : modern type ，简洁
- 🚀 **持续更新** : 持续更新中（may be）
- 🧩 **功能丰富** : 多种功能(指增删查改)
- 🧸 **易于使用** : 开箱即用 ：）
- 🪟 **窗口自由** : 启用docking分支，窗口自由停靠，调整大小
## Tech
- ⚡️ C++17
- 🎨 Dear ImGui
- ⚓ ImGui Docking Branch
- 🛠️ CMake
- 🕹️ Raylib
- 🗃️ sqlite3
- 🌉 Rlimgui
- 🔐 OpenSSL

## 自言自语
> 这个项目算是完成了（吧？）🤔，其实一开始并没有打算做ui，光是cmake配置就折腾了几天（get工程化experience) 😅，
>然后了解到了imgui(其实是不想学qt 🤫),感觉很cool 😎,其实原本希望更多的raylib功能,结果最后raylib就只用来创建窗口和处理输入了，因为raylib的高级功能好像有点复杂（涉及到计算机视觉？👀）。原来期望的音效 🎵 和背景音乐，还有图片插入 🖼️，都没有实现（懒 🛌），不过后续可能会加上（可能性不大 👻）。一些复杂特殊效果还有配色都是参考了其他优秀作者，b站和ai的力量真是强大 💪。总之，这个项目让我学到了很多东西(markdown语法 📝），算是一个不错的练手项目吧 ✨。
>最后，祝大家圣诞快乐 🎄，新年快乐 🎆！  
<h3 align="right">——Ui_shig 2025.12.25 🎅</h3>

# setup
## dependencies
- CMake >= 3.16
- Raylib
- sqlite3
- Rlimgui
- Dear ImGui (Docking Branch)
- OpenSSL
## How to use
### 方法一: 本地构建 (不推荐)
1.安装vcpkg( if you don't have it )
```bash
git clone https://github.com/Microsoft/vcpkg.git
cd vcpkg
.\bootstrap-vcpkg.bat
```
2.设置vcpkg环境变量
```bash
set VCPKG_ROOT=path\to\vcpkg
set PATH=%VCPKG_ROOT%;%PATH%
```
3.安装依赖
```bash
.\vcpkg install raylib
.\vcpkg install sqlite3
.\vcpkg install rlimgui
.\vcpkg install imgui[docking]
.\vcpkg ingstall openssl
```
4.克隆项目
```bash
git clone https://github.com/LAIN-EXE666/LABRARY.git
cd LABRARY
```
5.构建
```bash
mkdir build
cd build

cmake .. -DCMAKE_TOOLCHAIN_FILE= <your_vcpkg_path>\scripts\buildsystems\vcpkg.cmake

cmake --build . --config Release
```
### 方法二： 使用预编译版本 (推荐)
- 前往[Releases](https://github.com/LAIN-EXE666/LABRARY/releases/tag/v0.7）
# coming soon
- 🎵 音效和背景音乐支持
- 🖼️ 图片插入支持
- ⚙️ 自定义设置
- 🎨 绘制logo
- 🚀 更多功能

# Q&A
**Q1: 为什么要使用Dear ImGui而不是其他UI库？** 🧐   
A1: 不想学qt, Dear Imgui可以写OO 💡   
**Q2: 这个项目会持续更新吗？** 🧐   
A2: May be 🤷‍♀️   
**Q3: 为什么取名为LABRARY？** 🧐     
A3: Library和Lab的结合体，感觉很酷（误） 😎   
**Q4:我的界面全部黑屏了，怎么办？** 😱   
A4：前往NVIDIA控制面板，3d管理设置中把OPenggl oid 改为优先兼容性。 🔧   
**Q5: 这个项目能用来做什么？** 🧐   
A5：这个项目可以完成我的指标 🎯  
**Q6:怎么进入管理员模式？** 🧐
A6：创建一个名为admin的用户即可。👑


# License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Acknowledgments
- 感谢[Raylib](https://www.raylib.com/) 提供强大的图形处理功能
- 感谢[Dear ImGui]
- 感谢[sqlite3](https://www.sqlite.org/index.html) 提供轻量级数据库支持
- 感谢[Rlimgui]
- 感谢[OpenSSL](https://www.openssl.org/) 提供安全通信支持
- 感谢所有开源社区的贡献者们