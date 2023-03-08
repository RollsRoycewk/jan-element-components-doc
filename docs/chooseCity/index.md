# 城市选择

提供按城市和省份选择中国所有的城市,支持搜索和跳转

```js
import chooseCity from "jan-element-components/chooseCity";

app.use(chooseCity);
```

## 基本用法

<br>
 <div style="padding:1em;margin:1em;border:1px solid #eee">
    <m-choose-city></m-choose-city>
 </div>

 <style  scoped>
.result {
  display: flex;
  width: fit-content;
  align-items: center;
  cursor: pointer;
}

.rotate {
  transform: rotate(180deg);
}

svg {
  width: 1em;
  height: 1em;
  position: relative;
  top: 2px;
  margin-left: 4px;
  transition: all 0.025s linear;
}

.container {
  padding: 6px;
}

.city,
.province {
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  margin-bottom: 10px;

}

.city,
.province .item {
    padding: 3px 6px;
    margin-right: 8px;
    border: 1px solid #eee;
    margin-bottom: 8px;
    cursor: pointer;
  }

.city-name,
.province-name {
  display: flex;
  flex-wrap: wrap;
  align-content: center;


}

  .city-name-item,
  .province-name-item {
    margin-right: 6px;
    margin-bottom: 6px;
    cursor: pointer;
  }
</style>

## 示例代码

```html
<m-choose-city></m-choose-city>
```

## Props

| 属性           | 说明             | 参数                 |
| :------------- | ---------------- | -------------------- |
| changeCity     | 按城市选择时触发 | val: City,城市信息   |
| changeProvince | 按省份选择时触发 | val: string,城市名字 |

## City 数据格式

| key   | 说明     | 类型   |
| :---- | -------- | ------ |
| id    | 城市编码 | number |
| spell | 城市拼音 | string |
| name  | 城市名称 | string |
