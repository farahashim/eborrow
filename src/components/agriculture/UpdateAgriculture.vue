<template>
  <div class="update-agriculture">
    <div class="container">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <h1>Fakulti Perladangan</h1>
                <h2>Kemas Kini Barang Disini</h2>
                <form @submit.prevent="updateAgri">
                    <div class="form-group">
                        <label for="namaBarang">Nama Barang</label>
                        <input 
                        type="text" 
                        class="form-control" 
                        id="namaBarang" 
                        placeholder="Nama Barang" 
                        v-model="agriInfo.namaBarang">
                    </div>
                    <div class="form-row">
                        <div class="col">
                            <label for="noSiri">No. Siri</label>
                            <input 
                            type="text" 
                            class="form-control" 
                            placeholder="no. Siri" 
                            v-model="agriInfo.noSiri">
                        </div>
                        <div class="col">
                            <label for="kuantiti">Kuantiti</label>
                            <input 
                            type="number" 
                            class="form-control" 
                            placeholder="Kuantiti" 
                            v-model="agriInfo.kuantiti">
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="catatan">Catatan</label>
                        <textarea 
                        type="text" 
                        class="form-control" 
                        id="catatan" 
                        row="5" 
                        placeholder="Catatan" 
                        v-model="agriInfo.catatan"></textarea>
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
import AgriColRef from '../firebase'
import { getDoc, doc, setDoc } from 'firebase/firestore'
export default {
  data() {
      return {
          selectedAgri: {},
          agriId: null,
          docRef: null,
          agriInfo: {
            namaBarang: null,
            noSiri: null,
            kuantiti: null,
            catatan: null,
          }
      };
  },
  methods: {
      async getAgri() {
          let agriRef = doc(AgriColRef, this.agriId);
          this.docRef = agriRef;
          let agri = await getDoc(this.docRef);
          let agriData = agri.data();
          this.agriInfo.namaBarang = agriData.namaBarang;
          this.agriInfo.noSiri = agriData.noSiri;
          this.agriInfo.kuantiti = agriData.kuantiti;
          this.agriInfo.catatan = agriData.catatan;
      },
      async updateAgri() {
          await setDoc(this.docRef, this.agriInfo);
          alert(
              `The city with ID of ${this.agriId} has been updated successfully!`
          );
          this.$router.push({name: 'agricultureView'});
      },
  },
  created() {
      let agriId = this.$route.params.agriId;
      this.agriId = agriId;
      this.getAgri();
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