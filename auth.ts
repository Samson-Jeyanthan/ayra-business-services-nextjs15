import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import User from "./database/user.model";
import { SignInSchema } from "./lib/validations";
import dbConnect from "./lib/mongoose";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,

  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);
        if (!validatedFields.success) return null;

        const { email, password } = validatedFields.data;

        await dbConnect();

        // ✅ Correct: find user by email (object), not just `email`
        // If password is select:false in schema, keep `.select("+password")`
        const existingUser = await User.findOne({ email }).select("+password");

        if (!existingUser || !existingUser.password) return null;

        const isValidPassword = await bcrypt.compare(
          password,
          existingUser.password
        );
        if (!isValidPassword) return null;

        return {
          id: existingUser._id.toString(),
          name: existingUser.username,
          email: existingUser.email,
          // image: existingUser.profilePicture,
        };
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },

    // ✅ Correct: don’t call API here; just set sub on first login
    async jwt({ token, user }) {
      if (user?.id) token.sub = user.id;
      return token;
    },

    async signIn({ account, user }) {
      if (account?.type === "credentials") return true;
      if (!account || !user) return false;
      return true;
    },
  },
});
