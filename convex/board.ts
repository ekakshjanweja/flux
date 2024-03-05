import { v } from "convex/values";
import { mutation } from "./_generated/server";

// const images = {
//   "0": "/placeholders/0.svg",
//   "1": "/placeholders/1.svg",
//   "2": "/placeholders/2.svg",
//   "3": "/placeholders/3.svg",
//   "4": "/placeholders/4.svg",
//   "5": "/placeholders/5.svg",
//   "6": "/placeholders/6.svg",
//   "7": "/placeholders/7.svg",
//   "8": "/placeholders/8.svg",
//   "9": "/placeholders/9.svg",
//   A: "/placeholders/A.svg",
//   B: "/placeholders/B.svg",
//   C: "/placeholders/C.svg",
//   D: "/placeholders/D.svg",
//   E: "/placeholders/E.svg",
//   F: "/placeholders/F.svg",
//   G: "/placeholders/G.svg",
//   H: "/placeholders/H.svg",
//   I: "/placeholders/I.svg",
//   J: "/placeholders/J.svg",
//   K: "/placeholders/K.svg",
//   L: "/placeholders/L.svg",
//   M: "/placeholders/M.svg",
//   N: "/placeholders/N.svg",
//   O: "/placeholders/O.svg",
//   P: "/placeholders/P.svg",
//   Q: "/placeholders/Q.svg",
//   R: "/placeholders/R.svg",
//   S: "/placeholders/S.svg",
//   T: "/placeholders/T.svg",
//   U: "/placeholders/U.svg",
//   V: "/placeholders/V.svg",
//   W: "/placeholders/W.svg",
//   X: "/placeholders/X.svg",
//   Y: "/placeholders/Y.svg",
//   Z: "/placeholders/Z.svg",
// };

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

    const initial = args.title[0].toUpperCase();

    const randomImage = images.find(
      (url) => url === `/placeholders/${initial}.svg`
    );

    const board = await ctx.db.insert("boards", {
      title: args.title,
      orgId: args.orgId,
      authorId: identity.subject,
      authorName: identity.name!,
      imageUrl: randomImage!,
    });

    return board;
  },
});

export const remove = mutation({
  args: {
    id: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    //TODO: Check to delete favorite relation as well

    await ctx.db.delete(args.id);
  },
});

export const update = mutation({
  args: {
    id: v.id("boards"),
    title: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();

    if (!identity) {
      throw new Error("Unauthorized");
    }

    const title = args.title.trim();

    if (!title) {
      throw new Error("Title is required");
    }

    if (title.length > 60) {
      throw new Error("Title cannot be more than 60 characters.");
    }

    const initial = args.title[0].toUpperCase();

    const randomImage = images.find(
      (url) => url === `/placeholders/${initial}.svg`
    );

    const board = await ctx.db.patch(args.id, {
      title: args.title,
      imageUrl: randomImage!,
    });

    return board;
  },
});
