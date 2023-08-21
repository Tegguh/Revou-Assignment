<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Calculator Keliling Segitiga</title>
  </head>

  <body>
    <header>
      <h2>Keliling Segitiga</h2>
    </header>

    <img src="img/rumus.png" class="rumusimg" width="500" height="600" /><br />

    <h2>Rumus Keliling Segitiga yaitu :</h2>
    <p class="rumus"><b> K = S + S + S </b></p>
    <p>Dimana :</p>
    <p style="padding: 0px; margin: 0px">K = Keliling</p>
    <p style="padding: 0px; margin: 0px">S = Sisi</p>
    <br />
    <hr />

    <h2 style="text-align: center">Hitung Keliling Segitiga</h2>
    <form>
      <label for="fname">S:</label>
      <input type="text" id="sisi1" placeholder="Sisi 1" /><br />
      <label for="lname">S:</label>
      <input type="text" id="sisi2" placeholder="Sisi 2" /><br />
      <label for="lname">S:</label>
      <input type="text" id="sisi3" placeholder="Sisi 3" /><br />
      <p id="result" class="result"></p>
      <input
        type="button"
        class="button"
        value="Hitung"
        onClick="keliling();"
      />
      <button class="clear">Reset</button>
      <button class="luas">
        <a href="luas_segitiga.html">Luas</a>
      </button>
    </form>

    <div class="footer">
      <p>Created by Syachdan Zhafar</p>
    </div>
  </body>
</html>

<script src="script.js"></script>