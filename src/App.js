import './App.css';

function App() {
  return (
    <div className="App">
      <div className="text">
        Merry Christmas
      </div>
      <div className="tree">
        <div className="iconfont icon-iconcollect-copy"></div>

        <div className="top">
          <span style={{ transform: 'rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(90deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(180deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(270deg) rotateX(30deg) translateZ(86px)' }}></span>
        </div>

        <div className="top" style={{ transform: 'translateY(78px)' }}>
          <span style={{ transform: 'rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(90deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(180deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(270deg) rotateX(30deg) translateZ(86px)' }}></span>
        </div>

        <div className="top" style={{ transform: 'translateY(156px)' }}>
          <span style={{ transform: 'rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(90deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(180deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(270deg) rotateX(30deg) translateZ(86px)' }}></span>
        </div>

        <div className="top" style={{ transform: 'translateY(234px)' }}>
          <span style={{ transform: 'rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(90deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(180deg) rotateX(30deg) translateZ(86px)' }}></span>
          <span style={{ transform: 'rotateY(270deg) rotateX(30deg) translateZ(86px)' }}></span>
        </div>

        <div className="bottom">
          <span style={{ transform: 'translateZ(30px)' }}></span>
          <span style={{ transform: 'rotateY(90deg) translateZ(30px)' }}></span>
          <span style={{ transform: 'rotateY(180deg) translateZ(30px)' }}></span>
          <span style={{ transform: 'rotateY(270deg) translateZ(30px)' }}></span>
        </div>

        <span className="shadow"></span>
      </div>
    </div>
  );
}

export default App;
