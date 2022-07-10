<template>
  <div class="addAdmin">
    <div class="container">
        <div class="row">
            <div class="headaddadmin">
                <h1>Fakulti Perladangan</h1>
                <h2>Tambah Pentadbir Disini</h2>
            </div>
            <div class="listaddadmin">
                <form @submit.prevent="addAdmin">
                    <div class="form-group mb-2">
                        <label for="namaPertama">Nama Pertama</label>
                        <input type="text" class="form-control" id="namaPertama" placeholder="Nama Pertama" v-model="namaPertama">
                    </div>
                    <div class="form-group mb-2">
                        <label for="namaAkhir">Nama Akhir</label>
                        <input type="text" class="form-control" placeholder="Nama Akhir" v-model="namaAkhir">
                    </div>
                    <div class="form-group mb-2">
                        <label for="noPekerja">No. Pekerja</label>
                        <input type="number" class="form-control" placeholder="No. Pekerja" v-model="noPekerja">
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
import AdminColRef from "../firebase/initializeAdmin";
import { addDoc } from 'firebase/firestore'

export default {
    data() {
        return {
            namaPertama: null,
            namaAkhir: null,
            noPekerja: null,
        };
    },
    methods: {
      async addAdmin() {
          console.log("Pentadbir Telah Ditambah");
          const addedDoc = await addDoc(AdminColRef, this.$data);
          alert("Document created successfully!");
          console.log(addedDoc);
          this.$router.push({name: 'adminView'});
      },
    },
};
</script>

<style>
.headaddadmin {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.listaddadmin .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.listaddadmin .col {
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