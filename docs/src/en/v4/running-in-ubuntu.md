# Ubuntu System Installation Guide

1. Edit `/etc/apt/sources.list`
2. Add `deb http://gb.archive.ubuntu.com/ubuntu jammy main` to the file.
3. Run `sudo apt update` in the terminal.
4. Run `sudo apt install '<BakaXL main .deb file path>'` in the terminal.

::: tip
In Ubuntu 22.0 or higher versions, the OpenSSL library used by the operating system has been updated from 1.1 to 3.0 or higher. BakaXL 4.0 requires OpenSSL 1.1 to run. Follow the steps below to install it:

1. Run `wget http://nz2.archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb` in the terminal.
2. Run `sudo dpkg -i libssl1.1_1.1.1f-1ubuntu2_amd64.deb` in the terminal.

:::
