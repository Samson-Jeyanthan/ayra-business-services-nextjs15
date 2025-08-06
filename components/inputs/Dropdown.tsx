"use client";

import { useState } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { TDropdown } from "@/types/utils.types";

const Dropdown = ({
  form,
  formLabel,
  inputName,
  options,
  formDescription,
  prevValue,
}: TDropdown) => {
  const [value, setValue] = useState(prevValue || "");

  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel className="mb-1 font-semibold !text-light-100">
            {formLabel}
          </FormLabel>
          <FormControl className="no-focus">
            <Select onValueChange={(_id: string) => field.onChange(_id)}>
              <SelectTrigger className="no-focus !text-light-100 !border !border-solid !border-light-500 !bg-light-700 text-sm !px-3 !py-2 !w-full !h-12">
                {value ? (
                  <p className="first-letter:capitalize">{value}</p>
                ) : (
                  <SelectValue />
                )}
              </SelectTrigger>
              <SelectContent className="no-focus text-light-100 border border-solid border-light-500 bg-light-800 text-sm">
                {options?.map((option, index) => (
                  <SelectItem
                    key={index}
                    value={option?._id}
                    className="cursor-pointer hover:bg-light-500"
                    onClick={() => setValue("")}
                  >
                    {option?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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

export default Dropdown;
