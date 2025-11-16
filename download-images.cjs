const https = require('https');
const fs = require('fs');
const path = require('path');

// สร้างโฟลเดอร์ public/images ถ้ายังไม่มี
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
    console.log('✅ สร้างโฟลเดอร์ public/images แล้ว');
}

// รายการรูปภาพที่ต้องดาวน์โหลด
const images = [
    {
        url: 'https://ufanance12.com/wp-content/uploads/2024/10/05.jpg',
        filename: 'affiliate-banner.jpg',
        description: 'Banner แนะนำเพื่อน'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/3670/3670127.png',
        filename: 'line-icon.png',
        description: 'LINE Icon'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/2111/2111728.png',
        filename: 'messenger-icon.png',
        description: 'Messenger Icon'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/733/733547.png',
        filename: 'facebook-icon.png',
        description: 'Facebook Icon'
    },
    {
        url: 'https://ufanance12.com/wp-content/uploads/2023/06/11.jpg',
        filename: 'monthly-reward-affiliate.jpg',
        description: 'รางวัลประจำเดือน - แนะนำเพื่อน'
    },
    {
        url: 'https://ufanance12.com/wp-content/uploads/2023/06/10.jpg',
        filename: 'monthly-reward-deposit.jpg',
        description: 'รางวัลประจำเดือน - ฝากเงิน'
    },
    {
        url: 'https://ufanance12.com/ev1010.png',
        filename: 'event-gaojing.png',
        description: 'กิจกรรมเกาจิ้ง'
    },
    {
        url: 'https://ufanance12.com/wp-content/uploads/2024/10/04.jpg',
        filename: 'card-open-banner.jpg',
        description: 'เปิดไพ่เสี่ยงโชค'
    },
    {
        url: 'https://ufanance12.com/wp-content/uploads/2024/10/messageImage_1729138126887.jpg',
        filename: 'spin-wheel-banner.jpg',
        description: 'หมุนกงล้อเสี่ยงโชค'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/2830/2830284.png',
        filename: 'pay-bank.png',
        description: 'ไอคอนโอนผ่านธนาคาร'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/4108/4108042.png',
        filename: 'pay-gateway.png',
        description: 'ไอคอน QR Code/Gateway'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/12114/12114279.png',
        filename: 'kbank-logo.png',
        description: 'โลโก้ธนาคารกสิกรไทย'
    },
    {
        url: 'https://cdn-icons-png.flaticon.com/512/471/471662.png',
        filename: 'button.png',
        description: 'ปุ่มข้อมูล'
    }
];

// ฟังก์ชันดาวน์โหลดรูปภาพ
function downloadImage(url, filepath, description) {
    return new Promise((resolve, reject) => {
        console.log(`📥 กำลังดาวน์โหลด: ${description}`);
        console.log(`   URL: ${url}`);

        https.get(url, (response) => {
            if (response.statusCode !== 200) {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
                return;
            }

            const fileStream = fs.createWriteStream(filepath);
            response.pipe(fileStream);

            fileStream.on('finish', () => {
                fileStream.close();
                console.log(`✅ ดาวน์โหลดสำเร็จ: ${path.basename(filepath)}\n`);
                resolve();
            });

            fileStream.on('error', (err) => {
                fs.unlink(filepath, () => {}); // ลบไฟล์ถ้ามี error
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// ดาวน์โหลดรูปภาพทั้งหมด
async function downloadAll() {
    console.log('🚀 เริ่มดาวน์โหลดรูปภาพ...\n');

    for (const image of images) {
        const filepath = path.join(imagesDir, image.filename);

        try {
            await downloadImage(image.url, filepath, image.description);
        } catch (error) {
            console.error(`❌ ดาวน์โหลดไม่สำเร็จ: ${image.description}`);
            console.error(`   Error: ${error.message}\n`);
        }
    }

    console.log('✨ เสร็จสิ้น!');
    console.log(`📁 รูปภาพถูกบันทึกไว้ที่: ${imagesDir}`);
}

// รันโปรแกรม
downloadAll().catch(console.error);
