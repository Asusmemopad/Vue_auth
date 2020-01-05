<template>
  <div>
    <header>
      <h1>Welcome to my site</h1>
      <p>A site where anyone can tell the world something</p>

      <div class="container">
        <router-link to="/registration">
          <button class="btn btn3">Sign in</button>
        </router-link>
        <router-link to="/login">
            <button class="btn btn4">Sign up</button>
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html {
  height: 100%;
  overflow: hidden;
}
body {
  color: #fff;
  margin: 0;
  padding: 0;
  perspective: 1px;
  transform-style: preserve-3d;
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  font-family: "Luna";
}
header {
  box-sizing: border-box;
  min-height: 100vh;
  padding: 30vw 0 5vw;
  position: relative;
  transform-style: inherit;
  width: 100vw;
}
header h1 {
  margin-top: -100px;
}
header,
header:before {
  background: 50% 50% / cover;
}
header::before {
  bottom: 0;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  background-image: url(../assets/mountain_2.jpg);
  background-size: cover;
  transform-origin: center center 0;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
  min-height: 100vh;
}
header * {
  font-weight: normal;
  letter-spacing: 0.2em;
  text-align: center;
  margin: 0;
  padding: 1em 0;
}
div.container {
  text-align: center;
  margin-top: 360px;
}
.btn {
  border: 1px solid #000000b4;
  background: none;
  padding: 10px 20px;
  font-size: 19px;
  font-family: "Luna";
  cursor: pointer;
  margin: 10px;
  transition: 0.8s;
  position: relative;
  overflow: hidden;
}
.btn3,
.btn4 {
  color: #fff;
}
.btn3:hover,
.btn4:hover {
  color: #7f8c8d;
}
.btn::before {
  content: "";
  position: absolute;
  left: 0;
  width: 100%;
  height: 0%;
  background: #7f8c8d;
  z-index: -1;
  transition: 0.8s;
}
.btn3::before {
  top: 0;
  border-radius: 0 0 50% 50%;
}
.btn4::before {
  bottom: 0;
  border-radius: 50% 50% 0 0;
}
.btn3::before,
.btn4::before {
  height: 180%;
}
.btn3:hover::before,
.btn4:hover::before {
  height: 0%;
}
</style>