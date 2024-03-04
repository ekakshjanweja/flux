import { v } from "convex/values";
import { mutation } from "./_generated/server";

const images = [
  "/placeholders/0.svg",
  "/placeholders/1.svg",
  "/placeholders/2.svg",
  "/placeholders/3.svg",
  "/placeholders/4.svg",
  "/placeholders/5.svg",
  "/placeholders/6.svg",
  "/placeholders/7.svg",
  "/placeholders/8.svg",
  "/placeholders/9.svg",
  "/placeholders/A.svg",
  "/placeholders/B.svg",
  "/placeholders/C.svg",
  "/placeholders/D.svg",
  "/placeholders/E.svg",
  "/placeholders/F.svg",
  "/placeholders/G.svg",
  "/placeholders/H.svg",
  "/placeholders/I.svg",
  "/placeholders/J.svg",
  "/placeholders/K.svg",
  "/placeholders/L.svg",
  "/placeholders/M.svg",
  "/placeholders/N.svg",
  "/placeholders/O.svg",
  "/placeholders/P.svg",
  "/placeholders/Q.svg",
  "/placeholders/R.svg",
  "/placeholders/S.svg",
  "/placeholders/T.svg",
  "/placeholders/U.svg",
  "/placeholders/V.svg",
  "/placeholders/W.svg",
  "/placeholders/X.svg",
  "/placeholders/Y.svg",
  "/placeholders/Z.svg",
];

export const create = mutation({
  args: {
    orgId: v.string(),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const randomImage = images[Math.floor(Math.random() * images.length)];

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage,
    });

    return board;
  },
});
