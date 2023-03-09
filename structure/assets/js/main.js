function moveBox(boxNumber) {
  // Lấy đối tượng box và vị trí của box đang được click
  var container = document.querySelector(".container");
  var box = document.querySelector(".box:nth-child(" + boxNumber + ")");
  var boxPosition = window.getComputedStyle(box).getPropertyValue("order");

  // Lấy đối tượng box liền kề với box đang được click và vị trí của nó
  var adjacentBoxNumber = (boxNumber % 3) + 1;
  var adjacentBox = document.querySelector(
    ".box:nth-child(" + adjacentBoxNumber + ")"
  );
  var adjacentBoxPosition = window
    .getComputedStyle(adjacentBox)
    .getPropertyValue("order");

  // Thực hiện chuyển đổi vị trí của 2 box
  box.style.order = adjacentBoxPosition;
  adjacentBox.style.order = boxPosition;
}
