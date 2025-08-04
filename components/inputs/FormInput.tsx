"use client";

import { TFormInput } from "@/types/utils.types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const FormInput = ({
  form,
  inputName,
  inputType,
  formLabel,
  formDescription,
}: TFormInput) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col pt-[3px]">
          <FormLabel className="mb-1.5">{formLabel}</FormLabel>
          <FormControl>
            <Input
              type={inputType || "text"}
              {...field}
              onChange={(e) =>
                field.onChange(
                  inputType === "number"
                    ? Number(e.target.value)
                    : e.target.value
                )
              }
              className=""
            />
          </FormControl>

          {formDescription && (
            <FormDescription className="">{formDescription}</FormDescription>
          )}
          <FormMessage className="text-xs text-custom-red" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
