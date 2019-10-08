export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>多重边框-box-shadow</title>
  <style>
    .box {
      margin: 50px auto;
      width: 100px;
      height: 100px;
      border: 5px solid chartreuse;
      box-shadow: 0 0 0 5px #ff0000,
                  0 0 0 10px #564536,
                  0 0 0 15px #878877;
      cursor: pointer;
      border-radius: 10px;
    }

    .box-insert {
      margin: 50px auto;
      width: 140px;
      height: 140px;
      border: 5px solid chartreuse;
      box-shadow: 0 0 0 5px inset #ff0000,
                  0 0 0 10px inset #564536,
                  0 0 0 15px inset #878877;
      cursor: pointer;
      padding: 15px 15px;
      box-sizing: border-box;
      border-radius: 10px;
    }
  </style>
</head>
<body>
<!--
使用box-shadow模拟边框需要注意：
1.box-shadow不占空间，需要使用外边距或者内边距来模拟所占的空间
2.如果做一个按钮，需要鼠标移入的效果，需要考虑insert
-->
<div class="box">你好</div>
<div class="box-insert">你好</div>
</body>
</html>

`
