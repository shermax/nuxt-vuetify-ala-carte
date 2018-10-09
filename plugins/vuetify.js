import Vue from 'vue'
import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VFooter from 'vuetify/es5/components/VFooter'
import VToolbar from 'vuetify/es5/components/VToolbar'
import {VLayout, VContainer, VContent, VFlex} from 'vuetify/es5/components/VGrid'
import VCard from 'vuetify/es5/components/VCard'
import VImg from 'vuetify/es5/components/VImg'
import VBtn from 'vuetify/es5/components/VBtn'
import transitions from 'vuetify/es5/components/transitions'
import { Ripple } from 'vuetify/es5/directives'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VToolbar,
    VLayout,
    VContainer,
    VContent,
    VFlex,
    VCard,
    VImg,
    VBtn,
    transitions
  },
  directives: {
    Ripple
  }
});
