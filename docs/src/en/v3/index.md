# BakaXL User Manual

[>>> Encountering issues while using BakaXL?](./faq)

## Before You Start

To run BakaXL 3.0 and above, you must use Windows 7 or a newer operating system (some features require Windows 10 or later to function properly; we recommend upgrading to Windows 10) and have .NET Framework 4.6.2 or later installed.

If you are using Windows XP, Windows Vista, or older Windows versions, we recommend upgrading to Windows 10 as soon as possible.

[>> Download Windows 10](https://www.microsoft.com/en-us/software-download/windows10)

If you are using Windows 7, .NET Framework may not be pre-installed with the system. You can try downloading and installing it via the link below:

[>> Download .NET Framework 4.8.1](https://dotnet.microsoft.com/en-us/download/dotnet-framework/thank-you/net481-offline-installer)

> .NET Framework is a set of program frameworks released by Microsoft. Installing it can also prevent some issues where programs fail to start, and it will not damage your computer or slow down its operation, as it should inherently exist in your system.

> Of course, you can also use the LTS version (2.2.8.6). Problems encountered while using it will still be reported, but due to a lack of developers, they will not be resolved.

> [!WARNING]
If you are using Windows 8.1 / 10 / 11 and encounter issues where the launcher fails to start, try repairing the system using a system image or upgrading to a newer version of the system.

You can also seek help in the [BakaXL Outsider QQ Group (480455628)](https://jq.qq.com/?_wv=1027&k=U1ZY0qbg).

<span id="download"></span>

## Download

You can download the latest version of BakaXL from the official BakaXL website at any time:

[>> BakaXL Official Website](https://www.bakaxl.com)

> 'Since servers incur costs, we hope you can [donate](https://afdian.net/@TT702) to BakaXL. Please leave your BakaXL Account email when donating. BakaXL developers will add a sponsor badge and an Insider Preview Program member badge to your account, and you will be able to join the Insiders internal communication group.'

### Notes

We **do not recommend** launching BakaXL on the desktop or root directory of a partition. You can save the game and launcher in a dedicated folder (such as a Minecraft folder on the D drive), then right-click BakaXL, select "Send to", and click "Desktop shortcut" to easily open BakaXL from the desktop!

## Game Profiles

In BakaXL, you can log in using four methods: offline login, Mojang account login, Microsoft account login, and third-party login (Authlib-Injector).

You can go to:

`Launcher Settings` > `Accounts & Profiles` > `Add a new profile` to create a new profile.

![Set up game profile](https://raw-baka.230225.xyz/images/maindocs/1.gif)

## After Installation - BakaXL Preview Experience Program

If you encounter some strange bugs or want to experience new features in advance, you can go to Launcher Settings - BakaXL Preview Experience Program to switch update channels. The Parrot Channel will push updates as soon as there are code changes, while the Pigeon Channel will update regularly every Friday.

![Set Parrot Channel](https://raw-baka.230225.xyz/images/maindocs/2.gif)

If, for some reason, BakaXL fails to update automatically or gets stuck in an infinite update loop, you can always download the latest build result from [Jenkins](http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/).

## Updates

When connected to the internet, BakaXL will automatically check for available updates. If an update is available, you must update to continue using BakaXL.

You can still bypass the update by disconnecting from the internet, etc. (Not recommended)

> If BakaXL has an infinite update bug, you can download the latest build result from [Jenkins](http://jk-insider.bakaxl.com:8888/job/BakaXL%20Insider%20Parrot/) to manually update BakaXL.

## Java Environment Configuration

We recommend enabling "Let BakaXL automatically select the Java version" in the settings to avoid manual configuration. Below is the manual tutorial.

### Java Already Installed

If you have installed Java before, you can specify the Java path in three ways via `Launcher Settings` > `Java Virtual Machine & Memory` > `Java Advanced Settings`:

![Set automatic Java version selection](https://raw-baka.230225.xyz/images/maindocs/3.gif)

1. Automatically find Java location;
2. Manually specify Java location;
3. More detailed automatic Java location search.

### Java Not Installed

If you have never installed Java, you can directly launch the game, and BakaXL will automatically download and install Java for you.

If you need to manually install a specific Java version, you can find buttons like `Get Java 8` in `Launcher Settings` > `Java Virtual Machine & Memory` to obtain the corresponding Java runtime.

### Minecraft 1.16 and Earlier

If your game version is 1.16 or earlier, we recommend using Java 8 to run the game.

You can get Java 8 via `Launcher Settings` > `Java Virtual Machine & Memory` > `Get Java 8`.

### Minecraft 1.17 and Later

Running Minecraft 1.17 or later versions requires Java 17.

You can obtain it via `Launcher Settings` > `Java Virtual Machine & Memory` > `Get Java 17`. After clicking this button, the download task will start automatically, and BakaXL will download Java 17 to the official launcher directory, but this does not require you to install the official launcher.

### After Installation

Generally, BakaXL will automatically select the Java environment required by the Minecraft core, but in some cases, this may not work. In such cases, you need to go to the `Advanced Core Settings` > `Java Virtual Machine & Memory` of the corresponding core to manually select the Java runtime.

## Installing a New Minecraft Core

You can easily install Minecraft cores from within BakaXL.

Note: You may need to ensure the download source is set optimally first. Go to `Launcher Settings` > `Downloads` > `Mainland China Download Source Acceleration` and set it to `On`. The number of threads can be chosen based on your computer configuration; generally, the default 128 threads are sufficient to ensure adequate download speed.

### Install from BakaXL Main Interface

Click the pentagon-shaped button on the main interface, select the game version, add a Mod loader (optional), OptiFine (optional), and start the installation.

![Install new Minecraft core](https://raw-baka.230225.xyz/images/maindocs/4.gif)

### Install from BakaXL Idiot Plaza

Click the "Minecraft Client Download" button on the main interface of Idiot Plaza, select the game version, add a Mod loader (optional), OptiFine (optional), and start the installation.

![Install new Minecraft core from Idiot Plaza](https://raw-baka.230225.xyz/images/maindocs/5.gif)

## Installing Mods

BakaXL supports installing numerous Mods via Idiot Plaza.

You can go to Idiot Plaza, click the search box in the upper right corner and enter keywords to search for Mods, or click the switch core button on the BakaXL main interface, go to core details settings, click `Mods`, click `Open Mods Folder`, and then add the Mods files you already have into it.

> [!WARNING]
Installing Mods requires the corresponding Minecraft version, the corresponding Mod loader, and dependencies; otherwise, the Mod will fail to start or report errors.

### Downloading Mods

Click to enter the Mod introduction interface, click `Download`, then use the filter to select the Mod version.

When clicking the required Mod version (not the arrow on the right), select the corresponding Minecraft core to install the Mod. BakaXL will automatically download and place it in the Mods folder. When clicking the arrow on the right, you can customize the save location after the Mod is downloaded.

![Add Mod](https://raw-baka.230225.xyz/images/maindocs/6.gif)

## Adding Modpacks

### Install from Idiot Plaza (Recommended)

Open Idiot Plaza, enter keywords in the search box in the upper right corner, select the modpack you want to play and click the "Get" button, select the version, click the "Download" button on the right, then wait patiently. The modpack will be automatically installed into the `.minecraft` directory where BakaXL is located.

### Already Have Modpack Files

BakaXL supports installing Minecraft modpacks in MCBBS / Modrinth / CurseForge formats and most traditional Minecraft modpacks that directly include a launcher.

You can drag the `Launch Game` slider to the right > `Add new Minecraft core or modpack` > `Import modpack` to add the game core.

![Add Minecraft core](https://raw-baka.230225.xyz/images/maindocs/7.gif)

> [!WARNING]
The latest version of BakaXL only supports installation of the latest MCBBS modpack specifications (protocol version v2.0).
BakaXL will no longer support old MCBBS format modpacks exported via other launchers such as HMCL before August 18, 2021.

## Starting the Game

Once you have installed the Minecraft core, you can drag the `Launch Game` button to the right on the main interface to select the game core:

![Select Minecraft core](https://raw-baka.230225.xyz/images/maindocs/8.gif)

After that, click the "Launch Game" button, select a profile (if you only have one profile, no selection is needed), and the game will start automatically.

## Personalizing Your BakaXL with .BakaSkin Files (Theme Packs)

Go to `Launcher Settings` > `Personalization`, scroll to the bottom and click the `Open Theme Folder` button, copy the .BakaSkin files obtained externally into the folder, then return to BakaXL to view the theme list.

You can also browse and download favorite themes in BakaXL Idiot Plaza, or package your personalized settings into a theme and submit it to Idiot Plaza.

You can go to the [BakaXL Operation Management Platform](https://open.baka.zone/) to upload your works.

## BakaXL Network

BakaXL has a built-in BakaXL Network feature, which enables some social operations.

### Login/Register Account

Go to `Launcher Settings` > `Accounts & Profiles` > `Log in to an existing BakaXL account` or `Register a new account`.

To register a new account, go to [BakaXL Account Register](https://account.baka.zone/register). During registration, you need to bind at least one third-party account and fill in relevant basic information.

If you **get stuck on the login page and cannot return** when logging in/registering an account (the back button is gray and unclickable) as shown in the figure below:

![LoginPageErr](./assets/v3-cn/Minecraft_CRQA/LoginPageErr.jpg)

Then please **switch to the Parrot Channel for an update** and try logging in again, and wait patiently on that page to resolve the issue.

> Maybe you can give it some patience.

### Modifying Account Avatar or Profile

Go to `Bakaverse` > `User Settings`.

### Bakaverse

Click the user avatar in the lower left corner of the homepage or the "Bakaverse / Multiplayer Lobby" tile in the "Start" menu to enter Bakaverse.

### Adding Friends

Click the `Add Friends` menu bar on the left, enter your friend's BakaXL Account name and digital tag in the input box on the right to send a friend request.

If you receive requests, they will also be displayed above the input box. You can choose to accept or decline.

After a friend request is accepted, you will find them in your friends list.

### Lobby (Multiplayer)

> [!TIP]
The BakaXL lobby is currently serviced by Octo Network and is available. You can experience it in `Bakaverse` > `Lobby`. For details, please refer to the [Joint Announcement on the Next Development of Multiplayer Features by BakaXL / PCL2 / HMCL](https://www.bilibili.com/read/cv19553724).

Select the `Lobby` menu bar, and you can create / join a lobby.

1. First, ensure that you and your friends' Minecraft are launched. Then the creator (the owner of the save) enters "Single Player" and opens the save to be used for multiplayer;
2. Press `Esc` and select "Open to LAN" in the pause menu;

> If you need to use a server, you can configure it yourself and skip the above two steps.

3. Return to the BakaXL lobby and select your Minecraft instance / server;
4. Click `Create Lobby`, then send the lobby ID to other players via communication software;
5. Other players join using the 8-digit lobby ID.

Both the joining party and the creating party must enable the `Use relay connection when direct connection is unavailable` option to ensure normal multiplayer gameplay. For the privacy policy regarding the use of BakaXL Network Relay, you can refer to:

[>>> BakaXL Privacy Policy](https://www.bakaxl.com/Privacy/Policy/)

After joining the lobby, go to "Multiplayer", and the lobby will be automatically displayed in the list.

If you cannot join the game, BakaXL will display your status in the lobby's player list, and BakaXL's running log for this session is also a means to diagnose problems in the future.

You can also obtain some help regarding the multiplayer feature through our help documentation:

[>>> Troubleshooting for BakaXL Multiplayer Issues](./faq#联机问题一览)

#### Playing Minecraft Instances Launched by Other Launchers via BakaXL

1. Enter a single-player world in Minecraft launched by another launcher;
2. After entering the game, press the `Esc` key and select `Open to LAN`;
3. In the BakaXL lobby, select the game instance you opened in the corresponding launcher;
4. Create a lobby and send the lobby ID to your friends via communication software;
5. Ask your friends to log in to their BakaXL accounts and join the lobby, then they will see your lobby in the multiplayer game of their Minecraft.

> [!TIP]
The joining party does not need to launch Minecraft via BakaXL to join the game, but we still hope you use BakaXL to launch / manage your game cores.

#### Creating a Server Lobby via BakaXL

1. Start the server;
2. Open the BakaXL lobby and select your server instance in the instances;
3. Create a lobby and send the lobby ID to your friends via communication software;
4. After your friends join the lobby, they will see your lobby in their running game and can double-click to join.

> [!WARNING]
If the server uses an authentication server, such as genuine authentication, the joining players also need to use the Minecraft user profile of the corresponding authentication server. If the server enables genuine authentication, the joining players should also enable genuine authentication; otherwise, it will cause connection timeouts.

### Skin Sharing (Offline Skin Sharing)

This feature works in both lobbies and third-party servers.

This means that as long as players in the multiplayer game use BakaXL as the launcher and enable this feature, they can see each other's skins without other mods or plugins.

Just go to `Launcher Settings` - `Accounts & Profiles`, click your offline profile, and set the skin.

> For genuine profiles, you need to go to `Launcher Settings` - `Accounts & Profiles`, click the genuine profile, and enable `Join BakaXL SkinShare Network`.

Then go to `Bakaverse / Multiplayer Lobby` - `User Settings` and ensure that `BakaXL Network SkinShare` is enabled.

> If you still cannot solve your problem after reading this user manual and the [help documentation](./faq), you can seek help in the [BakaXL Outsider QQ Group (480455628)](https://jq.qq.com/?_wv=1027&k=U1ZY0qbg).