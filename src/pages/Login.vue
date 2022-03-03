<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex flex-center">
        <div
          id="particles-js"
          :class="$q.dark.isActive ? 'dark_gradient' : 'normal_gradient'"
        />

        <!-- <q-btn
          color="white"
          class="absolute-top-right"
          flat
          round
          @click="$q.dark.toggle()"
          :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"
        /> -->

        <q-card
          class="login-form"
          v-bind:style="
            $q.platform.is.mobile
              ? { width: '80%' }
              : { width: '100%', maxWidth: '700px' }
          "
        >
          <q-card-section horizontal>
            <q-card-section
              v-if="!$q.platform.is.mobile"
              :class="[
                'col-5 flex column q-pa-lg',
                $q.dark.isActive ? 'bg-blue-grey-7' : ' bg-indigo-1',
              ]"
            >
              <div class="text-h6 ellipsis"> Sign In </div>
              <div class="text-body2 q-mt-md">
                By Signing Up, you can avail full features of our services.
              </div>
              <div class="text-body2 q-mt-sm"> Get an account !!! </div>
              <q-img
                class="q-mt-auto"
                :src="$q.dark.isActive ? 'logo-w.png' : 'logo.png'"
                spinner-color="white"
                style="height: 30px; max-width: 120px"
              />
            </q-card-section>
            <q-card-section
              :class="[$q.platform.is.mobile ? 'col-12 q-pa-none' : 'col-7']"
            >
              <q-card-section v-if="$q.platform.is.mobile" class="q-pb-none"
                ><div class="text-h6 ellipsis"> Sign In </div></q-card-section
              >
              <q-card-section>
                <q-form @submit="$router.push('/')" class="q-gutter-md">
                  <q-input
                    outlined
                    v-model="username"
                    placeholder="Username"
                    lazy-rules
                    dense
                  />

                  <q-input
                    type="password"
                    outlined
                    dense
                    v-model="password"
                    placeholder="Password"
                    lazy-rules
                  />
                  <!-- <q-checkbox label="Label on Right" /> -->
                  <div class="q-py-sm">
                    <q-btn
                      label="Login"
                      unelevated
                      type="submit"
                      no-caps
                      :class="[
                        $q.dark.isActive
                          ? 'bg-white text-primary'
                          : 'bg-primary text-white',
                      ]"
                    />
                    <span class="q-ml-md q-mr-sm text-caption"> or</span>
                    <q-btn
                      label="SignUp"
                      no-caps
                      unelevated
                      :class="[
                        $q.dark.isActive
                          ? 'bg-transparent text-white'
                          : 'text-primary bg-white',
                        'q-px-sm',
                      ]"
                    />

                    <!-- <a
                      style="font-size: 30px"
                      class="float-right"
                      href="https://github.com/sponsors/mayank091193"
                      target="_blank"
                      title="Donate"
                    >
                      <i class="fas fa-heart" style="color: #eb5daa"> </i>
                    </a> -->
                  </div>
                </q-form>
                <div class="q-mt-lg">
                  <span>Connect with us</span>
                  <q-btn
                    color="white"
                    :text-color="$q.dark.isActive ? 'white' : 'primary'"
                    round
                    outline
                    icon="delete"
                    class="q-ml-md"
                    size="sm"
                  />
                  <q-btn
                    color="white"
                    :text-color="$q.dark.isActive ? 'white' : 'primary'"
                    round
                    outline
                    class="q-ml-sm"
                    icon="settings"
                    size="sm"
                  />
                  <q-btn
                    color="white"
                    :text-color="$q.dark.isActive ? 'white' : 'primary'"
                    round
                    outline
                    class="q-ml-sm"
                    icon="facebook"
                    size="sm"
                  />
                </div>
              </q-card-section>
            </q-card-section>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script type="text/javascript">
export default {
  name: 'PageLogin',
  data() {
    return {
      username: 'admin',
      password: 'Admin@CRM',
    }
  },
}
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
}
.normal_gradient {
  background: linear-gradient(145deg, rgb(74, 94, 137) 15%, #b61924 70%);
}
.dark_gradient {
  background: linear-gradient(145deg, rgb(11, 26, 61) 15%, #4c1014 70%);
}
</style>
