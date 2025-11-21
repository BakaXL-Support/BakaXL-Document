# BakaXL Launcher Frequently Asked Questions and Solutions Document

> [!TIP]
Use the sidebar directory to quickly find your problem.

## Common BakaXL Issues

### How to Switch Launcher Update Channels

When you encounter various strange errors and bugs in your launcher, it is very important to switch the launcher to a **non-Sloth channel**; this is also a prerequisite for solving problems.

The method to switch the launcher update channel is as follows:

> [!TIP]
- Enter the launcher settings
- Scroll down to find `Preview Experience Program`
- Click the small triangle next to `Change` and select **Parrot Channel or Pigeon Channel**
- Finally, click Change and accept the update

![Change Update Channel](/assets/v3-cn/imgs/ChangeUpdateChannel.png)


Participating in the Preview Experience Program allows you to get updates faster and avoid more bugs, but it may also **cause some unpredictable errors**.

If you find an error, please **report it to the BakaXL development team as soon as possible** to resolve your issue.

### How to Switch Minecraft Core

Click the `switch core icon` next to the `Start Game` button, or drag the "Start Game" button to the right.

![Switch Launch Core](/assets/v3-cn/imgs/startUp.gif)

### How to Solve Login Failures

When you try to log in to your BakaXL account via the launcher token, after clicking the `Login` button and being redirected to the success page, the browser may show **"This site can't be reached"**.

This is usually because our local service domain `local.baka.zone` resolves to `127.0.0.1`, which may be blocked by the browser or system as a potential network attack.

You can manually replace the **`local.baka.zone` part** in the address bar with `127.0.0.1` to solve the problem.

However, if the redirect shows **"No data received"**, you may have forgotten to turn off your VPN tool.

You can try **turning off the VPN tool** or temporarily **setting the proxy mode to direct connection** to resolve the issue.

### Prompt "Non-standard modpack format" When Importing a Modpack

> BakaXL currently supports CurseForge / Modrinth / MCBBS v2 version modpacks and some Minecraft game compressed packages with launchers.

Go to `Launcher Settings` > `BakaXL Preview Experience Program`, select `Parrot Channel`, click `Change`, wait for the update to complete, and try installing again.

If the installation still fails, you can feedback the situation in the user communication group, or feel free to feedback in our Issues.

## Game Issues

### When I use BakaXL to launch a game version installed by another launcher, mods, resource packs, shaders are not loaded / saves are missing

This is usually because the launcher you used before **did not enable** [**version isolation**](./minecraft-version-seperation "About Version Isolation").

To avoid the problem that new users **cannot install multiple versions with loaders at the same time**, BakaXL enables and **locks** version isolation by default.

If mods / resource packs / shader packs / saves / data packs are not loaded:

1. Use BakaXL to [install the version with the corresponding mod loader](/index#adding-existing-minecraft-cores-or-modpacks) (down to the loader version number);
2. Move the `saves` (game saves), `mods` (mods), `resourcepacks` (resource packs), and `shaderpacks` (shader packs) folders under the `.minecraft` directory to the `.minecraft/versions/(corresponding version folder name)` folder;
3. Restart the version.

If you want to sync mods, resource packs, shaders, saves, etc. between versions, please refer to this document: [About Version Isolation](./minecraft-version-seperation "About Version Isolation")

> If you use `Fabric` as the mod loader, please install the `Mod Menu` mod; otherwise, the `Mod` button will not be displayed in the game.

### I used BakaXL to open the .minecraft folder used by another launcher, but it shows no available cores

The solution is the same as the previous question.

### The game freezes when launching

Go to `Launcher Settings` - `Java Virtual Machine and Memory`, scroll down to `Memory Settings`, you can set it manually, but BakaXL recommends that you enable `Auto-set Memory`.

![setGameMemory](/assets/v3-cn/imgs/setGameMemory.png)

### Minecraft Crashed

#### If your version is Minecraft 1.17 or later

Please ensure you are using [Java 17](https://download.bell-sw.com/java/17.0.3+7/bellsoft-jre17.0.3+7-windows-amd64-full.msi) or later (Java 17 is recommended).

#### If your game version is Minecraft 1.8 - 1.16.5

Please refer to this document: [How to handle Minecraft 1.8 - 1.16.5 crashes?](./minecraft-faq)

#### If your version is Minecraft 1.7.10

Logging in with a premium account in this version may cause unexpected problems. If you have no special needs, it is recommended to log in with an offline account.

#### Common crash issues for all versions

> [!WARNING]
Storing or launching the game in a directory with Chinese characters when the system uses Unicode UTF-8 will definitely cause the game to crash.

To find the Unicode option, refer to: [Set Windows 10 to UTF8 encoding format - CSDN](https://blog.csdn.net/xt_v2012/article/details/93784751)
Uncheck the box next to `Beta: Use Unicode UTF-8 for worldwide language support (U)` and restart to disable Unicode UTF-8.

If after restarting, the check still shows that Unicode UTF-8 is in use, please refer to:
The method provided by independent advisor "A Big Blue Whale" in the article [Region settings: After checking "Beta: Use Unicode UTF-8 for worldwide language support", it still cannot be changed back after restarting - Microsoft Q&A](https://answers.microsoft.com/zh-hant/windows/forum/all/%E5%9C%B0%E5%8D%80%E8%A8%AD%E5%AE%9A/e596c312-1eda-41c2-a85e-f41a1f5ced9e).

1. Chinese characters in the .minecraft directory may cause the game to crash. If a crash occurs, try moving it out of the Chinese path;

>To solve the problem without affecting the daily use of other applications in the directory
>
>Please move <kbd><em>BakaXL.exe</em></kbd>, <kbd><em>BakaXL</em> folder</kbd>, and <kbd><em>.minecraft</em> folder</kbd>
>
>to the same directory without Chinese characters

2. Mod conflicts / incompatible mods / missing required mods:

Please refer to this document: [>>> Mod Conflicts](./minecraft-faq#mod-conflicts)

### I logged in with a premium account, but my skin is not displayed

This problem occurs when using a premium account to enter single-player mode, the original skin is not displayed, and when viewing your premium profile in `Launcher Settings` - `Accounts and Profiles`, the original skin is not shown.

You can go to `Launcher Settings` - `Accounts and Profiles` - `Minecraft User Profiles`, find the premium verification profile you need to configure and double-click to enter.

In `Account Information`, find the `Switch to another Microsoft account` button and click it, then re-verify with the **original premium account** you logged in with.

## Multiplayer Guide

### 1. Enable IPv6
IPv6 is the next-generation Internet protocol, which solves the problem of IPv4 address exhaustion. China is currently vigorously developing IPv6, and all broadband and mobile operators are required to provide IPv6 addresses; some university networks also provide IPv6 addresses.

With the IPv6 protocol, each device can have its own independent IP address, which means direct interconnection between devices can be achieved without going through a relay!

If you are using home broadband, first try to enable the IPv6 setting in your router. If the local network environment in the launcher lobby shows **"Prefer establishing IPv6 connection"**, it means you can use IPv6 network normally!

Note that multiplayer via IPv6 requires that **everyone has an IPv6 address**. If someone cannot enable IPv6, use the next method.

### 2. Use a Game Accelerator
![image](https://contents.baka.zone/web-cdn/image/xunyou.png/logoSize)

Use [Xunyou Accelerator](https://www.xunyou.com/) to enjoy a faster and more stable multiplayer experience. With Xunyou's high-speed networking, players worldwide can play together. Xunyou also supports Hypixel acceleration for playing well-known overseas mini-game servers.

Use the redemption code: "**BakaXL**" to get 3 days of free experience and enjoy an 85% discount on renewal.

### 3. Use BakaXL Relay Service
If you don't want to use an accelerator for now, you can consider using BakaXL's relay service.

Enable the option "**Use relay connection when direct connection cannot be established**" in the lobby to use the trusted free relay service provided by the sponsor "Lanke Data".
![image](https://contents.baka.zone/web-cdn/image/relay.png)

## Multiplayer Issues

> [!TIP]
The BakaXL lobby is currently in public testing. For details, please refer to the [Joint Announcement on the Next Development of Multiplayer Functions by BakaXL / PCL2 / HMCL](https://www.bilibili.com/read/cv19553724).
Octo Octopus Network is in the testing phase and will support interconnection between HMCL, PCL, and BakaXL launchers.


### Cannot Create a Lobby in BakaXL Lobby

![Error](/assets/v3-cn/imgs/Bakaxl_online_problem.png)

> Before creating a lobby, please check if your Minecraft has enabled LAN multiplayer.

![Check if Minecraft has enabled LAN multiplayer](/assets/v3-cn/imgs/resolveMinecraftOnlineIssues.png)

![](/assets/v3-cn/imgs/solveBakaXLOnlineProblems-1.png)

![](/assets/v3-cn/imgs/solveBakaXLOnlineProblems-2.png)

First, check if your Java path contains the word `Javapath`. If so, replace it with another Java version.

Also, ensure your BakaXL is the latest Parrot Channel preview version.

[>> How to update to the latest preview version of BakaXL](#how-to-update-to-the-latest-preview-version-of-bakaxl)

### Using Offline Skins in BakaXL Lobby Multiplayer

1. Go to `Launcher Settings` and select `Accounts and Profiles`
2. Select your offline profile and click `Set offline skin for my Minecraft character`

![enableSkinShare-1](/assets/v3-cn/imgs/enableSkinShare-1.png)

3. Go to `Realms / Multiplayer Lobby` and select `User Settings`
4. Ensure `BakaXL Network SkinShare` is set to `On`

![setSkninShare-2](/assets/v3-cn/imgs/enableSkinShare-2.png)

### Players Cannot See Each Other's Skins in BakaXL Lobby Multiplayer

> Please ask the premium account users in the lobby to perform the following steps

1. Go to `Launcher Settings` and select `Accounts and Profiles`
2. Select your premium profile.
3. Ensure `Join SkinShare network when using this premium profile` is set to `On`

### Cannot See Lobby Rooms in Minecraft's "Multiplayer" Menu

> You may need to run BakaXL as an administrator
> Before that, please [turn off the firewall](####check-firewall)

First, check if your BakaXL has **disabled** the IPv6 protocol stack:

1. Open `Launcher Settings` and select `Advanced`
2. Disable `Enable IPv6 protocol stack` in `Advanced Launch`
3. Restart Minecraft and BakaXL

If your game is launched with another launcher, ensure that the **JVM parameter header** in the advanced launch parameters of **you and the joiners** includes the parameter `-Djava.net.preferIPv4Stack=true`.

Adding JVM parameters in PCL2:

1. Open `Version Settings`
2. Select the `Settings` tab
3. Add `-Djava.net.preferIPv4Stack=true` to the `JVM parameter header` in `Advanced Launch Options` and return

Adding JVM parameters in HMCL:

1. Click your game version
2. Check `Launch game-specific settings` or `Edit global version settings`
3. Find `Advanced Options` and click `Modify advanced options`
4. Scroll down to find the `Java Virtual Machine Parameters` section, enter `-Djava.net.preferIPv4Stack=true`, and return

> [!TIP]
The above methods should fix the issue where you cannot find the multiplayer lobby. Also, be sure to [configure BakaXL to pass through Windows Firewall](####check-firewall).
If the problem persists after configuring the firewall and performing the above methods, you can try the following:

1. Open `C:\Windows\System32\drivers\etc\hosts` with Notepad, delete all content, and save;
2. Press `Windows` + `X`, select `Windows Powershell (Administrator)`, `Command Prompt (Administrator)`, or `Windows Terminal (Administrator)`;
3. In the pop-up window, enter `netsh winsock reset` and press `Enter` to execute;
4. Restart your computer.

In addition, you need to make sure that you have not enabled unconnected network adapters, have not started a game accelerator for other games, and are not using transparent proxies or旁路 routers.

**To disable unnecessary network adapters:**
1. Press `Windows` + `R`, enter `ncpa.cpl`, and press Enter
2. Disable all unnecessary network adapters (those with a red cross next to the icon cannot connect to the Internet and can be safely disabled)
3. Restart BakaXL and Minecraft

> If the above methods do not solve your problem, please contact developer TT702, who is currently actively collecting people with these issues to analyze the problem.

### "No further information" Error When Connecting to the Lobby Creator During Multiplayer

- This usually happens because the host exited the game or the lobby crashed.

> If the above situation does not occur, try updating your BakaXL to the latest test version and ensure both parties in the multiplayer have enabled the relay switch. After that, try using the connection assistant. If it cannot be resolved, please seek help in the BakaXL user group.

[>> How to update to the latest preview version of BakaXL](#how-to-update-to-the-latest-preview-version-of-bakaxl)

### "Connection Timeout" in BakaXL Lobby Multiplayer

> If the problem is not resolved, please ask for help in the BakaXL user group.

- Check your status in the BakaXL lobby. If it shows `In lobby / Connection established` or `In lobby / Connected via relay`, use the `Connection Assistant`.

- If you chose to use a server instance for multiplayer when creating the lobby, note whether you have enabled verification (such as third-party verification or premium verification), which may prevent players without corresponding verification qualifications from joining.

#### Check Firewall

1. Open the Start menu, type to bring up the search function, and enter `Control Panel` in the search box;
2. Find the `System and Security` category;
3. Enter `Windows Defender Firewall`;
4. Find `Allow an app or feature through Windows Defender Firewall` in the sidebar;
5. Click `Change settings`, then click `Allow another app`;
6. Click `Browse`, select your BakaXL launcher, and click `Add`;
7. Click OK.

> **If the lobby shows `Connection failed / NAT strict`, please enable BakaXL Network Relay connection function (both the lobby creator and joiners need to enable it to take effect)**.

### "io.netty buffer" Multiplayer Failure

> [!TIP]
There are many io.netty errors, but only one causes connection failure due to buffer. Therefore, you only need to capture the keywords `io.netty` and `buffer`;

When such errors occur, please submit a mod pack to the BakaXL development team to find unsupported mods.

This type of problem is not caused by BakaXL but by the mod itself not supporting SSP LAN (i.e., LAN broadcasting). Defects from mods can only be resolved by mod developers or by using other multiplayer methods.
If a mod does not support SSP LAN, no launcher using the SSP LAN solution will work for multiplayer. If you must use these mods, it is recommended to use other multiplayer solutions.
The following mods have been tested to not support SSP LAN in some versions:
- Twilight Forest (1.18);
- Tofu Craft;
- FTB Core Library;

> Although the above mods are listed as unable to multiplayer, you can still try to play together. If an error that meets the conditions occurs, it can help you quickly rule out the cause.

### Problems When Using the Connection Assistant

> [!TIP]
Most problems with the connection assistant can be solved by re-joining the lobby or restarting BakaXL.

#### Cannot Re-establish Connection After Canceling Login in the Connection Assistant

Restart BakaXL to solve this problem.

#### Connection Interrupted and Cannot Re-establish After Clicking "OK" in the Connection Assistant Notification

Restart BakaXL to solve this problem.

#### No Connection from the Connection Assistant in Multiplayer

If you can still see the normal lobby, try joining through the normal lobby first. If a connection timeout occurs, then use the connection assistant.

Ensure you actively clicked the connection assistant button and BakaXL has popped up a prompt for you to join before refreshing the list in multiplayer to find the lobby.

If you cannot see any LAN broadcasts, try re-entering the lobby and trying to join again, or restart BakaXL to solve the problem.

### Multiplayer with More Than 8 People (Including the Creator)

#### Method 1

> [!TIP]
This solution is only applicable to versions 1.15.2 and above

The BakaXL lobby itself does not limit the number of players; the limit comes from Minecraft itself.

Please add the mod named `LAN World Plug-n-Play (mcWiFiPnP)` to your core (ensure the corresponding mod loader is installed), then set the number of players in the LAN opening interface.

You can right-click to copy [this link](https://modrinth.com/mod/mcwifipnp) and press Ctrl + V (or Win + V) on the BakaXL main interface to jump to the Baka Plaza to install the mod to change the maximum number of players.

#### Method 2

You can start a local server, change the maximum number of players in the `server.properties` file, and play multiplayer through the BakaXL lobby.

## Other Issues

### Cannot Access Microsoft Login Page When Logging in with Microsoft

This is generally due to regional issues. Microsoft servers are located overseas, and access from China may be slow.

**Solutions:**

1. Use a game accelerator, such as [Xunyou Accelerator](https://www.xunyou.com/), to accelerate international Minecraft related services. Use the redemption code: "**BakaXL**" to get 3 days of free experience and enjoy an 85% discount on renewal.
2. Change DNS to `223.5.5.5` and `4.2.2.1`       [DNS change tutorial (Win10)](https://jingyan.baidu.com/article/495ba841ff105d79b20ede24.html)  [DNS change tutorial (Win7)](https://jingyan.baidu.com/article/cb5d61053c1fd6415c2fe09e.html);
3. Use a VPN method and enable global proxy mode.

> Due to Microsoft's consistent network issues, even foreign users often complain about Microsoft's network problems. Therefore, we cannot guarantee that this method will allow you to successfully log in to your premium account.

### BakaXL Shows "Only Using IPv4" During Multiplayer

Please call your Internet service provider (China Telecom 10000 / China Unicom 10010 / China Mobile 10086) and request on-site debugging of IPv6.~~If they refuse to debug, you can call the Ministry of Industry and Information Technology at 12300 to complain, or report the situation to the operator~~

## If This Document Does Not Solve Your Problem

- Ask for help in the BakaXL user group, QQ group: [480455628](https://jq.qq.com/?_wv=1027&k=3WQFYmP1);
- Ask for help in the BakaXL Help Document Center: [Seek help by proposing an issue](https://github.com/BakaXL-Support/BakaXL-QA-docs/issues/new/choose) [Seek help by starting a discussion](https://github.com/BakaXL-Support/BakaXL-QA-docs/discussions).

> Generally speaking, when seeking help in the help document center, we recommend sending your problem in the form of a *proposal*, but it is a bit troublesome because you need to provide enough information to analyze the cause.