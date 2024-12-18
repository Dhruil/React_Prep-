import Offlineimg from "../utils/images/Offline.png"
export const Offline = () => {
  return (
    <div className="container">
      <div className="offlineContainer">
        <img src ={Offlineimg} className="offline-img"></img>
        <i class="fa-solid fa-wifi-exclamation" className="icon"></i>
        <h2 cassName="offlineText">No Internet Connection</h2>
        <p className="message">Please connect to the internet.</p>
      </div>
    </div>
  );
};
