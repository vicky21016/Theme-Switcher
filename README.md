#  React Theme Switcher App

這是一個使用 React 建構的主題切換範例應用，具備淺色與深色主題切換功能，並使用 Context API 管理主題狀態。此專案同時支援 RWD 響應式設計與簡易元件切換互動。

## 技術棧

- React 18+
- Next.js App Router (`use client`)
- CSS Modules
- Context API（主題切換）
- RWD 響應式設計

## 功能介紹

-  使用 `createContext` 與 `useContext` 管理主題狀態
-  可切換「淺色主題」與「深色主題」
-  各元件根據當前主題改變背景與文字樣式
-  RWD 響應式設計：支援不同裝置顯示
-  使用 `CSS Module` 做元件化樣式管理

## 使用方式

1. 安裝依賴：

```bash
npm install
```
2. 開發環境啟動：
```bash
npm run dev
```
3. 瀏覽網址：
```bash
http://localhost:3000
```
