"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_RegisterBoxed_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      data: {
        email: "",
        password: "",
        remember_me: false
      }
    };
  },
  //SEBELUM COMPONENT DI-RENDER
  created: function created() {
    //KITA MELAKUKAN PENGECEKAN JIKA SUDAH LOGIN DIMANA VALUE isAuth BERNILAI TRUE
    if (this.isAuth) {
      //MAKA DI-DIRECT KE ROUTE DENGAN NAME home
      //this.$router.push({ name: 'dashboard' })
      window.open("/admin/dashboard", "_self");
    }
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(["isAuth"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(["errors"])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)("auth", ["submit"])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(["CLEAR_ERRORS"])), {}, {
    //KETIKA TOMBOL LOGIN DITEKAN, MAKA AKAN MEMINCU METHODS postLogin()
    postLogin: function postLogin() {
      var _this = this;

      //DIMANA TOMBOL INI AKAN MENJALANKAN FUNGSI submit() DENGAN MENGIRIMKAN DATA YANG DIBUTUHKAN
      this.submit(this.data).then(function () {
        //KEMUDIAN DI CEK VALUE DARI isAuth
        //APABILA BERNILAI TRUE
        if (_this.isAuth) {
          _this.CLEAR_ERRORS(); //MAKA AKAN DI-DIRECT KE ROUTE DENGAN NAME home
          //this.$router.push({ name: 'dashboard' })


          window.open("/admin/dashboard", "_self");
        }
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/pages/RegisterBoxed.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/RegisterBoxed.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterBoxed.vue?vue&type=template&id=38907ee4& */ "./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4&");
/* harmony import */ var _RegisterBoxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterBoxed.vue?vue&type=script&lang=js& */ "./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegisterBoxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__.render,
  _RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/RegisterBoxed.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterBoxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterBoxed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterBoxed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterBoxed_vue_vue_type_template_id_38907ee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RegisterBoxed.vue?vue&type=template&id=38907ee4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/RegisterBoxed.vue?vue&type=template&id=38907ee4& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "app-container app-theme-white body-tabs-shadow" },
      [
        _c("div", { staticClass: "app-container" }, [
          _c("div", { staticClass: "h-100" }, [
            _c("div", { staticClass: "h-100 no-gutters row" }, [
              _c(
                "div",
                {
                  staticClass:
                    "h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7"
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "mx-auto app-login-box col-sm-12 col-md-10 col-lg-9"
                    },
                    [
                      _c("div", { staticClass: "app-logo" }),
                      _vm._v(" "),
                      _c("h4", [
                        _c("div", [_vm._v("Welcome,")]),
                        _vm._v(" "),
                        _c("span", [
                          _vm._v("It only takes a "),
                          _c("span", { staticClass: "text-success" }, [
                            _vm._v("few seconds1")
                          ]),
                          _vm._v(" to\n                create your account")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", [
                        _c("form", {}, [
                          _c("div", { staticClass: "form-row" }, [
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "exampleEmail" } },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      ),
                                      _vm._v(" Email")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "email",
                                      id: "exampleEmail",
                                      placeholder: "Email here...",
                                      type: "email"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "exampleName" } },
                                    [_vm._v("Name")]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "text",
                                      id: "exampleName",
                                      placeholder: "Name here...",
                                      type: "text"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "examplePassword" } },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      ),
                                      _vm._v(" Password")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "password",
                                      id: "examplePassword",
                                      placeholder: "Password here...",
                                      type: "password"
                                    }
                                  })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "col-md-6" }, [
                              _c(
                                "div",
                                { staticClass: "position-relative form-group" },
                                [
                                  _c(
                                    "label",
                                    { attrs: { for: "examplePasswordRep" } },
                                    [
                                      _c(
                                        "span",
                                        { staticClass: "text-danger" },
                                        [_vm._v("*")]
                                      ),
                                      _vm._v(" Repeat Password")
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("input", {
                                    staticClass: "form-control",
                                    attrs: {
                                      name: "passwordrep",
                                      id: "examplePasswordRep",
                                      placeholder: "Repeat Password here...",
                                      type: "password"
                                    }
                                  })
                                ]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass: "mt-3 position-relative form-check"
                            },
                            [
                              _c("input", {
                                staticClass: "form-check-input",
                                attrs: {
                                  name: "check",
                                  id: "exampleCheck",
                                  type: "checkbox"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "label",
                                {
                                  staticClass: "form-check-label",
                                  attrs: { for: "exampleCheck" }
                                },
                                [
                                  _vm._v("Accept our\n                    "),
                                  _c(
                                    "a",
                                    { attrs: { href: "javascript:void(0);" } },
                                    [_vm._v("Terms and Conditions")]
                                  ),
                                  _vm._v(".")
                                ]
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "mt-4 d-flex align-items-center" },
                            [
                              _c("h5", { staticClass: "mb-0" }, [
                                _vm._v(
                                  "\n                    Already have an account?\n                    "
                                ),
                                _c(
                                  "a",
                                  {
                                    staticClass: "text-primary",
                                    attrs: { href: "javascript:void(0);" }
                                  },
                                  [_vm._v("Sign in")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ml-auto" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg"
                                  },
                                  [
                                    _vm._v(
                                      "\n                      Create Account\n                    "
                                    )
                                  ]
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "d-lg-flex d-xs-none col-lg-5" }, [
                _c("div", { staticClass: "slider-light" }, [
                  _c("div", { staticClass: "slick-slider slick-initialized" }, [
                    _c("div", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark",
                          attrs: { tabindex: "-1" }
                        },
                        [
                          _c("div", {
                            staticClass: "slide-img-bg",
                            staticStyle: {
                              "background-image":
                                "url('../assets/images/originals/citynights.jpg')"
                            }
                          }),
                          _vm._v(" "),
                          _c("div", { staticClass: "slider-content" }, [
                            _c("h3", [_vm._v("Scalable, Modular, Consistent")]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                "\n                      Easily exclude the components you don't require. Lightweight,\n                      consistent Bootstrap based styles across all elements and\n                      components\n                    "
                              )
                            ])
                          ])
                        ]
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ })

}]);