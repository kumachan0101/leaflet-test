let lat = 36.22916737479868; // 緯度
let lng= 137.61958330496321; // 経度
let zoom = 15; // ズームレベル

let map = L.map("map"); // 地図の生成
map.setView([lat, lng], zoom); // 緯度経度、ズームレベルを設定する

// タイルレイヤを生成し、地図に追加する
// 今回はOpenStreetMapを表示する
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
  {
    // 著作権の表示
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

// アイコンを表示する
// lat, lngの順で指定する
var marker = L.marker([36.22916737479868, 137.61958330496321]).addTo(map);
// ポップアップを表示する
marker.bindPopup("大正池");
