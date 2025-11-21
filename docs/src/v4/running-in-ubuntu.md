# Ubuntu 系统安装指引

1. 编辑`sources.list`
   
``` bash  
vi /etc/apt/sources.list
```

2. 在文件中加入 
   
```bash
deb http://gb.archive.ubuntu.com/ubuntu jammy main
```

3. 使用终端运行 
   
``` bash
`sudo apt update`
```

4. 使用终端运行 

``` bash
sudo apt install '<BakaXL本体 .deb 文件路径>'
```

> [!TIP]
在 Ubuntu 22.0 或更高级版本中，操作系统使用的 OpenSSL 库由 1.1 更新为 3.0 或更高级版本，BakaXL 4.0 需要使用 OpenSSL 1.1 才可以运行，参考以下方式安装：

1. 使用终端运行 

``` bash
wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
```

2. 使用终端运行 

``` bash
sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb
```