# Ceil Studio 招募頁

靜態招募頁，適用 **GitHub Pages**（無 build、無 React）。

## 檔案

- **index.html** — 主頁（Hero、關於計畫、你為何加入、Timeline、符號說明、技能卡片、聯絡）
- **recruit-data.js** — 技能資料陣列 `CEIL_RECRUIT_SKILLS`，改這裡即可更新卡片
- **recruit.js** — 依資料渲染 SkillCard

## 本機預覽

用本地伺服器開 `index.html`（或直接開檔案），例如：

```bash
npx serve .
# 或
python -m http.server 8000
```

## 嵌入主站

整頁包在 `#ceil-studio-recruit` 內，樣式僅作用於此容器，可：

1. **iframe**：`<iframe src="/recruit/" title="Ceil Studio 招募"></iframe>`
2. **同站連結**：連到 `/recruit/` 或 `recruit/index.html`

主站的 body / 全域樣式不會影響此區塊；此區塊的樣式也不會影響主站。

## 修改技能資料

編輯 **recruit-data.js** 的 `CEIL_RECRUIT_SKILLS`，每筆格式：

```js
{ category: '類別', roleName: '職責', tools: '工具/技術', status: 'O'|'X'|'CO'|'AI', description: '備註' }
```

`status === 'X'` 的卡片會顯示紅框（Open Role）。
