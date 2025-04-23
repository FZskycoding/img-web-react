import React from "react";

const Picture = ({ data }) => {
  const downloadImage = async (url, filename = "download.jpg") => {
    try {
      // 1. 從網路獲取圖片
      const response = await fetch(url, { mode: "cors" });
      // 2. 轉換成二進制大型物件（blob）
      const blob = await response.blob();
      // 3. 建立一個臨時的 URL
      const blobUrl = window.URL.createObjectURL(blob);
      // 4. 建立一個隱藏的下載連結
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      // 5. 模擬點擊下載
      document.body.appendChild(a);
      a.click();
      // 6. 清理：移除連結和臨時 URL
      a.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("圖片下載失敗", err);
    }
  };

  return (
    <div className="picture">
      <p>{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        在此下載圖片：
        <button
          onClick={() => downloadImage(data.src.large, "pexels-image.jpg")}
        >
          按一下
        </button>
      </p>
    </div>
  );
};

export default Picture;
