---
outline: deep
---

# 欢迎使用下一代 BakaXL

> [!WARNING]
目前 BakaXL 4.0 处于早期预览，大部分功能暂不可用或经常会发生变动，请勿作为主要游戏启动器

你可能会想知道:

<BakaFourIndexButtonList />

## 一些早期测试疑问


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
