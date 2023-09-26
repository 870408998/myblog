---
icon: javascript
date: 2022-12-05
category:
  - code
tag:
  - javaScript
  - demo
star: true
sticky: true
---

# 以下项目皆为 vue3-vite 版本

<!-- > 以下项目皆为 vue3-vite 版本 -->

## 开始

1.package.json

```json
"dependencies": {
    "three": "^0.147.0",
    "vue": "^3.2.41"
  },
```

## 1.海中小岛

### 1.创建一个 3d 平面

```vue
<script setup>
// 引入threejs核心模块
import * as THREE from "three";
//  导入轨道控制器
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
//  引入vue属性
import { onMounted, ref } from "vue";

const webglDom = ref(null);

//  初始化场景
const scene = new THREE.Scene();
//  初始化相机   摄像机视锥体垂直视野角度 摄像机视锥体长宽比 摄像机视锥体近端面 摄像机视锥体远端面
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  2000
);

//  设置相机的位置
camera.position.set(0, 0, 130);
//  3D辅助线
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);

//  监听画面变化，重新渲染
const onWindowResize = () => {
  //  更新摄像头
  camera.aspect = window.innerWidth / window.innerHeight;
  //  更新摄像机投影矩阵
  camera.updateProjectionMatrix();
  //  更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  console.log("123");
};
window.addEventListener("resize", onWindowResize, false);

//  初始化渲染器  要能看到 还需要渲染器
const renderer = new THREE.WebGLRenderer({
  //  设置抗锯齿
  antialias: true,
});

//  实例化控制器 没控制器不能动哦
const controls = new OrbitControls(camera, renderer.domElement);
//  设置控制器阻尼,必须在动画循环中加入update()
controls.enableDamping = true;

//  添加平面
const planeGeometry = new THREE.PlaneGeometry(100, 100);
const planeMaterial = new THREE.MeshBasicMaterial({
  color: "#ffff00",
  //  平面的内外都渲染
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(planeGeometry, planeMaterial);

onMounted(() => {
  initThreeScene();
  Render();
});

// 初始化threejs场景;并设置相机,灯光,控制器,renderer的设置
const initThreeScene = () => {
  camera.position.set(0, 0, 130);

  scene.add(camera);
  console.log("camera", camera);
  //  更新渲染器
  renderer.setSize(window.innerWidth, window.innerHeight);
  //  输出环境编码
  renderer.outputEncoding = THREE.sRGBEncoding;
  //  将渲染器添加到页面
  webglDom.value.appendChild(renderer.domElement);
  scene.add(plane);
};

// 声明render函数进行循环渲染
const Render = () => {
  controls.update();
  renderer.render(scene, camera);
  //  每帧重绘
  requestAnimationFrame(Render);
};
</script>

<template>
  <div id="webglDom" ref="webglDom"></div>
</template>

<style scoped></style>
```

::: vue-playground 自定义导入与映射的 Vue 交互演示

@file App.vue

```vue
<script setup>
import { ref } from "vue";
import Comp from "./Comp.vue";

const msg = ref("Hello Playground!");
</script>

<template>
  <Comp />
</template>
```

@file Comp.vue

```vue
<script setup>
// 引入threejs核心模块
import * as THREE from "@threes";
//  导入轨道控制器
import { OrbitControls } from "@OrbitControls";
</script>

<template>
  <div id="webglDom" ref="webglDom"></div>
</template>

<style scoped>
div {
  height: 1000px;
}
</style>
```

@import

```json
{
  "imports": {
    "@threes": "https://unpkg.com/three@0.138.0/build/three.module.js",
    "@OrbitControls": "https://unpkg.com/three@0.138.0/examples/jsm/controls/OrbitControls.js"
  }
}
```

@setting

```json
{
  "showCompileOutput": true
}
```

:::
