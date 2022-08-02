<template>
  <div class="applicationView">
    
    <div class="container">
        <div class="head">
            <h1>Fakulti Perladangan</h1>
            <h2>Senarai Penuh Permohonan</h2>
        </div>
        <div class="list-group">
          <ul>
            <li 
              v-for="application in Applications" 
              :key="application.id"
              class="list-group-item d-flex justify-content-between align-items-center">
                {{application.namaPertama}} {{application.namaAkhir}}
                <span class="badge badge-primary badge-pill">
                    <router-link 
                      :to="{ path: `/Applications/${application.id}` }"
                        class="btn btn-primary ml-2"
                    >Kemas Kini</router-link>
                    <div class="space"></div>
                    <a href="#" class="btn btn-danger" @click="deleteApplication(application.id)">Padam</a>
                </span>
            </li>
          </ul>
        </div>
              
    </div>
  </div>
</template>

<script>
import AppColRef from '../components/firebase/initializeApplication'
import { getDocs, doc, deleteDoc } from "firebase/firestore";
  export default {
    name: "applicationView",
    components: {},
    data() {
      return {
        Applications: [],
        selectedDoc: null,
      };
    },
    methods: {
      async fetchApplications() {
        let ApplicationsSnapShot = await getDocs(AppColRef);
        let Applications = [];
        ApplicationsSnapShot.forEach((application) => {
          let applicationData = application.data();
          applicationData.id = application.id;
          Applications.push(applicationData);
        });
        console.log(Applications);
        this.Applications = Applications;
      },
      async deleteApplication(applicationId) {
        let applicationRef = doc(AppColRef, applicationId);
        await deleteDoc(applicationRef);
        alert("Permohonan berjaya dipadam!");
        this.$router.go();
      },
    },
    created() {
      this.fetchApplications();
    },
};
</script>

<style scoped>
.applicationView {
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