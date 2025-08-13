// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// หน้าแรก
router.get('/', menuController.getHome);

// หน้าเมนูทั้งหมด
router.get('/menu', menuController.getMenu);

// หน้าเมนูตาม id
router.get('/menu/:id', menuController.getMenuDetail);

// หน้าผู้พัฒนา
router.get('/about', menuController.getAbout);

module.exports = router;