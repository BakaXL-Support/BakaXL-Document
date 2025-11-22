# BakaXL 用户帮助文档

**本文档已整合 BakaXL v3 与 v4 的内容**

## 部署/测试帮助

> [!NOTE]
> 运行要求: node  
> 请确保 node 与 pnpm 已配置在您的计算机环境变量中  
> 诊断方法为在 PowerShell 或 CMD 中输入 `node -v` 与 `pnpm -v` 查看安装的 node 版本号


推荐使用 `node 22` 及以上版本

```bash
corepack enable
```

1. 克隆本仓库至本地

```bash
git clone https://github.com/BakaXL-Support/BakaXL-Document
```


2. 打开本地仓库文件夹，在控制台中输入

```bash
pnpm install
```

3. 安装完成后，输入以下命令启动本地服务器

```bash
pnpm dev
```

> [!TIP]
该状态下修改文件**无需关闭**本地服务器


在浏览器中访问控制台输出的 Local 地址，即可预览文档内容
``` bash
 ➜  Local:   http://localhost:port/
```

按下`q`以关闭本地服务器

4. 提交前请运行

```bash
pnpm build
```

以检查代码
