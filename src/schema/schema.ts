import * as z from "zod";
import { toTypedSchema } from "@vee-validate/zod";

export const schema = toTypedSchema(
  z
    .object({
      name: z
        .string({
          required_error: "名前を入力してください",
        })
        .nonempty("名前を入力してください"),
      email: z
        .string({
          required_error: "メールアドレスを入力してください",
        })
        .nonempty("メールアドレスを入力してください")
        .email("正しいメールアドレスを入力してください"),
      emailConfirm: z
        .string({
          required_error: "メールアドレスを入力してください",
        })
        .nonempty("メールアドレスを入力してください")
        .email("正しいメールアドレスを入力してください"),
      area: z
        .string({
          required_error: "お住まいの地域を選択してください",
        })
        .min(1, "お住まいの地域を選択してください")
        .transform((v) => Number(v)),
      terms: z.literal(true, {
        errorMap: () => ({ message: "規約に同意してください" }),
      }),
      reply: z.enum(["yes", "no"], {
        errorMap: () => ({ message: "返信について選択してください" }),
      }),
      message: z
        .string({
          required_error: "メッセージを入力してください",
        })
        .nonempty("メッセージを入力してください"),
    })
    .superRefine(({ email, emailConfirm }, ctx) => {
      if (email !== emailConfirm) {
        ctx.addIssue({
          path: ["emailConfirm"],
          code: "custom",
          message: "メールアドレスが一致していません",
        });
      }
    }),
);

export type Schema = z.infer<typeof schema>;
