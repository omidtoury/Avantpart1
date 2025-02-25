<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Battery Animation</title>
  <style>
    body {
      background-color: #121212;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 100vh;
      margin: 0;
    }
    .battery-container {
      position: relative;
      width: 200px;
      height: 100px;
      border: 4px solid #fff;
      border-radius: 10px;
      background-color: #333;
      margin-bottom: 30px;
    }
    .battery {
      position: absolute;
      width: 0;
      height: 100%;
      background-color: gold;
      border-radius: 5px;
      transition: width 2s ease-in-out;
    }
    .coming-soon {
      font-family: 'Arial', sans-serif;
      font-size: 30px;
      color: #ccc;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: bold;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7),
                   -2px -2px 5px rgba(255, 255, 255, 0.2),
                   0 0 10px rgba(255, 255, 255, 0.5);
      transform: perspective(500px) rotateX(20deg);
    }
  </style>
</head>
<body>
  <div class="battery-container">
    <div class="battery"></div>
  </div>
  <div class="coming-soon">Coming Soon ...</div>

  <script>
    const battery = document.querySelector('.battery');

    function fillBattery() {
      battery.style.width = battery.style.width === '100%' ? '0%' : '100%';
    }

    setInterval(fillBattery, 2500); // 2.5 seconds for each cycle
  </script>
</body>
</html>
