function func1() {
    let training = ['選択しない', '腕', '肩', '胸', '腹筋', '背中', '脚'];
    let yest = document.getElementById("yest").value;
    if (yest == '選択しない') {
      training.splice(0, 1);
      console.log(yest);
      console.log(training)
    }
    else{
      training.splice(0, 1);
      training.splice(training.indexOf(yest), 1);
      console.log(yest);
      console.log(training)
    }
    let r = Math.floor(Math.random() * training.length);
    document.getElementById("button").innerHTML = training[r];
    if (training[r] == '腕') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Arm.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Arm\腕トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
    if (training[r] == '肩') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Shoulder.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Arm\腕トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
    if (training[r] == '胸') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Chest.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Chest\胸トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
    if (training[r] == '腹筋') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Abs.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Abs\腹筋トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
    if (training[r] == '背中') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Back.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Back\背筋トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
    if (training[r] == '脚') {
      document.getElementById("output").innerHTML = '<a class="btn btn-block bgc-C tec-B" href="../Training/Leg.html" role="button" id="btn" style="height: 38px;"></a>';
      document.getElementById("btn").innerHTML = training[r] + "のトレーニングを見る";
      document.getElementById("img").innerHTML = "<img src='C:\Users\昆\Documents\f18064_3\情報工学基礎実習Ⅱ\実習\Leg\脚トップ.jpg' alt='ダンベル' class='bd-placeholder-img bd-placeholder-img-lg d-block w-100'>";
    }
  }