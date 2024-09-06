// import React from 'react';
// import './App.css'; // Import your CSS file or you can use inline styles

// function App() {
//   return (
//     <div className="App">
//       <header>
//         <div className="logo">
//           <img src="logo.svg" alt="Sololearn Logo" />
//           <h1>sololearn</h1>
//         </div>
//         <nav>
//           <ul>
//             <li><a href="">Courses</a></li>
//             <li><a href="">Leaderboard</a></li>
//             <li><a href="">Code Bits</a></li>
//             <li><a href="">Discuss</a></li>
//             <li><a href="">Blog</a></li>
//             <li><button>Go PRO</button></li>
//           </ul>
//         </nav>
//       </header>

//       <div className="container">
//         <div className="main">
//           <h2>Leaderboard</h2>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import './App.css'; // Import your CSS file for styling

function App() {
  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src="logo.svg" alt="Sololearn Logo" />
          <h1>sololearn</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#">Courses</a></li>
            <li><a href="#">Leaderboard</a></li>
            <li><a href="#">Code Bits</a></li>
            <li><a href="#">Discuss</a></li>
            <li><a href="#">Blog</a></li>
            <li><button>Go PRO</button></li>
          </ul>
        </nav>
      </header>

      <div className="container">
          <h2>Leaderboard</h2>
        <div className="main">
          <div className="leaderboard">
            <ul>
              <li>
                <div className="rank">1</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">John Doe</span>
                    <span className="score">1500 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">2</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Jane Smith</span>
                    <span className="score">1450 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">3</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Alice Johnson</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">4</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Sarah</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              <li>
                <div className="rank">5</div>
                <div className="user-info">
                  <img src="user-avatar.jpg" alt="User Avatar" />
                  <div className="details">
                    <span className="username">Johnson</span>
                    <span className="score">1400 XP</span>
                  </div>
                </div>
              </li>
              {/* Add more list items for other users */}
            </ul>
          </div>
          <div className='right-box'>
          <div className='mercury-league'>
            <h2>Mercury League</h2>
          </div>
          <div className='earn-xp'>
          <h2>Earn XP</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

