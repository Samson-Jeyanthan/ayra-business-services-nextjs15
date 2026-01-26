"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { TPopupCalendar } from "@/types/utils.types";

const PopupCalendar = ({
  form,
  inputName,
  formLabel,
  formDescription,
  disableFunc,
}: TPopupCalendar) => {
  return (
    <FormField
      control={form.control}
      name={inputName}
      render={({ field }) => (
        <FormItem className="w-full -mb-2">
          <FormLabel className="mb-1 font-semibold !text-light-100">
            {formLabel}
          </FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  // variant={"outline"}
                  className={cn(
                    "w-full h-12 pl-3 text-left rounded-full font-normal !bg-light-700 !border !border-solid !border-light-500 cursor-pointer",
                    !field.value && "text-muted-foreground"
                  )}
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>Pick a date</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={
                  disableFunc && ((date: Date) => date < new Date("1926-01-01"))
                }
                captionLayout="dropdown"
              />
            </PopoverContent>
          </Popover>
          <FormDescription>{formDescription}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default PopupCalendar;
