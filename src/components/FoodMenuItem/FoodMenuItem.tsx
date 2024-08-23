import "./FoodMenuItem.css";

export default function FoodMenuItem({
  picture,
  name,
  description,
  price,
}: any) {
  return (
    <div className="food-menu-item">
      <img src={picture} />
      <div className="food-menu-item-info-cntr">
        <div className="food-menu-item-title">
          <h2>{name}</h2>
          <h2 className="food-menu-item-price">{"$" + price}</h2>
        </div>
        <div className="food-menu-item-horizontal-line"></div>
        <div className="food-menu-item-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
