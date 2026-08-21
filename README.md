## vercel link
https://project-yzxza-ten.vercel.app/

## ภาพแอปพลิเคชัน QuestPulse

```Dashboard Overview
<img width="1919" height="940" alt="image" src="https://github.com/user-attachments/assets/b348754b-8bd7-4a8d-b110-0edd2911220e" />
```

```Rewards Store
<img width="1919" height="943" alt="image" src="https://github.com/user-attachments/assets/613b0e7a-5557-43fa-94f5-5bee2a918910" />
```

```New Quest
<img width="1919" height="941" alt="image" src="https://github.com/user-attachments/assets/2698fdd2-8f3e-4b2d-95c8-4319c121a4d3" />
```

# QuestPulse

QuestPulse เป็นเว็บแอปพลิเคชันรูปแบบ Gamification ที่พัฒนาขึ้นจากการศึกษาและวิเคราะห์แนวคิดการทำงานของแอปพลิเคชัน Triggr โดยนำแนวคิดเกี่ยวกับ Trigger, Mission และ Reward มาประยุกต์ใช้ในการสร้างระบบภารกิจสะสมคะแนนและแลกรับของรางวัล

ระบบพัฒนาด้วย Next.js และออกแบบให้รองรับ Responsive Design สามารถใช้งานได้ทั้งบน Desktop, Tablet และ Smartphone

## Demo

https://project-yzxza-ten.vercel.app/

## แนวคิดของระบบ

แนวคิดหลักของ QuestPulse คือการให้ผู้ใช้งานเลือกทำภารกิจตามเงื่อนไขที่กำหนด เมื่อทำภารกิจสำเร็จจะได้รับคะแนนสะสม และสามารถนำคะแนนไปแลกรับของรางวัลภายในระบบได้

รูปแบบการทำงานโดยรวม

```text
เลือกภารกิจ
    ↓
ทำตามเงื่อนไข
    ↓
ตรวจสอบความสำเร็จ
    ↓
รับคะแนน
    ↓
สะสมคะแนน
    ↓
แลกรับของรางวัล
```

## ฟังก์ชันหลัก

ระบบประกอบด้วยฟังก์ชันสำคัญ ได้แก่

- Dashboard สำหรับแสดงข้อมูลภาพรวมของผู้ใช้งาน
- ระบบคะแนนสะสม Points
- ระบบภารกิจ Mission
- ระบบสร้างภารกิจใหม่
- ระบบแสดงรายละเอียดภารกิจ
- ระบบทำภารกิจและรับคะแนน
- ระบบกรองภารกิจตามประเภท
- ระบบ Daily Streak
- ระบบร้านค้าของรางวัล
- ระบบแลกรับของรางวัล
- ระบบตรวจสอบคะแนนก่อนแลกรางวัล
- ระบบป้องกันการแลกรางวัลซ้ำ
- ระบบจัดการข้อมูลส่วนกลางด้วย React Context
- API สำหรับ Mission และ Reward
- Responsive Design รองรับหลายขนาดหน้าจอ

## ประเภทของภารกิจ

QuestPulse รองรับภารกิจหลัก 3 ประเภท

### Photo Mission

ผู้ใช้งานต้องถ่ายภาพหรืออัปโหลดภาพเพื่อใช้เป็นหลักฐานในการทำภารกิจ

ตัวอย่าง

- ถ่ายรูปการแยกขยะ
- ถ่ายภาพการใช้แก้ว Reusable
- ถ่ายภาพกิจกรรมตามสถานที่ที่กำหนด

### QR Code Mission

ผู้ใช้งานต้องสแกน QR Code ที่กำหนดเพื่อยืนยันการเข้าร่วมกิจกรรม

ตัวอย่าง

- สแกน QR Code หน้าเคาน์เตอร์
- สแกน QR Code เพื่อเช็คอิน
- สแกน QR Code เพื่อยืนยันการเข้าร่วมงาน

### GPS Mission

ผู้ใช้งานใช้ตำแหน่ง GPS เพื่อยืนยันว่าตนเองอยู่ในบริเวณที่กำหนด

ตัวอย่าง

- เช็คอินสถานที่
- เข้าร่วมกิจกรรมในพื้นที่ที่กำหนด
- ทำภารกิจที่ต้องตรวจสอบตำแหน่ง

## หน้าเว็บไซต์

### Dashboard

หน้าหลักของระบบ ใช้สำหรับแสดงข้อมูลภาพรวม เช่น

- คะแนนสะสมทั้งหมด
- จำนวนภารกิจที่สำเร็จ
- Daily Streak
- รายการภารกิจ
- ประเภทภารกิจ
- ปุ่มเข้าสู่หน้ารายละเอียดภารกิจ
- ปุ่มเข้าสู่ร้านค้าของรางวัล

### Mission Detail

ใช้สำหรับแสดงรายละเอียดของภารกิจแต่ละรายการ เช่น

- ชื่อภารกิจ
- รายละเอียด
- สถานที่
- ประเภทภารกิจ
- คะแนนที่ได้รับ
- เงื่อนไขในการทำภารกิจ

เมื่อผู้ใช้งานทำภารกิจสำเร็จ ระบบจะเพิ่มคะแนนและบันทึกภารกิจที่ทำสำเร็จแล้ว

### Create Mission

หน้าสำหรับสร้างภารกิจใหม่ โดยสามารถกำหนดข้อมูล เช่น

- ชื่อภารกิจ
- รายละเอียด
- ประเภท
- สถานที่
- คะแนน
- รูปภาพ

### Store

หน้าร้านค้าของรางวัล ผู้ใช้งานสามารถนำคะแนนที่สะสมมาแลกรับของรางวัล

ตัวอย่างของรางวัล

- E-Voucher
- เครื่องดื่ม
- กระเป๋าผ้า
- บัตรชมภาพยนตร์
- คูปองส่วนลด
- Gift Card

## โครงสร้างโปรเจกต์

```text
project/
│
├── app/
│   ├── api/
│   │   ├── missions/
│   │   └── rewards/
│   │
│   ├── chat/
│   ├── explore/
│   ├── leaderboard/
│   ├── missions/
│   │   ├── [id]/
│   │   └── create/
│   │
│   ├── profile/
│   ├── store/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── context/
│   └── AppContext.tsx
│
├── lib/
│   └── db.ts
│
├── public/
│
├── package.json
├── next.config.ts
└── tsconfig.json
```

## การออกแบบ Backend

โปรเจกต์มีการออกแบบ API ผ่าน Next.js API Routes เพื่อจำลองการทำงานของ Backend

ตัวอย่าง Endpoint

```text
GET /api/missions

POST /api/missions

POST /api/missions/[id]/complete

POST /api/rewards/redeem
```

ระบบ Backend มีหน้าที่หลัก เช่น

- จัดการข้อมูลภารกิจ
- เพิ่มภารกิจ
- ตรวจสอบการทำภารกิจสำเร็จ
- เพิ่มคะแนน
- ตรวจสอบคะแนนก่อนแลกรางวัล
- บันทึกการแลกรางวัล

## State Management

ระบบใช้ React Context ผ่าน `AppContext` เพื่อจัดการข้อมูลส่วนกลาง

ข้อมูลหลักที่จัดการ ได้แก่

```text
points
missions
completedMissions
redeemedRewards
isLoading
```

ฟังก์ชันหลัก ได้แก่

```text
completeMission()
redeemReward()
createMission()
```

## เทคโนโลยีที่ใช้

- Next.js
- React
- TypeScript
- Tailwind CSS
- React Context
- Next.js API Routes
- GitHub
- Vercel

## การติดตั้งและใช้งาน

Clone Repository

```bash
git clone https://github.com/palawhats/project.git
```

เข้าไปยังโฟลเดอร์โปรเจกต์

```bash
cd project
```

ติดตั้ง Dependencies

```bash
npm install
```

รันโปรเจกต์

```bash
npm run dev
```

จากนั้นเปิด Browser ไปที่

```text
http://localhost:3000
```

## การ Build

สำหรับ Build โปรเจกต์

```bash
npm run build
```

จากนั้นสามารถรัน Production Server ด้วย

```bash
npm start
```

## จุดประสงค์ของโปรเจกต์

โปรเจกต์นี้จัดทำขึ้นเพื่อศึกษาและวิเคราะห์ฟังก์ชันการทำงานของแอปพลิเคชัน Triggr และนำแนวคิดมาประยุกต์ใช้ในการออกแบบและพัฒนาเว็บแอปพลิเคชันด้วย Next.js

โดยมุ่งเน้นการเรียนรู้ในด้าน

- การวิเคราะห์ระบบ
- การออกแบบ UI/UX
- การออกแบบ Frontend
- การออกแบบ Backend
- การจัดการ State
- การพัฒนา API
- การพัฒนาเว็บแบบ Responsive
- การพัฒนาเว็บด้วย Next.js

## ข้อจำกัดของระบบปัจจุบัน

QuestPulse ในปัจจุบันเป็น Prototype จึงยังมีข้อจำกัดบางส่วน เช่น

- ข้อมูลบางส่วนยังเป็น Mock Data
- ยังไม่มีฐานข้อมูลถาวร
- ยังไม่มีระบบ Login และ Authentication จริง
- Photo Verification ยังเป็นการจำลอง
- QR Code ยังไม่ได้เชื่อมต่อกับกล้องจริงอย่างสมบูรณ์
- GPS Verification ยังสามารถพัฒนาต่อได้
- State บางส่วนอาจถูก Reset เมื่อ Refresh หน้าเว็บไซต์

## แนวทางการพัฒนาต่อ

ในอนาคตสามารถพัฒนาเพิ่มเติมได้ เช่น

- ระบบสมัครสมาชิกและ Login
- Database จริง
- Authentication
- QR Code Scanner
- GPS Verification
- Photo Verification
- Notification
- Leaderboard
- Achievement และ Badge
- ระบบ Admin
- ระบบจัดการ Partner
- ระบบจัดการ Stock ของรางวัล

## สมาชิกกลุ่ม

1. นาย เจษฎารักษ์ วิชาไชย  
   รหัสนักศึกษา 673450207-3

2. นายโสภณวิชญ์ แก้วศิลา  
   รหัสนักศึกษา 673450209-9

3. นายปลวัชร สุทธมา  
   รหัสนักศึกษา 673450473-2

## Source Code

GitHub Repository:

https://github.com/palawhats/project

## Deployment

Vercel:

https://project-yzxza-ten.vercel.app/
