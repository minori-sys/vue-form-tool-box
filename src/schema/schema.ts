import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";
import { errorMessage } from "../data/errorMessage.ts";

export const schema = toTypedSchema(
  z
    .object({
      name: z
        .string({
          required_error: errorMessage.name_empty,
        })
        .nonempty(errorMessage.name_empty),
      email: z
        .string({
          required_error: errorMessage.email_empty,
        })
        .nonempty(errorMessage.email_empty)
        .email(errorMessage.email_check),
      emailConfirm: z
        .string({
          required_error: errorMessage.email_empty,
        })
        .nonempty(errorMessage.email_empty)
        .email(errorMessage.email_check),
      area: z
        .string({
          required_error: errorMessage.area_empty,
        })
        .min(1, errorMessage.area_empty)
        .transform((v) => Number(v)),
      terms: z.literal(true, {
        errorMap: () => ({ message: errorMessage.terms_check }),
      }),
      reply: z.enum(["yes", "no"], {
        errorMap: () => ({ message: errorMessage.reply_empty }),
      }),
      message: z
        .string({
          required_error: errorMessage.message_empty,
        })
        .nonempty(errorMessage.message_empty),
    })
    .superRefine(({ email, emailConfirm }, ctx) => {
      if (email !== emailConfirm) {
        ctx.addIssue({
          path: ["emailConfirm"],
          code: "custom",
          message: errorMessage.email_confirm,
        });
      }
    }),
);

export type Schema = z.infer<typeof schema>;
