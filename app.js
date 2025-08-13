const express = require('express'); // สร้าง express เพื่อสร้างเว็บเซิร์ฟเวอร์
const path = require('path'); // จัดการเส้นทางไฟล์และโฟลเดอร์
const menuRoutes = require('./routes/menuRoutes');

const app = express(); // สร้างแอป Express

// ตั้งค่า EJS เป็น template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // กำหนดโฟลเดอร์ที่เก็บ EJS

// ตั้งค่าให้สามารถใช้ไฟล์ static (CSS, รูปภาพ) ได้
app.use(express.static(path.join(__dirname, 'public')));

// ใช้ routes เพื่อจัดการเส้นทาง URL
app.use('/', menuRoutes);

// รัน server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});