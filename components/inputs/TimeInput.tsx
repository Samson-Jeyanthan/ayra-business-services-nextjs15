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

const TimeInput = ({
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
        <FormItem className="w-full">
          <FormLabel className="mb-1 font-semibold !text-light-100">
            {formLabel}
          </FormLabel>
          <FormControl>
            <Input
              type={inputType}
              id="time-picker"
              step="1"
              {...field}
              value={field.value ? field.value : "00:00:00"}
              onChange={field.onChange}
              ref={field.ref}
              className="no-focus !bg-light-700 !border !border-solid !border-light-500 !text-light-100 !rounded-full !px-3 !py-2 !w-full !h-12"
            />
          </FormControl>

          {formDescription && (
            <FormDescription className="text-sm whitespace-pre-line italic">
              {formDescription}
            </FormDescription>
          )}
          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default TimeInput;
