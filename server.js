// เรียกใช้งาน Express framework
const express = require('express');
const app = express(); // สร้าง object สำหรับจัดการเว็บแอป
const PORT = 3000; // ก าหนด port ที่เซิร์ฟเวอร์จะรัน
// -------------------------
// Route Home (/)
// -------------------------
app.get('/', (req, res) => {
// เมื่อผู้ใช้เปิด http://localhost:3000/
res.send(`
<h1>🍲 เมนูอาหารไทยยอดนิยม 🍲</h1>
<p>ยินดีต้อนรับสู่เว็บไซต์อาหารไทย</p>
<a href="/menu">ดูเมนูอาหาร</a> | <a href="/about">เกี่ยวกับ</a> | <a href="/version">จัดทำโดย</a>
`);
});
// -------------------------
// เริ่มต้นเซิร์ฟเวอร์
// -------------------------
app.listen(PORT, () => {
// เมื่อเซิร์ฟเวอร์ท างานส าเร็จ จะแสดงข้อความใน Terminal
console.log(`Server running at http://localhost:${PORT}`);
});
// About Page
app.get('/about', (req, res) => {
res.send(`
<h2>เกี่ยวกับอาหารไทย</h2>
<p>อาหารไทยมีรสชาติกลมกล่อม ครบ 5 รส: หวาน เค็ม เปรี้ยว เผ็ด ขม</p>
<a href="/">กลับหน้าหลัก</a>
`);
});// About Page
app.get('/about', (req, res) => {
res.send(`
<h2>เกี่ยวกับอาหารไทย</h2>
<p>อาหารไทยมีรสชาติกลมกล่อม ครบ 5 รส: หวาน เค็ม เปรี้ยว เผ็ด ขม</p>
<a href="/">กลับหน้าหลัก</a>
`);
});
// Route Menu
app.get('/menu', (req, res) => {
const foods = ['ผัดไทย', 'ต้มย ากุ้ง', 'แกงเขียวหวาน'];
res.send(`<h2>เมนูอาหารไทย</h2><ul>${foods.map(f => `<li>${f}</li>`).join('')}</ul>
<a href="/">กลับหน้าหลัก</a>
`);
});
// Route Menu
app.get('/Version', (req, res) => {
const foods = ['nurwsinee Chehama', '6611425018', 'version1'];
res.send(`<h2>nurwasinee Chehama</h2><ul>${foods.map(f => `<li>${f}</li>`).join('')}</ul>
<a href="/">กลับหน้าหลัก</a>
`);
});