export default `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>边框内圆角</title>
  <style>
    .box{
      height: 200px;
      width: 200px;
      margin: 50px auto;
      background: #878877;
      border-radius: 10px;
      outline: 10px solid saddlebrown;
      box-shadow: 0 0 0 10px saddlebrown;
    }
  </style>
</head>
<body>
<!--实现边框内圆角，使用两个元素很容易实现，但是如果想用一个元素来实现，可以使用outline+box-shadow来实现-->
<div class="box"></div>
</body>
</html>

`
