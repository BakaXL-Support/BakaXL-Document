---
outline: deep
---

# Welcome to the next generation of BakaXL

::: warning
Currently, BakaXL 4.0 is in early preview, and most features are either unavailable or subject to frequent changes. Please do not rely on it as your primary game launcher.
:::

You might want to know:

<BakaFourIndexButtonList />

## Some Early Testing Questions

### Can Windows 7 Users Run BakaXL 4.0?

VxKex allows BakaXL 4.0 to run on Windows 7, but not all features are guaranteed to work.

::: warning
BakaXL 4.0 does not provide technical support for users running BakaXL on Windows 7 through VxKex.
:::

### Smoother Frame Rate

Set the environment variable `WEBVIEW2_ADDITIONAL_BROWSER_ARGUMENTS --disable-frame-rate-limit --disable-gpu-vsync --max-gum-fps="9999"` to unlock BakaXL 4's frame rate limit

### BakaXL 4.0 Infinite Pop-up Reminders to Update

Try deleting the file `.config/.BakaXL/instance/bunny.safe` and then restarting the program.

### BakaXL 4.0 Window Not Displaying on Linux

> Running BakaXL 4.0 on Linux with Nvidia graphics cards or in virtual machines might cause the window not to display.

You can try running the following command in the terminal to solve this issue:

```bash
WEBKIT_DISABLE_DMABUF_RENDERER=1
```

### NVIDIA Driver Compatibility Warning or Automatic Interface Reloads on Linux

On Linux systems with an NVIDIA graphics card and a driver version below 595, a driver bug causes file descriptors (FDs) to be created repeatedly without being released. Once the number of FDs reaches the per-process limit, the process freezes, leaving the BakaXL interface unresponsive.

When BakaXL 4.0 detects this issue, it continuously monitors the FD count and forcibly recreates the WebView rendering process as the count approaches the limit, before the process freezes. You may therefore see an NVIDIA driver compatibility warning or notice the interface reloading automatically. This is a protective measure to prevent freezes; it does not fix the underlying driver bug.

![WebKit rendering process health notification in the activity panel, showing an NVIDIA driver compatibility warning and file descriptor usage](../../assets/v4-cn/imgs/nvidia-driver-fd-warning.png)

> The screenshot shows the Chinese interface and is for reference only. The interface, values, and trigger threshold may vary by version.
