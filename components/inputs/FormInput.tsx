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
        <FormItem className="flex w-full flex-col">
          <FormLabel className="mb-1 font-semibold !text-light-100">
            {formLabel}
          </FormLabel>
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
              className="no-focus !bg-light-700 !border !border-solid !border-light-500 !text-light-100 !rounded-lg !px-3 !py-2 !w-full !h-12"
            />
          </FormControl>

          {formDescription && (
            <FormDescription className="">{formDescription}</FormDescription>
          )}
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
