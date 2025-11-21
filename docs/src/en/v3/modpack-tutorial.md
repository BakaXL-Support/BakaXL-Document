# BakaXL Online Update Modpack Creation Tutorial

>[!WARNING] Attention
> Please note! The download traffic costs for creating such modpacks are not completely free. Please consider whether to use this solution based on your actual situation.


Through the MCBBS modpack protocol, you can create your own modpacks that are compatible with most launchers and allow you to control updates. The following will explain how to create your own updateable modpack.

## 1. First, choose a service that supports direct link file downloads

We recommend using object storage services such as Tencent Cloud COS, Alibaba Cloud OSS, Upyun USS, etc. These object storage services offer free quotas (note! When using such object storage services, be sure to match them with a CDN, otherwise, you may incur exorbitant traffic fees!), or network disks that support direct links and custom download paths. Public network disks such as Baidu Netdisk, Weiyun, and Alibaba Cloud Disk are not supported!

In simple terms, suppose there is a file in your modpack under the `config` directory called `test.ini`, its download address must be in the following format:
```
https://your-network-disk-domain/modpack-path/overrides/config/test.ini
```
And not like this:
```
https://your-network-disk-domain/xxxxx/test.ini
```
For the use of object storage and CDN, please refer to the official websites of each cloud service provider; we will not elaborate further here.

## 2. Export the modpack

First, open the modpack's details page, click on the corresponding information, and modify the information of this modpack first:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FF8C5BEF-F16C-11ED-B30F-3C91809A0E42.png)

Then scroll down the left menu, select Export, and then select the Core Export Wizard:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/0095166E-F16D-11ED-9D3E-3C91809A0E42.png)

Then fill in information such as the version number. It is recommended to use the following format for the version number:
```
1.0.1
```
![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/00BA3D35-F16D-11ED-9A60-3C91809A0E42.png)

Then fill in the update API root address. For example, if you created a `games` path on your object storage/network disk, you can fill it in as follows:
```
http://your-network-disk-domain/games
```
Then, according to your needs, enable the "Always keep the modpack up to date" option. We recommend that server users enable this option, and modpack authors can enable it as needed.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/00E61523-F16D-11ED-82C2-3C91809A0E42.png)

Then export your modpack, and we're almost done!

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/010C0C4C-F16D-11ED-B374-3C91809A0E42.png)

## 3. Upload files

Extract the exported modpack zip file to any path; it will probably look like this:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/0125EB4A-F16D-11ED-9D42-3C91809A0E42.png)

Then upload the `overrides` folder and `mcbbs.packmeta` to the same directory on your network disk.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/01385F93-F16D-11ED-8F52-3C91809A0E42.png)

At this point, you have completed all configuration operations. Next, we will teach you how to test the update.

## 4. Modifying update configurations

Open the `mcbbs.packmeta` file with an editor (Visual Studio Code is recommended), and it will probably look like this:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/016221F4-F16D-11ED-B086-3C91809A0E42.png)

Looks messy? It doesn't matter. We can use tools like bejson to format the JSON, as follows:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/019C6B32-F16D-11ED-BE97-3C91809A0E42.png)

Then overwrite the formatted JSON information back into the editor.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFB1FF90-F16C-11ED-897C-3C91809A0E42.png)

Next, I will teach you how to add and delete mods.

All version files are under the `files` category. `files` is an array type, and the definition of each parameter is as follows:

- `type`: Fixed as `addon` here;
- `path`: The relative path and file name of the file in the version directory;
- `hash`: The hash value of the file, calculated using sha1;
- `force`: Whether the file is mandatory. If the value is `true`, the file will be re-downloaded from the server if it is missing or the file hash value is inconsistent.

So, how to add a new file?

Add an empty entry as shown in the figure:

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFD24B6E-F16C-11ED-88F8-3C91809A0E42.png)
>[!WARNING] Please note!
> Json's `{}` and `,` are English symbols; do not use Chinese symbols! Please be extremely careful. Any format or symbol errors will cause the configuration file to be invalid and not take effect!

For example, if you want to add a mod, the `path` should be filled as `mods/Mod name.jar`
How to get the `hash`? If you are using Windows 7 or later, you can use the following method to get the SHA1 value of the file:
Open PowerShell and use the command `Get-FileHash 'file-path/filename.jar' -Algorithm SHA1` to get the hash value of the file.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFE5EB5A-F16C-11ED-A678-3C91809A0E42.png)

Then convert the obtained hash value to lowercase and fill it in the `hash` field above. You can search for "online case conversion" on Baidu to use a tool website for case conversion.

Note! It must be lowercase! It must be lowercase! It must be lowercase!

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/FFF9AFA1-F16C-11ED-9DED-3C91809A0E42.png)

Also, pay attention to the commas: when to add them and when not to.

Presumably, you also understand how to delete an entry: just delete the corresponding `{}` along with its content, which is the opposite operation of adding.

Then find the `version` option above and modify its value. For example, if your previous version was `1.0.1`, this version can be `1.0.2`; as long as the version is different from the previous one.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/000F93A5-F16D-11ED-B273-3C91809A0E42.png)

After filling in, verify the text content again on bejson. After confirming the verification passes, use the two buttons in the figure below to compress the Json.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/002B8473-F16D-11ED-A391-3C91809A0E42.png)

Then return to the editor and save the compressed configuration information text.

![](https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/005FB8FB-F16D-11ED-AB64-3C91809A0E42.png)

Then upload `mcbbs.packmeta` to the previous network disk path, overwriting the previous file.

>[!WARNING] Note
> If you **use a CDN**, remember to refresh the cache of this file! Otherwise, it may not take effect!
>
> At the same time, if you are **adding or modifying files**, please place the file under the `overrides/corresponding directory`.
>
> Again, the hash value of the file must correspond! If a mod needs to be updated, it is recommended to modify the mod file name and hash.


## 5. Other information

If you need technical support, please feel free to contact us, and we will provide you with paid support services.