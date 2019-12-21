var tipuesearch = {"pages": [{'title': 'First', 'text': '放大   回復   Hello   For Loop   Mass_Spring_Damping \n  內建放入的 Dart 原始碼  \n \n About \n \n Dartpad: https://dartpad.dev?id=da3c3adf647b6a3e1990dd9f9edbacc4 \n 程式碼: https://github.com/40823205/cp2019/blob/master/downloads/dart_ex/hello/main.dart \n 倉儲: https://github.com/40823205/cp2019/ \n', 'tags': '', 'url': 'First.html'}, {'title': 'Note', 'text': '\n 系上網路IP:[2001:288:6004:17::17]:3128\n\ngithub可用兩種改版:https,ssh\n\nlocalhost:9443\nlocalhost:8444\n \npassword:admin \n', 'tags': '', 'url': 'Note.html'}, {'title': '期中考', 'text': 'https://youtu.be/1LrJjFsCyjI \n \n', 'tags': '', 'url': '期中考.html'}, {'title': 'Week', 'text': '', 'tags': '', 'url': 'Week.html'}, {'title': 'W5-hello', 'text': 'hello原始碼 : \n void main() {\n    print("哈囉!");\n} \n \n \n', 'tags': '', 'url': 'W5-hello.html'}, {'title': 'W6-for迴圈', 'text': 'for迴圈原始碼: \n int i;\nint sum;\n  \nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n}\n \n \n \n', 'tags': '', 'url': 'W6-for迴圈.html'}, {'title': 'W7', 'text': '阻尼係數=1 \n \n 阻尼係數=0 \n \n', 'tags': '', 'url': 'W7.html'}, {'title': 'W8', 'text': '放大 \xa0 回復 \xa0 Hello \xa0 For Loop \xa0 Mass_Spring_Damping \n \n \n', 'tags': '', 'url': 'W8.html'}, {'title': 'W10-小組', 'text': '小組倉儲: https://github.com/s40523111/cp2019bg5 \n cmsimde網頁:\xa0 https://s40523111.github.io/cp2019bg5/content/index.html \n \n', 'tags': '', 'url': 'W10-小組.html'}, {'title': 'W11', 'text': '純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    temperature \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n', 'tags': '', 'url': 'W11.html'}, {'title': 'W12', 'text': '1. 新增 " 攝氏與華氏自動判別" 的按鈕 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping    Temperature   CF_change \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter1   Flutter2   Flutter3 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n', 'tags': '', 'url': 'W12.html'}, {'title': 'W13', 'text': '任務說明 : 沿用 W11 ~ W12 的方式，網頁中在Htmlt程式新增一個 Temp2 的按鈕，並且在近端新增 dart檔、yaml檔、html檔 和 style檔， 提交推送使網頁能成功顯示， 不管輸入的溫度是攝氏或者華氏，可以轉換成 攝氏或者華氏 ，所有動作完成之後，錄製影片說明操作步驟。 \n 小提醒 : 記得要確認好檔案所放的路徑位置，以及網頁程式碼有沒有打錯，如果網頁程式碼不確認哪裡有錯誤，個人建議刪掉重新打，增加印象。 \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Temp1 \n Html 程式 \n Temp2    內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n', 'tags': '', 'url': 'W13.html'}, {'title': 'W14-國旗', 'text': '\n \n \n import \'dart:html\';\nimport \'dart:math\' as Math;\n  \nCanvasElement canvas;\nCanvasRenderingContext2D ctx;\nint flag_w = 300;\nint flag_h = 200;\nnum circle_x = flag_w / 4;\nnum circle_y = flag_h / 4;\n  \nvoid main() {\n  canvas = querySelector(\'#canvas\');\n  ctx = canvas.getContext(\'2d\');\n  \n  drawROC(ctx);\n  querySelector("#roc").onClick.listen((e) => drawROC(ctx));\n  querySelector("#usa").onClick.listen((e) => drawUSA(ctx));\n  querySelector("#button").onClick.listen((e) => clearCanvas());\n}\n  \nvoid drawUSA(ctx){\n  // 請畫出美國國旗\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.font = "30px Arial";\n  ctx.strokeStyle = \'rgb(255, 0, 0)\';\n  ctx.strokeText("請畫出美國國旗", flag_w/6, flag_w/4);\n}\n  \nvoid drawROC(ctx){\n  // 先畫滿地紅\n  ctx.clearRect(0, 0, flag_w, flag_h);\n  ctx.fillStyle = \'rgb(255, 0, 0)\';\n  ctx.fillRect(0, 0, flag_w, flag_h);\n  // 再畫青天\n  ctx.fillStyle = \'rgb(0, 0, 150)\';\n  ctx.fillRect(0, 0, flag_w / 2, flag_h / 2);\n  // 畫十二道光芒白日\n  ctx.beginPath();\n  num star_radius = flag_w / 8;\n  num angle = 0;\n  for (int i = 0; i < 25; i++) {\n    angle += 5 * Math.pi * 2 / 12;\n    num toX = circle_x + Math.cos(angle) * star_radius;\n    num toY = circle_y + Math.sin(angle) * star_radius;\n    // 只有 i 為 0 時移動到 toX, toY, 其餘都進行 lineTo\n    if (i != 0)\n      ctx.lineTo(toX, toY);\n    else\n      ctx.moveTo(toX, toY);\n  }\n  ctx.closePath();\n  // 將填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n  // 白日:藍圈\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w * 17 / 240, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為藍色\n  ctx.fillStyle = \'rgb(0, 0, 149)\';\n  ctx.fill();\n  // 白日:白心\n  ctx.beginPath();\n  ctx.arc(circle_x, circle_y, flag_w / 16, 0, Math.pi * 2, true);\n  ctx.closePath();\n  // 填色設為白色\n  ctx.fillStyle = \'#fff\';\n  ctx.fill();\n}\n  \nvoid clearCanvas(){\n  ctx.clearRect(0, 0, flag_w, flag_h);\n} \n \n', 'tags': '', 'url': 'W14-國旗.html'}, {'title': 'W15', 'text': '任務一 : 建立亂數分組的 Html 按鈕 \n Html 程式 \n 亂數分組    內建放入的 Dart 原始碼  \n 放大   回復 \n \n \n 任務二 : 建立表單式的 亂數分組按鈕 \n \n   ###############################  \n 亂數分組: \n 學員名單 URL:   每組人數:      \n \n  ##############################  \n 設一乙亂數分組 \n w14 JS國旗 <<  Previous \n  footer  \n \n \n  Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.   Copyright ©\n \nAll rights reserved | This template is made with   by  Colorlib    Link back to Colorlib can\'t be removed. Template is licensed under CC BY 3.0.  \n \n \n  for footer  \n \n  for site wrap  \n \n  <script src="../cmsimde/static/chimper/js/jquery-3.3.1.min.js"></script>  \n \n \n \n \n \n \n \n \n \n \n \n            <script src="../cmsimde/static/chimper/js/typed.js"></script>\n                    <script>\n                    var typed = new Typed(\'.typed-words\', {\n                    strings: ["Web Apps"," WordPress"," Mobile Apps"],\n                    typeSpeed: 80,\n                    backSpeed: 80,\n                    backDelay: 4000,\n                    startDelay: 1000,\n                    loop: true,\n                    showCursor: true\n                    });\n                    </script>\n             \n', 'tags': '', 'url': 'W15.html'}]};