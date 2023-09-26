---
icon: animation
date: 2023-03-12
category:
  - animation
tag:
  - animation
star: true
sticky: true
---

# css 动画案例

## webpack-logo

::: playground#vue webpack-logo
@file App.vue

```vue
<template>
  <div>
    <div class="webpack-cube">
      <ul class="cube-inner">
        <li class="top">1</li>
        <li class="bottom">2</li>
        <li class="front">3</li>
        <li class="back">4</li>
        <li class="left">5</li>
        <li class="right">6</li>
      </ul>

      <ul class="cube-outer">
        <li class="top">1</li>
        <li class="bottom">2</li>
        <li class="front">3</li>
        <li class="back">4</li>
        <li class="left">5</li>
        <li class="right">6</li>
      </ul>
    </div>
  </div>
</template>
<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  /* 居中 */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* 背景 */
  background: #2b3a42;
}

/* padding */
ul {
  list-style: none;
  padding: 0;
}

.webpack-cube {
  position: relative;
  width: 100%;
  height: 200px;
}

.webpack-cube .cube-inner {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0px 0px -25px;
  width: 50px;
  height: 50px;

  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);
  /* 慢 快 慢 */
  animation: fast 6s ease-in-out infinite;
}

.webpack-cube .cube-inner li {
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  /* 背景 */
  background: #175d96;
  border: 1px solid #fff;
}

/* 旋转 */
.webpack-cube .cube-inner .top {
  transform: rotateX(-90deg) translateZ(25px);
}
.webpack-cube .cube-inner .bottom {
  transform: rotateX(90deg) translateZ(25px);
}

.webpack-cube .cube-inner .front {
  transform: rotateX(0deg) translateZ(25px);
}

.webpack-cube .cube-inner .back {
  transform: rotateX(-180deg) translateZ(25px);
}

.webpack-cube .cube-inner .left {
  transform: rotateY(-90deg) translateZ(25px);
}

.webpack-cube .cube-inner .right {
  transform: rotateY(90deg) translateZ(25px);
}

.webpack-cube .cube-outer {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50px 0px 0px -50px;
  width: 100px;
  height: 100px;

  transform-style: preserve-3d;
  transform: rotateX(-33.5deg) rotateY(45deg);

  animation: slow 6s ease-in-out infinite;
}

.webpack-cube .cube-outer li {
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  background: rgba(141, 214, 249, 0.5);
  border: 1px solid #fff;
}

.webpack-cube .cube-outer .top {
  transform: rotateX(-90deg) translateZ(50px);
}
.webpack-cube .cube-outer .bottom {
  transform: rotateX(90deg) translateZ(50px);
}

.webpack-cube .cube-outer .front {
  transform: rotateX(0deg) translateZ(50px);
}

.webpack-cube .cube-outer .back {
  transform: rotateX(-180deg) translateZ(50px);
}

.webpack-cube .cube-outer .left {
  transform: rotateY(-90deg) translateZ(50px);
}

.webpack-cube .cube-outer .right {
  transform: rotateY(90deg) translateZ(50px);
}

/* 动画 */
@keyframes fast {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  40%,
  100% {
    transform: rotateX(-33.5deg) rotateY(-315deg);
  }
}

@keyframes slow {
  0% {
    transform: rotateX(-33.5deg) rotateY(45deg);
  }
  40%,
  100% {
    transform: rotateX(-33.5deg) rotateY(405deg);
  }
}
</style>
```

@import

```json
{
  "imports": {
    "vue": "https://sfc.vuejs.org/vue.runtime.esm-browser.js"
  }
}
```

:::

## 2.5D 动画

[open1](/iframe/animation_iframe/1/index.html)

<iframe
  src='/iframe/animation_iframe/1/index.html'
  width="100%"
  height="500">
</iframe>

[open2](/iframe/animation_iframe/2/index.html)

<iframe
  src='/iframe/animation_iframe/2/index.html'
  width="100%"
  height="500">
</iframe>

## canvas 动画

[open1](/iframe/canvas_iframe/time.html)

<iframe
  src='/iframe/canvas_iframe/time.html'
  width="100%"
  height="500">
</iframe>

[open2](/iframe/canvas_iframe/sun.html)

<iframe
  src='/iframe/canvas_iframe/sun.html'
  width="100%"
  height="500">
</iframe>

## svg 动画

[open1](/iframe/svg_iframe/ice_cream.html)

<iframe
  src='/iframe/svg_iframe/ice_cream.html'
  width="100%"
  height="500">
</iframe>

[open2](/iframe/svg_iframe/motion.html)

<iframe
  src='/iframe/svg_iframe/motion.html'
  width="100%"
  height="500">
</iframe>

[open3](/iframe/svg_iframe/aircraft.html)

<iframe
  src='/iframe/svg_iframe/aircraft.html'
  width="100%"
  height="500">
</iframe>

[open4](/iframe/svg_iframe/loading.html)

<iframe
  src='/iframe/svg_iframe/loading.html'
  width="100%"
  height="500">
</iframe>

[open5](/iframe/svg_iframe/loading2.html)

<iframe
  src='/iframe/svg_iframe/loading2.html'
  width="100%"
  height="500">
</iframe>

[open6](/iframe/svg_iframe/location.html)

<iframe
  src='/iframe/svg_iframe/location.html'
  width="100%"
  height="500">
</iframe>

[open7](/iframe/svg_iframe/crocodile.html)

<iframe
  src='/iframe/svg_iframe/crocodile.html'
  width="100%"
  height="500">
</iframe>

[open8](/iframe/svg_iframe/car.html)

<iframe
  src='/iframe/svg_iframe/car.html'
  width="100%"
  height="600">
</iframe>
