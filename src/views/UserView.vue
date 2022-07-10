<template>
  <div class="userView">
    
    <div class="container">
        <div class="head">
            <h1>Fakulti Perladangan</h1>
            <h2>Senarai Penuh Pengguna</h2>
        </div>
        <div class="list-group">
          <ul>
            <li 
              v-for="user in Users" 
              :key="user.id"
              class="list-group-item d-flex justify-content-between align-items-center">
                {{user.namaPertama}} {{user.namaAkhir}}
                <span class="badge badge-primary badge-pill">
                    <router-link 
                      :to="{ path: `/Users/${user.id}` }"
                        class="btn btn-primary ml-2"
                    >Kemas Kini</router-link>
                    <div class="space"></div>
                    <a href="#" class="btn btn-danger" @click="deleteUser(user.id)">Padam</a>
                </span>
            </li>
          </ul>
        </div>
              
    </div>
  </div>
</template>

<script>
import UserColRef from '../components/firebase/initializeUser'
import { getDocs, doc, deleteDoc } from "firebase/firestore";
  export default {
    name: "userView",
    components: {},
    data() {
      return {
        Users: [],
        selectedDoc: null,
      };
    },
    methods: {
      async fetchUsers() {
        let UsersSnapShot = await getDocs(UserColRef);
        let Users = [];
        UsersSnapShot.forEach((user) => {
          let userData = user.data();
          userData.id = user.id;
          Users.push(userData);
        });
        console.log(Users);
        this.Users = Users;
      },
      async deleteUser(userId) {
        let userRef = doc(UserColRef, userId);
        await deleteDoc(userRef);
        alert("Pengguna berjaya dipadam!");
        this.$router.go();
      },
    },
    created() {
      this.fetchUsers();
    },
};
</script>

<style scoped>
.userView {
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