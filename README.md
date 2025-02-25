<!DOCTYPE html>
<html lang="fa">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rotating Globe</title>
  <style>
    body {
      background-color: black;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      overflow: hidden;
    }
    
    .globe-container {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      background-color: #1a1a1a;
      box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    }
    
    .globe {
      width: 300px;
      height: 150px;
      background: url('https://upload.wikimedia.org/wikipedia/commons/7/7d/Earthmap.jpg');
      background-size: cover;
      position: absolute;
      animation: rotateGlobe 5s linear infinite;
    }

    @keyframes rotateGlobe {
      from { left: 0; }
      to { left: -150px; }
    }
  </style>
</head>
<body>
  <div class="globe-container">
    <div class="globe"></div>
  </div>
</body>
</html>
