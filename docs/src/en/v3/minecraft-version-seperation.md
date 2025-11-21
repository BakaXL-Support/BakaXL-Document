# About Version Isolation

## What is Version Isolation

As the name suggests, version isolation is to isolate versions into independent entities.

* The actual operation of version isolation is to specify the game directory. It is a built-in function of the game and will not affect the game after being enabled.
* After enabling version isolation, contents except folders like *`assets`* and *`libraries`* will be placed in the specified directory.
* When version isolation is not enabled, the game itself is stored in the *`.minecraft`* directory.
* When version isolation is enabled, the game itself is stored in the *`.minecraft/version/`* directory.
  (This includes folders under the *`.minecraft`* directory such as *`saves`* (game saves), *`mods`* (mods), *`resources`* (resource packs), *`shaderpacks`* (shader packs), etc.)


Therefore, after enabling version isolation, you can **launch multiple versions with loaders, and their mods, resource packs, shaders, saves, data packs, etc. will not affect other versions**.

When you want to have multiple different versions with loaders, the simpler way is usually to **enable version isolation**.

## Disadvantages of Version Isolation

After enabling version isolation, players who install multiple Mod loaders for the same version will find that the isolation of resource packs, shader packs, and saves from each other is inconvenient.

### Solutions

Here are three recommended methods:

1. Use the **Add Minecraft Instance Directory** function provided by BakaXL.
2. Copy the corresponding contents in the folder to the required version (this method is simple but cumbersome for frequent operations, suitable for players who do not often modify the above contents);
3. Use soft links to realize content intercommunication between multiple versions (only one operation is needed, once and for all, suitable for players who often modify the above contents, which will be described in detail below).

#### Method 1

> This method is applicable to users of the BakaXL preview version.
> 
> Go to `Main Settings` > `BakaXL Preview Program`, select `Parrot Channel`, and click `Change` to update to the BakaXL preview version.

Go to `Main Settings` > `Game Directory` > `Add Minecraft Instance Directory`, click `Add Directory`, and then select a directory.

#### Method 2

> This method is applicable to Windows operating systems of Windows Vista and later versions.

Suppose there are two versions A and B, and you want to make their saves intercommunicate:

1. Find the save folders of the two versions, with directories *`~/.minecraft/versions/A/saves`* and *`~/.minecraft/versions/B/saves`* respectively;
2. Move all contents in the save folder of B (if any) to the save folder of A, and delete the save folder of B;
3. Open Command Prompt (CMD) and enter:
   ```shell
   mklink /J "~/.minecraft/versions/B/saves" "~/.minecraft/versions/A/saves"
   ```
   This will create a soft link from the save directory of A to the save directory of B;
4. The output
   ```shell
   Junction created for ~/.minecraft/versions/B/saves <<===>> ~/.minecraft/versions/A/saves
   ```
   indicates that the soft link is created successfully.

At this time, whether you open version A or B, you can see the intercommunicated saves.

The synchronization of texture, shader, and Mod folders is the same as above.