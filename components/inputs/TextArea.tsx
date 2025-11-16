"use client";

import { TTextArea } from "@/types/utils.types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const TextArea = ({
  form,
  inputName,
  formLabel,
  formDescription,
  maxLength,
}: TTextArea) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="flex w-full flex-col">
          {formLabel && (
            <FormLabel className="mb-1 font-semibold !text-light-100">
              {formLabel}
            </FormLabel>
          )}
          <FormControl>
            <Textarea
              {...field}
              className="no-focus !h-40 resize-none !bg-light-700 !border !border-solid !border-light-500 !text-light-100 !rounded-lg !px-3 !py-2 text-sm"
              maxLength={maxLength}
            />
          </FormControl>
          <FormDescription className="mt-2.5 text-xs text-light-300 whitespace-pre-line">
            {formDescription}
          </FormDescription>
          <FormMessage className="text-xs text-custom-red" />
        </FormItem>
      )}
    />
  );
};

export default TextArea;
