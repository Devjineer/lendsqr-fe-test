// Utility funcions to help handle scrolls

const scrollLock = () => {
  document.body.style.overflow = "hidden";
};

const scrollUnlock = () => {
  document.body.style.overflow = "";
};

export { scrollLock, scrollUnlock };
