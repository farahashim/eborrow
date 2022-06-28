<template>
  <div class="container">
    <div class="login">
        <div class="login-head">
            <h1>Log Masuk</h1>
        </div>
        <div class="login-form">
          <form>
            <!-- Email input -->
            <div class="form-group mb-2">
              <label for="emel">E-mel</label>
              <input type="text" class="form-control" id="emel" placeholder="E-Mel">
            </div>

            <!-- Password input -->
            <div class="form-group mb-4">
              <label for="katalaluan">Kata Laluan</label>
              <input type="password" class="form-control" id="katalaluan" placeholder="Kata Laluan" />
            </div>

            <!-- 2 column grid layout for inline styling -->
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                <!-- Checkbox -->
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="ingatkansaya" checked />
                  <label class="form-check-label" for="ingatkansaya"> Ingatkan Saya </label>
                </div>
              </div>

              <div class="col">
                <!-- Simple link -->
                <a href="#!">Lupa Kata Laluan?</a>
              </div>
            </div>

            <!-- Submit button -->
            <div class="login-btn">
              <button type="button" class="btn btn-primary btn-block mb-4">Log Masuk</button>
            </div>

            <!-- Register buttons -->
            <div class="text-center">
              <p>Belum Daftar? <router-link to="/register">Daftar Di Sini</router-link></p>
            </div>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
  export default {

}
</script>

<style scoped>
.login-head {
  text-align: center;
  padding-top: 40px;
  padding-bottom: 20px;
  padding-left: 120px;
}
.login-form .form-group {
  padding-left: 250px;
  padding-right: 80px;
  padding-top: 12px;
}
.col {
  padding-left: 260px;
}
.text-center {
  text-align: center;
  padding-top: 20px;
  padding-left: 150px;
}
.login-btn {
  padding-left: 580px;
}
</style>