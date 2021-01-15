# 1. 데이터를 json파일로 만들기
```js
[
  {
    "group": "카트친구들",
    "members": [
      {
        "id": 0,
        "name": "배찌(Bazzi)",
        "img1": "bazzi.png",
        "img2": "bazzi_lego.png",
        "strength": "아이템전",
        "intro": "게으르고 잠도 많은 장난꾸러.항상 사고를 치고 다닌다."
      },
      {
        "id": 1,
        "name": "다오(Dao)",
        "img1": "dao.png",
        "img2": "dao_lego.png",
        "strength": "Normal",
        "intro": "정의롭고 착한 의리남. 불의를 보면 못 찹는다."
	  },

```

# 2. json파일에서 데이터 가져오기 

``` js

function loadData(url,index, imagePath){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            parseXML(JSON.parse(this.responseText), index, imagePath);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

```
