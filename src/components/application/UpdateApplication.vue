<template>
  <div class="update-application">
    <div class="container">
        <div class="row">
            <div class="headupdateapplication">
                <h1>Fakulti Perladangan</h1>
                <h2>Kemas Kini Permohonan Disini</h2>
            </div>
            <div class="formupdateapplication">
                <form @submit.prevent="updateApplication">
                    <div class="form-group mb-2">
                        <label for="namaPertama">Nama Pertama</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="namaPertama" 
                        placeholder="Contoh: MUHD RUSLAN" 
                        v-model="applicationInfo.namaPertama">
                    </div>
                        <div class="form-group mb-2">
                            <label for="namaAkhir">Nama Akhir</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: BIN KAMIL" 
                            v-model="applicationInfo.namaAkhir">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noStaffPel">No. Staff/Pelajar</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 123456/2022123456" 
                            v-model="applicationInfo.noStaffPel">
                        </div>
                        <div class="form-group mb-2">
                            <label for="kodProgram">Kod Program</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: AP110" 
                            v-model="applicationInfo.kodProgram">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noKP">No. K/P</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 000625049999" 
                            v-model="applicationInfo.noKP">
                        </div>
                        <div class="form-group mb-2">
                            <label for="semester">Semester</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 06" 
                            v-model="applicationInfo.semester">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelBimbit">No. Telefon Bimbit</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 0123456789" 
                            v-model="applicationInfo.noTelBimbit">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noTelRumahPej">No. Telefon Rumah/Pejabat</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 0612345678" 
                            v-model="applicationInfo.noTelRumahPej">
                        </div>
                        <div class="form-group mb-2">
                            <label for="perkara">Perkara</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: Cangkul" 
                            v-model="applicationInfo.perkara">
                        </div>
                        <div class="form-group mb-2">
                            <label for="kuantiti">Kuantiti</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: 2" 
                            v-model="applicationInfo.kuantiti">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noSiri">No. Siri</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: XXX674519" 
                            v-model="applicationInfo.noSiri">
                        </div>
                        <div class="form-group mb-2">
                            <label for="noSiri">Catatan</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="Contoh: Untuk kegunaan kerja lapangan." 
                            v-model="applicationInfo.catatan">
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
import AppColRef from '../firebase/initializeApplication'
import { getDoc, doc, setDoc } from 'firebase/firestore'
export default {
  data() {
      return {
          selectedApplication: {},
          applicationId: null,
          docRef: null,
          applicationInfo: {
            namaPertama: null,
            namaAkhir: null,
            noStaffPel: null,
            kodProgram: null,
            noKP: null,
            semester: null,
            noTelBimbit: null,
            noTelRumahPej: null,
            perkara: null,
            kuantiti: null,
            noSiri: null,
            catatan: null,
          }
      };
  },
  methods: {
      async getApplication() {
          let applicationRef = doc(AppColRef, this.applicationId);
          this.docRef = applicationRef;
          let application = await getDoc(this.docRef);
          let applicationData = application.data();
          this.applicationInfo.namaPertama = applicationData.namaPertama;
          this.applicationInfo.namaAkhir = applicationData.namaAkhir;
          this.applicationInfo.noStaffPel = applicationData.noStaffPel;
          this.applicationInfo.kodProgram = applicationData.kodProgram;
          this.applicationInfo.noKP = applicationData.noKP;
          this.applicationInfo.semester = applicationData.semester;
          this.applicationInfo.noTelBimbit = applicationData.noTelBimbit;
          this.applicationInfo.noTelRumahPej = applicationData.noTelRumahPej;
          this.applicationInfo.perkara = applicationData.perkara;
          this.applicationInfo.kuantiti = applicationData.kuantiti;
          this.applicationInfo.noSiri = applicationData.noSiri;
          this.applicationInfo.catatan = applicationData.catatan;
      },
      async updateApplication() {
          await setDoc(this.docRef, this.applicationInfo);
          alert(
              `Permohonan bernombor ID ${this.applicationId} berjaya dikemas kini!`
          );
          this.$router.push({name: 'applicationView'});
      },
  },
  created() {
      let applicationId = this.$route.params.applicationId;
      this.applicationId = applicationId;
      this.getApplication();
  },
};
</script>

<style>
.headupdateapplication {
    text-align: center;
    padding-top: 40px;
    padding-bottom: 20px;
}
.formupdateapplication .form-group {
    padding-left: 250px;
    padding-right: 80px;
    padding-top: 12px;
}
.formupdateapplication .col {
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