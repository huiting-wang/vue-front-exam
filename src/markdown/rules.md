# 一、Coding 原則
- 風格：Javascript ES6 (ECMAScript 2015)
- 邏輯 Scope 需添加“註解”，Methods & 函式使用“註釋標籤”，依據 [JSDoc](https://jsdoc.app/) 規則
- 正式環境，不必要的 `console.log` 與 `註解` 需移除
- SCSS 使用 [BEM](http://getbem.com/naming/) Class 命名設計模式

# 二、一般編碼規範

### 2.1 JS、CSS、SCSS、HTML、圖檔文件命名

採小寫命名方式，以中畫線分隔
> `正例：render-dom.js / signup.css / index.html / company-logo.svg`

### 2.2 Javascript 命名規範
採用小寫駝峰命名，代碼中的命名均不能以下劃線或美元符號結束
> `反例： _name / name_ / name$`

方法名、參數名、成員變量、局部變量都統一使用小寫駝峰命名風格。
> `正例： localValue / getHttpMessage() / inputUserId`

### 2.3 常數命名全部大寫，單詞間用下劃線隔開，力求語義表達完整清楚，不要嫌名字長。
> `正例： MAX_STOCK_COUNT`

> `反例： MAX_COUNT` 

# 三、Vue 項目規範

### 以 Vue 官方 [風格指南](https://cn.vuejs.org/v2/style-guide/) 中的 A 規範基礎，請所有代碼遵守其規範。

組件名應該始終是多個單詞的，根組件 App 以及 `<transition>`、`<component>` 之類的 Vue 內置組件除外。

這樣做可以避免跟現有的以及未來的 HTML 元素相沖突，因為所有的 HTML 元素名稱都是單個單詞的。

### 3.1 Components 檔案命名規範

採大駝峰命名方式
> `正例： Hamburger.vue`

如有子資料夾以 index.vue 為入口檔
  ```text
  └─ components
    └─ layout
      └─ index.vue
  ```

### 3.2 自閉合組件標籤規範

在單文件組件、字符串模板和 JSX 中沒有內容的組件應該是自閉合的——但在 DOM 模板裡永遠不要這樣做。

自閉合組件表示它們不僅沒有內容，而且刻意沒有內容。其不同之處就好像書上的一頁白紙對比貼有“本頁有意留白”標籤的白紙。而且沒有了額外的閉合標籤，你的代碼也更簡潔。

不幸的是，HTML 並不支持自閉合的自定義元素——只有官方的“空”元素。所以上述策略僅適用於進入 DOM 之前 Vue 的模板編譯器能夠觸達的地方，然後再產出符合 DOM 規範的 HTML。

反例：
```html
<!-- 在 JS 檔组件、字符串模板和 JSX 中 -->
<MyComponent></MyComponent>

<!-- 在 DOM 模板中 -->
<my-component/>
```

正例：
``` html
<!-- 在 JS 檔组件、字符串模板和 JSX 中 -->
<MyComponent/>

<!-- 在 DOM 模板中 -->
<my-component></my-component>
```

### 3.3 Views 檔案命名規範

採大駝峰命名方式
> `正例： HomePage.vue`

如有子資料夾以 index.vue 為入口檔
  ```text
  └─ views
    └─ home
      └─ index.vue
  ```

# 四、Git 規範

### Commit 開發分類標籤：
- `[WIP]`: 開發中暫存，每日開發內容下班前上傳暫存
- `[Dev]`: 專案功能開發
- `[Patch]`: 除錯、修補 (小幅度邏輯調整、效能調整、資料格式調整、防呆等)
- `[Bug]`: 除錯 (功能或程式異常，來自客服部/產品部反應)
- `[Anno]`: 修改註釋內容
- `[NPM]`: 套件更新
- `[ENV]`: 環境變數設定變更
- `[Doc]`: 開發或規範文件

---

# Installation
To install this package, use one of the following commands. You need administrator privileges to execute these unless npm was installed on your system through a Node.js version manager (e.g. n or nvm).

```
npm install -g @vue/cli@5.0.8
```

After installation, you will have access to the `vue` binary in your command line.

You can run scripts with additional features using the GUI with the ｀vue ui｀ command.

---

# NPM Scripts

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Lints and fixes files
```
npm run lint
```

### Check every module defined in `package.json` and if there is a newer version in the NPM registry.
```
npm outdated
```

or install [npm-check](https://www.npmjs.com/package/npm-check) plugin

```
npm-check -u
```

### Export webpack config file
```
vue inspect > output.js
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
