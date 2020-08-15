import React from 'react';
import menu1 from './menu1.png';
import menu2 from './menu2.jpg';
import menu3 from './menu3.jpg';
import menu4 from './menu4.jpeg';
import menu5 from './menu5.png';
import menu6 from './menu6.png';
import search from './search.svg';
import placeholder from './placeholder.jpg';
import meatloaf from './meatloaf.png';
import george from './george.png';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [
        {
          url: "https://www.youtube.com/embed/x_UJN3ad1zo",
          image: george,
          channel: "George Gammon",
          origTitle: "Deflation: Is US Headed For A Great Depression 2.0?!?! (Part 2 Conclusion)",
          title: "Deflation: Is US Headed For A Great Depression 2.0?!?! (Part 2 Conclusion)",
          views: 32795,
          date: "13th Aug, 2020",
          year: 2020,
        },
        {
          url: "https://www.youtube.com/embed/9X_ViIPA-Gc",
          image: meatloaf,
          channel: "Youtube",
          origTitle: "Meat Loaf - I'd Do Anything For Love (But I Won't Do That) (Official Music Video)",
          title: "Meat Loaf - I'd Do Anything For Love (But I Won't Do That) (Official Music Video)",
          views: 108741542,
          date: "6th March, 2009",
          year: 2009,
        },
      ],      
    };
    this.formatVideos = this.formatVideos.bind(this);
    this.changeVideos = this.changeVideos.bind(this);
  }

  componentDidMount() {
    this.formatVideos();
  }

  changeVideos() {
    let videos = [...this.state.videos];
    let current = videos[0];
    let next = videos[1];
    videos[0] = next;
    videos[1] = current;
    this.setState({videos: videos});
  }

  formatVideos() {
      let videos = [...this.state.videos];
      for (let i = 0; i < videos.length; i ++) {
        videos[i].title = videos[i].title.substring(0, 38);
        videos[i].views = videos[i].views.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        if(videos[i].year === 2020){
          videos[i].year = "This Year";
        } else if(videos[i].year === 2019) {
          videos[i].year = "1 Year Ago";
        } else{
          videos[i].year = String(2020 - videos[i].year) + "Years Ago";
        };
      };
      this.setState({videos: videos});
  }

  render () {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <iframe title="example" width="800" height="450" className="video" src={this.state.videos[0].url} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="videoTitle">{this.state.videos[0].origTitle}</div>
          <div className="videoViews">{this.state.videos[0].views} Views · {this.state.videos[0].date}</div>
          <hr></hr>
          <div className="comments">730 Comments</div>
          <div className="comment"><img src={menu6} alt="gmail" className="commentImage"></img> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          <br></br>
          <div className="comment"><img src={menu6} alt="gmail" className="commentImage"></img>Another Comment</div>
          <br></br>
          <div className="comment"><img src={menu6} alt="gmail" className="commentImage"></img>Another Comment</div>
        </div>
        <div className="videoList">
          Up Next
          <div className="autoplay">
            Autoplay
            <label className="switch">
              <input type="checkbox"></input>
              <span className="slider round"></span>
            </label>
          </div>
          <div className="nextVideo" onClick={this.changeVideos}>
            <img src={this.state.videos[1].image} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>{this.state.videos[1].title}</h3></div>
              <div>{this.state.videos[1].channel}</div>
              <div>{this.state.videos[1].views} Views · {this.state.videos[1].year}</div>
            </div>
          </div>
          <hr></hr>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
          <div className="nextVideo">
            <img src={placeholder} alt="Placeholder" className="placeholder"></img>
            <div className="text">
              <div><h3>Video Title</h3></div>
              <div>Channel Name</div>
              <div>No. views · x years ago</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

  function NavBar() {
  return (
    <div>
      <div id="navbar">
      <div className="leftAlign">
        <img src={menu1} alt="menu"></img>
        <img src={menu2} alt="logo"></img>
      </div>
      <div className="centreAlign">
      <input type="text" className="searchBar" placeholder="Search"></input>
        <button className="searchButton"><img src={search} className="searchIcon" alt="searchIcon"/></button>
      </div>
      <div className="rightAlign">
        <img src={menu6} className="right" alt="gmail"></img>
        <img src={menu5} className="right" alt="bell"></img>
        <img src={menu4} className="right" alt="apps"></img>
        <img src={menu3} className="right" alt="camera"></img>
      </div>
      </div>
    </div>
  );
}

export default App;