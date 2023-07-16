'use client'

import { useEffect } from "react";

export default function CustomJavascript() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
}