---
outline: deep
---

# 欢迎使用下一代 BakaXL

> [!WARNING]
目前 BakaXL 4.0 处于早期预览，大部分功能暂不可用或经常会发生变动，请勿作为主要游戏启动器

你可能会想知道:

<BakaFourIndexButtonList />

## 一些早期测试疑问

### Windows 7 用户可以运行 BakaXL 4.0 吗？

使用 VxKex 可以使 BakaXL 4.0 在 Windows 7 上运行，但无法保证所有功能可用。

> [!WARNING]
> BakaXL 4.0 不会为通过 VxKex 在 Windows 7 上运行 BakaXL 的用户提供技术支持。


### 更加流畅的帧数

设置环境变量 

``` text
WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS --disable-frame-rate-limit --disable-gpu-vsync --max-gum-fps="9999"
```

可以不限制 BakaXL 4 的帧率

### BakaXL 4.0 无限弹窗提醒更新

尝试删除文件 `.config/.BakaXL/instance/bunny.safe` 后重新启动程序

### 在 Linux 中运行 BakaXL 4.0 时不显示窗体

> Linux 下使用 Nvidia 显卡或在虚拟机中运行可能导致 BakaXL 4.0 不显示窗体

你可以尝试在终端中运行以下命令解决该问题:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1
```

### 在 Linux 中提示「检测到 NVIDIA 驱动兼容问题」，或界面自动重新加载

在 Linux 下使用 NVIDIA 显卡且驱动版本低于 595 时，驱动 Bug 会导致文件描述符（FD）不断被创建却未释放。当 FD 数量达到单个进程的上限后，进程就会卡死，导致 BakaXL 界面无响应。

BakaXL 4.0 检测到这种情况后，会持续监测文件描述符的数量，并在接近上限、即将卡死之前，强制重新创建 WebView 渲染进程。因此，你可能会看到「检测到 NVIDIA 驱动兼容问题」的提示，或遇到界面自动重新加载。这是为避免进程卡死而触发的保护机制，并不代表驱动 Bug 已被修复。

![活动面板中的 WebKit 渲染进程健康提示，显示 NVIDIA 驱动兼容问题及文件描述符用量](../assets/v4-cn/imgs/nvidia-driver-fd-warning.png)

> 截图仅供参考，具体界面、数值及触发阈值请以实际版本为准。
