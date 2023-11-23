import User from "@/models/User";
import ConnectDb from "@/utils/database";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],

  callbacks: {
    async session({ session, token, user }) {
      try {
        await ConnectDb();
        const dbUser = await User.findOne({ email: token.email });
        session.user = dbUser;
        session.user.id = token.sub;
        return session;
      } catch (error) {
        console.log(error);
        return session;
      }
    },
    async signIn({ user }) {
      try {
        await ConnectDb();
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          await User.create({
            name: user.name,
            email: user.email,
            image: user.image,
            id: user.id,
          });
          return true;
        }
        return true;
      } catch (error) {
        console.log("sign in error", error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
