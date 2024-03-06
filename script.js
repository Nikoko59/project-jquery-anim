$(function () {
  let $mainMenuItems = $("#main-menu ul").children("li"),
    totalMainMenuItems = $mainMenuItems.length,
    openedIndex = 2,
    init = function () {
      bindEvent();

      if (validCheck(openedIndex))
        animateItem($mainMenuItems.eq(openedIndex), true, 700);
    },
    bindEvent = function () {
      $mainMenuItems.children(".images").click(function () {
        let newIndex = $(this).parent().index();
        checKAndAnimateItem(newIndex);
      });

      $(".button").hover(
        function () {
          $(this).addClass("hovered");
        },

        function () {
          $(this).removeClass("hovered");
        }
      );

      $(".button").click(function () {
        let newIndex = $(this).index();
        checKAndAnimateItem(newIndex);
      });
    },
    validCheck = function (indexToCheck) {
      return indexToCheck >= 0 && indexToCheck < totalMainMenuItems;
    },
    animateItem = function ($item, toOpen, speed) {
      let $colorImage = $item.find(".color"),
        itemParam = toOpen ? { width: "420px" } : { width: "140px" },
        colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };
      $colorImage.animate(colorImageParam, speed),
        $item.animate(itemParam, speed);
    },
    checKAndAnimateItem = function (indexToCheckAnimate) {
      if (openedIndex === indexToCheckAnimate) {
        animateItem($mainMenuItems.eq(indexToCheckAnimate), false, 250);
        openedIndex = -1;
      } else {
        if (validCheck(indexToCheckAnimate)) {
          animateItem($mainMenuItems.eq(openedIndex), false, 250);
          openedIndex = indexToCheckAnimate;
          animateItem($mainMenuItems.eq(openedIndex), true, 250);
        }
      }
    };

  init();
});
