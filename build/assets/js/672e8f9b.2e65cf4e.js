"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[2846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),g=i,u=c["".concat(l,".").concat(g)]||c[g]||m[g]||r;return t?a.createElement(u,o(o({ref:n},d),{},{components:t})):a.createElement(u,o({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},7316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={},o="Graphics & Animations",s={unversionedId:"getting-started/programming-with-avalonia/graphics-and-animations",id:"version-0.10.19/getting-started/programming-with-avalonia/graphics-and-animations",title:"Graphics & Animations",description:"Graphics",source:"@site/versioned_docs/version-0.10.19/getting-started/programming-with-avalonia/graphics-and-animations.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/graphics-and-animations",permalink:"/docs/getting-started/programming-with-avalonia/graphics-and-animations",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/getting-started/programming-with-avalonia/graphics-and-animations.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Data Binding",permalink:"/docs/getting-started/programming-with-avalonia/data-binding"},next:{title:"Windows",permalink:"/docs/getting-started/windows"}},l={},p=[{value:"Graphics",id:"graphics",level:2},{value:"2D Shapes and Geometries",id:"2d-shapes-and-geometries",level:2},{value:"Animation",id:"animation",level:2}],d={toc:p},c="wrapper";function m(e){let{components:n,...r}=e;return(0,i.kt)(c,(0,a.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"graphics--animations"},"Graphics & Animations"),(0,i.kt)("h2",{id:"graphics"},"Graphics"),(0,i.kt)("p",null,"Avalonia introduces an extensive, scalable, and flexible set of graphics features that have the following benefits:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolution-independent and device-independent graphics. The basic unit of measurement in the Avalonia graphics system is the device-independent pixel, which is 1/96th of an inch, regardless of actual screen resolution, and provides the foundation for resolution-independent and device-independent rendering. Each device-independent pixel automatically scales to match the dots-per-inch ","(","dpi",")"," setting of the system it renders on."),(0,i.kt)("li",{parentName:"ul"},"Improved precision. The Avalonia coordinate system is measured with double-precision floating-point numbers rather than single-precision. Transformations and opacity values are also expressed as double-precision."),(0,i.kt)("li",{parentName:"ul"},"Advanced graphics and animation support. Avalonia simplifies graphics programming by managing animation scenes for you; there is no need to worry about scene processing, rendering loops, and bilinear interpolation. Additionally, Avalonia provides hit-testing support and full alpha-compositing support."),(0,i.kt)("li",{parentName:"ul"},"Skia. By default Avalonia uses the ",(0,i.kt)("a",{parentName:"li",href:"https://skia.org/"},"Skia rendering engine"),", the same rendering engine that powers Google Chrome and Chrome OS, Android, Mozilla Firefox and Firefox OS, and many other products.")),(0,i.kt)("h2",{id:"2d-shapes-and-geometries"},"2D Shapes and Geometries"),(0,i.kt)("p",null,"Avalonia provides a library of common vector-drawn 2D shapes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Ellipse"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Line"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Path"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Polygon")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Rectangle"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-markup"},'<Canvas Background="Yellow" Width="300" Height="400">\n    <Rectangle Fill="Blue" Width="63" Height="41" Canvas.Left="40" Canvas.Top="31">\n        <Rectangle.OpacityMask>\n            <LinearGradientBrush StartPoint="0%,0%" EndPoint="100%,100%">\n                <LinearGradientBrush.GradientStops>\n                    <GradientStop Offset="0" Color="Black"/>\n                    <GradientStop Offset="1" Color="Transparent"/>\n                </LinearGradientBrush.GradientStops>\n            </LinearGradientBrush>\n        </Rectangle.OpacityMask>     \n    </Rectangle>\n    <Ellipse Fill="Green" Width="58" Height="58" Canvas.Left="88" Canvas.Top="100"/>\n    <Path Fill="Orange" Data="M 0,0 c 0,0 50,0 50,-50 c 0,0 50,0 50,50 h -50 v 50 l -50,-50 Z" Canvas.Left="30" Canvas.Top="250"/>\n    <Path Fill="OrangeRed" Canvas.Left="180" Canvas.Top="250">\n        <Path.Data>\n            <PathGeometry>\n                <PathFigure StartPoint="0,0" IsClosed="True">\n                    <QuadraticBezierSegment Point1="50,0" Point2="50,-50" />\n                    <QuadraticBezierSegment Point1="100,-50" Point2="100,0" />\n                    <LineSegment Point="50,0" />\n                    <LineSegment Point="50,50" />\n                </PathFigure>\n            </PathGeometry>\n        </Path.Data>\n    </Path>\n    <Line StartPoint="120,185" EndPoint="30,115" Stroke="Red" StrokeThickness="2"/>\n    <Polygon Points="75,0 120,120 0,45 150,45 30,120" Stroke="DarkBlue" StrokeThickness="1" Fill="Violet" Canvas.Left="150" Canvas.Top="31"/>\n    <Polyline Points="0,0 65,0 78,-26 91,39 104,-39 117,13 130,0 195,0" Stroke="Brown" Canvas.Left="30" Canvas.Top="350"/>\n</Canvas>\n')),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(7156).Z,width:"450",height:"600"})),(0,i.kt)("h2",{id:"animation"},"Animation"),(0,i.kt)("p",null,"Avalonia's animation support lets you make controls grow, shake, spin, and fade, to create interesting page transitions, and more. Avalonia uses a CSS-like animation system which supports ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/animations/transitions"},"property transitions")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/animations/keyframe-animations"},"keyframe animations"),"."))}m.isMDXComponent=!0},7156:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/shapes-2bb729ba6832b8f9c194ca9659bf1382.png"}}]);