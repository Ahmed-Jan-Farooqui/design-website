import MenuSelection from "../MenuSelection/MenuSelection";
import "./FoodMenu.css";
import { useEffect, useState } from "react";
import FoodMenuItem from "../FoodMenuItem/FoodMenuItem";

interface MenuItemData {
  picture: string;
  name: string;
  description: string;
  price: number;
}

export default function FoodMenu() {
  const [currentSelection, setCurrentSelection] = useState("B");
  const [breakfastMenu, setBreakfastMenu] = useState<MenuItemData[]>([]);
  const [lunchMenu, setLunchMenu] = useState<MenuItemData[]>([]);
  const [dinnerMenu, setDinnerMenu] = useState<MenuItemData[]>([]);
  const imageSrcs = [
    "https://s3-alpha-sig.figma.com/img/3f71/14ca/8d733db0476b90f4c6f75223ed45e22a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8OneQF6ae~4Fq3eZoj-iru6z-AZAlQcZhQme-7OKpYo8GqxNY1q35Qr7V4X1EZ4q9fDA6Z1UKlxoY294T4PkW-OUlkXyHUGvM~dA37zhnKpI2DZLPOS~B5dKiuk50qTnVnBo5NTzjwJ4~IJWuYQ-LWfInzHHSPycEpNs0JHHVPq3QlUe2pYIUYdYgdyVA5v8F25q0OSRok4qJIihc5yk72ZuXyrpr3~Q2MQ0FLbuCFuTuGkVCvwMtHt-HQlwwBMdZj5oIMi2mUIvmXhSdMGIza9Z93PbHd319oRDspu5xV7sEIymv~cz-n88NK7DmHHlvhReM3nmL8RY3dalNo0MA__",
    "https://s3-alpha-sig.figma.com/img/3f71/14ca/8d733db0476b90f4c6f75223ed45e22a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8OneQF6ae~4Fq3eZoj-iru6z-AZAlQcZhQme-7OKpYo8GqxNY1q35Qr7V4X1EZ4q9fDA6Z1UKlxoY294T4PkW-OUlkXyHUGvM~dA37zhnKpI2DZLPOS~B5dKiuk50qTnVnBo5NTzjwJ4~IJWuYQ-LWfInzHHSPycEpNs0JHHVPq3QlUe2pYIUYdYgdyVA5v8F25q0OSRok4qJIihc5yk72ZuXyrpr3~Q2MQ0FLbuCFuTuGkVCvwMtHt-HQlwwBMdZj5oIMi2mUIvmXhSdMGIza9Z93PbHd319oRDspu5xV7sEIymv~cz-n88NK7DmHHlvhReM3nmL8RY3dalNo0MA__",
    "https://s3-alpha-sig.figma.com/img/8044/2397/f9723ac5f7311c495cc83fdf2138964b?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aJ2Nvs9YSvmIxgYEWZfj8vs3xMsXQraCA2CLwgOnvr314VRB9chGbiX3KQ9ngc2zFOFhZXq-QwEiWyuH9YSL5z9ho1Yoffg2rNbX7VA-SMOhFawYFB2GV3acjALYrplym2LYyCAofNyU9n80qUq34BeDhCB9VfFFXYQUle5Ukp6ze9j5A4vKiBUvbl9YtRZON9OfzUQpWIzMCcAYY0lt9mpYLcHcxWoKy2kivR51TmIunShan52br~i4l6sIXwCCrvk9AUXBB3kAzMJkiB-7th5G-NZ6NjIEcs15UupAxE46TbmDsnb55Jm927f5TBfEMGk~TdDrM~wvnnAc~F0fzg__",
    "https://s3-alpha-sig.figma.com/img/50c9/df4e/33d937feffc8d4d130c6cb81a85a3396?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GOHrmPtpibWhcDhH1IGlBHtXZdVtDgOXgASsq-Fx1n8KcAErVrqo98AkjPRT1-RgJhktxbH4e3a~M4Zrylg7~Zg4YuH46KjiIETPkHSd3~uaF1hLnQaH9b6BgwaGeS-3WmpazaO1CqxOWdHQZ1XPAaTUNTkXoNhTe0nEQa4UJxi2~Q~wVSh2UXxVUzYTqOE2rPMV1UjDo09dP~jLEjpiADnCAcFsY8iFp88VUMhRoxVs~AXlSYvdG-txBF848tFl~62MmI3ETSiujsU0zuAVm-A7FuHyNtgTtib4ZmzoHrLMecdLZFmL3Bw7YcG2gw3RA97rWMmJBLPLhzasu8lmqA__",
    "https://s3-alpha-sig.figma.com/img/f83e/bdfe/6f84988c73abb71e41196ecd76880b78?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBSBGY0BkUrmUJM4qdQywBQJzUmdLmybyei6qN6uTbp1L9S1Z~ouSPB~ZJGw57v3JUZ7m7swzJSPakLwJyxJFt8uh3uEOrDxKQd6iB40zfWJydJtg4HEk0QeHXdGcpPCYQ4UPY2UL-TThNECtxQZqXzp-eB-8TYQR0ItA5B9tgiRD2p5wTFPxQuuyZhhxBg8EZRYBEI0XtryQDsPCcjE9~niynTj3xxCI254hrcJ5V1JNFBNUcvfh5rYp56UmY2a6cZMfRfFKC99mky2FxH3p8df42B2VMw6gwT7b9YEjnnz5oCoswsLP1G1FTWXr70YLTnnbqf~ga5BuK7P0iZWIQ__",
    "https://s3-alpha-sig.figma.com/img/f83e/bdfe/6f84988c73abb71e41196ecd76880b78?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UBSBGY0BkUrmUJM4qdQywBQJzUmdLmybyei6qN6uTbp1L9S1Z~ouSPB~ZJGw57v3JUZ7m7swzJSPakLwJyxJFt8uh3uEOrDxKQd6iB40zfWJydJtg4HEk0QeHXdGcpPCYQ4UPY2UL-TThNECtxQZqXzp-eB-8TYQR0ItA5B9tgiRD2p5wTFPxQuuyZhhxBg8EZRYBEI0XtryQDsPCcjE9~niynTj3xxCI254hrcJ5V1JNFBNUcvfh5rYp56UmY2a6cZMfRfFKC99mky2FxH3p8df42B2VMw6gwT7b9YEjnnz5oCoswsLP1G1FTWXr70YLTnnbqf~ga5BuK7P0iZWIQ__",
    "https://s3-alpha-sig.figma.com/img/098b/6202/d1041403b4f0f9ab1b0af4cfa0be31d3?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oem~1fqo4y91sKl4f~NHTLlogR7zqFXxwagT4JPNTZeuwIcHQIbu89CG2Psff8qr7jj-2BA0Utrd7aI5MlUp98Z8KwqEWjIiOm3NBdPKIJYwNLJb5KKJLl6FuSEB0RyoSjFOcTy41nz7tQ7Ky0h-zRGlGnCgUyf1ftDAhvTwkUIbOuwGynqRQBq8XbeM1PBJJIEpms8KiKbizGcIoHAEKGm8V14WeXAnMdu5jnKgqjBzq-rtYngX5X7oqZ6YJ5gAFJtIOZh5LPGB1BZtU8HxU1rS~kI51UQOWqlgp3~NlDcVMVTxm4Koc~2UC5OslJCdEFgiLK4D1SjYGGcMRrm3RA__",
    "https://s3-alpha-sig.figma.com/img/3f71/14ca/8d733db0476b90f4c6f75223ed45e22a?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=T8OneQF6ae~4Fq3eZoj-iru6z-AZAlQcZhQme-7OKpYo8GqxNY1q35Qr7V4X1EZ4q9fDA6Z1UKlxoY294T4PkW-OUlkXyHUGvM~dA37zhnKpI2DZLPOS~B5dKiuk50qTnVnBo5NTzjwJ4~IJWuYQ-LWfInzHHSPycEpNs0JHHVPq3QlUe2pYIUYdYgdyVA5v8F25q0OSRok4qJIihc5yk72ZuXyrpr3~Q2MQ0FLbuCFuTuGkVCvwMtHt-HQlwwBMdZj5oIMi2mUIvmXhSdMGIza9Z93PbHd319oRDspu5xV7sEIymv~cz-n88NK7DmHHlvhReM3nmL8RY3dalNo0MA__",
  ];
  useEffect(() => {
    let breakfastMenuTemp: MenuItemData[] = [];
    let lunchMenuTemp: MenuItemData[] = [];
    let dinnerMenuTemp: MenuItemData[] = [];
    for (let i = 0; i < 8; i++) {
      let obj: MenuItemData = {
        picture: imageSrcs[i],
        name: "Chicken Burger",
        price: 115,
        description:
          "Ipsum ipsum clita erat amet dolor justo diam " + currentSelection,
      };
      breakfastMenuTemp.push(obj);
      lunchMenuTemp.push(obj);
      dinnerMenuTemp.push(obj);
    }
    setBreakfastMenu([...breakfastMenuTemp]);
    setLunchMenu([...lunchMenuTemp]);
    setDinnerMenu([...dinnerMenuTemp]);
  });

  return (
    <div className="menu-cntr">
      <div className="menu-title-cntr">
        <div className="menu-horizontal-line"></div>
        <p>Food Menu</p>
        <div className="menu-horizontal-line"></div>
      </div>
      <h1 className="menu-type">Most Popular Items</h1>
      <div className="menu-selection-cntr">
        <MenuSelection
          selection={"B"}
          currentSelection={currentSelection}
          onClick={setCurrentSelection}
        />
        <MenuSelection
          selection={"L"}
          currentSelection={currentSelection}
          onClick={setCurrentSelection}
        />
        <MenuSelection
          selection={"D"}
          currentSelection={currentSelection}
          onClick={setCurrentSelection}
        />
      </div>
      <div className="menu-item-cntr">
        {currentSelection === "B" &&
          breakfastMenu.map((item) => {
            return (
              <FoodMenuItem
                picture={item.picture}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
        {currentSelection === "L" &&
          lunchMenu.map((item) => {
            return (
              <FoodMenuItem
                picture={item.picture}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
        {currentSelection === "D" &&
          dinnerMenu.map((item) => {
            return (
              <FoodMenuItem
                picture={item.picture}
                name={item.name}
                price={item.price}
                description={item.description}
              />
            );
          })}
      </div>
    </div>
  );
}
