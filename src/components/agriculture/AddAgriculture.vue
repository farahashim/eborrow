<template>
  <div class="add-agriculture">
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h1>Fakulti Perladangan</h1>
                <h2>Tambah Barang Disini</h2>
                <form @submit.prevent="addAgri">
                    <div class="form-group">
                        <label for="namaBarang">Nama Barang</label>
                        <input type="text" class="form-control" id="namaBarang" placeholder="Nama Barang" v-model="namaBarang">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="noSiri">No. Siri</label>
                            <input type="text" class="form-control" placeholder="No. Siri" v-model="noSiri">
                        </div>
                        <div class="col">
                            <label for="kuantiti">Kuantiti</label>
                            <input type="number" class="form-control" placeholder="Kuantiti" v-model="kuantiti">
                        </div>
                    </div>
                    
                    <div class="form-group">
                        <label for="catatan">Catatan</label>
                        <textarea type="text" class="form-control" id="catatan" row="5" placeholder="Catatan" v-model="catatan"></textarea>
                    </div>
                    <div class="col">
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
import AgriColRef from "../firebase";
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
.space {
  width: 4px;
  height: auto;
  display: inline-block;
}
</style>