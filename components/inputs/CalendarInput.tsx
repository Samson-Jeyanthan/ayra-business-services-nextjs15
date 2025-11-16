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
import { Calendar } from "../ui/calendar";

const CalendarInput = ({
  form,
  inputName,
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
            <Calendar
              mode="single"
              selected={field.value}
              onSelect={(date) => field.onChange(date)}
              className="rounded-lg border"
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

export default CalendarInput;
