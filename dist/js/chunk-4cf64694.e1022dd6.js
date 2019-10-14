(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4cf64694"],{"37ff":function(n,t,e){"use strict";var i=e("e133"),a=e.n(i);a.a},"3f01":function(n,t,e){"use strict";var i='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>半透明背景</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      color: white;\n      height:200px;\n      width: 200px;\n      background-color: #9254de;\n      border: 10px solid rgba(146,84,222,0.44);\n    }\n    .box-special{\n      background-clip: content-box;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n\t<div class="box">\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n\t</div>\n\t<div class="box box-special">\n\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n\t</div>\n</div>\n</body>\n</html>\n\n',a='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>多重边框</title>\n  <style>\n    .container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(2, 300px);\n  \t\tgrid-template-rows: repeat(2, 300px);\n  \t\tplace-content: start center;\n  \t\tjustify-items: center;\n  \t\talign-items: center;\n  \t}\n  \t.box{\n      width: 200px;\n      height: 200px;\n      border: 10px solid #9254de;\n      cursor: pointer;\n      color: white;\n      /*border-radius: 10px;*/\n  \t}\n    .box-shadow {\n      box-shadow: 0 0 0 10px #b37feb,\n                  0 0 0 20px #d3adf7,\n                  0 0 0 30px #efdbff;\n    }\n\n    .box-shadow-insert {\n      box-shadow: 0 0 0 10px inset #b37feb,\n                  0 0 0 20px inset #d3adf7,\n                  0 0 0 35px inset #efdbff;\n    }\n    .outline-out{\n      outline: 10px solid #b37feb;\n    }\n    .outline-insert{\n      outline: 10px dashed #b37feb;\n      outline-offset: -20px;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n\x3c!--\n使用box-shadow模拟边框需要注意：\n1.box-shadow不占空间，需要使用外边距或者内边距来模拟所占的空间\n2.如果做一个按钮，需要鼠标移入的效果，需要考虑insert\n--\x3e\n<div class="box box-shadow">\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n</div>\n<div class="box box-shadow-insert">\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n</div>\n \x3c!--\n  outline的优点是边框可以设置虚线，box-shadow就不能满足\n  outline只支持双层边框的场景，因为outline不支持逗号隔开\n  如果是在外层加边框，并且有圆角的情况，outline也是不支持\n  --\x3e\n  <div class="box outline-out">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n</div>\n  <div class="box outline-insert">\n  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor doloremque, eos explicabo hic\n</div>\n</div>\n</body>\n</html>\n\n',o='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>灵活的背景定位</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      padding: 20px;\n      width: 200px;\n      height: 200px;\n      background-color: #9254de;\n      border: 10px solid rgba(146,84,222,0.44);\n      background-image: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/img.jpg");\n      background-size: 50px 50px;\n      background-repeat: no-repeat;\n      box-sizing: border-box;\n      background-clip: padding-box;\n    }\n    .extend{\n      background-position: right 20px bottom 20px;\n    }\n    .percent{\n      background-position: calc(100% - 20px) calc(100% - 20px);\n    }\n    .origin{\n      background-position: right bottom;\n      background-origin: content-box;\n    }\n  </style>\n</head>\n<body>\n\t<div class="container">\n\t\t\x3c!--\n  background-position的定位是根据左、上两边进行定位的，如果整个盒子的大小固定，没有影响，但是如果盒子不固定，但是背景图片需要固定在右下角20px的地方，需要使用右、下定位，针对任意边定位一些先进的浏览器可以支持\n  --\x3e\n  <div class="box extend"></div>\n  \x3c!--\n    针对上面的不足，可以使用calc进行优化\n  --\x3e\n  <div class="box percent"></div>\n  \x3c!--很多场景下背景图片和内边距同宽，就可以使用position-origin,这样，内边距改变的时候也不用修改多处数据--\x3e\n  <div class="box origin"></div>\n</div>\n</body>\n</html>\n\n',d='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>边框内圆角</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tplace-content: start center;\n  \t\tjustify-items: center;\n  \t\talign-items: center;\n  \t}\n    .box{\n      height: 200px;\n      width: 200px;\n      background: #9254de;\n      border-radius: 10px;\n      outline: 10px solid #b37feb;\n      box-shadow: 0 0 0 10px #b37feb;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n\t\x3c!--实现边框内圆角，使用两个元素很容易实现，但是如果想用一个元素来实现，可以使用outline+box-shadow来实现--\x3e\n<div class="box"></div>\n</div>\n</body>\n</html>\n\n',r='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>条纹背景</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n    }\n    .row{\n      /*如果把第二个色标的位置值设置为 0，那它的位置就总是会被浏览器调整为前一个色标的位置值*/\n      background: linear-gradient(#9254de 33.3%, #b37feb 0, #b37feb 66.6%, #d3adf7 0);\n      background-size: 100% 30px;\n    }\n    .vertical{\n      background: linear-gradient(to right,#9254de 33.3%, #b37feb 0, #b37feb 66.6%, #d3adf7 0);\n      background-size: 30px 100%;\n    }\n    /*想做成斜条纹，发现这样是行不通的，这样做的话会让某一个小块旋转45度，需要将将各个小块拼合起来*/\n    .oblique{\n      background: linear-gradient(45deg,#9254de 50%, #b37feb 0);\n      background-size: 30px 30px;\n    }\n    /*这样做的话，条纹会变细，需要使用勾股定理计算，很麻烦，每当角度变化的时候都需要重新计算background-size*/\n    .oblique2{\n      background: linear-gradient(45deg,#9254de 25%, #b37feb 0, #b37feb 50%, #9254de 0, #9254de 75%, #b37feb 0);\n      background-size: 30px 30px;\n    }\n    /*这样做的话，条纹可以很方便的展示我们需要的宽度，并且角度可以任意定义*/\n    .oblique3{\n      background: repeating-linear-gradient(60deg,#9254de,#9254de 15px, #b37feb 0, #b37feb 30px);\n    }\n     /*有的时候条纹图案并不是由差异极大的几种颜色组成的，这些颜色往往属于同一色系，只是在明度方面有着轻微的差异，\n     \t 这个时候可以把最深的颜色指定为背景色，同时把半透明白色的条纹叠加在背景色之上来 得到浅色条纹，\n     \t 这样的优点在于不用为每种条纹单独指定颜色\n     */\n     .oblique4{\n     \t\tbackground: #9254de;\n      \tbackground-image: repeating-linear-gradient(60deg,transparent,transparent 15px, hsla(0,10%,100%,0.4) 0, hsla(0,10%,100%,0.4) 30px);\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n<div class="box row"></div>\n<div class="box vertical"></div>\n<div class="box oblique"></div>\n<div class="box oblique2"></div>\n<div class="box oblique3"></div>\n<div class="box oblique4"></div>\n</div>\n</body>\n</html>\n\n',s='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>复杂的背景图案</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n    }\n    /*把多个渐变图案组合起来，制作桌布效果*/\n    .box1{\n    \tbackground: #f9f0ff;\n    \tbackground-image: linear-gradient(90deg,rgba(146,84,222,0.5) 50%, transparent 0),\n    \t\t\t\t\t\t\t\t\t\tlinear-gradient(rgba(146,84,222,0.5) 50%, transparent 0);\n    \tbackground-size: 30px 30px;\n    }\n    /*网格中每个格子的大小可以调整，而网格线条的粗细同时保持固定,这个时候就使用长度而不是百分比*/\n    .box2{\n    \tbackground: #9254de;\n    \tbackground-image: linear-gradient(90deg,#f9f0ff 1px, transparent 0),\n    \t\t\t\t\t\t\t\t\t\tlinear-gradient(#f9f0ff 1px, transparent 0);\n    \tbackground-size: 30px 30px;\n    }\n    .box3{\n    \tbackground: #9254de;\n    \tbackground-image:\n\t    linear-gradient(white 2px, transparent 0),\n\t    linear-gradient(90deg, white 2px, transparent 0),\n\t    linear-gradient(rgba(249,240,255,0.3) 1px,transparent 0),\n\t    linear-gradient(90deg, rgba(249,240,255,0.3) 1px,transparent 0);\n\t\t\tbackground-size: 75px 75px, 75px 75px,\n\t                 \t\t 15px 15px, 15px 15px;\n    }\n    /*波点*/\n    .box4{\n    \tbackground: #f9f0ff;\n    \tbackground-image: radial-gradient(#9254de 30%, transparent 0);\n    \tbackground-size: 30px 30px;\n    }\n    /*更加逼真的波点*/\n     .box5{\n\t    background: #f9f0ff;\n\t    background-image: radial-gradient(#9254de 30%, transparent 0), radial-gradient(#9254de 30%, transparent 0);\n\t    background-size: 30px 30px;\n\t    background-position: 0 0, 15px 15px;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n<div class="box box1"></div>\n<div class="box box2"></div>\n<div class="box box3"></div>\n<div class="box box4"></div>\n<div class="box box5"></div>\n</div>\n</body>\n</html>\n\n',l='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>伪随机背景</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 500px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 450px;\n      height: 200px;\n    }\n    /*很规律的排列*/\n    .box1{\n    \tbackground: linear-gradient(to right,#9254de 15%, #b37feb 0, #b37feb 40%, #d3adf7 0, #d3adf7 60%, #efdbff 0);\n      background-size: 80px 100%;\n    }\n    /*随机排列,这个已经实现了基本的随机排列，但是240px会重复显示，还有更为复杂的随机排列，自行查阅*/\n    .box2{\n    \tbackground: #efdbff;\n    \tbackground-image:\n    \t\tlinear-gradient(90deg, #9254de 10px, transparent 0),\n    \t\tlinear-gradient(90deg, #b37feb 20px, transparent 0),\n    \t\tlinear-gradient(90deg, #d3adf7 20px, transparent 0);\n      background-size: 80px 100%, 60px 100%, 40px 100%;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n<div class="box box1"></div>\n<div class="box box2"></div>\n</div>\n</body>\n</html>\n\n',c='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>连续的图像边框</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n      padding: 10px;\n    \tborder: 10px solid transparent;\n    }\n    /*原背景图片*/\n    .box1{\n    \tbackground: url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg");\n      background-size: cover;\n       background-origin: border-box;\n    }\n    .box2{\n    \tbackground: linear-gradient(white,white), url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg");\n      background-size: cover;\n      background-clip: padding-box, border-box;\n      /*background-origin的默认值为padding-box*/\n      background-origin: border-box;\n    }\n    /*这个写法是box2的简写*/\n    .box3{\n    \tbackground: linear-gradient(white,white) padding-box, url("https://liujuanjuan-resource.oss-cn-beijing.aliyuncs.com/css-secret-files/stone.jpg") border-box 0/cover;\n    }\n    /*实现老式信封的效果*/\n    .box4{\n    \tbackground: linear-gradient(white, white) padding-box,\n            repeating-linear-gradient(\n            -45deg,\n            red 0,\n            red 12.5%,\n            transparent 0,\n            transparent 25%,\n            #58a 0,\n            #58a 37.5%,\n            transparent 0,\n            transparent 50%) 0 / 80px 80px;\n    }\n    /*蚂蚁行军边框是一种虚线边框，看起在不断转动，就好像排队前进的蚂蚁一样*/\n    @keyframes ants {\n    \tto {\n    \t\tbackground-position: 100%\n    \t}\n    }\n    .box5{\n\t\t\tborder: 1px solid transparent;\n\t\t\tbackground:\n        linear-gradient(white, white) padding-box,\n        repeating-linear-gradient(-45deg,\n          black 0, black 25%, white 0, white 50%\n        ) 0 / 10px 10px;\n\t\t\tanimation: ants 12s linear infinite;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n<div class="box box1"></div>\n<div class="box box2"></div>\n<div class="box box3"></div>\n<div class="box box4"></div>\n<div class="box box5"></div>\n</div>\n</body>\n</html>\n\n',b='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>自适应的椭圆</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 150px;\n      background: #9254de;\n    }\n    .box1{\n      border-radius: 50% / 50%;\n    }\n    .left{\n      border-radius: 100% 0 0 100% / 50%;\n    }\n    .right{\n      border-radius: 0 100% 100% 0 / 50%;\n    }\n    .top{\n      border-radius: 50% / 100% 100% 0 0;\n    }\n    .down{\n      border-radius: 50% / 0 0 100% 100%;\n    }\n    .left-top{\n      /*border-radius: 100% 0 0 0 / 100% 0 0 0;*/\n      /*这是上面的简写*/\n      border-radius: 100% 0 0 0\n    }\n    .right-top{\n      border-radius: 0 100% 0 0\n    }\n    .left-down{\n      border-radius: 0 0 0 100%\n    }\n    .right-down{\n      border-radius: 0 0 100% 0\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n  <div class="box box1"></div>\n  <div class="box left"></div>\n  <div class="box right"></div>\n  <div class="box top"></div>\n  <div class="box down"></div>\n  <div class="box left-top"></div>\n  <div class="box right-top"></div>\n  <div class="box left-down"></div>\n  <div class="box right-down"></div>\n</div>\n</body>\n</html>\n\n',p='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>平行四边形</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 500px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 250px;\n      height: 200px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: white;\n      font-size: 20px;\n      position:relative;\n    }\n    .box1{\n      background: #9254de;\n      transform: skewX(-45deg);\n    }\n    .box2::before{\n      position:absolute;\n      content: \' \';\n      left: 0;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      z-index: -1;\n      background: #9254de;\n      transform: skewX(-45deg);\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n  <div class="box box1">平行四边形</div>\n  <div class="box box2">平行四边形</div>\n</div>\n</body>\n</html>\n\n',x='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>菱形图片</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n  <div class="box box1"></div>\n</div>\n</body>\n</html>\n\n',g='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>切角效果</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n  <div class="box box1"></div>\n</div>\n</body>\n</html>\n\n',u='\n<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <title>梯形标签页</title>\n  <style>\n  \t.container{\n  \t\tdisplay: grid;\n  \t\tgrid-template-columns: repeat(auto-fit, 300px);\n  \t\tjustify-content: center;\n  \t\tjustify-items: center;\n  \t\tgrid-row-gap: 40px;\n  \t}\n    .box{\n      width: 200px;\n      height: 200px;\n    }\n  </style>\n</head>\n<body>\n<div class="container">\n  <div class="box box1"></div>\n</div>\n</body>\n</html>\n\n';t["a"]={1:{title:"半透明背景",html:i},2:{title:"多重边框",html:a},3:{title:"灵活的背景定位",html:o},4:{title:"边框内圆角",html:d},5:{title:"条纹背景",html:r},6:{title:"复杂的背景图案",html:s},7:{title:"伪随机背景",html:l},8:{title:"连续的图像边框",html:c},9:{title:"自适应的椭圆",html:b},10:{title:"平行四边形",html:p},11:{title:"菱形图片",html:x},12:{title:"切角效果",html:g},13:{title:"梯形标签页",html:u}}},e00c:function(n,t,e){"use strict";e.r(t);var i=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ul",{staticClass:"container"},n._l(n.examples,(function(t,i){return e("li",{key:"example-"+i,on:{click:function(t){return n.lookExample(i)}}},[n._v("\n    "+n._s(t.title)+"\n  ")])})),0)},a=[],o=e("3f01"),d={name:"list",data:function(){return{examples:o["a"]}},methods:{lookExample:function(n){this.$router.push("/example/".concat(n))}}},r=d,s=(e("37ff"),e("2877")),l=Object(s["a"])(r,i,a,!1,null,"093e05d8",null);t["default"]=l.exports},e133:function(n,t,e){}}]);
//# sourceMappingURL=chunk-4cf64694.e1022dd6.js.map