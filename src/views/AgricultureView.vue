<template>
  <div class="agricultureView">
    
    <div class="container">
        <div class="head">
            <h1>Fakulti Perladangan</h1>
            <h2>Senarai Penuh Barangan</h2>
        </div>
        <div class="list-group">
          <ul>
            <li 
              v-for="agri in Agricultures" 
              :key="agri.id"
              class="list-group-item d-flex justify-content-between align-items-center">
                {{agri.namaBarang}}
                <span class="badge badge-primary badge-pill">
                    <router-link 
                      :to="{ path: `/Agricultures/${agri.id}` }"
                        class="btn btn-primary ml-2"
                    >Kemas Kini</router-link>
                    <div class="space"></div>
                    <a href="#" class="btn btn-danger" @click="deleteAgri(agri.id)">Padam</a>
                </span>
            </li>
          </ul>
        </div>
              
    </div>
  </div>
</template>

<script>
import AgriColRef from '../components/firebase/initializeAgriculture'
import { getDocs, doc, deleteDoc } from "firebase/firestore";
  export default {
    name: "agricultureView",
    components: {},
    data() {
      return {
        Agricultures: [],
        selectedDoc: null,
      };
    },
    methods: {
      async fetchAgricultures() {
        let AgriculturesSnapShot = await getDocs(AgriColRef);
        let Agricultures = [];
        AgriculturesSnapShot.forEach((agri) => {
          let agriData = agri.data();
          agriData.id = agri.id;
          Agricultures.push(agriData);
        });
        console.log(Agricultures);
        this.Agricultures = Agricultures;
      },
      async deleteAgri(agriId) {
        let agriRef = doc(AgriColRef, agriId);
        await deleteDoc(agriRef);
        alert("Barang berjaya dipadam!");
        this.$router.go();
      },
    },
    created() {
      this.fetchAgricultures();
    },
};
</script>

<style scoped>
.agricultureView {
  height: 100%;
  padding-top: 40px;
}

.head {
  padding-left: 400px;
}

.list-group {
  padding-top: 40px;
  padding-left: 250px;
  padding-right: 200px;
  padding-bottom: 80px;
}
.space {
  width: 8px;
  height: auto;
  display: inline-block;
}
</style>