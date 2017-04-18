'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTheme = exports.ThemeProvider = exports.css = undefined;

var _reactNative = require('react-native');

var _reactNative2 = _interopRequireDefault(_reactNative);

var _css = require('../constructors/css');

var _css2 = _interopRequireDefault(_css);

var _StyledNativeComponent = require('../models/StyledNativeComponent');

var _StyledNativeComponent2 = _interopRequireDefault(_StyledNativeComponent);

var _ThemeProvider = require('../models/ThemeProvider');

var _ThemeProvider2 = _interopRequireDefault(_ThemeProvider);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any;

/* eslint-disable import/no-unresolved */


var babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any;

var styled = function styled(tag) {
  return function (strings) {
    for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      interpolations[_key - 1] = arguments[_key];
    }

    return (0, _StyledNativeComponent2.default)(tag, _css2.default.apply(undefined, [strings].concat(interpolations)));
  };
};

/* React native lazy-requires each of these modules for some reason, so let's
*  assume it's for a good reason and not eagerly load them all */
var aliases = 'ActivityIndicator ActivityIndicatorIOS ART Button DatePickerIOS DrawerLayoutAndroid\n Image ImageEditor ImageStore KeyboardAvoidingView ListView MapView Modal Navigator NavigatorIOS\n Picker PickerIOS ProgressBarAndroid ProgressViewIOS ScrollView SegmentedControlIOS Slider\n SliderIOS SnapshotViewIOS Switch RecyclerViewBackedScrollView RefreshControl StatusBar\n SwipeableListView SwitchAndroid SwitchIOS TabBarIOS Text TextInput ToastAndroid ToolbarAndroid\n Touchable TouchableHighlight TouchableNativeFeedback TouchableOpacity TouchableWithoutFeedback\n View ViewPagerAndroid WebView FlatList SectionList VirtualizedList';

/* Define a getter for each alias which simply gets the reactNative component
 * and passes it to styled */
aliases.split(/\s+/m).forEach(function (alias) {
  return Object.defineProperty(styled, alias, {
    enumerable: true,
    configurable: false,
    get: function get() {
      return styled(_reactNative2.default[alias]);
    }
  });
});

exports.css = _css2.default;
exports.ThemeProvider = _ThemeProvider2.default;
exports.withTheme = _withTheme2.default;
exports.default = styled;