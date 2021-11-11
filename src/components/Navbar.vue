<template>
  <nav class="bg-success wid h-100">
    <router-link class="d-flex" :to="{ name: 'Home' }">
      <img class="img greg m-2" alt="logo" src="../assets/img/GregsList.svg" />
    </router-link>
    <div id="navbarText" class="d-flex justify-content-center">
      <ul class="justify-content-center">
        <span>
          <button
            class="btn selectable text-success lighten-30 text-uppercase my-1"
            @click="login"
            v-if="!user.isAuthenticated"
          >
            Login
          </button>

          <div class="my-1" v-else>
            <div
              class="dropdown-toggle rounded selectable"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              id="authDropdown"
            >
              <img
                :src="user.picture"
                alt="user photo"
                height="30"
                class="rounded"
              />
            </div>
            <div
              class="dropdown-menu p-0 list-group"
              aria-labelledby="authDropdown"
            >
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item list-group-item-action hoverable">
                  Manage Account
                </div>
              </router-link>
              <div
                class="
                  list-group-item list-group-item-action
                  hoverable
                  text-danger
                "
                @click="logout"
              >
                <i class="mdi mdi-logout"></i>
                logout
              </div>
            </div>
          </div>
        </span>
        <li class="d-flex flex-column  my-5">
          <router-link
            :to="{ name: 'Cars' }"
            class="btn borded-0 btn-outline-light selectable text-uppercase "
          >
            Cars
          </router-link>
          <router-link
            :to="{ name: 'Houses' }"
            class="btn mt-2 btn-outline-light selectable text-uppercase"
          >
            Houses
          </router-link>

        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed } from 'vue'
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
a:hover {
  text-decoration: none;
}
.nav-link {
  text-transform: uppercase;
}
.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
.wid{
  min-width: 20vh;
  min-height: 100vh;
}
.greg{
  width: 90%;
}
</style>
