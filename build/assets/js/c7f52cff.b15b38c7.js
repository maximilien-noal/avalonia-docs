"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[9713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7063:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={},i="UserControls",l={unversionedId:"getting-started/usercontrols",id:"version-0.10.19/getting-started/usercontrols",title:"UserControls",description:'UserControl represents a "view" in Avalonia, which is a reusable collection of controls in a predefined layout.',source:"@site/versioned_docs/version-0.10.19/getting-started/usercontrols.md",sourceDirName:"getting-started",slug:"/getting-started/usercontrols",permalink:"/docs/getting-started/usercontrols",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/getting-started/usercontrols.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Windows",permalink:"/docs/getting-started/windows"},next:{title:"Assets",permalink:"/docs/getting-started/assets"}},s={},c=[{value:'Visual Studio <a id="visual-studio"></a>',id:"visual-studio-",level:3},{value:'.NET Core CLI <a id="net-core-cli"></a>',id:"net-core-cli-",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"usercontrols"},"UserControls"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UserControl"),' represents a "view" in Avalonia, which is a reusable collection of controls in a predefined layout.'),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControl")," usually consists of two parts: a XAML file ","(","e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyUserControl.axaml"),")"," and a code-behind file ","(","e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"MyUserControl.axaml.cs"),")",". The code-behind defines a .NET class which represents the control."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"UserControl"),'s are often paired with "view models" when using the MVVM pattern. For more information see the ',(0,o.kt)("a",{parentName:"p",href:"../../tutorials/todo-list-app/"},"tutorial"),"."),(0,o.kt)("p",null,"You can create ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControl"),"s from templates:"),(0,o.kt)("h3",{id:"visual-studio-"},"Visual Studio ",(0,o.kt)("a",{id:"visual-studio"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Right click the folder in Solution Explorer that you'd like to add the control to"),(0,o.kt)("li",{parentName:"ol"},"Select the ",(0,o.kt)("inlineCode",{parentName:"li"},"Add -> New Item")," menu item"),(0,o.kt)("li",{parentName:"ol"},'In the dialog that appears, navigate to the "Avalonia" section in the category tree'),(0,o.kt)("li",{parentName:"ol"},'Select "UserControl ',"(","Avalonia",")",'"'),(0,o.kt)("li",{parentName:"ol"},'Enter your control name under "Name"'),(0,o.kt)("li",{parentName:"ol"},'Click the "Add" button')),(0,o.kt)("h3",{id:"net-core-cli-"},".NET Core CLI ",(0,o.kt)("a",{id:"net-core-cli"})),(0,o.kt)("p",null,"Run this command replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"[namespace]")," with the namespace you'd like to create the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserControl")," in and ",(0,o.kt)("inlineCode",{parentName:"p"},"[name]")," with the name of the control."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet new avalonia.usercontrol -p:n [namespace] -n [name]\n")),(0,o.kt)("p",null,"For more information see ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/AvaloniaUI/avalonia-dotnet-templates/"},"the .NET core templates repository"),"."))}d.isMDXComponent=!0}}]);