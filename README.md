# BookTracker - 個人書籍管理系統

## 專案簡介
BookTracker 是一個現代化的個人書籍管理系統，提供直覺的使用者介面來管理個人書籍收藏。系統採用前後端分離架構，實現了完整的 CRUD 功能，並具有響應式設計，能夠適應不同的螢幕尺寸。

## 功能特色
- 書籍資訊管理（新增、編輯、刪除）
- 閱讀狀態追蹤（未讀、閱讀中、已讀完）
- 即時搜尋和過濾
- 響應式設計，支援多種裝置
- 簡潔現代的使用者介面

## 系統架構
### 前端 (Frontend)
- **框架**: React 18 + Vite
- **UI 框架**: Tailwind CSS
- **狀態管理**: React Hooks
- **圖標**: Lucide React
- **HTTP 客戶端**: Fetch API
組件位於 frontend/src/components
樣式使用 Tailwind CSS
使用 ESLint 進行程式碼品質控制

### 後端 (Backend)
- **執行環境**: Node.js
- **框架**: Express.js
- **資料庫**: MongoDB
- **ODM**: Mongoose
- **API**: RESTful API
路由定義在 backend/routes
資料模型在 backend/models
使用 async/await 處理異步操作

## 系統需求
- Node.js >= 14.0.0
- MongoDB >= 4.0
- npm >= 6.0.0
- 現代瀏覽器（Chrome, Firefox, Safari, Edge）

## 執行指引
**安裝後端依賴**

bashCopycd backend
npm install

**設定後端環境變數**
建立 .env 文件：

envCopyMONGODB_URI=mongodb://localhost:27017/bookmanagement
PORT=5001

**啟動後端服務**

bashCopynpm start

**安裝前端依賴**

bashCopycd frontend
npm install

**啟動前端開發服務器**

bashCopynpm run dev
