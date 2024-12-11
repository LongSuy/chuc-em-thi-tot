const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình EJS làm engine view
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cung cấp tệp tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// Định nghĩa route chính
app.get('/', (req, res) => {
    res.render('index');
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});