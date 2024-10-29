// index.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; // 환경 변수 PORT 사용, 없으면 3000번 포트 사용

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));

// HTML 파일 응답
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
