"use client";

import { Switch } from "@/components/ui/switch";
import { TSwitchButton } from "@/types/utils.types";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const SwitchButton = ({ form, formLabel, inputName }: TSwitchButton) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="w-full flex flex-col gap-2 items-start">
          <div className="w-full flex items-start gap-4">
            <FormControl className="">
              <Switch
                {...field}
                className="px-5 py-3 "
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className="font-medium !text-light-200 text-sm">
              {formLabel}
            </FormLabel>
          </div>

          <FormMessage className="text-xs text-red-600" />
        </FormItem>
      )}
    />
  );
};

export default SwitchButton;
