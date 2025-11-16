"use client";

import { TRadioButton } from "@/types/utils.types";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

const RadioButton = ({
  form,
  inputName,
  formLabel,
  formDescription,
  options,
}: TRadioButton) => {
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
            <RadioGroup
              onValueChange={field.onChange} // ✅ Correct binding
              value={field.value} // ✅ Controlled value
              className="flex flex-col space-y-2"
            >
              {options?.map((option, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <RadioGroupItem
                    value={option._id} // ✅ use value, not id
                    id={option._id}
                  />
                  <FormLabel
                    htmlFor={option._id}
                    className="font-normal cursor-pointer text-light-100"
                  >
                    {option.name}
                  </FormLabel>
                </div>
              ))}
            </RadioGroup>
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

export default RadioButton;
