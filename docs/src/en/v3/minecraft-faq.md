# Common Game Crash Issues

- This article applies to the game: Minecraft;
- This article applies to system versions: Windows 7 and above;
- Reading on a computer is more effective.

>[!TIP]
Use the sidebar directory on the left to quickly find your issue.

## Java Configuration Errors

>[!WARNING]
Before troubleshooting, go to BakaXL Settings - Java Virtual Machine and Memory, and enable the option `Let BakaXL automatically determine the Java version`.

It is strongly not recommended to manually select the Java version unless you know what you are doing.

### When Using Forge

Due to compatibility issues with `Forge`, **please ensure that the automatic Java selection option is enabled**. If it still crashes, try obtaining the official Mojang Java 8 from BakaXL Settings. You can also click [this link](https://cdn.azul.com/zulu/bin/zulu8.58.0.13-ca-jre8.0.312-win_x64.msi) to download and install the Java 8u312 installation package from Azul Zulu.

## Forge Installation Errors

When installing `Forge`, you may encounter a seemingly unsolvable `BLF-402` issue

![BLF-402](./assets/v3-cn/Minecraft_CRQA/BLF-402.png)

This issue is generally accompanied by problems with core installation, and the installed vanilla core or imported modpack **cannot be found in the version list**

If your core **installs very quickly** but cannot be found in the version list after installation, please **refer to the following methods to solve it as well**

This issue is generally caused by **network environment problems or system reasons**; the solutions are given below

> [!TIP]
> - First, update your launcher channel to the Parrot Channel
> - Second, check if there are available updates for your system. If yes, install the updates and try again; if not, proceed directly to the next step **(may play a key role in specific cases)**
> - Try reinstalling the version after disabling or enabling `Use third-party download sources for acceleration in mainland China`
> - If you find that the above three points cannot solve your problem, you will have to take the last measure: **use a VPN and enable global proxy** and disable `Use third-party download sources for acceleration in mainland China`. This is the most effective solution for this error that we have found and confirmed so far  
>**In response to legal and regulatory requirements, we will not prioritize recommending the last method to solve the problem, and we promise not to distribute or sell illegal software**

## Mod Conflicts

Disable conflicting mods according to your choice. If you don't know which mods are conflicting, please go to the [__Official BakaXL Group Chat__](https://jq.qq.com/?_wv=1027&k=TwvkLgkB) for help, or check by yourself according to the tutorial.

![BakaXL Mod 管理界面](./assets/v3-cn/Minecraft_CRQA/gameModSetting.png)

## Outdated / Uninstalled Graphics Card Driver

Before that, you need to know the manufacturer of the graphics card used in your computer.

> [!TIP]
Laptop users can usually skip this section directly.

1. Press `Win` + `R` to bring up the `Run` window;

2. Enter `dxdiag` in the Run window and click `OK`;

3. In the pop-up window, click `Display`, and the manufacturer of your graphics card will be shown in the `Manufacturer` column.

![dx诊断工具](./assets/v3-cn/Minecraft_CRQA/directXtools.png)

### Laptop Users

Please go to the official website of your laptop manufacturer to obtain the corresponding driver software.

### Intel Integrated Graphics

Please download the [__Intel™ Driver & Support Assistant__](https://dsadata.intel.com/installer) to update the graphics driver.

### AMD Graphics Cards / Processors

Go to the [__AMD Drivers & Support__](https://www.amd.com/zh-hans/support) page to download the latest drivers according to your graphics card / processor model.

![AMD 驱动下载页面](./assets/v3-cn/Minecraft_CRQA/amdDriver.png)

### NVIDIA Graphics Cards

Please go to the [__NVIDIA Drivers__](https://www.nvidia.cn/geforce/drivers/) page to download the latest graphics driver according to your graphics card model and needs.

![NVIDIA 驱动下载页面](./assets/v3-cn/Minecraft_CRQA/nvidiaDriver.png)

## Excessively Large (or Small) Allocated Memory

1. Go to `Settings` and select `Java Virtual Machine and Memory`;
2. Click `Memory Settings`;
3. Ensure that `Auto-set Memory` is `On`.

> [!WARNING]
When you choose to manually allocate memory, please ensure that the allocated memory does not exceed the maximum available memory you currently have.


![系统内存](./assets/v3-cn/Minecraft_CRQA/systemMemory.png)

> [!TIP]
You need to allocate more memory when there are more mods (or higher resolution resource packs, longer draw distance), but do not exceed your available memory.


## Unresolved Issues / Others

Please seek help from developers / group members in the official BakaXL group chat, or ask on other forums such as MCBBS, and use search engines to find solutions.