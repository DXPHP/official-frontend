(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["tuniao-ui/components/tn-lazy-load/tn-lazy-load"],{

/***/ 510:
/*!**********************************************************************!*\
  !*** E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tn-lazy-load.vue?vue&type=template&id=52cdbe7c&scoped=true& */ 511);
/* harmony import */ var _tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tn-lazy-load.vue?vue&type=script&lang=js& */ 513);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tn-lazy-load.vue?vue&type=style&index=0&id=52cdbe7c&lang=scss&scoped=true& */ 515);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 35);

var renderjs





/* normalize component */

var component = Object(_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "52cdbe7c",
  null,
  false,
  _tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 511:
/*!*****************************************************************************************************************!*\
  !*** E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=template&id=52cdbe7c&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-lazy-load.vue?vue&type=template&id=52cdbe7c&scoped=true& */ 512);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_template_id_52cdbe7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 512:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=template&id=52cdbe7c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.lazyLoadItemStyle])
  var s1 = !_vm.error ? _vm.__get_style([_vm.imageStyle]) : null
  var s2 = !!_vm.error ? _vm.__get_style([_vm.imageStyle]) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1,
        s2: s2,
      },
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 513:
/*!***********************************************************************************************!*\
  !*** E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-lazy-load.vue?vue&type=script&lang=js& */ 514);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 514:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = {
  name: 'tn-lazy-load',
  props: {
    // 组件标识
    index: {
      type: [String, Number],
      default: ''
    },
    // 待显示的图片地址
    image: {
      type: String,
      default: ''
    },
    // 图片裁剪模式
    imgMode: {
      type: String,
      default: 'scaleToFill'
    },
    // 占位图片路径
    loadingImg: {
      type: String,
      default: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM0QjNBQjkyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM0QjNBQkEyQUQ2MTFFQTlCNUQ4RTIzNDE5RUIxNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzRCM0FCNzJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzRCM0FCODJBRDYxMUVBOUI1RDhFMjM0MTlFQjE2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PtRHfPcAAAAzUExURZWVldfX18PDw62trZubm9zc3Li4uKGhoebm5tLS0uHh4c3Nzaenp729vcjIyLKysuvr6141L40AAAcXSURBVHja7NzZlqpGAEBR5lG0//9rIw7IJKJi4or7PGTdtN10wr5SVAEGf/qqArsAiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAIiIAAERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAgAgJEQIAICBABERAg+nmQFMi5Jis+sIniED23jSzIgLTtg2D//iYme/8QBM/9lQ+CAEhbNLM3N9hEHAThX7GPCiBfAxK1b51kD+R7QMLjXg7iCsgWIPUh7pfVozG791oeBPngm48G583uW5GkBvI+SBaM2xXDn1oqum423bX/mgF5FySc2cv93Voug9TdZotsggnkBZB2NzbhrSY5HnoG07jei8dvzsJB/c3W60SALILE46+WCztsbhPR7R2VJq0ukEcT49nyy8QhaKcRa3fYHZD4+ufqOJAcgDz8/59vtw1I3QP5K6JsOG0vm3hce4I8LQp/BaRZGJC3AAn7IKOKXbC+7EdA5vdmmVwOLksgRThqOqiH4XEGsht+peoPUE8U/jJIO5OLH4GEwUslV5G0PTBG5Uiw/Y2jyigO3l9HAHKv9PYb82LloH74dZBoBUgar+l48NsNvtD0fkez9iwrAvIYZDRCl+Xs149Hm/KZmQ+QjUCiO1ei4ru7EsgnQYrkznlQb7thCuRfAzlOAPN72427P4VA/i2Q/DKT/Ls/VR8fvIBsDZIuz7TPF6TCbnk4GJkB2RokejTjuE7/unlgCuSTIO0Cy+Plp6vDfnQlBchy8QtjSHVd3EgmK1bHLm+H6+nXYbz2DuQRSPnqoL7vvq0u70on4zvxgCyWD3b9UyDVdW24PaWaiGTnFZJwPIQAebDpIKheBIm7n124ZthMJipAlkqHO+IZkP1tbfzOJark/A7MgKyvvl60fRqkvXfhuow+t9+q00+0/yyBrK8ZngOtBzldhw2X9tvpNGty0gvkmbPeJ0Cy/r09s/stbmfo0yMWkEdjevgKyOn2t2pxv7UXoibTdCDLje9/Ww1ymqzn87dbp92242ZmMRjI8hASvwKSLq4udqN6ksw8nxXN3tszD9L8Gkg+2mFrQYql5az4tvFj5xOx4VwnSdeBtGdyPwUytxK77pBVlNHdO7OK3rh/eTPUvdutT3fO52tuHMqD4N7llv8pyOQQ//w19YVDfX27+Sfuby9/6nau4pdA8vEdOZuChEH/quHt0Jg+IRJ/5+PrHwKZXfjbDiS73Zo7mu5UkzX7uTsXe0e/7nC3ePf1O69+BUg2XDfZCqSqOu7rGVf8cHBe8zhC2b61dtUHXv0OkGo6ZL4JkpbRYXdUaFevivx2M/1GIOctNh949TtAoumQ+TpIHMX54CJu+8BDd8FkE5BqcZh/59XvAClmTvKfB0nDqIlHo3T70SftyW1eX9dXtgQJqs1f/Q6QaOa/7wmQKtxH8eiGoCRuovODIO3VxOMmruZbHrLyD7z6DSDtGyT7ew1kf9hNn07c986JTovzzem0Id9wUG+Vk/IDr34DSNR7huZJkMFT6vEhqrPx/j5cnlZML8N6/PAzh9Y99Flm5Yde/c9BquDOkvkKkMP58dA4qi9vivE8JOvGz/j8FokfPpr288+pH2ZPOZrLmeGD+7KOh6dqYWJ48ki7yUg0tz0go/fv/LLddfV3sgOLJyaGPY/zrSlh1a36Arkzoue9CyG35ze6E6/dzO2Ga0EGHqdRJIkfn9/8OEjTW8Vq91ZWh39FeehWA7Nu9ft8CpUEk1WWOyDF0OPyEU2Pnzf/bZC0P6IPzmAvu7KauQBVrgKpJ0tG2arHzX8e5Pb3PezNs/PrX+3JMyCLn9XXf37tPFHvt09WfCDDjx+yyn1/p1V11j7GnB/q3leLuVva79S/tzed+db08YpF4uOZtmz/9oXWMq6BCAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAERECACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiACAgQAQEiIEAEBIiAALELvqt/BBgACqVeUBXxcCkAAAAASUVORK5CYII='
    },
    // 加载失败的错误占位图
    errorImg: {
      type: String,
      default: 'data:image/jpeg;base64,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bWxEYm9vbAAAAAAASW50cmJvb2wAAAAAAEJja2dPYmpjAAAAAQAAAAAAAFJHQkMAAAADAAAAAFJkICBkb3ViQG/gAAAAAAAAAAAAR3JuIGRvdWJAb+AAAAAAAAAAAABCbCAgZG91YkBv4AAAAAAAAAAAAEJyZFRVbnRGI1JsdAAAAAAAAAAAAAAAAEJsZCBVbnRGI1JsdAAAAAAAAAAAAAAAAFJzbHRVbnRGI1B4bEBywAAAAAAAAAAACnZlY3RvckRhdGFib29sAQAAAABQZ1BzZW51bQAAAABQZ1BzAAAAAFBnUEMAAAAATGVmdFVudEYjUmx0AAAAAAAAAAAAAAAAVG9wIFVudEYjUmx0AAAAAAAAAAAAAAAAU2NsIFVudEYjUHJjQFkAAAAAAAAAAAAQY3JvcFdoZW5QcmludGluZ2Jvb2wAAAAADmNyb3BSZWN0Qm90dG9tbG9uZwAAAAAAAAAMY3JvcFJlY3RMZWZ0bG9uZwAAAAAAAAANY3JvcFJlY3RSaWdodGxvbmcAAAAAAAAAC2Nyb3BSZWN0VG9wbG9uZwAAAAAAOEJJTQPtAAAAAAAQASwAAAABAAEBLAAAAAEAAThCSU0EJgAAAAAADgAAAAAAAAAAAAA/gAAAOEJJTQQNAAAAAAAEAAAAWjhCSU0EGQAAAAAABAAAAB44QklNA/MAAAAAAAkAAAAAAAAAAAEAOEJJTScQAAAAAAAKAAEAAAAAAAAAAThCSU0D9QAAAAAASAAvZmYAAQBsZmYABgAAAAAAAQAvZmYAAQChmZoABgAAAAAAAQAyAAAAAQBaAAAABgAAAAAAAQA1AAAAAQAtAAAABgAAAAAAAThCSU0D+AAAAAAAcAAA/////////////////////////////wPoAAAAAP////////////////////////////8D6AAAAAD/////////////////////////////A+gAAAAA/////////////////////////////wPoAAA4QklNBAAAAAAAAAIACjhCSU0EAgAAAAAAFgAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4QklNBDAAAAAAAAsBAQEBAQEBAQEBAQA4QklNBC0AAAAAAAIAADhCSU0ECAAAAAAAEAAAAAEAAAJAAAACQAAAAAA4QklNBB4AAAAAAAQAAAAAOEJJTQQa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eG1wOkNyZWF0ZURhdGU9IjIwMjItMDItMjJUMjE6MTk6MzQrMDg6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjItMDItMjJUMjE6MTk6MzQrMDg6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTAyLTIyVDIxOjE5OjM0KzA4OjAwIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjk1NDQ1YTI0LWM2NzAtYTk0OS05MWFkLWM3OGJlZTM4N2VlYiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjQwMWFkNGViLWZkYWYtYjQ0NS05MzViLTJjNzIwZjE2OGI3MiIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmEwNzM2YmYwLTJkNWQtZWU0Yi1iYWM1LWJmNzVmODQ3OGQyMyIgZGM6Zm9ybWF0PSJpbWFnZS9qcGVnIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmEwNzM2YmYwLTJkNWQtZWU0Yi1iYWM1LWJmNzVmODQ3OGQyMyIgc3RFdnQ6d2hlbj0iMjAyMi0wMi0yMlQyMToxOTozNCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NTQ0NWEyNC1jNjcwLWE5NDktOTFhZC1jNzhiZWUzODdlZWIiIHN0RXZ0OndoZW49IjIwMjItMDItMjJUMjE6MTk6MzQrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iDFhJQ0NfUFJPRklMRQABAQAADEhMaW5vAhAAAG1udHJSR0IgWFlaIAfOAAIACQAGADEAAGFjc3BNU0ZUAAAAAElFQyBzUkdCAAAAAAAAAAAAAAAAAAD21gABAAAAANMtSFAgIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEWNwcnQAAAFQAAAAM2Rlc2MAAAGEAAAAbHd0cHQAAAHwAAAAFGJrcHQAAAIEAAAAFHJYWVoAAAIYAAAAFGdYWVoAAAIsAAAAFGJYWVoAAAJAAAAAFGRtbmQAAAJUAAAAcGRtZGQAAALEAAAAiHZ1ZWQAAANMAAAAhnZpZXcAAAPUAAAAJGx1bWkAAAP4AAAAFG1lYXMAAAQMAAAAJHRlY2gAAAQwAAAADHJUUkMAAAQ8AAAIDGdUUkMAAAQ8AAAIDGJUUkMAAAQ8AAAIDHRleHQAAAAAQ29weXJpZ2h0IChjKSAxOTk4IEhld2xldHQtUGFja2FyZCBDb21wYW55AABkZXNjAAAAAAAAABJzUkdCIElFQzYxOTY2LTIuMQAAAAAAAAAAAAAAEnNSR0IgSUVDNjE5NjYtMi4xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYWVogAAAAAAAA81EAAQAAAAEWzFhZWiAAAAAAAAAAAAAAAAAAAAAAWFlaIAAAAAAAAG+iAAA49QAAA5BYWVogAAAAAAAAYpkAALeFAAAY2lhZWiAAAAAA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'
    },
    // 图片进入可见区域前多少像素前，单位rpx，开始加载图片
    // 负数为图片超出屏幕底部多少像素后触发懒加载，正数为图片顶部距离屏幕底部多少距离时触发（图片还没出现在屏幕上）
    threshold: {
      type: [Number, String],
      default: 100
    },
    // 是否开启过渡效果
    isEffect: {
      type: Boolean,
      default: true
    },
    // 动画过渡时间
    duration: {
      type: [String, Number],
      default: 500
    },
    // 渡效果的速度曲线，各个之间差别不大，因为这是淡入淡出，且时间很短，不是那些变形或者移动的情况，会明显
    // linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(n,n,n,n);
    effect: {
      type: String,
      default: 'ease-in-out'
    },
    // 图片高度，单位rpx
    height: {
      type: [String, Number],
      default: 450
    },
    // 图片圆角
    borderRadius: {
      type: String,
      default: ''
    }
  },
  computed: {
    thresholdValue: function thresholdValue() {
      // 先取绝对值，因为threshold可能是负数，最后根据this.threshold是正数或者负数，重新还原
      var threshold = uni.upx2px(Math.abs(this.threshold));
      return this.threshold < 0 ? -threshold : threshold;
    },
    lazyLoadItemStyle: function lazyLoadItemStyle() {
      var style = {};
      style.opacity = Number(this.opacity);
      if (this.borderRadius) {
        style.borderRadius = this.borderRadius;
      }
      // 因为time值需要改变,所以不直接用duration值(不能改变父组件prop传过来的值)
      style.transition = "opacity ".concat(this.time / 1000, "s ").concat(this.effect);
      style.height = this.$tn.string.getLengthUnitValue(this.height);
      return style;
    },
    imageStyle: function imageStyle() {
      var style = {};
      if (typeof this.height === 'string' && this.height.indexOf('%') === -1) {
        style.height = this.$tn.string.getLengthUnitValue(this.height);
      }
      return style;
    }
  },
  watch: {
    show: function show(val) {
      var _this = this;
      // 如果不开启过渡效果直接返回
      if (!this.effect) return;
      this.time = 0;
      // 原来opacity为1(不透明，是为了显示占位图)，改成0(透明，意味着该元素显示的是背景颜色，默认的白色)，再改成1，是为了获得过渡效果
      this.opacity = 0;
      setTimeout(function () {
        _this.time = _this.duration;
        _this.opacity = 1;
      }, 30);
    },
    image: function image(val) {
      // 修改图片后重置部分变量
      if (!val) {
        // 如果传入null或者''，或者undefined，标记为错误状态
        this.error = true;
      } else {
        this.init();
        this.error = false;
      }
    }
  },
  data: function data() {
    return {
      elIndex: this.$tn.uuid(),
      // 显示图片
      show: false,
      // 图片透明度
      opacity: 1,
      // 动画时间
      time: this.duration,
      // 懒加载状态
      // loadlazy-懒加载中状态，loading-图片正在加载，loaded-图片加加载完成
      loadStatus: '',
      // 图片加载失败
      error: false
    };
  },
  created: function created() {
    // 由于一些特殊原因，不能将此变量放到data中定义
    this.observer = {};
    this.observerName = 'lazyLoadContentObserver';
  },
  mounted: function mounted() {
    var _this2 = this;
    // 在需要用到懒加载的页面，在触发底部的时候触发tOnLazyLoadReachBottom事件，保证所有图片进行加载
    this.$nextTick(function () {
      uni.$once('tOnLazyLoadReachBottom', function () {
        if (!_this2.show) _this2.show = true;
      });
    });
    // mounted的时候，不一定挂载了这个元素，延时30ms，否则会报错或者不报错，但是也没有效果
    setTimeout(function () {
      _this2.disconnectObserver(_this2.observerName);
      var contentObserver = uni.createIntersectionObserver(_this2);
      contentObserver.relativeToViewport({
        bottom: _this2.thresholdValue
      }).observe(".tn-lazy-load__item--".concat(_this2.elIndex), function (res) {
        if (res.intersectionRatio > 0) {
          // 懒加载状态改变
          _this2.show = true;
          // 如果图片已经加载，去掉监听，减少性能消耗
          _this2.disconnectObserver(_this2.observerName);
        }
      });
      _this2[_this2.observerName] = contentObserver;
    }, 50);
  },
  methods: {
    // 初始化
    init: function init() {
      this.error = false;
      this.loadStatus = '';
    },
    // 处理图片点击事件
    handleImgClick: function handleImgClick() {
      var whichImg = '';
      // 如果show为false，则表示图片还没有开始加载，点击的是最开始占位图
      if (this.show === false) whichImg = 'lazyImg';
      // 如果error为true，则表示图片加载失败，点击的是错误占位图
      else if (this.error === true) whichImg = 'errorImg';
      // 点击了正常的图片
      else whichImg = 'realImg';
      this.$emit('click', {
        index: this.index,
        whichImg: whichImg
      });
    },
    // 处理图片加载完成事件，通过show来区分是占位图触发还是加载真正的图片触发
    handleImgLoaded: function handleImgLoaded() {
      if (this.loadStatus = '') {
        // 占位图加载完成
        this.loadStatus = 'lazyed';
      } else if (this.loadStatus == 'lazyed') {
        // 真正的图片加载完成
        this.loadStatus = 'loaded';
        this.$emit('loaded', this.index);
      }
    },
    // 处理错误图片加载完成
    handleErrorImgLoaded: function handleErrorImgLoaded() {
      this.$emit('error', this.index);
    },
    // 处理图片加载失败
    handleImgError: function handleImgError() {
      this.error = true;
    },
    disconnectObserver: function disconnectObserver(observerName) {
      var observer = this[observerName];
      observer && observer.disconnect();
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 515:
/*!********************************************************************************************************************************!*\
  !*** E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=style&index=0&id=52cdbe7c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./tn-lazy-load.vue?vue&type=style&index=0&id=52cdbe7c&lang=scss&scoped=true& */ 516);
/* harmony import */ var _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_QMDownload_HBuilderX_2_7_14_20200618_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_tn_lazy_load_vue_vue_type_style_index_0_id_52cdbe7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 516:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/GUANWANG/tuniao-ui/components/tn-lazy-load/tn-lazy-load.vue?vue&type=style&index=0&id=52cdbe7c&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/tuniao-ui/components/tn-lazy-load/tn-lazy-load.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'tuniao-ui/components/tn-lazy-load/tn-lazy-load-create-component',
    {
        'tuniao-ui/components/tn-lazy-load/tn-lazy-load-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('2')['createComponent'](__webpack_require__(510))
        })
    },
    [['tuniao-ui/components/tn-lazy-load/tn-lazy-load-create-component']]
]);
