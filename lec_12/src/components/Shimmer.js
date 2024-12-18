// ShimmerCard.js
// export const MenuShimmer = () => {
//   return (
//     <div className="restaurant-menu">
//       <div className="restaurant-summary stroke-color animate">
//         <img className="shimmer-img stroke animate" />
//         <div className="restaurant-summary-details">
//           <h2 className="shimmer-w40  stroke animate"></h2>
//           <p className="shimmer-w20 stroke animate"></p>
//           <div className="shimmer-w60  stroke animate">
//           </div>
//         </div>
//       </div>

//       <div className="restaurant-menu-content">
//         <div className="menu-items-container">
//           <div className="menu-title-wrap ">
//             <h3 className="shimmer-w40 stroke animate"></h3>
//             <p className="shimmer-w20 stroke animate"></p>
//           </div>
//           <div className="menu-items-list">
//             { Array(20).fill("").map( (element, index)  =>
//             <div className="shimmer-menu-card" key={index.toString() + 1}>
//               <div className="shimmer-item-details">
//                 <h3 className="shimmer-w40  stroke animate"></h3>
//                 <p className="shimmer-w20  stroke animate"> </p>
//                 <p className="shimmer-w60  stroke animate"></p>
//               </div>
//               <div className="shimmer-img-wrapper">
//                 <img className="shimmer-img stroke animate" />
//                 <div className="shimmer-btn stroke animate"> </div>
//               </div>
//             </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// MenuShimmer.js
export const MenuShimmer = () => {
  return (
    <div className="shimmer-restaurant-menu">
      <div className="shimmer-restaurant-summary">
        <div className="shimmer-restaurant-img"></div>
        <div className="shimmer-restaurant-details">
          <div className="shimmer-title"></div>
          <div className="shimmer-subtitle"></div>
          <div className="shimmer-details"></div>
        </div>
      </div>
      <div className="shimmer-line title" style={{width : "10rem",marginRight : "41em",marginTop:"2rem"}}></div>
      <div className="shimmer-line cost" style={{width : "15rem",marginRight : "36em"}}></div>
      
      <div className="shimmer-menu-items">
        {Array(5)
          .fill()
          .map((_, index) => (
            <div className="shimmer-menu-item" key={index}>
              <div className="shimmer-item-details">
                <div className="shimmer-line title"></div>
                <div className="shimmer-line cost"></div>
                <div className="shimmer-line desc"></div>
              </div>
              <div className="shimmer-img-wrapper">
                <div className="shimmer-img"></div>
                <div className="shimmer-btn"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export const ShimmerCard = () => {
  return (
    <div className="shimmer-card">
      <div className="shimmer-image"></div>
      <div className="shimmer-line shimmer-title"></div>
      <div className="shimmer-line shimmer-subtitle"></div>
      <div className="shimmer-line shimmer-subtitle"></div>
    </div>
  );
};
