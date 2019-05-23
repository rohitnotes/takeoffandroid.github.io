define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, material, animation$, AppColors, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__list_tile = material.src__material__list_tile;
  const src__painting__text_style = animation$.src__painting__text_style;
  const AppColors$ = AppColors.AppColors;
  const ui$ = ui.ui;
  const components__PageListTile = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  components__PageListTile.PageListTile = class PageListTile extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({height: 50.0, child: new src__material__list_tile.ListTile.new({leading: new src__widgets__image.Image.asset(this.image, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 26, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 32, name: "name"})))], src__widgets__widget_inspector._Location))})))}), title: new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextBlackPrimary, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600, fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 23, name: "data"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 30, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 11, name: "leading"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "height"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__PageListTile.PageListTile.new = function(image, title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[title$] = title;
    components__PageListTile.PageListTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageListTile.PageListTile.prototype;
  dart.addTypeTests(components__PageListTile.PageListTile);
  const image$ = Symbol("PageListTile.image");
  const title$ = Symbol("PageListTile.title");
  dart.setMethodSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getMethods(components__PageListTile.PageListTile.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getFields(components__PageListTile.PageListTile.__proto__),
    image: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageListTile", {
    "package:takeoffandroid_portfolio/components/PageListTile.dart": components__PageListTile
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,oDACG,aACD,oDACY,oCAAM,ueACd,gCAAK,oBAAc,oDAA2B,wDAAmC,wBAAmC,+BAAgB;IAEnJ;;wDAVkB,OAAY;;IAAZ;IAAY;AAA9B;;EAAoC","file":"PageListTile.ddc.js"}');
  // Exports:
  return {
    components__PageListTile: components__PageListTile
  };
});

//# sourceMappingURL=PageListTile.ddc.js.map
