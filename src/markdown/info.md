# 主題：臺灣旅遊景點導覽維護功能 Taiwan Tourism Attraction

### Git 專案分支名稱：vue-training-step1

### API 來源資訊
- <a href="https://ptx.transportdata.tw/MOTC?urls.primaryName=觀光V2#/Tourism/TourismApi_ScenicSpot_2240" target="_blank">景點說明網址</a>
  介接網址：https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON
- <a href="https://ptx.transportdata.tw/MOTC?urls.primaryName=觀光V2#/Tourism/TourismApi_Restaurant_2242" target="_blank">餐飲說明網址</a>
  介接網址：https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON
- <a href="https://ptx.transportdata.tw/MOTC?urls.primaryName=觀光V2#/Tourism/TourismApi_Hotel_2244" target="_blank">旅宿說明網址</a>
  介接網址：https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$format=JSON

### 城市 JSON 資料提供
```JSON
[
  {
    "CityID": "A",
    "CityName": "臺北市",
    "CityCode": "TPE",
    "City": "Taipei",
    "CountyID": "A",
    "Version": "21.08.1"
  },
  {
    "CityID": "B",
    "CityName": "臺中市",
    "CityCode": "TXG",
    "City": "Taichung",
    "CountyID": "B",
    "Version": "21.08.1"
  },
  {
    "CityID": "C",
    "CityName": "基隆市",
    "CityCode": "KEE",
    "City": "Keelung",
    "CountyID": "C",
    "Version": "21.08.1"
  },
  {
    "CityID": "D",
    "CityName": "臺南市",
    "CityCode": "TNN",
    "City": "Tainan",
    "CountyID": "D",
    "Version": "21.08.1"
  },
  {
    "CityID": "E",
    "CityName": "高雄市",
    "CityCode": "KHH",
    "City": "Kaohsiung",
    "CountyID": "E",
    "Version": "21.08.1"
  },
  {
    "CityID": "F",
    "CityName": "新北市",
    "CityCode": "NWT",
    "City": "NewTaipei",
    "CountyID": "F",
    "Version": "21.08.1"
  },
  {
    "CityID": "G",
    "CityName": "宜蘭縣",
    "CityCode": "ILA",
    "City": "YilanCounty",
    "CountyID": "G",
    "Version": "21.08.1"
  },
  {
    "CityID": "H",
    "CityName": "桃園市",
    "CityCode": "TAO",
    "City": "Taoyuan",
    "CountyID": "H",
    "Version": "21.08.1"
  },
  {
    "CityID": "I",
    "CityName": "嘉義市",
    "CityCode": "CYI",
    "City": "Chiayi",
    "CountyID": "I",
    "Version": "21.08.1"
  },
  {
    "CityID": "J",
    "CityName": "新竹縣",
    "CityCode": "HSQ",
    "City": "HsinchuCounty",
    "CountyID": "J",
    "Version": "21.08.1"
  },
  {
    "CityID": "K",
    "CityName": "苗栗縣",
    "CityCode": "MIA",
    "City": "MiaoliCounty",
    "CountyID": "K",
    "Version": "21.08.1"
  },
  {
    "CityID": "M",
    "CityName": "南投縣",
    "CityCode": "NAN",
    "City": "NantouCounty",
    "CountyID": "M",
    "Version": "21.08.1"
  },
  {
    "CityID": "N",
    "CityName": "彰化縣",
    "CityCode": "CHA",
    "City": "ChanghuaCounty",
    "CountyID": "N",
    "Version": "21.08.1"
  },
  {
    "CityID": "O",
    "CityName": "新竹市",
    "CityCode": "HSZ",
    "City": "Hsinchu",
    "CountyID": "O",
    "Version": "21.08.1"
  },
  {
    "CityID": "P",
    "CityName": "雲林縣",
    "CityCode": "YUN",
    "City": "YunlinCounty",
    "CountyID": "P",
    "Version": "21.08.1"
  },
  {
    "CityID": "Q",
    "CityName": "嘉義縣",
    "CityCode": "CYQ",
    "City": "ChiayiCounty",
    "CountyID": "Q",
    "Version": "21.08.1"
  },
  {
    "CityID": "T",
    "CityName": "屏東縣",
    "CityCode": "PIF",
    "City": "PingtungCounty",
    "CountyID": "T",
    "Version": "21.08.1"
  },
  {
    "CityID": "U",
    "CityName": "花蓮縣",
    "CityCode": "HUA",
    "City": "HualienCounty",
    "CountyID": "U",
    "Version": "21.08.1"
  },
  {
    "CityID": "V",
    "CityName": "臺東縣",
    "CityCode": "TTT",
    "City": "TaitungCounty",
    "CountyID": "V",
    "Version": "21.08.1"
  },
  {
    "CityID": "W",
    "CityName": "金門縣",
    "CityCode": "KIN",
    "City": "KinmenCounty",
    "CountyID": "W",
    "Version": "21.08.1"
  },
  {
    "CityID": "X",
    "CityName": "澎湖縣",
    "CityCode": "PEN",
    "City": "PenghuCounty",
    "CountyID": "X",
    "Version": "21.08.1"
  },
  {
    "CityID": "Z",
    "CityName": "連江縣",
    "CityCode": "LIE",
    "City": "LienchiangCounty",
    "CountyID": "Z",
    "Version": "21.08.1"
  }
]
```
 

