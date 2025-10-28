import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

// default user roles. can add / remove based on the project as needed
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    contacts: defineTable({
      name: v.string(),
      email: v.string(),
      company: v.optional(v.string()),
      phone: v.optional(v.string()),
      message: v.string(),
      service: v.optional(v.string()),
      status: v.string(),
    }),

    careers: defineTable({
      title: v.string(),
      department: v.string(),
      location: v.string(),
      type: v.string(),
      description: v.string(),
      requirements: v.array(v.string()),
      responsibilities: v.array(v.string()),
      status: v.string(),
    }),

    applications: defineTable({
      jobId: v.id("careers"),
      name: v.string(),
      email: v.string(),
      phone: v.string(),
      resume: v.optional(v.string()),
      coverLetter: v.optional(v.string()),
      status: v.string(),
    }).index("by_job", ["jobId"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;