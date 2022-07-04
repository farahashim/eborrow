<template>
  <div class="update-user">
    <div class="container">
        <div class="row">
            <div class="headupdateuser">
                <h1>Fakulti Perladangan</h1>
                <h2>Kemas Kini Pengguna Disini</h2>
                <h6>Borang ini hanya digunakan kepada pengguna yang mempunyai masalah untuk mengemas kini secara atas talian sahaja.</h6>
            </div>
            <div class="formupdateuser">
                <form @submit.prevent="updateUser">
                    <div class="form-group mb-2">
                        <label for="namaPertama">Nama Pertama</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="namaPertama" 
                        placeholder="Contoh: MUHD RUSLAN" 
                        v-model="userInfo.namaPertama">
                    </div>
                        <div class="form-group mb-2">
                            <label for="namaAkhir">Nama Akhir</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: BIN KAMIL" 
                            v-model="userInfo.namaAkhir">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noStaffPel">No. Staff/Pelajar</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 123456/2022123456" 
                            v-model="userInfo.noStaffPel">
                        </div>
                        <div class="form-group mb-2">
                            <label for="kodProgram">Kod Program</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: AP110" 
                            v-model="userInfo.kodProgram">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noKP">No. K/P</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 000625049999" 
                            v-model="userInfo.noKP">
                        </div>
                        <div class="form-group mb-2">
                            <label for="semester">Semester</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 06" 
                            v-model="userInfo.semester">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelBimbit">No. Telefon Bimbit</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 0123456789" 
                            v-model="userInfo.noTelBimbit">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelRumahPej">No. Telefon Rumah/Pejabat</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 0612345678" 
                            v-model="userInfo.noTelRumahPej">
                        </div>
                    <div class="col mb-2">
                        <button type="submit" class="btn btn-primary">Kemas Kini</button>
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
import UserColRef from '../initializeUser'
import { getDoc, doc, setDoc } from 'firebase/firestore'
export default {
  data() {
      return {
          selectedUser: {},
          userId: null,
          docRef: null,
          userInfo: {
            namaPertama: null,
            namaAkhir: null,
            noStaffPel: null,
            kodProgram: null,
            noKP: null,
            semester: null,
            noTelBimbit: null,
            noTelRumahPej: null,
          }
      };
  },
  methods: {
      async getUser() {
          let userRef = doc(UserColRef, this.userId);
          this.docRef = userRef;
          let user = await getDoc(this.docRef);
          let userData = user.data();
          this.userInfo.namaPertama = userData.namaPertama;
          this.userInfo.namaAkhir = userData.namaAkhir;
          this.userInfo.noStaffPel = userData.noStaffPel;
          this.userInfo.kodProgram = userData.kodProgram;
          this.userInfo.noKP = userData.noKP;
          this.userInfo.semester = userData.semester;
          this.userInfo.noTelBimbit = userData.noTelBimbit;
          this.userInfo.noTelRumahPej = userData.noTelRumahPej;
      },
      async updateUser() {
          await setDoc(this.docRef, this.userInfo);
          alert(
              `Pengguna bernombor ID ${this.userId} berjaya dikemas kini!`
          );
          this.$router.push({name: 'userView'});
      },
  },
  created() {
      let userId = this.$route.params.userId;
      this.userId = userId;
      this.getUser();
  },
};
</script>

<style>
.headupdateuser {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.formupdateuser .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.formupdateuser .col {
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