import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaExternalLinkAlt } from "react-icons/fa";

import React from "react";
import { policyText } from "./footerDocuments";

const PolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger className="font-rajdhani font-semibold">
        Privacy Policy
      </DialogTrigger>
      <DialogContent className="h-4/5">
        <DialogHeader className="max-h-fit overflow-y-scroll">
          <DialogTitle>Privacy Policy</DialogTitle>
          <DialogDescription className="h-full">{policyText}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PolicyDialog;
