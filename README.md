# demo
[https://duckside-v1-next.vercel.app//](<https://duckside-v1-next.vercel.app/>)
# duckside簡介
本專案為一人獨自使用Next重構前期與夥伴們共同創作的作品    
前期作品→2022年資展國際前端班專題[https://github.com/pp666123/duckside_v0](<https://github.com/pp666123/duckside_v0>)    
簡介：以鴨子為主題串接投資記帳、模擬投資小遊戲和裝扮遊戲的專題  

# duckside功能

舊版

1. 會員登入 
2. 會員資料修改
4. 投資總覽
5. 我的計畫
6. 交易紀錄
7. 資產明細
8. 投資成果
9. 模擬投資
10. 關於本站
11. 合作夥伴
功能：第三方登入、登入後三秒跳轉、迎賓動畫、美術設計、數字圖像化、表單功能

新版

1. 我的計畫(計畫)
2. 交易紀錄(執行)
3. 投資成果(成果)
4. 資產明細(總財產)  
功能：迎賓動畫、管理股票代號input、css管理class化、前端數據管理Redux、線上部屬、文件撰寫
使用技術&套件→Next、Redux、Tailwind、Typescript、Yarn、react-spring、react-hook-form、sweetalert2..等  

代辦順序

1. ~~迎賓動畫&改色調~~
2. ~~redux~~
1. ~~model~~
1. ~~modal UI復刻~~
1. ~~登入state規劃~~
3. 登入&頭像選單
4. 第三方&機器人驗證
5. 迎賓動畫+跑馬燈

後續可研究  

1.https://redux-saga.js.org/

# 啟動專案
```bash
yarn 
yarn dev
```

# 技術&套件用法
## Next
官方網站：https://nextjs.tw/
npx create-next-app duckside
## Yarn
## ESLint
## Typescript
```
// 定義
type LoginData = {
  email: string;
  password: string;
};

function loginUser(data: LoginData): void {
  console.log(`Email: ${data.email}, Password: ${data.password}`);
}

// 使用
const userCredentials: LoginData = {
  email: 'user@example.com',
  password: 'securepassword',
};

// 調用
loginUser(userCredentials);
```
## Tailwind CSS
sidebar製作 (下拉式選單?)
## @heroicons/react
icon套件

LOGO去背
## react-spring
動畫套件
## vercel
網站部屬
## react-modal
modal
## react-redux&@reduxjs/toolkit
官網：[https://redux-toolkit.js.org/](<https://redux-toolkit.js.org/>)  
## react-hook-form
input/form套件
```
const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

{...register("email", {
    required: true,
    minLength: 2,
    pattern: /^\S+@\S+(\.|-)+\S+$/i,
})}
```
## sweetalert2
官網[https://sweetalert2.github.io/](<https://sweetalert2.github.io/>)
```
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};
```
## react-select
高級input
## python 
處理股票數據  
csv轉json

# 其他輔助工具
## GIMP
圖片軟體free開源

## Markdown
換行=空兩格  
超連結=[文字](<www.test.com>)  

## AI
ChatGPT  
Anthropic  