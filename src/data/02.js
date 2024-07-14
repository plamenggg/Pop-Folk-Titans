@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

body {
    background-image: url(images/Xaudio-Club-Revue-3.jpg);
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    margin: 0;
    padding: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Bebas Neue', sans-serif;
}

#box {
    width: 100%;
    height: 80%;
    max-width: 1200px;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
}

nav {
    grid-area: menu;
    margin-right: 20px;
    height: 60px;
    font-size: 1.75em;
    line-height: 60px;
    padding: 20px;
    color: rgb(6, 59, 28);;
    display: flex;
    justify-content: center;
    align-items: center;
  
}

.nav-link {
    color: wheat;
    margin-left: 30px;
    padding: 8px;
    line-height: 20px;
}

h1{
    color: rgb(25, 31, 206);
    background-color: wheat;
    font:bolder;
}

ul ,p {
    color: wheat;
}

body, html {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

#home {
    text-align: center;
    font-size: 1.75em; 
}

.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
    background-color: black;
    height: 80px;
    color: white;
  }

.volume-control {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 10px;
    color: white;
  }

  #search-bar {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 20px;
    width: 200px;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    border: 1px solid rgb(255, 255, 255);
    border-radius: 4px;
    margin-left: 200px;
    height: 25px;
    flex-grow: 1;
  }

  #search-btn {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 18px;
    margin-left: 10px;
    border: none;
    background-color: rgb(95, 191, 255);
    color: white;
    border-radius: 4px;
    cursor: pointer;
    height: 25px;
  }