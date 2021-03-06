(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kotlin-css'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlin-css'.");
    }root['kotlin-css'] = factory(typeof this['kotlin-css'] === 'undefined' ? {} : this['kotlin-css'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var StringBuilder_init_0 = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  var equals = Kotlin.equals;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var coerceIn = Kotlin.kotlin.ranges.coerceIn_nig4hr$;
  var coerceIn_0 = Kotlin.kotlin.ranges.coerceIn_e4yvb3$;
  var roundToInt = Kotlin.kotlin.math.roundToInt_yrwdxr$;
  var RegexOption = Kotlin.kotlin.text.RegexOption;
  var Regex_init_0 = Kotlin.kotlin.text.Regex_init_sb3q2$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var substringBefore = Kotlin.kotlin.text.substringBefore_j4ogox$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var math = Kotlin.kotlin.math;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var substringBefore_0 = Kotlin.kotlin.text.substringBefore_8cymmc$;
  var numberToInt = Kotlin.numberToInt;
  var endsWith_0 = Kotlin.kotlin.text.endsWith_sgbm27$;
  var toInt_0 = Kotlin.kotlin.text.toInt_6ic1pp$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  var contains = Kotlin.kotlin.text.contains_li3zpu$;
  var JsMath = Math;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var joinToString_0 = Kotlin.kotlin.collections.joinToString_fmv235$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var toString_0 = Kotlin.toString;
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  CSSBuilder.prototype = Object.create(StyledElement.prototype);
  CSSBuilder.prototype.constructor = CSSBuilder;
  LinearDimension.prototype = Object.create(CssValue.prototype);
  LinearDimension.prototype.constructor = LinearDimension;
  Color.prototype = Object.create(CssValue.prototype);
  Color.prototype.constructor = Color;
  QuotedString.prototype = Object.create(CssValue.prototype);
  QuotedString.prototype.constructor = QuotedString;
  Animations.prototype = Object.create(StyleList.prototype);
  Animations.prototype.constructor = Animations;
  BoxShadows.prototype = Object.create(StyleList.prototype);
  BoxShadows.prototype.constructor = BoxShadows;
  Transforms.prototype = Object.create(StyleList.prototype);
  Transforms.prototype.constructor = Transforms;
  Transitions.prototype = Object.create(StyleList.prototype);
  Transitions.prototype.constructor = Transitions;
  function Rule(selector, passStaticClassesToParent, block) {
    if (passStaticClassesToParent === void 0)
      passStaticClassesToParent = false;
    this.selector = selector;
    this.passStaticClassesToParent = passStaticClassesToParent;
    this.block = block;
  }
  Rule.$metadata$ = {kind: Kind_CLASS, simpleName: 'Rule', interfaces: []};
  Rule.prototype.component1 = function () {
    return this.selector;
  };
  Rule.prototype.component2 = function () {
    return this.passStaticClassesToParent;
  };
  Rule.prototype.component3 = function () {
    return this.block;
  };
  Rule.prototype.copy_odffru$ = function (selector, passStaticClassesToParent, block) {
    return new Rule(selector === void 0 ? this.selector : selector, passStaticClassesToParent === void 0 ? this.passStaticClassesToParent : passStaticClassesToParent, block === void 0 ? this.block : block);
  };
  Rule.prototype.toString = function () {
    return 'Rule(selector=' + Kotlin.toString(this.selector) + (', passStaticClassesToParent=' + Kotlin.toString(this.passStaticClassesToParent)) + (', block=' + Kotlin.toString(this.block)) + ')';
  };
  Rule.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.selector) | 0;
    result = result * 31 + Kotlin.hashCode(this.passStaticClassesToParent) | 0;
    result = result * 31 + Kotlin.hashCode(this.block) | 0;
    return result;
  };
  Rule.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.selector, other.selector) && Kotlin.equals(this.passStaticClassesToParent, other.passStaticClassesToParent) && Kotlin.equals(this.block, other.block)))));
  };
  function RuleContainer() {
  }
  RuleContainer.prototype.buildRules_s47sd7$ = function ($receiver, indent) {
    var resolvedRules = LinkedHashMap_init();
    var tmp$;
    tmp$ = this.rules.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var selector = element.component1(), passStaticClassesToParent = element.component2(), block = element.component3();
      if (!resolvedRules.containsKey_11rb$(selector)) {
        var value = new CSSBuilder(indent + '  ', false, passStaticClassesToParent ? this : null);
        resolvedRules.put_xwzc9p$(selector, value);
      }var rule = ensureNotNull(resolvedRules.get_11rb$(selector));
      block(rule);
    }
    var tmp$_0;
    tmp$_0 = resolvedRules.entries.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      $receiver.append_pdl1vj$(element_0.key + ' {' + '\n');
      $receiver.append_s8jyv4$(element_0.value);
      $receiver.append_pdl1vj$('}\n');
    }
    var tmp$_1;
    tmp$_1 = this.multiRules.iterator();
    while (tmp$_1.hasNext()) {
      var element_1 = tmp$_1.next();
      var selector_0 = element_1.component1(), passStaticClassesToParent_0 = element_1.component2(), block_0 = element_1.component3();
      var $receiver_0 = new CSSBuilder(indent + '  ', false, passStaticClassesToParent_0 ? this : null);
      block_0($receiver_0);
      var blockBuilder = $receiver_0;
      $receiver.append_pdl1vj$(selector_0 + ' {' + '\n');
      $receiver.append_s8jyv4$(blockBuilder);
      $receiver.append_pdl1vj$('}\n');
    }
  };
  RuleContainer.prototype.rule_xk38i9$ = function (selector, block) {
    return this.rule_4mtxvz$(selector, false, void 0, block);
  };
  RuleContainer.prototype.rule_4mtxvz$$default = function (selector, passStaticClassesToParent, repeatable, block) {
    var $receiver = new Rule(selector, passStaticClassesToParent, block);
    (repeatable ? this.multiRules : this.rules).add_11rb$($receiver);
    return $receiver;
  };
  RuleContainer.prototype.rule_4mtxvz$ = function (selector, passStaticClassesToParent, repeatable, block, callback$default) {
    if (repeatable === void 0)
      repeatable = false;
    return callback$default ? callback$default(selector, passStaticClassesToParent, repeatable, block) : this.rule_4mtxvz$$default(selector, passStaticClassesToParent, repeatable, block);
  };
  RuleContainer.$metadata$ = {kind: Kind_INTERFACE, simpleName: 'RuleContainer', interfaces: []};
  function CSSBuilder(indent, allowClasses, parent) {
    CSSBuilder$Companion_getInstance();
    if (indent === void 0)
      indent = '';
    if (allowClasses === void 0)
      allowClasses = true;
    if (parent === void 0)
      parent = null;
    StyledElement.call(this);
    this.indent = indent;
    this.allowClasses = allowClasses;
    this.parent = parent;
    this.classes = ArrayList_init();
    this.styleName = ArrayList_init();
    this.rules_tsqyll$_0 = ArrayList_init();
    this.multiRules_jdwv7c$_0 = ArrayList_init();
  }
  CSSBuilder.prototype.toString = function () {
    var $receiver = StringBuilder_init();
    var tmp$;
    tmp$ = this.declarations.entries.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      $receiver.append_pdl1vj$(hyphenize(element.key) + ': ' + element.value.toString() + ';' + '\n');
    }
    this.buildRules_s47sd7$($receiver, this.indent);
    return $receiver.toString();
  };
  Object.defineProperty(CSSBuilder.prototype, 'rules', {configurable: true, get: function () {
    return this.rules_tsqyll$_0;
  }});
  Object.defineProperty(CSSBuilder.prototype, 'multiRules', {configurable: true, get: function () {
    return this.multiRules_jdwv7c$_0;
  }});
  CSSBuilder.prototype.invoke_32jdrg$ = function ($receiver, block) {
    return this.rule_4mtxvz$($receiver, false, void 0, block);
  };
  CSSBuilder.prototype.invoke_30ubnp$ = function ($receiver, block) {
    return this.invoke_32jdrg$($receiver.tagName, block);
  };
  CSSBuilder.prototype.active_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:active', block);
  };
  CSSBuilder.prototype.checked_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:checked', block);
  };
  CSSBuilder.prototype.default_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:default', block);
  };
  CSSBuilder.prototype.disabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:disabled', block);
  };
  CSSBuilder.prototype.empty_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:empty', block);
  };
  CSSBuilder.prototype.enabled_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:enabled', block);
  };
  CSSBuilder.prototype.firstChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-child', block);
  };
  CSSBuilder.prototype.firstOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:first-of-type', block);
  };
  CSSBuilder.prototype.focus_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus', block);
  };
  CSSBuilder.prototype.focusVisible_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus-visible', block);
  };
  CSSBuilder.prototype.focusWithin_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:focus-within', block);
  };
  CSSBuilder.prototype.hover_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:hover', block);
  };
  CSSBuilder.prototype.indeterminate_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:indeterminate', block);
  };
  CSSBuilder.prototype.inRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:in-range', block);
  };
  CSSBuilder.prototype.invalid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:invalid', block);
  };
  CSSBuilder.prototype.lastChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-child', block);
  };
  CSSBuilder.prototype.lastOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:last-of-type', block);
  };
  CSSBuilder.prototype.link_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:link', block);
  };
  CSSBuilder.prototype.not_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:not(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastChild_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-child(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthLastOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-last-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.nthOfType_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('&:nth-of-type(' + selector + ')', block);
  };
  CSSBuilder.prototype.onlyChild_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-child', block);
  };
  CSSBuilder.prototype.onlyOfType_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:only-of-type', block);
  };
  CSSBuilder.prototype.optional_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:optional', block);
  };
  CSSBuilder.prototype.outOfRange_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:out-of-range', block);
  };
  CSSBuilder.prototype.readOnly_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-only', block);
  };
  CSSBuilder.prototype.readWrite_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:read-write', block);
  };
  CSSBuilder.prototype.required_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:required', block);
  };
  CSSBuilder.prototype.valid_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:valid', block);
  };
  CSSBuilder.prototype.visited_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&:visited', block);
  };
  CSSBuilder.prototype.children_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    return this.invoke_32jdrg$('& > ' + (selector != null ? selector : '*'), block);
  };
  CSSBuilder.prototype.descendants_fcku8i$ = function (selector, block) {
    if (selector === void 0)
      selector = null;
    return this.invoke_32jdrg$('& ' + (selector != null ? selector : '*'), block);
  };
  CSSBuilder.prototype.ancestorHover_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$(selector + ':hover &&', block);
  };
  function CSSBuilder$after$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.after_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::after', CSSBuilder$after$lambda(block));
  };
  function CSSBuilder$before$lambda(closure$block) {
    return function ($receiver) {
      set_content($receiver, get_quoted(''));
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.before_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('&::before', CSSBuilder$before$lambda(block));
  };
  CSSBuilder.prototype.placeholder_sa4rfh$ = function (block) {
    this.invoke_32jdrg$('&::placeholder', block);
    this.invoke_32jdrg$('&::-webkit-input-placeholder', block);
    this.invoke_32jdrg$('&::-moz-placeholder', block);
    this.invoke_32jdrg$('&::-ms-input-placeholder', block);
    this.invoke_32jdrg$('&:-moz-placeholder', block);
  };
  CSSBuilder.prototype.child_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('> ' + selector, block);
  };
  CSSBuilder.prototype.sibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('~ ' + selector, block);
  };
  CSSBuilder.prototype.adjacentSibling_xk38i9$ = function (selector, block) {
    return this.invoke_32jdrg$('+ ' + selector, block);
  };
  CSSBuilder.prototype.universal_sa4rfh$ = function (block) {
    return this.invoke_32jdrg$('*', block);
  };
  CSSBuilder.prototype.compareTo_er05um$ = function (rule) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.child_xk38i9$(rule.selector, rule.block);
    return 0;
  };
  CSSBuilder.prototype.not_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    var $receiver_0 = $receiver.selector;
    var regex = CSSBuilder$Companion_getInstance().NOT_REGEX_0;
    var replacement = '$1:not($2)';
    this.invoke_32jdrg$(regex.replace_x2uqeu$($receiver_0, replacement), $receiver.block);
  };
  CSSBuilder.prototype.unaryPlus_v2gpjl$ = function ($receiver) {
    this.rules.removeAt_za3lpa$(get_lastIndex(this.rules));
    this.invoke_32jdrg$('&.' + $receiver.selector, $receiver.block);
  };
  CSSBuilder.prototype.specific_api79v$ = function (specificity, block) {
    if (specificity === void 0)
      specificity = 2;
    return this.rule_4mtxvz$(repeat('&', specificity), true, void 0, block);
  };
  CSSBuilder.prototype.prefix_xk38i9$ = function (selector, block) {
    this.invoke_32jdrg$(selector + ' &&', block);
  };
  CSSBuilder.prototype.media_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@media ' + query, block);
  };
  CSSBuilder.prototype.supports_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@supports ' + query, block);
  };
  CSSBuilder.prototype.container_xk38i9$ = function (query, block) {
    return this.invoke_32jdrg$('@container ' + query, block);
  };
  CSSBuilder.prototype.fontFace_sa4rfh$ = function (block) {
    return this.rule_4mtxvz$('@font-face', false, true, block);
  };
  function CSSBuilder$retina$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.retina_sa4rfh$ = function (block) {
    this.media_xk38i9$('(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)', CSSBuilder$retina$lambda(block));
  };
  function CSSBuilder$root$lambda(closure$block) {
    return function ($receiver) {
      closure$block($receiver);
      return Unit;
    };
  }
  CSSBuilder.prototype.root_sa4rfh$ = function (block) {
    this.invoke_32jdrg$(':root', CSSBuilder$root$lambda(block));
  };
  CSSBuilder.prototype.setCustomProperty_lwowle$ = function (name, value) {
    this.put_puj7f4$('--' + name, value.value);
  };
  CSSBuilder.prototype.min_5utlym$ = function (v1, v2) {
    return new LinearDimension('min(' + v1 + ', ' + v2 + ')');
  };
  CSSBuilder.prototype.max_5utlym$ = function (v1, v2) {
    return new LinearDimension('max(' + v1 + ', ' + v2 + ')');
  };
  CSSBuilder.prototype.clamp_me7l17$ = function (min, max, preferred) {
    return new LinearDimension('clamp(' + min + ', ' + max + ', ' + preferred + ')');
  };
  CSSBuilder.prototype.unaryPlus_ocqyl0$ = function ($receiver) {
    $receiver(this);
  };
  CSSBuilder.prototype.unaryPlus_pdl1vz$ = function ($receiver) {
    this.addClass_0($receiver);
  };
  CSSBuilder.prototype.unaryPlus_a3w2bl$ = function ($receiver) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      this.addClass_0(element);
    }
  };
  CSSBuilder.prototype.unaryPlus_sdeqdk$ = function ($receiver) {
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.addClass_0(element);
    }
  };
  CSSBuilder.prototype.addClass_0 = function (className) {
    var tmp$, tmp$_0;
    if (this.allowClasses) {
      this.classes.add_11rb$(className);
    } else {
      (tmp$_0 = Kotlin.isType(tmp$ = this.parent, CSSBuilder) ? tmp$ : null) != null ? (tmp$_0.addClass_0(className), Unit) : null;
    }
  };
  function CSSBuilder$Companion() {
    CSSBuilder$Companion_instance = this;
    this.NOT_REGEX_md429h$_0 = lazy(CSSBuilder$Companion$NOT_REGEX$lambda);
  }
  Object.defineProperty(CSSBuilder$Companion.prototype, 'NOT_REGEX_0', {configurable: true, get: function () {
    return this.NOT_REGEX_md429h$_0.value;
  }});
  function CSSBuilder$Companion$NOT_REGEX$lambda() {
    return Regex_init('^(&?)(.*)$');
  }
  CSSBuilder$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var CSSBuilder$Companion_instance = null;
  function CSSBuilder$Companion_getInstance() {
    if (CSSBuilder$Companion_instance === null) {
      new CSSBuilder$Companion();
    }return CSSBuilder$Companion_instance;
  }
  CSSBuilder.$metadata$ = {kind: Kind_CLASS, simpleName: 'CSSBuilder', interfaces: [RuleContainer, StyledElement]};
  var CAPITAL_LETTER;
  function hyphenize($receiver) {
    var regex = CAPITAL_LETTER;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init_0(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        sb.append_gw00v9$('-' + foundMatch.value.toLowerCase());
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  }
  function times($receiver, n) {
    return repeat($receiver, n);
  }
  var ZERO;
  function LinearDimension(value) {
    LinearDimension$Companion_getInstance();
    CssValue.call(this, value);
    this.value_nj4rtk$_0 = value;
  }
  Object.defineProperty(LinearDimension.prototype, 'value', {get: function () {
    return this.value_nj4rtk$_0;
  }});
  function LinearDimension$Companion() {
    LinearDimension$Companion_instance = this;
    this.none = new LinearDimension('none');
    this.auto = new LinearDimension('auto');
    this.initial = new LinearDimension('initial');
    this.inherit = new LinearDimension('inherit');
    this.available = new LinearDimension('available');
    this.fillAvailable = new LinearDimension('fill-available');
    this.borderBox = new LinearDimension('border-box');
    this.contentBox = new LinearDimension('content-box');
    this.maxContent = new LinearDimension('max-content');
    this.minContent = new LinearDimension('min-content');
    this.fitContent = new LinearDimension('fit-content');
  }
  LinearDimension$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var LinearDimension$Companion_instance = null;
  function LinearDimension$Companion_getInstance() {
    if (LinearDimension$Companion_instance === null) {
      new LinearDimension$Companion();
    }return LinearDimension$Companion_instance;
  }
  Object.defineProperty(LinearDimension.prototype, 'valueCalcSafe_0', {configurable: true, get: function () {
    return equals(this.value, ZERO) ? '0px' : this.value;
  }});
  LinearDimension.prototype.unaryMinus = function () {
    var tmp$;
    if (startsWith(this.value, 45)) {
      tmp$ = this.value.substring(1);
    } else if (startsWith_0(this.value, 'calc'))
      tmp$ = 'calc(0px - ' + this.value + ')';
    else if (equals(this.value, ZERO))
      tmp$ = this.value;
    else
      tmp$ = '-' + this.value;
    return new LinearDimension(tmp$);
  };
  LinearDimension.prototype.plus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' + ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.minus_tco10h$ = function (other) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' - ' + other.valueCalcSafe_0 + ')');
  };
  LinearDimension.prototype.times_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' * ' + times.toString() + ')');
  };
  LinearDimension.prototype.div_3p81yu$ = function (times) {
    return new LinearDimension('calc(' + this.valueCalcSafe_0 + ' / ' + times.toString() + ')');
  };
  LinearDimension.$metadata$ = {kind: Kind_CLASS, simpleName: 'LinearDimension', interfaces: [CssValue]};
  function value(number, unit) {
    return equals(number, 0) ? ZERO : number.toString() + unit;
  }
  function get_px($receiver) {
    return new LinearDimension(value($receiver, 'px'));
  }
  function CssValue(value) {
    this.value_tqttmh$_0 = value;
  }
  Object.defineProperty(CssValue.prototype, 'value', {get: function () {
    return this.value_tqttmh$_0;
  }});
  CssValue.prototype.toString = function () {
    return this.value;
  };
  CssValue.$metadata$ = {kind: Kind_CLASS, simpleName: 'CssValue', interfaces: []};
  var Align$initial_instance;
  var Align$inherit_instance;
  var Align$unset_instance;
  var Align$auto_instance;
  var Align$stretch_instance;
  var Align$center_instance;
  var Align$start_instance;
  var Align$end_instance;
  var Align$selfStart_instance;
  var Align$selfEnd_instance;
  var Align$flexStart_instance;
  var Align$flexEnd_instance;
  var Align$baseline_instance;
  var Appearance$none_instance;
  var Appearance$auto_instance;
  var Appearance$menulistButton_instance;
  var Appearance$textfield_instance;
  var Appearance$button_instance;
  var Appearance$searchfield_instance;
  var Appearance$textarea_instance;
  var Appearance$pushButton_instance;
  var Appearance$sliderHorizontal_instance;
  var Appearance$checkbox_instance;
  var Appearance$radio_instance;
  var Appearance$squareButton_instance;
  var Appearance$menulist_instance;
  var Appearance$listbox_instance;
  var Appearance$meter_instance;
  var Appearance$progressBar_instance;
  var JustifyContent$initial_instance;
  var JustifyContent$inherit_instance;
  var JustifyContent$unset_instance;
  var JustifyContent$center_instance;
  var JustifyContent$start_instance;
  var JustifyContent$end_instance;
  var JustifyContent$flexStart_instance;
  var JustifyContent$flexEnd_instance;
  var JustifyContent$left_instance;
  var JustifyContent$right_instance;
  var JustifyContent$baseline_instance;
  var JustifyContent$firstBaseline_instance;
  var JustifyContent$lastBaseline_instance;
  var JustifyContent$spaceBetween_instance;
  var JustifyContent$spaceAround_instance;
  var JustifyContent$spaceEvenly_instance;
  var JustifyContent$stretch_instance;
  var JustifyContent$safeCenter_instance;
  var JustifyContent$unsafeCenter_instance;
  var JustifyItems$initial_instance;
  var JustifyItems$inherit_instance;
  var JustifyItems$unset_instance;
  var JustifyItems$auto_instance;
  var JustifyItems$normal_instance;
  var JustifyItems$stretch_instance;
  var JustifyItems$center_instance;
  var JustifyItems$start_instance;
  var JustifyItems$end_instance;
  var JustifyItems$flexStart_instance;
  var JustifyItems$flexEnd_instance;
  var JustifyItems$selfStart_instance;
  var JustifyItems$selfEnd_instance;
  var JustifyItems$left_instance;
  var JustifyItems$right_instance;
  var JustifyItems$baseline_instance;
  var BackgroundRepeat$initial_instance;
  var BackgroundRepeat$inherit_instance;
  var BackgroundRepeat$unset_instance;
  var BackgroundRepeat$repeatX_instance;
  var BackgroundRepeat$repeatY_instance;
  var BackgroundRepeat$repeat_instance;
  var BackgroundRepeat$noRepeat_instance;
  var BackgroundAttachment$initial_instance;
  var BackgroundAttachment$inherit_instance;
  var BackgroundAttachment$unset_instance;
  var BackgroundAttachment$scroll_instance;
  var BackgroundAttachment$fixed_instance;
  var BackgroundAttachment$local_instance;
  var BackgroundClip$initial_instance;
  var BackgroundClip$inherit_instance;
  var BackgroundClip$unset_instance;
  var BackgroundClip$borderBox_instance;
  var BackgroundClip$paddingBox_instance;
  var BackgroundClip$contentBox_instance;
  var BackgroundClip$text_instance;
  var BackgroundOrigin$initial_instance;
  var BackgroundOrigin$inherit_instance;
  var BackgroundOrigin$unset_instance;
  var BackgroundOrigin$borderBox_instance;
  var BackgroundOrigin$paddingBox_instance;
  var BackgroundOrigin$contentBox_instance;
  var BorderCollapse$initial_instance;
  var BorderCollapse$inherit_instance;
  var BorderCollapse$unset_instance;
  var BorderCollapse$separate_instance;
  var BorderCollapse$collapse_instance;
  var BorderStyle$initial_instance;
  var BorderStyle$inherit_instance;
  var BorderStyle$unset_instance;
  var BorderStyle$none_instance;
  var BorderStyle$dotted_instance;
  var BorderStyle$dashed_instance;
  var BorderStyle$solid_instance;
  var BoxSizing$initial_instance;
  var BoxSizing$inherit_instance;
  var BoxSizing$unset_instance;
  var BoxSizing$contentBox_instance;
  var BoxSizing$borderBox_instance;
  var Clear$initial_instance;
  var Clear$inherit_instance;
  var Clear$unset_instance;
  var Clear$none_instance;
  var Clear$left_instance;
  var Clear$right_instance;
  var Clear$both_instance;
  function Color(value) {
    Color$Companion_getInstance();
    CssValue.call(this, value);
    this.value_dt80hi$_0 = value;
    this.rgb_0 = null;
  }
  Object.defineProperty(Color.prototype, 'value', {get: function () {
    return this.value_dt80hi$_0;
  }});
  function Color$Companion() {
    Color$Companion_instance = this;
    this.initial = new Color('initial');
    this.inherit = new Color('inherit');
    this.unset = new Color('unset');
    this.transparent = new Color('transparent');
    this.currentColor = new Color('currentColor');
    this.aliceBlue = Color_init('aliceblue', '#f0f8ff');
    this.antiqueWhite = Color_init('antiquewhite', '#faebd7');
    this.aqua = Color_init('aqua', '#00ffff');
    this.aquamarine = Color_init('aquamarine', '#7fffd4');
    this.azure = Color_init('azure', '#f0ffff');
    this.beige = Color_init('beige', '#f5f5dc');
    this.bisque = Color_init('bisque', '#ffe4c4');
    this.black = Color_init('black', '#000000');
    this.blanchedAlmond = Color_init('blanchedalmond', '#ffebcd');
    this.blue = Color_init('blue', '#0000ff');
    this.blueViolet = Color_init('blueviolet', '#8a2be2');
    this.brown = Color_init('brown', '#a52a2a');
    this.burlyWood = Color_init('burlywood', '#deb887');
    this.cadetBlue = Color_init('cadetblue', '#5f9ea0');
    this.chartreuse = Color_init('chartreuse', '#7fff00');
    this.chocolate = Color_init('chocolate', '#d2691e');
    this.coral = Color_init('coral', '#ff7f50');
    this.cornflowerBlue = Color_init('cornflowerblue', '#6495ed');
    this.cornsilk = Color_init('cornsilk', '#fff8dc');
    this.crimson = Color_init('crimson', '#dc143c');
    this.cyan = Color_init('cyan', '#00ffff');
    this.darkBlue = Color_init('darkblue', '#00008b');
    this.darkCyan = Color_init('darkcyan', '#008b8b');
    this.darkGoldenrod = Color_init('darkgoldenrod', '#b8860b');
    this.darkGray = Color_init('darkgray', '#a9a9a9');
    this.darkGreen = Color_init('darkgreen', '#006400');
    this.darkGrey = Color_init('darkgrey', '#a9a9a9');
    this.darkKhaki = Color_init('darkkhaki', '#bdb76b');
    this.darkMagenta = Color_init('darkmagenta', '#8b008b');
    this.darkOliveGreen = Color_init('darkolivegreen', '#556b2f');
    this.darkOrange = Color_init('darkorange', '#ff8c00');
    this.darkOrchid = Color_init('darkorchid', '#9932cc');
    this.darkRed = Color_init('darkred', '#8b0000');
    this.darkSalmon = Color_init('darksalmon', '#e9967a');
    this.darkSeaGreen = Color_init('darkseagreen', '#8fbc8f');
    this.darkSlateBlue = Color_init('darkslateblue', '#483d8b');
    this.darkSlateGray = Color_init('darkslategray', '#2f4f4f');
    this.darkSlateGrey = Color_init('darkslategrey', '#2f4f4f');
    this.darkTurquoise = Color_init('darkturquoise', '#00ced1');
    this.darkViolet = Color_init('darkviolet', '#9400d3');
    this.deepPink = Color_init('deeppink', '#ff1493');
    this.deepSkyBlue = Color_init('deepskyblue', '#00bfff');
    this.dimGray = Color_init('dimgray', '#696969');
    this.dimGrey = Color_init('dimgrey', '#696969');
    this.dodgerBlue = Color_init('dodgerblue', '#1e90ff');
    this.firebrick = Color_init('firebrick', '#b22222');
    this.floralWhite = Color_init('floralwhite', '#fffaf0');
    this.forestGreen = Color_init('forestgreen', '#228b22');
    this.fuchsia = Color_init('fuchsia', '#ff00ff');
    this.gainsboro = Color_init('gainsboro', '#dcdcdc');
    this.ghostWhite = Color_init('ghostwhite', '#f8f8ff');
    this.gold = Color_init('gold', '#ffd700');
    this.goldenrod = Color_init('goldenrod', '#daa520');
    this.gray = Color_init('gray', '#808080');
    this.green = Color_init('green', '#008000');
    this.greenYellow = Color_init('greenyellow', '#adff2f');
    this.grey = Color_init('grey', '#808080');
    this.honeydew = Color_init('honeydew', '#f0fff0');
    this.hotPink = Color_init('hotpink', '#ff69b4');
    this.indianRed = Color_init('indianred', '#cd5c5c');
    this.indigo = Color_init('indigo', '#4b0082');
    this.ivory = Color_init('ivory', '#fffff0');
    this.khaki = Color_init('khaki', '#f0e68c');
    this.lavender = Color_init('lavender', '#e6e6fa');
    this.lavenderBlush = Color_init('lavenderblush', '#fff0f5');
    this.lawnGreen = Color_init('lawngreen', '#7cfc00');
    this.lemonChiffon = Color_init('lemonchiffon', '#fffacd');
    this.lightBlue = Color_init('lightblue', '#add8e6');
    this.lightCoral = Color_init('lightcoral', '#f08080');
    this.lightCyan = Color_init('lightcyan', '#e0ffff');
    this.lightGoldenrodYellow = Color_init('lightgoldenrodyellow', '#fafad2');
    this.lightGray = Color_init('lightgray', '#d3d3d3');
    this.lightGreen = Color_init('lightgreen', '#90ee90');
    this.lightGrey = Color_init('lightgrey', '#d3d3d3');
    this.lightPink = Color_init('lightpink', '#ffb6c1');
    this.lightSalmon = Color_init('lightsalmon', '#ffa07a');
    this.lightSeaGreen = Color_init('lightseagreen', '#20b2aa');
    this.lightSkyBlue = Color_init('lightskyblue', '#87cefa');
    this.lightSlateGray = Color_init('lightslategray', '#778899');
    this.lightSlateGrey = Color_init('lightslategrey', '#778899');
    this.lightSteelBlue = Color_init('lightsteelblue', '#b0c4de');
    this.lightYellow = Color_init('lightyellow', '#ffffe0');
    this.lime = Color_init('lime', '#00ff00');
    this.limeGreen = Color_init('limegreen', '#32cd32');
    this.linen = Color_init('linen', '#faf0e6');
    this.magenta = Color_init('magenta', '#ff00ff');
    this.maroon = Color_init('maroon', '#800000');
    this.mediumAquamarine = Color_init('mediumaquamarine', '#66cdaa');
    this.mediumBlue = Color_init('mediumblue', '#0000cd');
    this.mediumOrchid = Color_init('mediumorchid', '#ba55d3');
    this.mediumPurple = Color_init('mediumpurple', '#9370d8');
    this.mediumSeaGreen = Color_init('mediumseagreen', '#3cb371');
    this.mediumSlateBlue = Color_init('mediumslateblue', '#7b68ee');
    this.mediumSpringGreen = Color_init('mediumspringgreen', '#00fa9a');
    this.mediumTurquoise = Color_init('mediumturquoise', '#48d1cc');
    this.mediumVioletRed = Color_init('mediumvioletred', '#c71585');
    this.midnightBlue = Color_init('midnightblue', '#191970');
    this.mintCream = Color_init('mintcream', '#f5fffa');
    this.mistyRose = Color_init('mistyrose', '#ffe4e1');
    this.moccasin = Color_init('moccasin', '#ffe4b5');
    this.navajoWhite = Color_init('navajowhite', '#ffdead');
    this.navy = Color_init('navy', '#000080');
    this.oldLace = Color_init('oldlace', '#fdf5e6');
    this.olive = Color_init('olive', '#808000');
    this.oliveDrab = Color_init('olivedrab', '#6b8e23');
    this.orange = Color_init('orange', '#ffa500');
    this.orangeRed = Color_init('orangered', '#ff4500');
    this.orchid = Color_init('orchid', '#da70d6');
    this.paleGoldenrod = Color_init('palegoldenrod', '#eee8aa');
    this.paleGreen = Color_init('palegreen', '#98fb98');
    this.paleTurquoise = Color_init('paleturquoise', '#afeeee');
    this.paleVioletRed = Color_init('palevioletred', '#db7093');
    this.papayaWhip = Color_init('papayawhip', '#ffefd5');
    this.peachPuff = Color_init('peachpuff', '#ffdab9');
    this.peru = Color_init('peru', '#cd853f');
    this.pink = Color_init('pink', '#ffc0cb');
    this.plum = Color_init('plum', '#dda0dd');
    this.powderBlue = Color_init('powderblue', '#b0e0e6');
    this.purple = Color_init('purple', '#800080');
    this.red = Color_init('red', '#ff0000');
    this.rosyBrown = Color_init('rosybrown', '#bc8f8f');
    this.royalBlue = Color_init('royalblue', '#4169e1');
    this.saddleBrown = Color_init('saddlebrown', '#8b4513');
    this.salmon = Color_init('salmon', '#fa8072');
    this.sandyBrown = Color_init('sandybrown', '#f4a460');
    this.seaGreen = Color_init('seagreen', '#2e8b57');
    this.seaShell = Color_init('seashell', '#fff5ee');
    this.sienna = Color_init('sienna', '#a0522d');
    this.silver = Color_init('silver', '#c0c0c0');
    this.skyBlue = Color_init('skyblue', '#87ceeb');
    this.slateBlue = Color_init('slateblue', '#6a5acd');
    this.slateGray = Color_init('slategray', '#708090');
    this.slateGrey = Color_init('slategrey', '#708090');
    this.snow = Color_init('snow', '#fffafa');
    this.springGreen = Color_init('springgreen', '#00ff7f');
    this.steelBlue = Color_init('steelblue', '#4682b4');
    this.tan = Color_init('tan', '#d2b48c');
    this.teal = Color_init('teal', '#008080');
    this.thistle = Color_init('thistle', '#d8bfd8');
    this.tomato = Color_init('tomato', '#ff6347');
    this.turquoise = Color_init('turquoise', '#40e0d0');
    this.violet = Color_init('violet', '#ee82ee');
    this.wheat = Color_init('wheat', '#f5deb3');
    this.white = Color_init('white', '#ffffff');
    this.whiteSmoke = Color_init('whitesmoke', '#f5f5f5');
    this.yellow = Color_init('yellow', '#ffff00');
    this.yellowGreen = Color_init('yellowgreen', '#9acd32');
    this.HSLA_REGEX_vl7rxf$_0 = lazy(Color$Companion$HSLA_REGEX$lambda);
    this.RGBA_REGEX_1amhwv$_0 = lazy(Color$Companion$RGBA_REGEX$lambda);
  }
  Color$Companion.prototype.normalizeFractionalPercent_14dthe$ = function (value) {
    return coerceIn(value, 0.0, 1.0);
  };
  Color$Companion.prototype.normalizePercent_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 100);
  };
  Color$Companion.prototype.normalizeRGB_za3lpa$ = function (value) {
    return coerceIn_0(value, 0, 255);
  };
  Color$Companion.prototype.normalizeHue_14dthe$ = function (value) {
    return roundToInt((value % 360 + 360) % 360);
  };
  Color$Companion.prototype.normalizeAlpha_14dthe$ = function (value) {
    return this.normalizeFractionalPercent_14dthe$(value);
  };
  Object.defineProperty(Color$Companion.prototype, 'HSLA_REGEX_0', {configurable: true, get: function () {
    return this.HSLA_REGEX_vl7rxf$_0.value;
  }});
  Object.defineProperty(Color$Companion.prototype, 'RGBA_REGEX_0', {configurable: true, get: function () {
    return this.RGBA_REGEX_1amhwv$_0.value;
  }});
  function Color$Companion$HSLA_REGEX$lambda() {
    return Regex_init_0('^hsla?\\((-?[0-9]+\\.?[0-9]*(?:deg|grad|rad|turn)?)\\s*[, ]?\\s*(\\d{1,3})%\\s*[, ]\\s*(\\d{1,3})%\\s*[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption.IGNORE_CASE);
  }
  function Color$Companion$RGBA_REGEX$lambda() {
    return Regex_init_0('^rgba?\\((\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)\\s*[, ]\\s*(\\d{1,3}%?)[, ]?\\s*(\\d|(?:\\d?\\.\\d+))?\\)$', RegexOption.IGNORE_CASE);
  }
  Color$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Color$Companion_instance = null;
  function Color$Companion_getInstance() {
    if (Color$Companion_instance === null) {
      new Color$Companion();
    }return Color$Companion_instance;
  }
  Color.prototype.withAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver.alpha);
    } else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha) * $receiver_0.alpha);
    }
  };
  Color.prototype.changeAlpha_14dthe$ = function (alpha) {
    if (startsWith_0(this.value, 'hsl', true)) {
      var $receiver = this.fromHSLANotation_8be2vx$();
      return hsla($receiver.hue, $receiver.saturation, $receiver.lightness, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha));
    } else {
      var $receiver_0 = this.toRGBA_8be2vx$();
      return rgba($receiver_0.red, $receiver_0.green, $receiver_0.blue, Color$Companion_getInstance().normalizeAlpha_14dthe$(alpha));
    }
  };
  Color.prototype.blend_uu3z0h$ = function (backgroundColor) {
    var source = this.toRGBA_8be2vx$();
    var background = backgroundColor.toRGBA_8be2vx$();
    var targetR = (1 - source.alpha) * background.red + source.alpha * source.red;
    var targetG = (1 - source.alpha) * background.green + source.alpha * source.green;
    var targetB = (1 - source.alpha) * background.blue + source.alpha * source.blue;
    return rgb(roundToInt(targetR), roundToInt(targetG), roundToInt(targetB));
  };
  Color.prototype.lighten_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var lightness = hsla_0.lightness + roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(lightness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.darken_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var darkness = hsla_0.lightness - roundToInt(hsla_0.lightness * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(darkness));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.saturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var saturation = hsla_0.saturation + roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(saturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  Color.prototype.desaturate_za3lpa$ = function (percent) {
    var tmp$;
    var isHSLA = startsWith_0(this.value, 'hsl', true);
    var hsla_0 = isHSLA ? this.fromHSLANotation_8be2vx$() : this.toRGBA_8be2vx$().asHSLA();
    var desaturation = hsla_0.saturation - roundToInt(hsla_0.saturation * (Color$Companion_getInstance().normalizePercent_za3lpa$(percent) / 100.0)) | 0;
    var newHSLa = hsla_0.copy_gb4hak$(void 0, Color$Companion_getInstance().normalizePercent_za3lpa$(desaturation));
    if (isHSLA) {
      tmp$ = hsla(newHSLa.hue, newHSLa.saturation, newHSLa.lightness, newHSLa.alpha);
    } else {
      var $receiver = newHSLa.asRGBA();
      tmp$ = rgba($receiver.red, $receiver.green, $receiver.blue, $receiver.alpha);
    }
    return tmp$;
  };
  function Color$RGBA(red, green, blue, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  Color$RGBA.prototype.asHSLA = function () {
    var tmp$;
    var r = this.red / 255.0;
    var g = this.green / 255.0;
    var b = this.blue / 255.0;
    var cMax = JsMath.max(r, g, b);
    var cMin = JsMath.min(r, g, b);
    var chroma = cMax - cMin;
    var lg = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$((cMax + cMin) / 2);
    var tmp$_0;
    if (chroma !== 0.0) {
      var tmp$_1 = Color$Companion_getInstance();
      var x = 2.0 * lg - 1.0;
      tmp$_0 = tmp$_1.normalizeFractionalPercent_14dthe$(chroma / (1.0 - JsMath.abs(x)));
    } else
      tmp$_0 = 0.0;
    var s = tmp$_0;
    if (cMax === cMin)
      tmp$ = 0.0;
    else if (cMax === r)
      tmp$ = 60 * ((g - b) / chroma % 6.0);
    else if (cMax === g)
      tmp$ = 60 * ((b - r) / chroma + 2);
    else if (cMax === b)
      tmp$ = 60 * ((r - g) / chroma + 4);
    else {
      throw IllegalStateException_init('Unexpected value for max'.toString());
    }
    var h = tmp$;
    return new Color$HSLA(Color$Companion_getInstance().normalizeHue_14dthe$(h), roundToInt(s * 100), roundToInt(lg * 100), this.alpha);
  };
  Color$RGBA.$metadata$ = {kind: Kind_CLASS, simpleName: 'RGBA', interfaces: []};
  Color$RGBA.prototype.component1 = function () {
    return this.red;
  };
  Color$RGBA.prototype.component2 = function () {
    return this.green;
  };
  Color$RGBA.prototype.component3 = function () {
    return this.blue;
  };
  Color$RGBA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$RGBA.prototype.copy_gb4hak$ = function (red, green, blue, alpha) {
    return new Color$RGBA(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  Color$RGBA.prototype.toString = function () {
    return 'RGBA(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$RGBA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$RGBA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$HSLA(hue, saturation, lightness, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    this.hue = hue;
    this.saturation = saturation;
    this.lightness = lightness;
    this.alpha = alpha;
  }
  function Color$HSLA$asRGBA$hueToRGB(m1, m2, h) {
    var tmp$;
    var hu = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    if (hu < 1.0 / 6)
      tmp$ = m1 + (m2 - m1) * 6 * hu;
    else if (hu < 1.0 / 2)
      tmp$ = m2;
    else if (hu < 2.0 / 3)
      tmp$ = m1 + (m2 - m1) * 6 * (2.0 / 3 - hu);
    else
      tmp$ = m1;
    return tmp$;
  }
  Color$HSLA.prototype.asRGBA = function () {
    var hueToRGB = Color$HSLA$asRGBA$hueToRGB;
    if (this.saturation === 0)
      return new Color$RGBA(this.lightness, this.lightness, this.lightness);
    var h = this.hue % 360.0 / 360.0;
    var s = this.saturation / 100.0;
    var lg = this.lightness / 100.0;
    var m2 = lg < 0.5 ? lg * (1 + s) : lg + s - lg * s;
    var m1 = 2 * lg - m2;
    var r = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h + 1.0 / 3));
    var g = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h));
    var b = Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(hueToRGB(m1, m2, h - 1.0 / 3));
    return new Color$RGBA(roundToInt(r * 255), roundToInt(g * 255), roundToInt(b * 255), this.alpha);
  };
  Color$HSLA.$metadata$ = {kind: Kind_CLASS, simpleName: 'HSLA', interfaces: []};
  Color$HSLA.prototype.component1 = function () {
    return this.hue;
  };
  Color$HSLA.prototype.component2 = function () {
    return this.saturation;
  };
  Color$HSLA.prototype.component3 = function () {
    return this.lightness;
  };
  Color$HSLA.prototype.component4 = function () {
    return this.alpha;
  };
  Color$HSLA.prototype.copy_gb4hak$ = function (hue, saturation, lightness, alpha) {
    return new Color$HSLA(hue === void 0 ? this.hue : hue, saturation === void 0 ? this.saturation : saturation, lightness === void 0 ? this.lightness : lightness, alpha === void 0 ? this.alpha : alpha);
  };
  Color$HSLA.prototype.toString = function () {
    return 'HSLA(hue=' + Kotlin.toString(this.hue) + (', saturation=' + Kotlin.toString(this.saturation)) + (', lightness=' + Kotlin.toString(this.lightness)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  Color$HSLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hue) | 0;
    result = result * 31 + Kotlin.hashCode(this.saturation) | 0;
    result = result * 31 + Kotlin.hashCode(this.lightness) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  Color$HSLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hue, other.hue) && Kotlin.equals(this.saturation, other.saturation) && Kotlin.equals(this.lightness, other.lightness) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function Color$fromHSLANotation$getHSLParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected hsl or hsla notation, got ' + this$Color.value);
      }return tmp$_1;
    };
  }
  Color.prototype.fromHSLANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var match = Color$Companion_getInstance().HSLA_REGEX_0.find_905azu$(this.value);
    var getHSLParameter = Color$fromHSLANotation$getHSLParameter(match, this);
    var hueShape = getHSLParameter(1);
    if (endsWith(hueShape, 'grad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'grad')) * (9.0 / 10);
    else if (endsWith(hueShape, 'rad', true))
      tmp$ = toDouble(substringBefore(hueShape, 'rad')) * 180 / math.PI;
    else if (endsWith(hueShape, 'turn', true))
      tmp$ = toDouble(substringBefore(hueShape, 'turn')) * 360.0;
    else if (endsWith(hueShape, 'deg', true))
      tmp$ = toDouble(substringBefore(hueShape, 'deg'));
    else
      tmp$ = toDouble(hueShape);
    var hue = Color$Companion_getInstance().normalizeHue_14dthe$(tmp$);
    var saturation = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(2)));
    var lightness = Color$Companion_getInstance().normalizePercent_za3lpa$(toInt(getHSLParameter(3)));
    tmp$_4 = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = match != null ? match.groups : null) != null ? tmp$_0.get_za3lpa$(4) : null) != null ? tmp$_1.value : null) != null ? toDouble(tmp$_2) : null) != null ? tmp$_3 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_4);
    return new Color$HSLA(hue, saturation, lightness, alpha);
  };
  function Color$fromRGBANotation$getRGBParameter(closure$match, this$Color) {
    return function (index) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = (tmp$_0 = (tmp$ = closure$match != null ? closure$match.groups : null) != null ? tmp$.get_za3lpa$(index) : null) != null ? tmp$_0.value : null;
      if (tmp$_1 == null) {
        throw IllegalArgumentException_init('Expected rgb or rgba notation, got ' + this$Color.value);
      }var group = tmp$_1;
      if (endsWith_0(group, 37))
        tmp$_2 = numberToInt(Color$Companion_getInstance().normalizeFractionalPercent_14dthe$(toDouble(substringBefore_0(group, 37)) / 100.0) * 255.0);
      else
        tmp$_2 = Color$Companion_getInstance().normalizeRGB_za3lpa$(toInt(group));
      return tmp$_2;
    };
  }
  Color.prototype.fromRGBANotation_8be2vx$ = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var match = Color$Companion_getInstance().RGBA_REGEX_0.find_905azu$(this.value);
    var getRGBParameter = Color$fromRGBANotation$getRGBParameter(match, this);
    var red = getRGBParameter(1);
    var green = getRGBParameter(2);
    var blue = getRGBParameter(3);
    tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = match != null ? match.groups : null) != null ? tmp$.get_za3lpa$(4) : null) != null ? tmp$_0.value : null) != null ? toDouble(tmp$_1) : null) != null ? tmp$_2 : 1.0;
    var alpha = Color$Companion_getInstance().normalizeAlpha_14dthe$(tmp$_3);
    return new Color$RGBA(red, green, blue, alpha);
  };
  Color.prototype.toRGBA_8be2vx$ = function () {
    var tmp$, tmp$_0;
    var v = (tmp$ = this.rgb_0) != null ? tmp$ : this.value;
    if (startsWith_0(v, 'rgb'))
      tmp$_0 = this.fromRGBANotation_8be2vx$();
    else if (startsWith_0(v, '#') && v.length === 4)
      tmp$_0 = new Color$RGBA(toInt_0(times(String.fromCharCode(v.charCodeAt(1)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(2)), 2), 16), toInt_0(times(String.fromCharCode(v.charCodeAt(3)), 2), 16));
    else if (startsWith_0(v, '#') && (v.length === 7 || v.length === 9))
      tmp$_0 = new Color$RGBA(toInt_0(substring(v, new IntRange(1, 2)), 16), toInt_0(substring(v, new IntRange(3, 4)), 16), toInt_0(substring(v, new IntRange(5, 6)), 16));
    else
      throw IllegalArgumentException_init('Only hexadecimal, rgb, and rgba notations are accepted, got ' + v);
    return tmp$_0;
  };
  Color.$metadata$ = {kind: Kind_CLASS, simpleName: 'Color', interfaces: [CssValue]};
  function Color_init(value, rgb, $this) {
    $this = $this || Object.create(Color.prototype);
    Color.call($this, value);
    $this.rgb_0 = rgb;
    return $this;
  }
  function rgb(red, green, blue) {
    return new Color('rgb(' + red + ', ' + green + ', ' + blue + ')');
  }
  function rgba(red, green, blue, alpha) {
    return new Color('rgba(' + red + ', ' + green + ', ' + blue + ', ' + formatAlpha(alpha) + ')');
  }
  function hsla(hue, saturation, lightness, alpha) {
    return new Color('hsla(' + hue + ', ' + saturation + '%, ' + lightness + '%, ' + formatAlpha(alpha) + ')');
  }
  function formatAlpha(alpha) {
    var it = alpha.toString();
    return contains(it, '.') ? it : it + '.0';
  }
  var Contain$initial_instance;
  var Contain$inherit_instance;
  var Contain$unset_instance;
  var Contain$none_instance;
  var Contain$strict_instance;
  var Contain$content_instance;
  var Contain$size_instance;
  var Contain$layout_instance;
  var Contain$style_instance;
  var Contain$paint_instance;
  var Cursor$initial_instance;
  var Cursor$inherit_instance;
  var Cursor$unset_instance;
  var Cursor$auto_instance;
  var Cursor$default_instance;
  var Cursor$none_instance;
  var Cursor$contextMenu_instance;
  var Cursor$help_instance;
  var Cursor$pointer_instance;
  var Cursor$progress_instance;
  var Cursor$wait_instance;
  var Cursor$cell_instance;
  var Cursor$crosshair_instance;
  var Cursor$text_instance;
  var Cursor$verticalText_instance;
  var Cursor$alias_instance;
  var Cursor$copy_instance;
  var Cursor$move_instance;
  var Cursor$noDrop_instance;
  var Cursor$notAllowed_instance;
  var Cursor$grab_instance;
  var Cursor$grabbing_instance;
  var Cursor$colResize_instance;
  var Cursor$rowResize_instance;
  var Cursor$allScroll_instance;
  var Cursor$eResize_instance;
  var Cursor$nResize_instance;
  var Cursor$neResize_instance;
  var Cursor$nwResize_instance;
  var Cursor$sResize_instance;
  var Cursor$seResize_instance;
  var Cursor$swResize_instance;
  var Cursor$wResize_instance;
  var Cursor$ewResize_instance;
  var Cursor$nsResize_instance;
  var Cursor$neswResize_instance;
  var Cursor$nwseResize_instance;
  var Cursor$zoomIn_instance;
  var Cursor$zoomOut_instance;
  function QuotedString(value) {
    CssValue.call(this, value);
    this.value_eybwfw$_0 = value;
  }
  Object.defineProperty(QuotedString.prototype, 'value', {get: function () {
    return this.value_eybwfw$_0;
  }});
  QuotedString.prototype.toString = function () {
    return "'" + this.value + "'";
  };
  QuotedString.$metadata$ = {kind: Kind_CLASS, simpleName: 'QuotedString', interfaces: [CssValue]};
  function get_quoted($receiver) {
    return new QuotedString($receiver);
  }
  var Direction$initial_instance;
  var Direction$inherit_instance;
  var Direction$unset_instance;
  var Direction$ltr_instance;
  var Direction$rtl_instance;
  var Display$initial_instance;
  var Display$inherit_instance;
  var Display$unset_instance;
  var Display$block_instance;
  var Display$inline_instance;
  var Display$runIn_instance;
  var Display$flow_instance;
  var Display$flowRoot_instance;
  var Display$table_instance;
  var Display$flex_instance;
  var Display$grid_instance;
  var Display$subgrid_instance;
  var Display$listItem_instance;
  var Display$tableRowGroup_instance;
  var Display$tableHeaderGroup_instance;
  var Display$tableFooterGroup_instance;
  var Display$tableRow_instance;
  var Display$tableCell_instance;
  var Display$tableColumnGroup_instance;
  var Display$tableColumn_instance;
  var Display$tableCaption_instance;
  var Display$contents_instance;
  var Display$none_instance;
  var Display$inlineBlock_instance;
  var Display$inlineListItem_instance;
  var Display$inlineTable_instance;
  var Display$inlineFlex_instance;
  var Display$inlineGrid_instance;
  var FlexBasis$Companion_instance = null;
  var FlexWrap$initial_instance;
  var FlexWrap$inherit_instance;
  var FlexWrap$unset_instance;
  var FlexWrap$nowrap_instance;
  var FlexWrap$wrap_instance;
  var FlexWrap$wrapReverse_instance;
  var Float$initial_instance;
  var Float$inherit_instance;
  var Float$unset_instance;
  var Float$left_instance;
  var Float$right_instance;
  var Float$none_instance;
  var FontWeight$Companion_instance = null;
  var FontStyle$Companion_instance = null;
  var FlexDirection$initial_instance;
  var FlexDirection$inherit_instance;
  var FlexDirection$unset_instance;
  var FlexDirection$column_instance;
  var FlexDirection$columnReverse_instance;
  var FlexDirection$row_instance;
  var FlexDirection$rowReverse_instance;
  var GridAutoColumns$Companion_instance = null;
  var GridAutoFlow$Companion_instance = null;
  var GridAutoRows$Companion_instance = null;
  var GridColumn$Companion_instance = null;
  var GridColumnEnd$Companion_instance = null;
  var GridColumnStart$Companion_instance = null;
  var GridRow$Companion_instance = null;
  var GridRowEnd$Companion_instance = null;
  var GridRowStart$Companion_instance = null;
  var GridTemplate$Companion_instance = null;
  var GridTemplateAreas$Companion_instance = null;
  var GridTemplateColumns$Companion_instance = null;
  var GridTemplateRows$Companion_instance = null;
  var Grow$NONE_instance;
  var Grow$GROW_instance;
  var Grow$SHRINK_instance;
  var Grow$GROW_SHRINK_instance;
  var Hyphens$initial_instance;
  var Hyphens$inherit_instance;
  var Hyphens$unset_instance;
  var Hyphens$none_instance;
  var Hyphens$manual_instance;
  var Hyphens$auto_instance;
  var ListStyleType$initial_instance;
  var ListStyleType$inherit_instance;
  var ListStyleType$unset_instance;
  var ListStyleType$none_instance;
  var ListStyleType$disc_instance;
  var ListStyleType$circle_instance;
  var ListStyleType$square_instance;
  var ListStyleType$decimal_instance;
  var ObjectFit$initial_instance;
  var ObjectFit$inherit_instance;
  var ObjectFit$unset_instance;
  var ObjectFit$contain_instance;
  var ObjectFit$cover_instance;
  var ObjectFit$fill_instance;
  var ObjectFit$none_instance;
  var ObjectFit$scaleDown_instance;
  var Outline$initial_instance;
  var Outline$inherit_instance;
  var Outline$unset_instance;
  var Outline$none_instance;
  var Overflow$initial_instance;
  var Overflow$inherit_instance;
  var Overflow$unset_instance;
  var Overflow$visible_instance;
  var Overflow$hidden_instance;
  var Overflow$scroll_instance;
  var Overflow$auto_instance;
  var OverflowWrap$initial_instance;
  var OverflowWrap$inherit_instance;
  var OverflowWrap$unset_instance;
  var OverflowWrap$normal_instance;
  var OverflowWrap$anywhere_instance;
  var OverflowWrap$breakWord_instance;
  var OverscrollBehavior$initial_instance;
  var OverscrollBehavior$inherit_instance;
  var OverscrollBehavior$unset_instance;
  var OverscrollBehavior$auto_instance;
  var OverscrollBehavior$contain_instance;
  var OverscrollBehavior$none_instance;
  var PointerEvents$initial_instance;
  var PointerEvents$inherit_instance;
  var PointerEvents$unset_instance;
  var PointerEvents$auto_instance;
  var PointerEvents$none_instance;
  var Position$initial_instance;
  var Position$inherit_instance;
  var Position$unset_instance;
  var Position$static_instance;
  var Position$relative_instance;
  var Position$absolute_instance;
  var Position$fixed_instance;
  var Position$sticky_instance;
  var ScrollBehavior$initial_instance;
  var ScrollBehavior$inherit_instance;
  var ScrollBehavior$unset_instance;
  var ScrollBehavior$auto_instance;
  var ScrollBehavior$smooth_instance;
  var TextAlign$initial_instance;
  var TextAlign$inherit_instance;
  var TextAlign$unset_instance;
  var TextAlign$left_instance;
  var TextAlign$right_instance;
  var TextAlign$center_instance;
  var TextAlign$justify_instance;
  var TextAlign$justifyAll_instance;
  var TextAlign$start_instance;
  var TextAlign$end_instance;
  var TextAlign$matchParent_instance;
  var TableLayout$initial_instance;
  var TableLayout$inherit_instance;
  var TableLayout$unset_instance;
  var TableLayout$auto_instance;
  var TableLayout$fixed_instance;
  var TextOverflow$initial_instance;
  var TextOverflow$inherit_instance;
  var TextOverflow$unset_instance;
  var TextOverflow$clip_instance;
  var TextOverflow$ellipsis_instance;
  var TextTransform$initial_instance;
  var TextTransform$inherit_instance;
  var TextTransform$unset_instance;
  var TextTransform$capitalize_instance;
  var TextTransform$uppercase_instance;
  var TextTransform$lowercase_instance;
  var TextTransform$none_instance;
  var TextTransform$fullWidth_instance;
  var UserSelect$initial_instance;
  var UserSelect$inherit_instance;
  var UserSelect$unset_instance;
  var UserSelect$none_instance;
  var UserSelect$auto_instance;
  var UserSelect$text_instance;
  var UserSelect$contain_instance;
  var UserSelect$all_instance;
  var VerticalAlign$Companion_instance = null;
  var Visibility$initial_instance;
  var Visibility$inherit_instance;
  var Visibility$unset_instance;
  var Visibility$visible_instance;
  var Visibility$hidden_instance;
  var Visibility$collapse_instance;
  var WhiteSpace$initial_instance;
  var WhiteSpace$inherit_instance;
  var WhiteSpace$unset_instance;
  var WhiteSpace$normal_instance;
  var WhiteSpace$nowrap_instance;
  var WhiteSpace$pre_instance;
  var WhiteSpace$preWrap_instance;
  var WhiteSpace$preLine_instance;
  var WordBreak$initial_instance;
  var WordBreak$inherit_instance;
  var WordBreak$unset_instance;
  var WordBreak$normal_instance;
  var WordBreak$breakAll_instance;
  var WordBreak$breakWord_instance;
  var WordBreak$keepAll_instance;
  var WordWrap$initial_instance;
  var WordWrap$inherit_instance;
  var WordWrap$unset_instance;
  var WordWrap$normal_instance;
  var WordWrap$breakWord_instance;
  var Resize$none_instance;
  var Resize$both_instance;
  var Resize$horizontal_instance;
  var Resize$vertical_instance;
  var Resize$block_instance;
  var Resize$inline_instance;
  var Resize$inherit_instance;
  var Resize$initial_instance;
  var Resize$unset_instance;
  var Image$Companion_instance = null;
  function StyleList(delimiter) {
    this.delimiter_o62vis$_0 = delimiter;
    this.list_behuth$_0 = ArrayList_init();
  }
  StyleList.prototype.toString = function () {
    if (this.list_behuth$_0.isEmpty())
      return 'none';
    else
      return joinToString_0(this.list_behuth$_0, this.delimiter_o62vis$_0);
  };
  StyleList.prototype.clear = function () {
    this.list_behuth$_0.clear();
  };
  StyleList.prototype.plusAssign_11rb$ = function (item) {
    this.list_behuth$_0.add_11rb$(item);
  };
  StyleList.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyleList', interfaces: []};
  function StyledElement() {
    this.declarations = LinkedHashMap_init();
  }
  StyledElement.prototype.put_puj7f4$ = function (key, value) {
    this.declarations.put_xwzc9p$(key, value);
  };
  StyledElement.$metadata$ = {kind: Kind_CLASS, simpleName: 'StyledElement', interfaces: []};
  function CSSProperty(default_0) {
    if (default_0 === void 0)
      default_0 = null;
    this.default_0 = default_0;
  }
  CSSProperty.prototype.getValue_jto6o9$ = function (thisRef, property) {
    var tmp$, tmp$_0;
    if ((tmp$ = this.default_0) != null) {
      var tmp$_1;
      if (!thisRef.declarations.containsKey_11rb$(property.callableName)) {
        var $receiver = thisRef.declarations;
        var key = property.callableName;
        var value = Kotlin.isType(tmp$_1 = tmp$(), Any) ? tmp$_1 : throwCCE();
        $receiver.put_xwzc9p$(key, value);
      }}return (tmp$_0 = thisRef.declarations.get_11rb$(property.callableName)) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  CSSProperty.prototype.setValue_6qj5c4$ = function (thisRef, property, value) {
    var tmp$;
    var $receiver = thisRef.declarations;
    var key = property.callableName;
    var value_0 = Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE();
    $receiver.put_xwzc9p$(key, value_0);
  };
  CSSProperty.$metadata$ = {kind: Kind_CLASS, simpleName: 'CSSProperty', interfaces: []};
  var alignContent;
  var alignContent_metadata = new PropertyMetadata('alignContent');
  var alignItems;
  var alignItems_metadata = new PropertyMetadata('alignItems');
  var alignSelf;
  var alignSelf_metadata = new PropertyMetadata('alignSelf');
  function animation$lambda() {
    return new Animations();
  }
  var animation;
  var animation_metadata = new PropertyMetadata('animation');
  var appearance;
  var appearance_metadata = new PropertyMetadata('appearance');
  var background;
  var background_metadata = new PropertyMetadata('background');
  var backgroundAttachment;
  var backgroundAttachment_metadata = new PropertyMetadata('backgroundAttachment');
  var backgroundClip;
  var backgroundClip_metadata = new PropertyMetadata('backgroundClip');
  var backgroundColor;
  var backgroundColor_metadata = new PropertyMetadata('backgroundColor');
  function set_backgroundColor($receiver, backgroundColor_0) {
    backgroundColor.setValue_6qj5c4$($receiver, backgroundColor_metadata, backgroundColor_0);
  }
  var backgroundImage;
  var backgroundImage_metadata = new PropertyMetadata('backgroundImage');
  var backgroundOrigin;
  var backgroundOrigin_metadata = new PropertyMetadata('backgroundOrigin');
  var backgroundPosition;
  var backgroundPosition_metadata = new PropertyMetadata('backgroundPosition');
  var backgroundRepeat;
  var backgroundRepeat_metadata = new PropertyMetadata('backgroundRepeat');
  var backgroundSize;
  var backgroundSize_metadata = new PropertyMetadata('backgroundSize');
  var border;
  var border_metadata = new PropertyMetadata('border');
  var borderTop;
  var borderTop_metadata = new PropertyMetadata('borderTop');
  var borderRight;
  var borderRight_metadata = new PropertyMetadata('borderRight');
  var borderBottom;
  var borderBottom_metadata = new PropertyMetadata('borderBottom');
  var borderLeft;
  var borderLeft_metadata = new PropertyMetadata('borderLeft');
  var borderSpacing;
  var borderSpacing_metadata = new PropertyMetadata('borderSpacing');
  var borderRadius;
  var borderRadius_metadata = new PropertyMetadata('borderRadius');
  var borderTopLeftRadius;
  var borderTopLeftRadius_metadata = new PropertyMetadata('borderTopLeftRadius');
  var borderTopRightRadius;
  var borderTopRightRadius_metadata = new PropertyMetadata('borderTopRightRadius');
  var borderBottomLeftRadius;
  var borderBottomLeftRadius_metadata = new PropertyMetadata('borderBottomLeftRadius');
  var borderBottomRightRadius;
  var borderBottomRightRadius_metadata = new PropertyMetadata('borderBottomRightRadius');
  var borderStyle;
  var borderStyle_metadata = new PropertyMetadata('borderStyle');
  var borderTopStyle;
  var borderTopStyle_metadata = new PropertyMetadata('borderTopStyle');
  var borderRightStyle;
  var borderRightStyle_metadata = new PropertyMetadata('borderRightStyle');
  var borderBottomStyle;
  var borderBottomStyle_metadata = new PropertyMetadata('borderBottomStyle');
  var borderLeftStyle;
  var borderLeftStyle_metadata = new PropertyMetadata('borderLeftStyle');
  var borderWidth;
  var borderWidth_metadata = new PropertyMetadata('borderWidth');
  var borderTopWidth;
  var borderTopWidth_metadata = new PropertyMetadata('borderTopWidth');
  var borderRightWidth;
  var borderRightWidth_metadata = new PropertyMetadata('borderRightWidth');
  var borderBottomWidth;
  var borderBottomWidth_metadata = new PropertyMetadata('borderBottomWidth');
  var borderLeftWidth;
  var borderLeftWidth_metadata = new PropertyMetadata('borderLeftWidth');
  var borderColor;
  var borderColor_metadata = new PropertyMetadata('borderColor');
  var borderTopColor;
  var borderTopColor_metadata = new PropertyMetadata('borderTopColor');
  var borderRightColor;
  var borderRightColor_metadata = new PropertyMetadata('borderRightColor');
  var borderBottomColor;
  var borderBottomColor_metadata = new PropertyMetadata('borderBottomColor');
  var borderLeftColor;
  var borderLeftColor_metadata = new PropertyMetadata('borderLeftColor');
  var bottom;
  var bottom_metadata = new PropertyMetadata('bottom');
  var boxSizing;
  var boxSizing_metadata = new PropertyMetadata('boxSizing');
  function boxShadow$lambda() {
    return new BoxShadows();
  }
  var boxShadow;
  var boxShadow_metadata = new PropertyMetadata('boxShadow');
  var clear;
  var clear_metadata = new PropertyMetadata('clear');
  var color;
  var color_metadata = new PropertyMetadata('color');
  function set_color($receiver, color_0) {
    color.setValue_6qj5c4$($receiver, color_metadata, color_0);
  }
  var columnGap;
  var columnGap_metadata = new PropertyMetadata('columnGap');
  var contain;
  var contain_metadata = new PropertyMetadata('contain');
  var content;
  var content_metadata = new PropertyMetadata('content');
  function set_content($receiver, content_0) {
    content.setValue_6qj5c4$($receiver, content_metadata, content_0);
  }
  var cursor;
  var cursor_metadata = new PropertyMetadata('cursor');
  var direction;
  var direction_metadata = new PropertyMetadata('direction');
  var display;
  var display_metadata = new PropertyMetadata('display');
  var filter;
  var filter_metadata = new PropertyMetadata('filter');
  var flexDirection;
  var flexDirection_metadata = new PropertyMetadata('flexDirection');
  var flexGrow;
  var flexGrow_metadata = new PropertyMetadata('flexGrow');
  var flexShrink;
  var flexShrink_metadata = new PropertyMetadata('flexShrink');
  var flexBasis;
  var flexBasis_metadata = new PropertyMetadata('flexBasis');
  var flexWrap;
  var flexWrap_metadata = new PropertyMetadata('flexWrap');
  var float;
  var float_metadata = new PropertyMetadata('float');
  var fontFamily;
  var fontFamily_metadata = new PropertyMetadata('fontFamily');
  var fontSize;
  var fontSize_metadata = new PropertyMetadata('fontSize');
  var fontWeight;
  var fontWeight_metadata = new PropertyMetadata('fontWeight');
  var fontStyle;
  var fontStyle_metadata = new PropertyMetadata('fontStyle');
  var gap;
  var gap_metadata = new PropertyMetadata('gap');
  var gridAutoColumns;
  var gridAutoColumns_metadata = new PropertyMetadata('gridAutoColumns');
  var gridAutoFlow;
  var gridAutoFlow_metadata = new PropertyMetadata('gridAutoFlow');
  var gridAutoRows;
  var gridAutoRows_metadata = new PropertyMetadata('gridAutoRows');
  var gridColumn;
  var gridColumn_metadata = new PropertyMetadata('gridColumn');
  var gridColumnEnd;
  var gridColumnEnd_metadata = new PropertyMetadata('gridColumnEnd');
  var gridColumnStart;
  var gridColumnStart_metadata = new PropertyMetadata('gridColumnStart');
  var gridRow;
  var gridRow_metadata = new PropertyMetadata('gridRow');
  var gridRowEnd;
  var gridRowEnd_metadata = new PropertyMetadata('gridRowEnd');
  var gridRowStart;
  var gridRowStart_metadata = new PropertyMetadata('gridRowStart');
  var gridTemplate;
  var gridTemplate_metadata = new PropertyMetadata('gridTemplate');
  var gridTemplateAreas;
  var gridTemplateAreas_metadata = new PropertyMetadata('gridTemplateAreas');
  var gridTemplateColumns;
  var gridTemplateColumns_metadata = new PropertyMetadata('gridTemplateColumns');
  var gridTemplateRows;
  var gridTemplateRows_metadata = new PropertyMetadata('gridTemplateRows');
  var height;
  var height_metadata = new PropertyMetadata('height');
  var hyphens;
  var hyphens_metadata = new PropertyMetadata('hyphens');
  var justifyContent;
  var justifyContent_metadata = new PropertyMetadata('justifyContent');
  var justifyItems;
  var justifyItems_metadata = new PropertyMetadata('justifyItems');
  var left;
  var left_metadata = new PropertyMetadata('left');
  var letterSpacing;
  var letterSpacing_metadata = new PropertyMetadata('letterSpacing');
  var lineHeight;
  var lineHeight_metadata = new PropertyMetadata('lineHeight');
  var listStyleType;
  var listStyleType_metadata = new PropertyMetadata('listStyleType');
  var margin;
  var margin_metadata = new PropertyMetadata('margin');
  var marginTop;
  var marginTop_metadata = new PropertyMetadata('marginTop');
  var marginRight;
  var marginRight_metadata = new PropertyMetadata('marginRight');
  var marginBottom;
  var marginBottom_metadata = new PropertyMetadata('marginBottom');
  var marginLeft;
  var marginLeft_metadata = new PropertyMetadata('marginLeft');
  var minWidth;
  var minWidth_metadata = new PropertyMetadata('minWidth');
  var maxWidth;
  var maxWidth_metadata = new PropertyMetadata('maxWidth');
  var minHeight;
  var minHeight_metadata = new PropertyMetadata('minHeight');
  var maxHeight;
  var maxHeight_metadata = new PropertyMetadata('maxHeight');
  var objectFit;
  var objectFit_metadata = new PropertyMetadata('objectFit');
  var objectPosition;
  var objectPosition_metadata = new PropertyMetadata('objectPosition');
  var opacity;
  var opacity_metadata = new PropertyMetadata('opacity');
  var outline;
  var outline_metadata = new PropertyMetadata('outline');
  var outlineColor;
  var outlineColor_metadata = new PropertyMetadata('outlineColor');
  var outlineOffset;
  var outlineOffset_metadata = new PropertyMetadata('outlineOffset');
  var outlineWidth;
  var outlineWidth_metadata = new PropertyMetadata('outlineWidth');
  var overflow;
  var overflow_metadata = new PropertyMetadata('overflow');
  var overflowX;
  var overflowX_metadata = new PropertyMetadata('overflowX');
  var overflowY;
  var overflowY_metadata = new PropertyMetadata('overflowY');
  var overflowWrap;
  var overflowWrap_metadata = new PropertyMetadata('overflowWrap');
  var overscrollBehavior;
  var overscrollBehavior_metadata = new PropertyMetadata('overscrollBehavior');
  var padding;
  var padding_metadata = new PropertyMetadata('padding');
  function set_padding($receiver, padding_0) {
    padding.setValue_6qj5c4$($receiver, padding_metadata, padding_0);
  }
  var paddingTop;
  var paddingTop_metadata = new PropertyMetadata('paddingTop');
  function set_paddingTop($receiver, paddingTop_0) {
    paddingTop.setValue_6qj5c4$($receiver, paddingTop_metadata, paddingTop_0);
  }
  var paddingRight;
  var paddingRight_metadata = new PropertyMetadata('paddingRight');
  function set_paddingRight($receiver, paddingRight_0) {
    paddingRight.setValue_6qj5c4$($receiver, paddingRight_metadata, paddingRight_0);
  }
  var paddingBottom;
  var paddingBottom_metadata = new PropertyMetadata('paddingBottom');
  function set_paddingBottom($receiver, paddingBottom_0) {
    paddingBottom.setValue_6qj5c4$($receiver, paddingBottom_metadata, paddingBottom_0);
  }
  var paddingLeft;
  var paddingLeft_metadata = new PropertyMetadata('paddingLeft');
  function set_paddingLeft($receiver, paddingLeft_0) {
    paddingLeft.setValue_6qj5c4$($receiver, paddingLeft_metadata, paddingLeft_0);
  }
  var pointerEvents;
  var pointerEvents_metadata = new PropertyMetadata('pointerEvents');
  var position;
  var position_metadata = new PropertyMetadata('position');
  var right;
  var right_metadata = new PropertyMetadata('right');
  var rowGap;
  var rowGap_metadata = new PropertyMetadata('rowGap');
  var scrollBehavior;
  var scrollBehavior_metadata = new PropertyMetadata('scrollBehavior');
  var textAlign;
  var textAlign_metadata = new PropertyMetadata('textAlign');
  var textDecoration;
  var textDecoration_metadata = new PropertyMetadata('textDecoration');
  var textOverflow;
  var textOverflow_metadata = new PropertyMetadata('textOverflow');
  var textTransform;
  var textTransform_metadata = new PropertyMetadata('textTransform');
  var top;
  var top_metadata = new PropertyMetadata('top');
  function transform$lambda() {
    return new Transforms();
  }
  var transform;
  var transform_metadata = new PropertyMetadata('transform');
  function transition$lambda() {
    return new Transitions();
  }
  var transition;
  var transition_metadata = new PropertyMetadata('transition');
  var verticalAlign;
  var verticalAlign_metadata = new PropertyMetadata('verticalAlign');
  var visibility;
  var visibility_metadata = new PropertyMetadata('visibility');
  var whiteSpace;
  var whiteSpace_metadata = new PropertyMetadata('whiteSpace');
  var width;
  var width_metadata = new PropertyMetadata('width');
  var wordBreak;
  var wordBreak_metadata = new PropertyMetadata('wordBreak');
  var wordWrap;
  var wordWrap_metadata = new PropertyMetadata('wordWrap');
  var userSelect;
  var userSelect_metadata = new PropertyMetadata('userSelect');
  var tableLayout;
  var tableLayout_metadata = new PropertyMetadata('tableLayout');
  var borderCollapse;
  var borderCollapse_metadata = new PropertyMetadata('borderCollapse');
  var zIndex;
  var zIndex_metadata = new PropertyMetadata('zIndex');
  var resize;
  var resize_metadata = new PropertyMetadata('resize');
  function getShorthandValue(top, right, bottom, left) {
    var tmp$;
    if (equals(top, bottom) && equals(right, left)) {
      if (equals(top, right)) {
        tmp$ = toString_0(top);
      } else {
        tmp$ = toString_0(top) + ' ' + toString_0(right);
      }
    } else {
      if (equals(right, left)) {
        tmp$ = toString_0(top) + ' ' + toString_0(right) + ' ' + toString_0(bottom);
      } else {
        tmp$ = toString_0(top) + ' ' + toString_0(right) + ' ' + toString_0(bottom) + ' ' + toString_0(left);
      }
    }
    return tmp$;
  }
  function padding_0($receiver, top, right, bottom, left) {
    if (top === void 0)
      top = null;
    if (right === void 0)
      right = null;
    if (bottom === void 0)
      bottom = null;
    if (left === void 0)
      left = null;
    if (top != null && right != null && bottom != null && left != null) {
      set_padding($receiver, getShorthandValue(top, right, bottom, left));
    } else {
      if (top != null) {
        set_paddingTop($receiver, top);
      }if (right != null) {
        set_paddingRight($receiver, right);
      }if (bottom != null) {
        set_paddingBottom($receiver, bottom);
      }if (left != null) {
        set_paddingLeft($receiver, left);
      }}
  }
  function padding_1($receiver, all) {
    padding_0($receiver, all, all, all, all);
  }
  function TagSelector(tagName) {
    this.tagName = tagName;
  }
  TagSelector.$metadata$ = {kind: Kind_CLASS, simpleName: 'TagSelector', interfaces: []};
  function TagSelectorFactory() {
    TagSelectorFactory_instance = this;
  }
  TagSelectorFactory.prototype.getValue_d6mtq7$ = function (thisRef, property) {
    return new TagSelector(property.callableName);
  };
  TagSelectorFactory.$metadata$ = {kind: Kind_OBJECT, simpleName: 'TagSelectorFactory', interfaces: []};
  var TagSelectorFactory_instance = null;
  function TagSelectorFactory_getInstance() {
    if (TagSelectorFactory_instance === null) {
      new TagSelectorFactory();
    }return TagSelectorFactory_instance;
  }
  var html;
  var html_metadata = new PropertyMetadata('html');
  var base;
  var base_metadata = new PropertyMetadata('base');
  var head;
  var head_metadata = new PropertyMetadata('head');
  var link;
  var link_metadata = new PropertyMetadata('link');
  var meta;
  var meta_metadata = new PropertyMetadata('meta');
  var style;
  var style_metadata = new PropertyMetadata('style');
  var title;
  var title_metadata = new PropertyMetadata('title');
  var body;
  var body_metadata = new PropertyMetadata('body');
  var address;
  var address_metadata = new PropertyMetadata('address');
  var article;
  var article_metadata = new PropertyMetadata('article');
  var aside;
  var aside_metadata = new PropertyMetadata('aside');
  var footer;
  var footer_metadata = new PropertyMetadata('footer');
  var header;
  var header_metadata = new PropertyMetadata('header');
  var h1;
  var h1_metadata = new PropertyMetadata('h1');
  var h2;
  var h2_metadata = new PropertyMetadata('h2');
  var h3;
  var h3_metadata = new PropertyMetadata('h3');
  var h4;
  var h4_metadata = new PropertyMetadata('h4');
  var h5;
  var h5_metadata = new PropertyMetadata('h5');
  var h6;
  var h6_metadata = new PropertyMetadata('h6');
  var main;
  var main_metadata = new PropertyMetadata('main');
  var nav;
  var nav_metadata = new PropertyMetadata('nav');
  var section;
  var section_metadata = new PropertyMetadata('section');
  var blockquote;
  var blockquote_metadata = new PropertyMetadata('blockquote');
  var dd;
  var dd_metadata = new PropertyMetadata('dd');
  var div;
  var div_metadata = new PropertyMetadata('div');
  var dl;
  var dl_metadata = new PropertyMetadata('dl');
  var dt;
  var dt_metadata = new PropertyMetadata('dt');
  var figcaption;
  var figcaption_metadata = new PropertyMetadata('figcaption');
  var figure;
  var figure_metadata = new PropertyMetadata('figure');
  var hr;
  var hr_metadata = new PropertyMetadata('hr');
  var li;
  var li_metadata = new PropertyMetadata('li');
  var ol;
  var ol_metadata = new PropertyMetadata('ol');
  var p;
  var p_metadata = new PropertyMetadata('p');
  var pre;
  var pre_metadata = new PropertyMetadata('pre');
  var ul;
  var ul_metadata = new PropertyMetadata('ul');
  var a;
  var a_metadata = new PropertyMetadata('a');
  var abbr;
  var abbr_metadata = new PropertyMetadata('abbr');
  var b;
  var b_metadata = new PropertyMetadata('b');
  var bdi;
  var bdi_metadata = new PropertyMetadata('bdi');
  var bdo;
  var bdo_metadata = new PropertyMetadata('bdo');
  var br;
  var br_metadata = new PropertyMetadata('br');
  var cite;
  var cite_metadata = new PropertyMetadata('cite');
  var code;
  var code_metadata = new PropertyMetadata('code');
  var data;
  var data_metadata = new PropertyMetadata('data');
  var dfn;
  var dfn_metadata = new PropertyMetadata('dfn');
  var em;
  var em_metadata = new PropertyMetadata('em');
  var i;
  var i_metadata = new PropertyMetadata('i');
  var kbd;
  var kbd_metadata = new PropertyMetadata('kbd');
  var mark;
  var mark_metadata = new PropertyMetadata('mark');
  var q;
  var q_metadata = new PropertyMetadata('q');
  var rb;
  var rb_metadata = new PropertyMetadata('rb');
  var rp;
  var rp_metadata = new PropertyMetadata('rp');
  var rt;
  var rt_metadata = new PropertyMetadata('rt');
  var rtc;
  var rtc_metadata = new PropertyMetadata('rtc');
  var ruby;
  var ruby_metadata = new PropertyMetadata('ruby');
  var s;
  var s_metadata = new PropertyMetadata('s');
  var samp;
  var samp_metadata = new PropertyMetadata('samp');
  var small;
  var small_metadata = new PropertyMetadata('small');
  var span;
  var span_metadata = new PropertyMetadata('span');
  var strong;
  var strong_metadata = new PropertyMetadata('strong');
  var sub;
  var sub_metadata = new PropertyMetadata('sub');
  var sup;
  var sup_metadata = new PropertyMetadata('sup');
  var time;
  var time_metadata = new PropertyMetadata('time');
  var u;
  var u_metadata = new PropertyMetadata('u');
  var wbr;
  var wbr_metadata = new PropertyMetadata('wbr');
  var area;
  var area_metadata = new PropertyMetadata('area');
  var audio;
  var audio_metadata = new PropertyMetadata('audio');
  var img;
  var img_metadata = new PropertyMetadata('img');
  var map;
  var map_metadata = new PropertyMetadata('map');
  var track;
  var track_metadata = new PropertyMetadata('track');
  var video;
  var video_metadata = new PropertyMetadata('video');
  var embed;
  var embed_metadata = new PropertyMetadata('embed');
  var iframe;
  var iframe_metadata = new PropertyMetadata('iframe');
  var param;
  var param_metadata = new PropertyMetadata('param');
  var picture;
  var picture_metadata = new PropertyMetadata('picture');
  var portal;
  var portal_metadata = new PropertyMetadata('portal');
  var source;
  var source_metadata = new PropertyMetadata('source');
  var svg;
  var svg_metadata = new PropertyMetadata('svg');
  var math_0;
  var math_metadata = new PropertyMetadata('math');
  var canvas;
  var canvas_metadata = new PropertyMetadata('canvas');
  var noscript;
  var noscript_metadata = new PropertyMetadata('noscript');
  var script;
  var script_metadata = new PropertyMetadata('script');
  var del;
  var del_metadata = new PropertyMetadata('del');
  var ins;
  var ins_metadata = new PropertyMetadata('ins');
  var caption;
  var caption_metadata = new PropertyMetadata('caption');
  var col;
  var col_metadata = new PropertyMetadata('col');
  var colgroup;
  var colgroup_metadata = new PropertyMetadata('colgroup');
  var table;
  var table_metadata = new PropertyMetadata('table');
  var tbody;
  var tbody_metadata = new PropertyMetadata('tbody');
  var td;
  var td_metadata = new PropertyMetadata('td');
  var tfoot;
  var tfoot_metadata = new PropertyMetadata('tfoot');
  var th;
  var th_metadata = new PropertyMetadata('th');
  var thead;
  var thead_metadata = new PropertyMetadata('thead');
  var tr;
  var tr_metadata = new PropertyMetadata('tr');
  var button;
  var button_metadata = new PropertyMetadata('button');
  var datalist;
  var datalist_metadata = new PropertyMetadata('datalist');
  var fieldset;
  var fieldset_metadata = new PropertyMetadata('fieldset');
  var form;
  var form_metadata = new PropertyMetadata('form');
  var input;
  var input_metadata = new PropertyMetadata('input');
  var label;
  var label_metadata = new PropertyMetadata('label');
  var legend;
  var legend_metadata = new PropertyMetadata('legend');
  var meter;
  var meter_metadata = new PropertyMetadata('meter');
  var optgroup;
  var optgroup_metadata = new PropertyMetadata('optgroup');
  var option;
  var option_metadata = new PropertyMetadata('option');
  var output;
  var output_metadata = new PropertyMetadata('output');
  var progress;
  var progress_metadata = new PropertyMetadata('progress');
  var select;
  var select_metadata = new PropertyMetadata('select');
  var textarea;
  var textarea_metadata = new PropertyMetadata('textarea');
  var details;
  var details_metadata = new PropertyMetadata('details');
  var dialog;
  var dialog_metadata = new PropertyMetadata('dialog');
  var menu;
  var menu_metadata = new PropertyMetadata('menu');
  var summary;
  var summary_metadata = new PropertyMetadata('summary');
  var slot;
  var slot_metadata = new PropertyMetadata('slot');
  var template;
  var template_metadata = new PropertyMetadata('template');
  var IterationCount$Companion_instance = null;
  var AnimationDirection$initial_instance;
  var AnimationDirection$inherit_instance;
  var AnimationDirection$unset_instance;
  var AnimationDirection$normal_instance;
  var AnimationDirection$reverse_instance;
  var AnimationDirection$alternate_instance;
  var AnimationDirection$alternateReverse_instance;
  var FillMode$initial_instance;
  var FillMode$inherit_instance;
  var FillMode$unset_instance;
  var FillMode$none_instance;
  var FillMode$forwards_instance;
  var FillMode$backwards_instance;
  var FillMode$both_instance;
  var PlayState$initial_instance;
  var PlayState$inherit_instance;
  var PlayState$unset_instance;
  var PlayState$running_instance;
  var PlayState$paused_instance;
  function Animations() {
    Animations$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Animations$Companion() {
    Animations$Companion_instance = this;
    this.none = new Animations();
  }
  Animations$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Animations$Companion_instance = null;
  function Animations$Companion_getInstance() {
    if (Animations$Companion_instance === null) {
      new Animations$Companion();
    }return Animations$Companion_instance;
  }
  Animations.$metadata$ = {kind: Kind_CLASS, simpleName: 'Animations', interfaces: [StyleList]};
  function BoxShadows() {
    BoxShadows$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function BoxShadows$Companion() {
    BoxShadows$Companion_instance = this;
    this.none = new BoxShadows();
  }
  BoxShadows$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var BoxShadows$Companion_instance = null;
  function BoxShadows$Companion_getInstance() {
    if (BoxShadows$Companion_instance === null) {
      new BoxShadows$Companion();
    }return BoxShadows$Companion_instance;
  }
  BoxShadows.$metadata$ = {kind: Kind_CLASS, simpleName: 'BoxShadows', interfaces: [StyleList]};
  function KeyframesBuilder(indent) {
    if (indent === void 0)
      indent = '';
    this.indent_0 = indent;
    this.rules_pc3mle$_0 = ArrayList_init();
    this.multiRules_8s8fz7$_0 = ArrayList_init();
  }
  var LineHeight$Companion_instance = null;
  var TextDecorationLine$initial_instance;
  var TextDecorationLine$inherit_instance;
  var TextDecorationLine$unset_instance;
  var TextDecorationLine$underline_instance;
  var TextDecorationLine$overline_instance;
  var TextDecorationLine$lineThrough_instance;
  var TextDecoration$Companion_instance = null;
  var TextDecorationStyle$initial_instance;
  var TextDecorationStyle$inherit_instance;
  var TextDecorationStyle$unset_instance;
  var TextDecorationStyle$solid_instance;
  var TextDecorationStyle$double_instance;
  var TextDecorationStyle$dotted_instance;
  var TextDecorationStyle$dashed_instance;
  var TextDecorationStyle$wavy_instance;
  var Timing$Companion_instance = null;
  var TransitionDirection$initial_instance;
  var TransitionDirection$inherit_instance;
  var TransitionDirection$unset_instance;
  var TransitionDirection$start_instance;
  var TransitionDirection$end_instance;
  function Transforms() {
    Transforms$Companion_getInstance();
    StyleList.call(this, ' ');
  }
  function Transforms$Companion() {
    Transforms$Companion_instance = this;
    this.none = new Transforms();
  }
  Transforms$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transforms$Companion_instance = null;
  function Transforms$Companion_getInstance() {
    if (Transforms$Companion_instance === null) {
      new Transforms$Companion();
    }return Transforms$Companion_instance;
  }
  Transforms.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transforms', interfaces: [StyleList]};
  function Transitions() {
    Transitions$Companion_getInstance();
    StyleList.call(this, ', ');
  }
  function Transitions$Companion() {
    Transitions$Companion_instance = this;
    this.none = new Transitions();
  }
  Transitions$Companion.$metadata$ = {kind: Kind_OBJECT, simpleName: 'Companion', interfaces: []};
  var Transitions$Companion_instance = null;
  function Transitions$Companion_getInstance() {
    if (Transitions$Companion_instance === null) {
      new Transitions$Companion();
    }return Transitions$Companion_instance;
  }
  Transitions.$metadata$ = {kind: Kind_CLASS, simpleName: 'Transitions', interfaces: [StyleList]};
  var package$kotlinx = _.kotlinx || (_.kotlinx = {});
  var package$css = package$kotlinx.css || (package$kotlinx.css = {});
  package$css.Rule = Rule;
  package$css.RuleContainer = RuleContainer;
  Object.defineProperty(CSSBuilder, 'Companion', {get: CSSBuilder$Companion_getInstance});
  package$css.CSSBuilder = CSSBuilder;
  package$css.hyphenize_pdl1vz$ = hyphenize;
  package$css.times_6ic1pp$ = times;
  Object.defineProperty(LinearDimension, 'Companion', {get: LinearDimension$Companion_getInstance});
  package$css.LinearDimension = LinearDimension;
  package$css.get_px_rcaex3$ = get_px;
  package$css.CssValue = CssValue;
  Object.defineProperty(Color, 'Companion', {get: Color$Companion_getInstance});
  Color.RGBA = Color$RGBA;
  Color.HSLA = Color$HSLA;
  package$css.Color = Color;
  package$css.rgb_qt1dr2$ = rgb;
  package$css.rgba_gb4hak$ = rgba;
  package$css.hsla_gb4hak$ = hsla;
  package$css.QuotedString = QuotedString;
  package$css.get_quoted_pdl1vz$ = get_quoted;
  package$css.StyleList = StyleList;
  package$css.StyledElement = StyledElement;
  package$css.set_backgroundColor_ommczd$ = set_backgroundColor;
  package$css.set_color_ommczd$ = set_color;
  package$css.set_content_qf37ct$ = set_content;
  package$css.set_padding_krvuuu$ = set_padding;
  package$css.set_paddingTop_n8chyh$ = set_paddingTop;
  package$css.set_paddingRight_n8chyh$ = set_paddingRight;
  package$css.set_paddingBottom_n8chyh$ = set_paddingBottom;
  package$css.set_paddingLeft_n8chyh$ = set_paddingLeft;
  package$css.padding_fjjo64$ = padding_0;
  package$css.padding_9vmwvs$ = padding_1;
  package$css.TagSelector = TagSelector;
  var package$properties = package$css.properties || (package$css.properties = {});
  Object.defineProperty(Animations, 'Companion', {get: Animations$Companion_getInstance});
  package$properties.Animations = Animations;
  Object.defineProperty(BoxShadows, 'Companion', {get: BoxShadows$Companion_getInstance});
  package$properties.BoxShadows = BoxShadows;
  package$properties.KeyframesBuilder = KeyframesBuilder;
  Object.defineProperty(Transforms, 'Companion', {get: Transforms$Companion_getInstance});
  package$properties.Transforms = Transforms;
  Object.defineProperty(Transitions, 'Companion', {get: Transitions$Companion_getInstance});
  package$properties.Transitions = Transitions;
  CSSBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  CSSBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  CSSBuilder.prototype.rule_4mtxvz$$default = RuleContainer.prototype.rule_4mtxvz$$default;
  CSSBuilder.prototype.rule_4mtxvz$ = RuleContainer.prototype.rule_4mtxvz$;
  KeyframesBuilder.prototype.buildRules_s47sd7$ = RuleContainer.prototype.buildRules_s47sd7$;
  KeyframesBuilder.prototype.rule_xk38i9$ = RuleContainer.prototype.rule_xk38i9$;
  KeyframesBuilder.prototype.rule_4mtxvz$$default = RuleContainer.prototype.rule_4mtxvz$$default;
  KeyframesBuilder.prototype.rule_4mtxvz$ = RuleContainer.prototype.rule_4mtxvz$;
  CAPITAL_LETTER = Regex_init('[A-Z]');
  ZERO = '0';
  alignContent = new CSSProperty();
  alignItems = new CSSProperty();
  alignSelf = new CSSProperty();
  animation = new CSSProperty(animation$lambda);
  appearance = new CSSProperty();
  background = new CSSProperty();
  backgroundAttachment = new CSSProperty();
  backgroundClip = new CSSProperty();
  backgroundColor = new CSSProperty();
  backgroundImage = new CSSProperty();
  backgroundOrigin = new CSSProperty();
  backgroundPosition = new CSSProperty();
  backgroundRepeat = new CSSProperty();
  backgroundSize = new CSSProperty();
  border = new CSSProperty();
  borderTop = new CSSProperty();
  borderRight = new CSSProperty();
  borderBottom = new CSSProperty();
  borderLeft = new CSSProperty();
  borderSpacing = new CSSProperty();
  borderRadius = new CSSProperty();
  borderTopLeftRadius = new CSSProperty();
  borderTopRightRadius = new CSSProperty();
  borderBottomLeftRadius = new CSSProperty();
  borderBottomRightRadius = new CSSProperty();
  borderStyle = new CSSProperty();
  borderTopStyle = new CSSProperty();
  borderRightStyle = new CSSProperty();
  borderBottomStyle = new CSSProperty();
  borderLeftStyle = new CSSProperty();
  borderWidth = new CSSProperty();
  borderTopWidth = new CSSProperty();
  borderRightWidth = new CSSProperty();
  borderBottomWidth = new CSSProperty();
  borderLeftWidth = new CSSProperty();
  borderColor = new CSSProperty();
  borderTopColor = new CSSProperty();
  borderRightColor = new CSSProperty();
  borderBottomColor = new CSSProperty();
  borderLeftColor = new CSSProperty();
  bottom = new CSSProperty();
  boxSizing = new CSSProperty();
  boxShadow = new CSSProperty(boxShadow$lambda);
  clear = new CSSProperty();
  color = new CSSProperty();
  columnGap = new CSSProperty();
  contain = new CSSProperty();
  content = new CSSProperty();
  cursor = new CSSProperty();
  direction = new CSSProperty();
  display = new CSSProperty();
  filter = new CSSProperty();
  flexDirection = new CSSProperty();
  flexGrow = new CSSProperty();
  flexShrink = new CSSProperty();
  flexBasis = new CSSProperty();
  flexWrap = new CSSProperty();
  float = new CSSProperty();
  fontFamily = new CSSProperty();
  fontSize = new CSSProperty();
  fontWeight = new CSSProperty();
  fontStyle = new CSSProperty();
  gap = new CSSProperty();
  gridAutoColumns = new CSSProperty();
  gridAutoFlow = new CSSProperty();
  gridAutoRows = new CSSProperty();
  gridColumn = new CSSProperty();
  gridColumnEnd = new CSSProperty();
  gridColumnStart = new CSSProperty();
  gridRow = new CSSProperty();
  gridRowEnd = new CSSProperty();
  gridRowStart = new CSSProperty();
  gridTemplate = new CSSProperty();
  gridTemplateAreas = new CSSProperty();
  gridTemplateColumns = new CSSProperty();
  gridTemplateRows = new CSSProperty();
  height = new CSSProperty();
  hyphens = new CSSProperty();
  justifyContent = new CSSProperty();
  justifyItems = new CSSProperty();
  left = new CSSProperty();
  letterSpacing = new CSSProperty();
  lineHeight = new CSSProperty();
  listStyleType = new CSSProperty();
  margin = new CSSProperty();
  marginTop = new CSSProperty();
  marginRight = new CSSProperty();
  marginBottom = new CSSProperty();
  marginLeft = new CSSProperty();
  minWidth = new CSSProperty();
  maxWidth = new CSSProperty();
  minHeight = new CSSProperty();
  maxHeight = new CSSProperty();
  objectFit = new CSSProperty();
  objectPosition = new CSSProperty();
  opacity = new CSSProperty();
  outline = new CSSProperty();
  outlineColor = new CSSProperty();
  outlineOffset = new CSSProperty();
  outlineWidth = new CSSProperty();
  overflow = new CSSProperty();
  overflowX = new CSSProperty();
  overflowY = new CSSProperty();
  overflowWrap = new CSSProperty();
  overscrollBehavior = new CSSProperty();
  padding = new CSSProperty();
  paddingTop = new CSSProperty();
  paddingRight = new CSSProperty();
  paddingBottom = new CSSProperty();
  paddingLeft = new CSSProperty();
  pointerEvents = new CSSProperty();
  position = new CSSProperty();
  right = new CSSProperty();
  rowGap = new CSSProperty();
  scrollBehavior = new CSSProperty();
  textAlign = new CSSProperty();
  textDecoration = new CSSProperty();
  textOverflow = new CSSProperty();
  textTransform = new CSSProperty();
  top = new CSSProperty();
  transform = new CSSProperty(transform$lambda);
  transition = new CSSProperty(transition$lambda);
  verticalAlign = new CSSProperty();
  visibility = new CSSProperty();
  whiteSpace = new CSSProperty();
  width = new CSSProperty();
  wordBreak = new CSSProperty();
  wordWrap = new CSSProperty();
  userSelect = new CSSProperty();
  tableLayout = new CSSProperty();
  borderCollapse = new CSSProperty();
  zIndex = new CSSProperty();
  resize = new CSSProperty();
  html = TagSelectorFactory_getInstance();
  base = TagSelectorFactory_getInstance();
  head = TagSelectorFactory_getInstance();
  link = TagSelectorFactory_getInstance();
  meta = TagSelectorFactory_getInstance();
  style = TagSelectorFactory_getInstance();
  title = TagSelectorFactory_getInstance();
  body = TagSelectorFactory_getInstance();
  address = TagSelectorFactory_getInstance();
  article = TagSelectorFactory_getInstance();
  aside = TagSelectorFactory_getInstance();
  footer = TagSelectorFactory_getInstance();
  header = TagSelectorFactory_getInstance();
  h1 = TagSelectorFactory_getInstance();
  h2 = TagSelectorFactory_getInstance();
  h3 = TagSelectorFactory_getInstance();
  h4 = TagSelectorFactory_getInstance();
  h5 = TagSelectorFactory_getInstance();
  h6 = TagSelectorFactory_getInstance();
  main = TagSelectorFactory_getInstance();
  nav = TagSelectorFactory_getInstance();
  section = TagSelectorFactory_getInstance();
  blockquote = TagSelectorFactory_getInstance();
  dd = TagSelectorFactory_getInstance();
  div = TagSelectorFactory_getInstance();
  dl = TagSelectorFactory_getInstance();
  dt = TagSelectorFactory_getInstance();
  figcaption = TagSelectorFactory_getInstance();
  figure = TagSelectorFactory_getInstance();
  hr = TagSelectorFactory_getInstance();
  li = TagSelectorFactory_getInstance();
  ol = TagSelectorFactory_getInstance();
  p = TagSelectorFactory_getInstance();
  pre = TagSelectorFactory_getInstance();
  ul = TagSelectorFactory_getInstance();
  a = TagSelectorFactory_getInstance();
  abbr = TagSelectorFactory_getInstance();
  b = TagSelectorFactory_getInstance();
  bdi = TagSelectorFactory_getInstance();
  bdo = TagSelectorFactory_getInstance();
  br = TagSelectorFactory_getInstance();
  cite = TagSelectorFactory_getInstance();
  code = TagSelectorFactory_getInstance();
  data = TagSelectorFactory_getInstance();
  dfn = TagSelectorFactory_getInstance();
  em = TagSelectorFactory_getInstance();
  i = TagSelectorFactory_getInstance();
  kbd = TagSelectorFactory_getInstance();
  mark = TagSelectorFactory_getInstance();
  q = TagSelectorFactory_getInstance();
  rb = TagSelectorFactory_getInstance();
  rp = TagSelectorFactory_getInstance();
  rt = TagSelectorFactory_getInstance();
  rtc = TagSelectorFactory_getInstance();
  ruby = TagSelectorFactory_getInstance();
  s = TagSelectorFactory_getInstance();
  samp = TagSelectorFactory_getInstance();
  small = TagSelectorFactory_getInstance();
  span = TagSelectorFactory_getInstance();
  strong = TagSelectorFactory_getInstance();
  sub = TagSelectorFactory_getInstance();
  sup = TagSelectorFactory_getInstance();
  time = TagSelectorFactory_getInstance();
  u = TagSelectorFactory_getInstance();
  wbr = TagSelectorFactory_getInstance();
  area = TagSelectorFactory_getInstance();
  audio = TagSelectorFactory_getInstance();
  img = TagSelectorFactory_getInstance();
  map = TagSelectorFactory_getInstance();
  track = TagSelectorFactory_getInstance();
  video = TagSelectorFactory_getInstance();
  embed = TagSelectorFactory_getInstance();
  iframe = TagSelectorFactory_getInstance();
  param = TagSelectorFactory_getInstance();
  picture = TagSelectorFactory_getInstance();
  portal = TagSelectorFactory_getInstance();
  source = TagSelectorFactory_getInstance();
  svg = TagSelectorFactory_getInstance();
  math_0 = TagSelectorFactory_getInstance();
  canvas = TagSelectorFactory_getInstance();
  noscript = TagSelectorFactory_getInstance();
  script = TagSelectorFactory_getInstance();
  del = TagSelectorFactory_getInstance();
  ins = TagSelectorFactory_getInstance();
  caption = TagSelectorFactory_getInstance();
  col = TagSelectorFactory_getInstance();
  colgroup = TagSelectorFactory_getInstance();
  table = TagSelectorFactory_getInstance();
  tbody = TagSelectorFactory_getInstance();
  td = TagSelectorFactory_getInstance();
  tfoot = TagSelectorFactory_getInstance();
  th = TagSelectorFactory_getInstance();
  thead = TagSelectorFactory_getInstance();
  tr = TagSelectorFactory_getInstance();
  button = TagSelectorFactory_getInstance();
  datalist = TagSelectorFactory_getInstance();
  fieldset = TagSelectorFactory_getInstance();
  form = TagSelectorFactory_getInstance();
  input = TagSelectorFactory_getInstance();
  label = TagSelectorFactory_getInstance();
  legend = TagSelectorFactory_getInstance();
  meter = TagSelectorFactory_getInstance();
  optgroup = TagSelectorFactory_getInstance();
  option = TagSelectorFactory_getInstance();
  output = TagSelectorFactory_getInstance();
  progress = TagSelectorFactory_getInstance();
  select = TagSelectorFactory_getInstance();
  textarea = TagSelectorFactory_getInstance();
  details = TagSelectorFactory_getInstance();
  dialog = TagSelectorFactory_getInstance();
  menu = TagSelectorFactory_getInstance();
  summary = TagSelectorFactory_getInstance();
  slot = TagSelectorFactory_getInstance();
  template = TagSelectorFactory_getInstance();
  return _;
}));

//# sourceMappingURL=kotlin-css.js.map
