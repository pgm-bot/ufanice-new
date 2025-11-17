#!/bin/bash

BASE_URL="https://ufanance12.com/wp-content/themes/ufanance.com/images"
OUTPUT_DIR="public/images"

# สร้างโฟลเดอร์ถ้ายังไม่มี
mkdir -p "$OUTPUT_DIR"

# รายการรูปภาพที่ต้องดาวน์โหลด
images=(
  "ico-new.png"
  "ico-widget.png"
  "arh.png"
  "bg-footer.png"
  "animate.gif"
  "bg-h.png"
  "ico-line.png"
  "ico-fb.png"
  "ico-line-h.png"
  "ico-phone.png"
  "bg-slide.jpg"
  "bg-slider.png"
  "clouds-front.png"
  "sl1.jpg"
  "bg-slide-phone.png"
  "bg-slot.jpg"
  "bg-p.jpg"
  "bg2.jpg"
  "bg-login.png"
  "bg1.jpg"
)

echo "🚀 เริ่มดาวน์โหลดรูปภาพจาก CSS..."
echo ""

for img in "${images[@]}"; do
  echo "📥 กำลังดาวน์โหลด: $img"
  if curl -f -s -o "$OUTPUT_DIR/$img" "$BASE_URL/$img"; then
    echo "✅ ดาวน์โหลดสำเร็จ: $img"
  else
    echo "❌ ไม่สามารถดาวน์โหลด: $img"
  fi
  echo ""
done

echo "✨ เสร็จสิ้น!"
echo "📁 รูปภาพถูกบันทึกไว้ที่: $OUTPUT_DIR"
