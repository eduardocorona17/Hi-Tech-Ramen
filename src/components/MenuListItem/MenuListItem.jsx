import './MenuListItem.css';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <img className="allimgs"src={menuItem.image} />
      {/* <div className="image flex-ctr-ctr">{menuItem.image}</div> */}
      {/* {console.log(menuItem.image)} */}
      <div className="name">{menuItem.name}</div>
      <div className="buy">
        <span>${menuItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(menuItem._id)}>
          Purchase
        </button>
      </div>
    </div>
  );
}