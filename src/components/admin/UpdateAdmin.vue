<template>
  <div class="update-admin">
    <div class="container">
        <div class="row">
            <div class="update-admin-head">
                <h1>Fakulti Perladangan</h1>
                <h2>Kemas Kini Pentadbir Disini</h2>
            </div>
            <div class="update-admin-form">
                <form @submit.prevent="updateAdmin">
                    <div class="form-group">
                        <label for="namaPertama">Nama Pertama</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="namaPertama" 
                        placeholder="Nama Pertama" 
                        v-model="adminInfo.namaPertama">
                    </div>
                    <div class="form-group">
                        <label for="namaAkhir">Nama Akhir</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="namaAkhir" 
                        v-model="adminInfo.namaAkhir">
                    </div>
                    <div class="form-group">
                        <label for="noPekerja">No. Pekerja</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        placeholder="No. Pekerja" 
                        v-model="adminInfo.noPekerja">
                    </div>
                    <div class="col">
                        <button type="submit" class="btn btn-primary">Kemas Kini</button>
                        <div class="space"></div>
                        <button type="submit" class="btn btn-danger" >Kembali</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import AdminColRef from '../firebase'
import { getDoc, doc, setDoc } from 'firebase/firestore'
export default {
  dataAdmin() {
      return {
          selectedAdmin: {},
          adminId: null,
          docRef: null,
          adminInfo: {
            namaPertama: null,
            namaAkhir: null,
            noPekerja: null,
          }
      };
  },
  methods: {
      async getAdmin() {
          let adminRef = doc(AdminColRef, this.adminId);
          this.docRef = adminRef;
          let admin = await getDoc(this.docRef);
          let adminData = admin.data();
          this.adminInfo.namaPertama = adminData.namaPertama;
          this.adminInfo.namaAkhir = adminData.namaAkhir;
          this.adminInfo.noPekerja = adminData.noPekerja;
      },
      async updateAdmin() {
          await setDoc(this.docRef, this.adminInfo);
          alert(
              `The admin with ID of ${this.adminId} has been updated successfully!`
          );
          this.$router.push({name: 'adminView'});
      },
  },
  created() {
      let adminId = this.$route.params.adminId;
      this.adminId = adminId;
      this.getAdmin();
  },
};
</script>

<style>
.update-admin-head {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.update-admin-form .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.update-admin-form .col {
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