#!/bin/bash

OUTPUT_DIR="public/images"
mkdir -p "$OUTPUT_DIR"

# รายการรูปภาพที่ยังขาดและ URLs ที่จะลอง
declare -A images
images["bg-footer.png"]="https://ufanance12.com/images/bg-footer.png https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-footer.png"
images["bg-h.png"]="https://ufanance12.com/images/bg-h.png https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-h.png"
images["bg-slide.jpg"]="https://ufanance12.com/images/bg-slide.jpg https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-slide.jpg https://ufanance12.com/wp-content/uploads/2023/06/bg-slide.jpg"
images["bg-slider.png"]="https://ufanance12.com/images/bg-slider.png https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-slider.png"
images["sl1.jpg"]="https://ufanance12.com/images/sl1.jpg https://ufanance12.com/wp-content/themes/ufanance.com/images/sl1.jpg https://ufanance12.com/wp-content/uploads/2023/06/sl1.jpg"
images["bg-slide-phone.png"]="https://ufanance12.com/images/bg-slide-phone.png https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-slide-phone.png"
images["bg-slot.jpg"]="https://ufanance12.com/images/bg-slot.jpg https://ufanance12.com/wp-content/themes/ufanance.com/images/bg-slot.jpg https://ufanance12.com/wp-content/uploads/2023/06/bg-slot.jpg"

echo "🚀 ลองดาวน์โหลดรูปภาพที่ขาดหาย..."
echo ""

for img in "${!images[@]}"; do
  echo "📥 กำลังลองดาวน์โหลด: $img"
  found=false
  
  for url in ${images[$img]}; do
    echo "   ลอง: $url"
    if curl -f -s -o "$OUTPUT_DIR/$img" "$url"; then
      echo "   ✅ สำเร็จ!"
      found=true
      break
    fi
  done
  
  if [ "$found" = false ]; then
    echo "   ❌ ไม่พบไฟล์จากทุก URL"
  fi
  echo ""
done

echo "✨ เสร็จสิ้น!"
