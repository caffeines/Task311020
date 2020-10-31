const url = 'http://localhost:4782/api';
const app = new Vue({
  el: '#app',
  data: {
    name: '',
    phone: '',
    email: '',
    page: 1,
    createdApp: false,
    ci: null,
    password: '',
    token: null,
    applications: [],
  },
  watch: {
    page(val) {
      this.reset();
      this.createdApp = false;
    },
    createdApp(val) {
      if (this.ci) {
        clearInterval(this.ci);
      }
      if (val) {
        this.ci = setTimeout(() => {
          this.createdApp = false;
        }, 10 * 1000);
      }
    },
  },
  created() {
    const token = localStorage.getItem('token');
    this.token = token;
  },
  methods: {
    reset() {
      this.name = '';
      this.phone = '';
      this.email = '';
    },
    homePage() {
      this.page = 1;
    },
    async createApplication() {
      try {
        const payload = {
          name: this.name,
          phone: this.phone,
          email: this.email,
        };
        const res = await fetch(`${url}/application`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        this.createdApp = true;
        this.reset();
      } catch (err) {
        console.log(err);
      }
    },
    async getApplications() {
      try {
        this.page = 5;
        const res = await fetch(`${url}/application?limit=1000`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${this.token}`,
          },
        });
        const data = await res.json();
        this.applications = data.data.applications;
      } catch (err) {
        console.log(err);
      }
    },
    async login() {
      try {
        const payload = {
          email: this.email,
          password: this.password,
        };
        const res = await fetch(`${url}/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        const data = await res.json();
        localStorage.setItem('token', data.data.token);
        this.token = data.data.token;
        this.reset();
        this.homePage();
      } catch (err) {
        console.log(err);
      }
    },
  },
});
