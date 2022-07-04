<template>
  <div class="topnav">
    <nav>
      <router-link to="/">HALAMAN UTAMA</router-link>
      <router-link to="/login" class="split">Log Masuk</router-link>
    </nav>
  </div>
  <div class="sidenav">
    <router-link to="/about">Tentang Kami</router-link>
    <router-link to="/agricultureView" >Senarai Barang</router-link>
    <router-link to="/adminView">Senarai Pentadbir</router-link>
    <router-link to="/userView">Senarai Pengguna</router-link>
    <router-link to="/add-agriculture">Tambah Barang</router-link>
    <router-link to="/add-admin" class="split">Tambah Pentadbir</router-link>
    <router-link to="/add-user" class="split">Tambah Pengguna</router-link>
</div>
  <router-view/>

  <div class="main">

  </div>
</template>


<style>
.topnav {
  padding-left: 180px;
  overflow: hidden;
  background-color: #333;
  font-weight: 300px;
}

.topnav a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover {
  background-color: #9982ba;
  color: black;
}

/* Create a right-aligned (split) link inside the navigation bar */
.topnav a.split {
  float: right;
  background-color: #3c0f80;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #9982ba;
}

.sidenav {
  padding-top: 90px;
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  word-spacing: 5px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
