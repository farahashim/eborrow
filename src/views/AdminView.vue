<template>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <div class="adminView">
    
    <div class="container">
        <div class="headadminv">
            <h1>Fakulti Perladangan</h1>
            <h2>Senarai Penuh Pentadbir</h2>
        </div>
        <div class="list-groupadminv">
          <ul>
              <li 
                v-for="admin in Admins" 
                :key="admin.id"
                class="list-group-item d-flex justify-content-between align-items-center">
                  {{admin.namaPertama}} {{admin.namaAkhir}}
                  <span class="badge badge-primary badge-pill">
                      <router-link 
                        :to="{ path: `/Admins/${admin.id}` }"
                          class="btn btn-primary ml-2"
                      >Edit</router-link>
                      <div class="space"></div>
                      <a href="#" class="btn btn-danger" @click="deleteAdmin(admin.id)">Delete</a>
                  </span>
              </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
import AdminColRef from '../components/initializeAdmin'
import { getDocs, doc, deleteDoc } from "firebase/firestore";
  export default {
    name: "adminView",
    components: {},
    data() {
      return {
        Admins: [],
        selectedDoc: null,
      };
    },
    methods: {
      async fetchAdmins() {
        let AdminsSnapShot = await getDocs(AdminColRef);
        let Admins = [];
        AdminsSnapShot.forEach((admin) => {
          let adminData = admin.data();
          adminData.id = admin.id;
          Admins.push(adminData);
        });
        console.log(Admins);
        this.Admins = Admins;
      },
      async deleteAdmin(adminId) {
        let adminRef = doc(AdminColRef, adminId);
        await deleteDoc(adminRef);
        alert("Admin deleted successfully!");
        this.$router.go();
      },
    },
    created() {
      this.fetchAdmins();
    },
};
</script>

<style scoped>
.headadminv {
  text-align: center;
  padding-left: 50px;
  padding-top: 40px;
}
.list-groupadminv {
  padding-top: 40px;
  padding-left: 250px;
  padding-right: 200px;
  padding-bottom: 80px;
}
.space {
  width: 4px;
  height: auto;
  display: inline-block;
}
</style>