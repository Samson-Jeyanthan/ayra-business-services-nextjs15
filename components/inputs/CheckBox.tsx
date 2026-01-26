"use client";

import { TCheckBox } from "@/types/utils.types";
import { Checkbox } from "../ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const CheckBox = ({
  form,
  formLabel,
  checkboxLabel,
  formDescription,
  inputName,
}: TCheckBox) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="w-full">
          {formLabel && (
            <FormLabel className="mb-1 font-semibold !text-light-100">
              {formLabel}
            </FormLabel>
          )}
          <FormControl>
            <div className="flex gap-4 items-center justify-start">
              <Checkbox
                {...field}
                checked={field.value}
                onCheckedChange={(value) => field.onChange(value)}
                ref={field.ref}
              />
              <span className="text-sm font-medium">{checkboxLabel}</span>
            </div>
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

export default CheckBox;
