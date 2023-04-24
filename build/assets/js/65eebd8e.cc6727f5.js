"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1680],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var a=n(7462),r=n(7294),o=n(6010),i=n(2466),l=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,u]=h({queryString:n,groupId:a}),[d,v]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var g=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==l&&(d(t),s(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},i,{className:(0,o.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":l===t})}),n??t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=v(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},1843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(4866),i=n(5162);const l={},s="The Model-View-ViewModel Pattern MVVM",u={unversionedId:"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",id:"getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",title:"The Model-View-ViewModel Pattern MVVM",description:"As well as writing code in code-behind, Avalonia supports using the Model-View-ViewModel pattern \\(or MVVM\\). MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable.",source:"@site/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",sourceDirName:"getting-started/programming-with-avalonia",slug:"/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",permalink:"/docs/next/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/programming-with-avalonia/the-model-view-viewmodel-pattern-mvvm.md",tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Programming with Avalonia",permalink:"/docs/next/getting-started/programming-with-avalonia/"},next:{title:"Controls & Layouts",permalink:"/docs/next/getting-started/programming-with-avalonia/controls-and-layouts"}},c={},d=[],p={toc:d},m="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-model-view-viewmodel-pattern-mvvm"},"The Model-View-ViewModel Pattern MVVM"),(0,r.kt)("p",null,"As well as writing code in code-behind, Avalonia supports using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/guides/basics/mvvm"},"Model-View-ViewModel")," pattern ","(","or MVVM",")",". MVVM is a common way to structure UI applications that separates view logic from application logic in a way that allows your applications to become unit-testable."),(0,r.kt)("p",null,"MVVM relies upon Avalonia's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/bindings"},"binding")," capabilities to separate your application into a View layer which displays standard Avalonia windows and controls, and a ViewModel layer which defines the functionality of the application independently of Avalonia itself. "),(0,r.kt)("p",null,"The following example shows the code from the previous example implemented using the MVVM pattern:"),(0,r.kt)(o.Z,{groupId:"lang",defaultValue:"xaml",values:[{label:"XAML",value:"xaml"},{label:"C#",value:"csharp"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"xaml",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-markup"},'<Window xmlns="https://github.com/avaloniaui"\n        xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"\n        x:Class="AvaloniaApplication1.MainWindow"\n        Title="Window with Button"\n        Width="250" Height="100">\n\n  \x3c!-- Add button to window --\x3e\n  <Button Content="{Binding ButtonText}" Command="{Binding ButtonClicked}"/>\n\n</Window>\n'))),(0,r.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cs"},'using System.ComponentModel;\nusing Avalonia.Controls;\nusing Avalonia.Markup.Xaml;\n\nnamespace AvaloniaApplication1\n{\n    public partial class MainWindow : Window\n    {\n        public MainWindow()\n        {\n            InitializeComponent();\n            DataContext = new MainWindowViewModel();\n        }\n    }\n\n    public class MainWindowViewModel : INotifyPropertyChanged\n    {\n        string buttonText = "Click Me!";\n\n        public string ButtonText\n        {\n            get => buttonText;\n            set \n            {\n                buttonText = value;\n                PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(nameof(ButtonText)));\n            }\n        }\n\n        public event PropertyChangedEventHandler PropertyChanged;\n\n        public void ButtonClicked() => ButtonText = "Hello, Avalonia!";\n    }\n}\n')))),(0,r.kt)("p",null,"In this example, the code-behind assigns the ",(0,r.kt)("inlineCode",{parentName:"p"},"Window"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/the-datacontext"},(0,r.kt)("inlineCode",{parentName:"a"},"DataContext"))," property to an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),". The XAML then uses an Avalonia ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/bindings"},(0,r.kt)("inlineCode",{parentName:"a"},"{Binding}"))," to bind the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"Content")," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonText")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),". It also binds the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button"),"'s ",(0,r.kt)("a",{parentName:"p",href:"https://docs.avaloniaui.net/docs/data-binding/binding-to-commands"},(0,r.kt)("inlineCode",{parentName:"a"},"Command"))," property to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonClicked")," method on the ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel"),"."),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," is clicked it invokes its ",(0,r.kt)("inlineCode",{parentName:"p"},"Command"),", causing the bound ",(0,r.kt)("inlineCode",{parentName:"p"},"MainWindowViewModel.ButtonClicked")," method to be called. This method then sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"ButtonText")," property which raises the ",(0,r.kt)("inlineCode",{parentName:"p"},"INotifyPropertyChanged.PropertyChanged")," event, causing the ",(0,r.kt)("inlineCode",{parentName:"p"},"Button")," to re-read its bound value and update the UI."))}h.isMDXComponent=!0}}]);