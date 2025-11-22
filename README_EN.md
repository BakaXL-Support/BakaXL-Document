# BakaXL User Help Documentation

**This document covers both BakaXL v3 and v4 (_WIP_)**

## Deployment/Testing Help

> [!NOTE]
> Runtime Requirements: node  
> Ensure node and pnpm are configured in your system environment variables  
> Verify by running `node -v` and `pnpm -v` in PowerShell or CMD to check installed node versions


Recommended: `node 22` or later

```bash
corepack enable
```


1. Clone this repository locally

```bash
git clone https://github.com/BakaXL-Support/BakaXL-Document
```


2. Open the local repository folder and run in the console

```bash
pnpm install
```


3. After installation completes, run the following command to start the local server

```bash
pnpm dev
```

> [!TIP]
Modifying files in this state ***does not require shutting down*** the local server


Access the Local URL displayed in the console to preview documentation content

``` bash
 ➜  Local:   http://localhost:port/
```

Press `q` to close the local server

4. Before committing, run the following command to check the code

```bash
pnpm build
```

  
