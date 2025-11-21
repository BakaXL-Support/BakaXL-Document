# BakaXL Documentation Writing Guidelines

<StatusBadge status="Archived Document"/>

> This article mainly explains how to write BakaXL help documentation.

### BakaXL Versions

If you want to get the official version of BakaXL or you cannot receive (are not sure about) the push notifications for the BakaXL beta version, you can go to the build page of [BakaXL Jenkins](http://jk-insider.bakaxl.com:8888/) to get the latest version of BakaXL.

Among them, `BakaXL Insider Parrot` is the Parrot Channel, which is also the latest pushed version 3.0, while `BakaXL Sloth` is the official release channel, a stable version push channel. You can download the version with the latest build number.

In the future, `BakaXL Insider Bunny` will be activated, which is applicable to the preview version of BakaXL 4.0. Before the notification of the 4.0 beta version goes online, our help documentation will only cover version 3.0, and of course, we will reserve the documentation path for 4.0.

> BakaXL LTS 2.x versions have been announced as discontinued and will not receive update support. Therefore, the help documentation should guide users to use version 3.0, and we will not provide solutions for 2.x.

### Text Format

- Spaces between Chinese, English, Chinese/English symbols, and numbers:

Keep a space between English words/numbers and Chinese characters as a spacing, and also use spaces between code blocks.


Correct example:  

``` text
BakaXL is a new generation of Minecraft: Java Edition launcher with many features, and now supports Windows 7 and above systems.
```


Incorrect example:

``` text
BakaXL是新一代Minecraft:Java Editon启动器，具有众多功能，现已支持Windows7以上系统。
```

- Capitalization of proper nouns:

Correct example: 

``` text
BakaXL, Minecraft
```

Incorrect example:

``` text
bakaxl, minecraft
```


- Uniformly use '/' as a substitute for 'or' and as a path symbol;
- When translating some content from English to Chinese, refer to the "standard translation" instead of using machine translation;
- Prefer to use half-width symbols for parentheses (symbols typed under the English input method);
- Use different heading sizes standardizedly;
  - In all documents, use `# Heading` as the main title of the document, and there shall be no second main title. Use `## Heading` as the question title. When using headings,务必 follow the hierarchy and do not skip levels, otherwise the sidebar will not render the table of contents!
- It is forbidden to use HTML to render documents arbitrarily! Markdown supports getting some special effects through HTML, but unless necessary, do not use HTML as the syntax.

>[!TIP] Typesetting Tips
> When writing, be sure to refer to this project: [Chinese Copywriting Guidelines - GitHub](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md)


### Improving Readability

1. Do not overuse **bold fonts**;
2. Do not use memes;
3. Do not use uncivilized language;
4. When using headings, use the heading syntax; do not use bold text instead of headings;
5. Headings should have a clear hierarchy, and do not use cross-level headings arbitrarily;
6. Pay attention to grammar and semantics in wording to avoid ambiguity, and do not use regional words or dialects.

The above `behaviors` will *cause the document* to be **very dazzling or have a very poor readability**, so **absolutely** do not do this  <this is an example

### Using Horizontal Lines

Try to avoid using horizontal lines, as they will bring a sense of fragmentation to the document content. You should only do so when necessary.

> In general Markdown document writing, there is no need to use horizontal lines, and do not use them arbitrarily. All headings will have built-in horizontal lines.

### Screenshots / Relatively Referenced Resources

- For BakaXL screenshots, use the **default window size**; do not change the window size arbitrarily;
- Before uploading screenshots, ensure that the pictures can highlight the key points instead of hiding them in small corners;
- To reduce the repository size, it is recommended to upload pictures to [pic.onmicrosoft.cn](https://pic.onmicrosoft.cn) or other reliable image hosting services you trust;
- Please timely keep a backup in the repository `Docs-assets`(https://github.com/BakaXL-Support/Docs-assets) to prevent future issues such as the image hosting service going down;
- For relative path references, be sure to use `./` instead of `/`. Using `/` will cause crashes during building;
- The names of referenced resources should use the camelCase naming convention.

> CamelCase naming convention: The first word of the name is all lowercase, and the first letter of each subsequent word is capitalized.

### External Links

- External links must be from reliable sources. If it is a reference to materials, use information that has been officially verified;
- If an external link contains a lot of advertisements / misleading content, please indicate it with a screenshot in the document.

### Creating New Documents

- The naming of newly created documents must conform to the PascalCase naming convention.

> PascalCase naming convention: The first letter of all words is capitalized.

>[!WARNING] Note
> If you are not sure how to name it, please ask in the group / refer to other file naming methods.


>[!TIP] Cases Beyond the Rules
> The `maindocs.md` file is an exception, where `assets/img` is the folder for storing resource files of `maindocs.md`.


### Submission Method

Please first Fork this repository, then make changes in your repository, and after completing the changes, create a Pull request to the `main` branch (if you have modified the build code, please select the `dev` branch). This is the update standard for everyone, including the creator, who also uses this method to update document materials, which can avoid many conflicts.

- If there is a conflict shown after the Pull request and you don't know how to resolve it, please contact us and we will handle the conflict for you.

You can check our [Wiki](https://github.com/BakaXL-Support/BakaXL-QA-docs/wiki) for additional help.