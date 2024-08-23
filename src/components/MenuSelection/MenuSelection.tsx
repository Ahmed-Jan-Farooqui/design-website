import "./MenuSelection.css";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SvgIcon from "@mui/icons-material/Restaurant";

export default function MenuSelection({
  selection,
  currentSelection,
  onClick,
}: any) {
  const highlight =
    currentSelection === selection
      ? "menu-selection-horizontal-line-highlight"
      : "menu-selection-horizontal-line";
  let adjective = "";
  let noun = "";
  if (selection === "B") {
    adjective = "Popular";
    noun = "Breakfast";
  } else if (selection === "L") {
    adjective = "Special";
    noun = "Lunch";
  } else {
    adjective = "Lovely";
    noun = "Dinner";
  }
  return (
    <div
      className="menu-selection"
      onClick={() => {
        onClick(selection);
      }}
    >
      <div className="menu-selection-badge-cntr">
        {selection === "B" && <SvgIcon component={LocalCafeIcon} />}
        {selection === "L" && <SvgIcon component={LunchDiningIcon} />}
        {selection === "D" && <SvgIcon component={RestaurantIcon} />}
        <div className="menu-selection-txt-cntr">
          <p>{adjective}</p>
          <p>
            <b>{noun}</b>
          </p>
        </div>
      </div>
      <div className={highlight}></div>
    </div>
  );
}
