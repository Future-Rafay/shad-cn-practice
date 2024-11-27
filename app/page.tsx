"use client";
import React from "react";

import {
  AlertDemo,
  ContextMenuDemo,
  DatePickerDemo,
  DatePickerWithRange,
  DialogDemo,
  DrawerDemo,
  HoverCardDemo,
  PaginationDemo,
  PopoverDemo,
  ProgressDemo,
  RadioGroupDemo,
  SelectDemo,
  SheetDemo,
  SkeletonDemo,
  SliderDemo,
  TextAreaDemo,
  ToastDemo,
  ToolTipDemo,
} from "@/components/ShadCnDemo";
import { Switch } from "@/components/ui/switch";

const page = () => {
  return (
    <>
      <main className="h-screen w-screen p-10">
        <div className="grid grid-cols-3 grid-rows-6 gap-x-5 gap-y-7">
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <AlertDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <SheetDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <ToastDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <SliderDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div>
              <SelectDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <PopoverDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <ToolTipDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div>
              <ProgressDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div>
              <SkeletonDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div>
              <TextAreaDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <HoverCardDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <PaginationDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <RadioGroupDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <ContextMenuDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div className="flex flex-col justify-evenly h-full">
              <DatePickerDemo />
              <DatePickerWithRange />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <DialogDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <DrawerDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black">
            <div className="flex items-center justify-center h-full">
              <Switch id="airplane-mode" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
