import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { IUserDoc } from "./database/user.model";
import { SignInSchema } from "./lib/validations";
import { api } from "./lib/api";
// import dbConnect from "./lib/mongoose";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = SignInSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          // const { data: existingAccount } = (await api.accounts.getByProvider(
          //   email
          // )) as ActionResponse<IAccountDoc>;
          // if (!existingAccount) return null;

          // await dbConnect();

          const { data: existingUser } = (await api.users.getByEmail(
            email
          )) as ActionResponse<IUserDoc>;

          // const { data: existingUser } = (await api.users.getById(
          //   existingAccount.userId.toString()
          // )) as ActionResponse<IUserDoc>;

          if (!existingUser) return null;

          const isValidPassword = await bcrypt.compare(
            password,
            existingUser.password!
          );

          if (isValidPassword) {
            return {
              name: existingUser.username,
              email: existingUser.email,
              id: existingUser._id,
              // image: existingUser.profilePicture,
            };
          }
        }
        return null;
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token.sub as string;
      return session;
    },
    async jwt({ token, account }) {
      if (account) {
        const { data: existingAccount, success } = (await api.users.getByEmail(
          account.type === "credentials"
            ? token.email!
            : account.providerAccountId
        )) as ActionResponse<IUserDoc>;

        if (!success || !existingAccount) return token;

        const userId = existingAccount._id;

        if (userId) token.sub = userId.toString();
      }
      return token;
    },

    async signIn({
      user,
      // profile,
      account,
    }) {
      if (account?.type === "credentials") return true;
      if (!account || !user) return false;

      // const userInfo = {
      //   name: user.name!,
      //   email: user.email!,
      //   image: user.image!,
      //   username:
      //     account.provider === "github" ?
      //      (profile?.login as string)
      //       : (user.name?.toLowerCase() as string),
      // };

      // const { success } = (await api.auth.oAuthSignIn({
      //   user: userInfo,
      //   provider: account.provider as "github" | "google",
      //   providerAccountId: account.providerAccountId,
      // })) as ActionResponse;
      // if (!success) return false;

      return true;
    },
  },
});
