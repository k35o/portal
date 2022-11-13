import '@/types/next-auth';

declare module 'next-auth' {
  interface User {
    name: string;
    emai: string;
    image: string;
  }

  interface Session {
    user: User;
  }
}
