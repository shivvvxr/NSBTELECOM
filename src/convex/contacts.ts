import { v } from "convex/values";
import { mutation, query, action } from "./_generated/server";
import { internal } from "./_generated/api";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    service: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const contactId = await ctx.db.insert("contacts", {
      name: args.name,
      email: args.email,
      company: args.company,
      phone: args.phone,
      message: args.message,
      service: args.service,
      status: "new",
    });
    
    // Send email notification
    await ctx.scheduler.runAfter(0, internal.contacts.sendContactEmail, {
      contactId,
      name: args.name,
      email: args.email,
      company: args.company,
      phone: args.phone,
      message: args.message,
      service: args.service,
    });
    
    return contactId;
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("contacts").order("desc").collect();
  },
});

export const sendContactEmail = action({
  args: {
    contactId: v.id("contacts"),
    name: v.string(),
    email: v.string(),
    company: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
    service: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0066CC;">New Contact Form Submission</h2>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px;">
          <p><strong>Name:</strong> ${args.name}</p>
          <p><strong>Email:</strong> ${args.email}</p>
          ${args.company ? `<p><strong>Company:</strong> ${args.company}</p>` : ""}
          ${args.phone ? `<p><strong>Phone:</strong> ${args.phone}</p>` : ""}
          ${args.service ? `<p><strong>Service Interest:</strong> ${args.service}</p>` : ""}
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${args.message}</p>
        </div>
        <p style="color: #666; font-size: 12px; margin-top: 20px;">
          This is an automated email from NSB TELECOM contact form.
        </p>
      </div>
    `;

    try {
      await resend.emails.send({
        from: "NSB TELECOM <noreply@nsb-telecom.com>",
        to: "nsb85428@gmail.com",
        subject: `New Contact: ${args.name}`,
        html: emailHtml,
      });
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  },
});