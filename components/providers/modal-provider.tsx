"use client";

import React from "react";
import SettingsModal from "../modals/settings-modal";
import { CoverImageModal } from "../modals/cover-image-modal";

type ModalProviderProps = {};

export const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
