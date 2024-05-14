
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
;
import { getServerSession } from "next-auth";



export const authOptions = {


  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
   
  
  ],
  secret: process.env.SECRET,
  session: {
      strategy: "jwt",
  },
  debug: process.env.NODE_ENV === "development",
  jwt: {
    secret: process.env.JWT_SECRET,
  },


  callbacks: {

    async session({token,session}) {
      if (token) {
        session.user.id = token.id
        session.user.role = token.role
        session.user.email = token.email
      }
      return session
    },
async jwt({token, user}) {
  if (user) {
    token.id = user.id
    token.role = user.role
    token.email = user.email  
  }
  return token
}
},

pages: {
  signIn: "/",
  signOut: "/",
 
},

};


export const getAuthSession = () => getServerSession(authOptions);

