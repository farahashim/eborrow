<template>
  <div class="agricultureView">
    
    <div class="container">
        <div class="col-md-6 offset-md-3">
            <h1>Fakulti Perladangan</h1>
            <h2>Senarai Penuh Barangan</h2>
            <ul class="list-group">
                <li 
                  v-for="agri in Agricultures" 
                  :key="agri.id"
                  class="list-group-item d-flex justify-content-between align-items-center">
                    {{agri.namaBarang}}
                    <span class="badge badge-primary badge-pill">
                        <router-link 
                          :to="{ path: `/Agricultures/${agri.id}` }"
                            class="btn btn-primary ml-2"
                        >Edit</router-link>
                        <div class="space"></div>
                        <a href="#" class="btn btn-danger" @click="deleteAgri(agri.id)">Delete</a>
                    </span>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
import AgriColRef from './firebase'
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
        alert("Item deleted successfully!");
        this.$router.go();
      },
    },
    created() {
      this.fetchAgricultures();
    },
};
</script>

<style scoped>
.space {
  width: 4px;
  height: auto;
  display: inline-block;
}
</style>