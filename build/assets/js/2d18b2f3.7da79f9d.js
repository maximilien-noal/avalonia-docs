"use strict";(self.webpackChunkavalonia_docs=self.webpackChunkavalonia_docs||[]).push([[1258],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1633:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},o="JetBrains Rider Setup",l={unversionedId:"getting-started/ide-support/jetbrains-rider-setup",id:"version-0.10.19/getting-started/ide-support/jetbrains-rider-setup",title:"JetBrains Rider Setup",description:"1. Download and install the .NET SDK of your choice Download .NET \\(Linux, macOS, and Windows\\) \\(microsoft.com\\)",source:"@site/versioned_docs/version-0.10.19/getting-started/ide-support/jetbrains-rider-setup.md",sourceDirName:"getting-started/ide-support",slug:"/getting-started/ide-support/jetbrains-rider-setup",permalink:"/docs/getting-started/ide-support/jetbrains-rider-setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-0.10.19/getting-started/ide-support/jetbrains-rider-setup.md",tags:[],version:"0.10.19",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"IDE Support",permalink:"/docs/getting-started/ide-support/"},next:{title:"Programming with Avalonia",permalink:"/docs/getting-started/programming-with-avalonia/"}},s={},p=[],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jetbrains-rider-setup"},"JetBrains Rider Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install the .NET SDK of your choice ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/download"},"Download .NET ","(","Linux, macOS, and Windows",")"," ","(","microsoft.com",")")),(0,r.kt)("p",{parentName:"li"},"This is the runtime, development kit ","(","compiler, etc",")"," that is used to build Avalonia applications.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install Avalonia Templates"),(0,r.kt)("p",{parentName:"li"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new install Avalonia.Templates")," from the command prompt on your machine.\nOr ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet new -i Avalonia.Templates")," for SDK versions before .NET 7."),(0,r.kt)("p",{parentName:"li"},"The output will look similar to this."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ dotnet new install Avalonia.Templates\n  Determining projects to restore...\n  Restored /Users/danwalmsley/.templateengine/dotnetcli/v5.0.200/scratch/restore.csproj (in 706 ms).\n\nTemplates                                     Short Name            Language    Tags\n.....\n\nAvalonia Resource Dictionary                  avalonia.resource                 ui/xaml/avalonia/avaloniaui\nAvalonia Styles                               avalonia.styles                   ui/xaml/avalonia/avaloniaui\n\nExamples:\n    dotnet new mvc --auth Individual\n    dotnet new mstest\n    dotnet new --help\n    dotnet new avalonia.mvvm --help\n$\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download and install ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/rider/"},"Rider: The Cross-Platform .NET IDE from JetBrains")),(0,r.kt)("p",{parentName:"li"},"Rider will give you the very best development experience available for Avalonia. It is available for Windows, Linux, and macOS."),(0,r.kt)("p",{parentName:"li"},"Rider supports XAML out of the box. However, if you want to use the XAML previewer, you need the Avalonia plugin.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Avalonia Plugin"),(0,r.kt)("p",{parentName:"li"},"Once Rider loads you will see the Welcome Screen. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," dropdown and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Plugins"),"."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"rider-welcome",src:n(1683).Z,width:"1824",height:"1937"})),(0,r.kt)("p",null,"A new Preferences Screen will open up. Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Settings")," icon as shown and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Plugin Repositories...")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"configure-plugin-repos",src:n(1880).Z,width:"2024",height:"1624"})),(0,r.kt)("p",null,"Now click on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Marketplace")," tab and search for ",(0,r.kt)("inlineCode",{parentName:"p"},"Avalonia"),". Select ",(0,r.kt)("inlineCode",{parentName:"p"},"AvaloniaRider")," and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Install"),"; accept the warning about Third-Party Plugins; once that's done, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Restart IDE")," button that appears."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"plugin-install",src:n(2568).Z,width:"2024",height:"1624"})),(0,r.kt)("p",null,"Now Rider should be ready to develop Avalonia applications."))}u.isMDXComponent=!0},1683:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-rider-setup-1-rider-welcome-41003b394e74506355eba8e4faa655b6.png"},1880:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-rider-setup-2-configure-plugin-repos-5c0a2f9407a40e214bc385ba667babdc.png"},2568:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/jetbrains-rider-setup-4-plugin-install-520301cfb0c4482e200bd4842bcdc5dc.png"}}]);