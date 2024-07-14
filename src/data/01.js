<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Pop-Folk Titans</title>
</head>
<body>
    <header>     
    </header>
    <div id="box">
        <nav>
          <a href="#" class="nav-link" data-page="home">Home </a>
          <a href="#" class="nav-link" data-page="Bulgaria">Bulgaria </a>
          <a href="#" class="nav-link" data-page="Serbia">Serbia </a>
          <a href="#" class="nav-link" data-page="Greece">Greece </a>
          <div class="search-container">
            <input type="text" id="search-bar" placeholder="Search...">
            <button id="search-btn" onclick="performSearch()">Search</button>
          </div>
        </nav>
        <div id="container">
    
          <!-- start placeholders -->
    
          <!-- end placeholders -->
        </div>

        <div class="volume-control">
            <label for="volume">Volume:</label>
            <input type="range" id="volume" name="volume" min="0" max="1" step="0.01" value="0.5">
          </div>
        </div>
        <footer class="footer">
          <h2>hello</h2>
        </footer>
    
</body>
<script type="module" src="index.js"></script>
</html>