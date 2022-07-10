<template>
  <div class="add-agriculture">
    <div class="container">
        <div class="row">
            <div class="headaddagri">
                <h1>Fakulti Perladangan</h1>
                <h2>Tambah Barang Disini</h2>
            </div>
            <div class="formaddagri">
                <form @submit.prevent="addAgri">
                    <div class="form-group mb-2">
                        <label for="namaBarang">Nama Barang</label>
                        <input type="text" class="form-control" id="namaBarang" placeholder="Nama Barang" v-model="namaBarang">
                    </div>
                        <div class="form-group mb-2">
                            <label for="noSiri">No. Siri</label>
                            <input type="text" class="form-control" placeholder="No. Siri" v-model="noSiri">
                        </div>
                        <div class="form-group mb-2">
                            <label for="kuantiti">Kuantiti</label>
                            <input type="text" class="form-control" placeholder="Kuantiti" v-model="kuantiti">
                        </div>
                    <div class="form-group mb-2">
                        <label for="catatan">Catatan</label>
                        <textarea type="text" class="form-control" id="catatan" row="5" placeholder="Catatan" v-model="catatan"></textarea>
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
import AgriColRef from "../firebase/initializeAgriculture";
import { addDoc } from 'firebase/firestore'

export default {
    data() {
        return {
            namaBarang: null,
            noSiri: null,
            kuantiti: null,
            catatan: null,
        };
    },
    methods: {
      async addAgri() {
          console.log("Barang Telah Ditambah");
          const addedDoc = await addDoc(AgriColRef, this.$data);
          alert("Document created successfully!");
          console.log(addedDoc);
          this.$router.push({name: 'agricultureView'});
      },
    },
};
</script>

<style>
.headaddagri {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.formaddagri .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.formaddagri .col {
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