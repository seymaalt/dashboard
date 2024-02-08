import Vue from '@vitejs/plugin-vue';

export default {
  plugins: [Vue()],
  optimizeDeps: {
    include: ['@fortawesome/vue-fontawesome'],
  },
};