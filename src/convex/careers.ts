import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const listOpenings = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("careers").filter((q) => q.eq(q.field("status"), "open")).collect();
  },
});

export const submitApplication = mutation({
  args: {
    jobId: v.id("careers"),
    name: v.string(),
    email: v.string(),
    phone: v.string(),
    resume: v.optional(v.string()),
    coverLetter: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const applicationId = await ctx.db.insert("applications", {
      jobId: args.jobId,
      name: args.name,
      email: args.email,
      phone: args.phone,
      resume: args.resume,
      coverLetter: args.coverLetter,
      status: "submitted",
    });
    return applicationId;
  },
});
