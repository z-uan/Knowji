import { defineNuxtModule } from '@nuxt/kit'

export interface ModuleOptions {
  // Add your module options here
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-app',
    configKey: 'nuxtApp',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    // Add your default options here
  },
  setup(options, nuxt) {
    // Add your module setup code here
  }
}) 