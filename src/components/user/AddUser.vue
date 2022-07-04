<template>
  <div class="add-user">
    <div class="container">
        <div class="row">
            <div class="headadduser">
                <h1>Fakulti Perladangan</h1>
                <h2>Tambah Pengguna Disini</h2>
                <h6>Borang ini hanya digunakan kepada pengguna yang mempunyai masalah untuk mendaftar secara atas talian sahaja.</h6>
            </div>
            <div class="formadduser">
                <form @submit.prevent="addUser">
                    <div class="form-group mb-2">
                        <label for="namaPertama">Nama Pertama</label>
                        <input type="text" class="form-control" id="namaPertama" placeholder="Contoh: MUHD RUSLAN" v-model="namaPertama">
                    </div>
                        <div class="form-group mb-2">
                            <label for="namaAkhir">Nama Akhir</label>
                            <input type="text" class="form-control" placeholder="Contoh: BIN KAMIL" v-model="namaAkhir">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noStaffPel">No. Staff/Pelajar</label>
                            <input type="text" class="form-control" placeholder="Contoh: 123456/2022123456" v-model="noStaffPel">
                        </div>
                        <div class="form-group mb-2">
                            <label for="kodProgram">Kod Program</label>
                            <input type="text" class="form-control" placeholder="Contoh: AP110" v-model="kodProgram">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noKP">No. K/P</label>
                            <input type="text" class="form-control" placeholder="Contoh: 000625049999" v-model="noKP">
                        </div>
                        <div class="form-group mb-2">
                            <label for="semester">Semester</label>
                            <input type="text" class="form-control" placeholder="Contoh: 06" v-model="semester">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelBimbit">No. Telefon Bimbit</label>
                            <input type="text" class="form-control" placeholder="Contoh: 0123456789" v-model="noTelBimbit">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelRumahPej">No. Telefon Rumah/Pejabat</label>
                            <input type="text" class="form-control" placeholder="Contoh: 0612345678" v-model="noTelRumahPej">
                        </div>
                    <div class="col mb-2">
                        <button type="submit" class="btn btn-primary">Tambah</button>
                        <div class="space"></div>
                        <button type="submit" class="btn btn-danger">Kembali</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import UserColRef from "../initializeUser";
import { addDoc } from 'firebase/firestore'

export default {
    data() {
        return {
            namaPertama: null,
            namaAkhir: null,
            noStaffPel: null,
            kodProgram: null,
            noKP: null,
            semester: null,
            noTelBimbit: null,
            noTelRumahPej: null,
        };
    },
    methods: {
      async addUser() {
          console.log("Pengguna Telah Ditambah");
          const addedDoc = await addDoc(UserColRef, this.$data);
          alert("Pengunna Berjaya Dimasukkan!");
          console.log(addedDoc);
          this.$router.push({name: 'userView'});
      },
    },
};
</script>

<style>
.headadduser {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.formadduser .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.formadduser .col {
    padding-top: 20px;
    padding-left: 550px;
    padding-bottom: 40px;
}
.space {
  width: 8px;
  height: auto;
  display: inline-block;
}
</style>