import{_ as s,c as a,o as e,d as n}from"./app.323059f2.js";const m=JSON.parse('{"title":"Overview","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Stylesheets","slug":"stylesheets","link":"#stylesheets","children":[{"level":3,"title":"Importing","slug":"importing","link":"#importing","children":[]}]}],"relativePath":"components/overview.md"}'),t={name:"components/overview.md"},l=n(`<h1 id="overview" tabindex="-1">Overview <a class="header-anchor" href="#overview" aria-hidden="true">#</a></h1><p>Aha Design System provides plenty of UI components to enrich your web applications, and we will improve components experience consistently.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><p>The best way to consume Aha Design System is via the npm package which you can install with <code>npm</code> (or <code>yarn</code> if you prefer).</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install --save @ahaui/react @ahaui/css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>or</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">yarn add @ahaui/react @ahaui/css</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="stylesheets" tabindex="-1">Stylesheets <a class="header-anchor" href="#stylesheets" aria-hidden="true">#</a></h2><p>And also should import Stylesheets <strong>is required</strong> to use these components.</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#676E95;font-style:italic;">/* The following line can be included in your src/index.js or App.js file*/</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@ahaui/css/dist/index.min.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h3 id="importing" tabindex="-1">Importing <a class="header-anchor" href="#importing" aria-hidden="true">#</a></h3><p>You should import individual components like:</p><div class="language-jsx"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Button</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@ahaui/react</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,13),o=[l];function i(p,c,r,d,h,y){return e(),a("div",null,o)}const D=s(t,[["render",i]]);export{m as __pageData,D as default};
