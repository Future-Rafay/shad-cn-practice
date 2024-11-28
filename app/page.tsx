"use client";
import React from "react";

import {
  AccordionDemo,
  AlertDemo,
  AlertDialogDemo,
  BreadcrumbDemo,
  ContextMenuDemo,
  DatePickerDemo,
  DatePickerWithRange,
  DialogDemo,
  DrawerDemo,
  HoverCardDemo,
  InputOTPDemo,
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
  ToggleDemo,
  ToolTipDemo,
} from "@/components/ShadCnDemo";
import { Switch } from "@/components/ui/switch";

const page = () => {
  return (
    <>
      <main className="h-full w-full p-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* AlertDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Alert Demo</h3>
            <p className="text-sm mb-4">
              This component demonstrates how to show different types of alerts.
            </p>
            <AlertDemo />
          </div>

          {/* SheetDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Sheet Demo</h3>
            <p className="text-sm mb-4">
              Showcases a slide-in sheet for additional content.
            </p>
            <SheetDemo />
          </div>

          {/* ToastDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Toast Demo</h3>
            <p className="text-sm mb-4">
              Displays toast notifications that pop up on the screen.
            </p>
            <ToastDemo />
          </div>

          {/* SliderDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Slider Demo</h3>
            <p className="text-sm mb-4">
              Demonstrates a slider for selecting values in a range.
            </p>
            <SliderDemo />
          </div>

          {/* SelectDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Select Demo</h3>
            <p className="text-sm mb-4">
              A select dropdown to choose options from a list.
            </p>
            <div>
              <SelectDemo />
            </div>
          </div>

          {/* PopoverDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Popover Demo</h3>
            <p className="text-sm mb-4">
              Shows a popover that appears on interaction with a target element.
            </p>
            <PopoverDemo />
          </div>

          {/* ToolTipDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">ToolTip Demo</h3>
            <p className="text-sm mb-4">
              Displays a tooltip when hovering over an element.
            </p>
            <ToolTipDemo />
          </div>

          {/* ProgressDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Progress Demo</h3>
            <p className="text-sm mb-4">
              Demonstrates a progress bar to show the completion of a task.
            </p>
            <div>
              <ProgressDemo />
            </div>
          </div>

          {/* SkeletonDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Skeleton Demo</h3>
            <p className="text-sm mb-4">
              Provides loading skeletons to indicate content is being fetched.
            </p>
            <div>
              <SkeletonDemo />
            </div>
          </div>

          {/* TextAreaDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">TextArea Demo</h3>
            <p className="text-sm mb-4">
              A multi-line input for collecting longer text input from users.
            </p>
            <div>
              <TextAreaDemo />
            </div>
          </div>

          {/* HoverCardDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">HoverCard Demo</h3>
            <p className="text-sm mb-4">
              Shows a card that appears when hovering over a target element.
            </p>
            <HoverCardDemo />
          </div>

          {/* PaginationDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Pagination Demo</h3>
            <p className="text-sm mb-4">
              Implements pagination for navigating between multiple pages of
              data.
            </p>
            <PaginationDemo />
          </div>

          {/* RadioGroupDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Radio Group Demo</h3>
            <p className="text-sm mb-4">
              A set of radio buttons to choose a single option from multiple
              choices.
            </p>
            <RadioGroupDemo />
          </div>

          {/* ContextMenuDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Context Menu Demo</h3>
            <p className="text-sm mb-4">
              Displays a context menu when right-clicking or triggering a
              specific action.
            </p>
            <ContextMenuDemo />
          </div>

          {/* DatePickerDemo & DatePickerWithRange */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Date Picker Demo</h3>
            <p className="text-sm mb-4">
              A date picker to select a single date.
            </p>
            <div className="flex flex-col justify-evenly h-full">
              <DatePickerDemo />
              <DatePickerWithRange />
            </div>
          </div>

          {/* DialogDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Dialog Demo</h3>
            <p className="text-sm mb-4">
              A modal dialog that appears on top of the content.
            </p>
            <DialogDemo />
          </div>

          {/* DrawerDemo */}
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Drawer Demo</h3>
            <p className="text-sm mb-4">
              Displays a drawer from the side of the screen for additional
              content.
            </p>
            <DrawerDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Toggle Demo</h3>
            <p className="text-sm mb-4">
              A two-state button that can be either on or off.
            </p>
            <ToggleDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Input OTP Demo</h3>
            <p className="text-sm mb-4">
              Accessible one-time password component with copy paste
              functionality.
            </p>
            <InputOTPDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Accordin Demo</h3>
            <p className="text-sm mb-4">
              A vertically stacked set of interactive headings that each reveal
              a section of content.
            </p>
            <AccordionDemo />
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">BreadCrumb Demo</h3>
            <p className="text-sm mb-4">
              Displays the path to the current resource using a hierarchy of
              links.
            </p>
            <div className="flex items-center justify-center h-full">
            <BreadcrumbDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Alert Dialog Demo</h3>
            <p className="text-sm mb-4">
              A modal dialog that interrupts the user with important content and
              expects a response.
            </p>
            <div className="flex items-center justify-center h-full">
              <AlertDialogDemo />
            </div>
          </div>
          <div className="col-span-1 row-span-1 p-4 border-2 border-solid border-black flex flex-col h-full">
            <h3 className="text-xl font-semibold mb-2">Switch Demo</h3>
            <p className="text-sm mb-4">
              This component allows users to toggle between two states, such as
              turning a feature on or off.
            </p>
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
