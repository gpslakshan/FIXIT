"use client";

import { Button, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Input placeholder="Title" />
      <TextField.Input placeholder="Decription" />
      <Button variant="solid">Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
