-----------------------------------------------------------------------------------------------------------------------------------------
# Node.js + Express + Sequelize + SQLite Project

โปรเจกต์พัฒนา API ด้วย Node.js, Express, Sequelize และฐานข้อมูล SQLite  

---

## 🚀 Features

- ใช้งาน Sequelize ORM จัดการ Model และความสัมพันธ์แบบ One-to-Many  
- Seed ข้อมูลจำลองลงฐานข้อมูล SQLite อัตโนมัติ  
- RESTful API สำหรับดึงข้อมูลผู้ใช้พร้อมกระเป๋าเงิน  
- โครงสร้างโปรเจกต์แบบ MVC แยก Models, Controllers, Routes  

---

## 🛠️ TechStack

- Node.js v14+  
- Express.js  
- Sequelize ORM  
- SQLite  
- uuid (สำหรับสร้าง UUID)

---

## 💾 Installation & Setup
- ติดตั้ง [Node.js](https://nodejs.org/en/)
- ตรวจสอบ Node.js และ npm ในเครื่องด้วยคำสั่ง:
  ```bash
  node -v
  npm -v


-----------------------------------------------------------------------------------------------------------------------------------------
***************** ขั้นตอน Run project *****************
-----------------------------------------------------------------------------------------------------------------------------------------
1. ติดตั้ง Dependencies
    command > npm install

2. Seed ข้อมูลจำลองลงฐานข้อมูล
    command > node seeders/seed.js

3. รันเซิร์ฟเวอร์
    command > node app.js

4. ทดสอบ API
    เปิดเว็บเบราว์เซอร์หรือใช้โปรแกรม Postman / Insomnia ทดสอบ GET API

    URL: http://localhost:3333/api/users

    Method: GET

คำแนะนำ
#หากต้องการตรวจสอบภายใน Project ทันที ให้ Seed ข้อมูลก่อนและจะแสดงในรูปแบบ JSON ได้เลยครับ