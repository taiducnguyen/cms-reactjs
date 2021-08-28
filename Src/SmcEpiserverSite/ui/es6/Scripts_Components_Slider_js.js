(self["webpackChunk"] = self["webpackChunk"] || []).push([["Scripts_Components_Slider_js"],{

/***/ "./Scripts/Components/Slider.js":
/*!**************************************!*\
  !*** ./Scripts/Components/Slider.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ "../node_modules/react-responsive-carousel/lib/styles/carousel.min.css");
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel */ "../node_modules/react-responsive-carousel/lib/js/index.js");



const CarouselSettings = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true
};

const Slider = ({
  values
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_2__.Carousel, CarouselSettings, values.map((value, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  key: `figure${index}`
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
  className: "slider__link",
  href: value.url
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
  className: "slider__image",
  src: value.image
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
  className: "banner-text"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3", {
  className: "banner-text__title"
}, value.text), value.actionText && value.actionText.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
  className: "banner-text__button"
}, value.actionText)))));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ })

}]);
//# sourceMappingURL=Scripts_Components_Slider_js.js.map