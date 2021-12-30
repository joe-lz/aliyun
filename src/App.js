import styles from './app.less';

function App() {
  return (
    <div className="App">
      <div className={styles.index}>
        <img className={styles.logo} src="/icon_logo.png"></img>
        <p className={styles.title}>Dokki</p>
        <p className={styles.desc}>分享🌈生活新方式，</p>
        <p className={styles.desc}>1、认识附近的人</p>
        <p className={styles.desc}>2、最新动态发布</p>
        <p className={styles.desc}>3、地图找人</p>
        <p className={styles.desc}>4、更多其他功能等你发现</p>
        <div className={styles.block}></div>
        <a href="https://apps.apple.com/cn/app/dokki-%E6%9C%89%E8%B6%A3%E7%9A%84%E7%81%B5%E9%AD%82%E4%B8%87%E9%87%8C%E6%8C%91%E4%B8%80/id1413796478">
          <button
            className={styles.btn}
            type="primary"
            style={{ background: '#1F79F3', color: 'white' }}
          >
            App Store
          </button>
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.weather.react">
          <button
            className={styles.btn}
            style={{ background: '#F23349', color: 'white' }}
          >
            Google Play
          </button>
        </a>
        <a href="https://leanblog-file.todokit.xyz/usOAr7iOMmQJBG0EdKNrOmygtNrjLitI/app-release1.0.43.apk">
          <button className={styles.btn}>安卓直接下载(最新)</button>
          <p className="desc">请在系统自带浏览器中打开该页面</p>
        </a>
      </div>
    </div>
  );
}

export default App;
