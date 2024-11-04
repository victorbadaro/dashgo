import { createServer, Model } from 'miragejs';

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({} as User)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('/users');
      this.post('/users');

      // necessáio em projetos Next.js para /api não ser confundida com as Api Routes do próprio Next.js
      this.namespace = '';
      this.passthrough();
    }
  });

  return server;
}