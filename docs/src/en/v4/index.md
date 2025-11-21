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
