import React from 'react';
import './App.css';
<script>
     $myVar = "hi"; 
</script>

function App() {
  return (
    
    <div class = "container">
      
      <header>
      <h1>Daily Diary Hub</h1>
        <nav>
          <p><button>log out</button></p>
          <p><button>change theme</button></p>
        </nav>
      </header>

      <div class = "special">
        <p>this is the daily quote container</p>
        <div class = "quote">
          <button class = "back_btn, nav_btn">next</button>
          <p class = "qt_txt">inpirational quote</p>
          <button class = "forward_btn, nav_btn">next</button>
        </div>
      </div>
      
      <body>
        <div class = "controls">
          <button class = "write_btn">write</button>
        </div>
        
        the entries
      </body>
      
      <footer>
        footer content
      </footer>
    </div>
  );
}

export default App;
