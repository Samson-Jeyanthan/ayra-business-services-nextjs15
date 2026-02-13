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
          <FormLabel className="mb-1 font-semibold !text-light-100 leading-6 md:w-[80%]">
            {formLabel}
          </FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={(value) => field.onChange(value)} // ✅ Correct binding
              defaultValue={field.value} // ✅ Controlled value
              {...field}
              className="flex flex-col space-y-2"
            >
              {options?.map((option, index) => (
                <div
                  className="flex items-start justify-start space-x-2"
                  key={index}
                >
                  <RadioGroupItem
                    value={option._id} // ✅ use value, not id
                    id={`${inputName}${option._id}`}
                    className="border border-solid border-light-300"
                  />
                  <FormLabel
                    htmlFor={`${inputName}${option._id}`}
                    className="font-normal cursor-pointer !text-light-100 leading-6 -mt-1"
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
