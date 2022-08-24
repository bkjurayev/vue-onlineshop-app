//==================================================================================================================================
// Furniture Gallery
//==================================================================================================================================
const furniture = document.querySelector(".furniture__body");
if (furniture) {
  const furnitureItems = document.querySelector(".furniture__items");
  const furnitureColumn = document.querySelectorAll(".furniture__column");

  // Скорость анимации
  const speed = furniture.dataset.speed;

  // Объявление переменных
  let positionX = 0;
  let coordXprocent = 0;

  function setMouseGalleryStyle() {
    let furnitureItemsWidth = 0;
    furnitureColumn.forEach((element) => {
      furnitureItemsWidth += element.offsetWidth;
    });

    const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
    const distX = Math.floor(coordXprocent - positionX);

    positionX = positionX + distX * speed;
    let position = (furnitureDifferent / 200) * positionX;

    furnitureItems.style.cssText = `transform: translate3d(${-position}px,0,0);`;

    if (Math.abs(distX) > 0) {
      requestAnimationFrame(setMouseGalleryStyle);
    } else {
      furniture.classList.remove("_init");
    }
  }
  furniture.addEventListener("mousemove", function (e) {
    // Получение ширины
    const furnitureWidth = furniture.offsetWidth;

    // Ноль по середине
    const coordX = e.pageX - furnitureWidth / 2;

    // Получаем проценты
    coordXprocent = (coordX / furnitureWidth) * 200;

    if (!furniture.classList.contains("_init")) {
      requestAnimationFrame(setMouseGalleryStyle);
      furniture.classList.add("_init");
    }
  });
}
