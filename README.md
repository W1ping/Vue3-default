# Vite + Vue3 + Pinia 模板

## 初始化

```sh
npm install
```

## 启动

```sh
npm run serve
```

## 打包

```sh
npm run build
```

## 校验

```sh
npm run lint
```

## git commit
```sh
npm run commit
```

## 技术栈

### 框架 [Vue3](https://cn.vuejs.org/)

### 打包工具 [Vite](https://vitejs.cn/)

### 状态管理 [Pinia](https://pinia.web3doc.top/)

### 组件库 [ElementPlus](https://element-plus.gitee.io/zh-CN/)

### 其它

组件/api 自动按需引入，详情查看 [unplugin-auto-import](https://www.npmjs.com/package/unplugin-auto-import)

多用 [VueUse](https://vueuse.org/) 少造轮子，解放大脑

多用 [UnoCSS](https://unocss.dev/) 减少 CSS 书写，解放双手
查询写法地址 [UnoCSS](https://unocss.dev/interactive/) 或 [WindiCSS](https://windicss.org/)


定义 icon 用法
1. 在[icon库](https://icones.js.org/) 查询 `<icon-'库里复制的iconName'>`
2. 自定义icon详情参考 [这里](https://github.com/antfu/unplugin-icons)

数据请求可以按 fetch 来也可以用 axios 自己根据业务需求判断，不做限制