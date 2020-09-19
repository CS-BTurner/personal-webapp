type WindowExt = Window & {
  Perm?: {
    reactInit: (container: HTMLElement) => void;
  };
};

const win = window as WindowExt;

if (win?.Perm?.reactInit) {
  const container = document.getElementById('app-container');

  if (container) win.Perm.reactInit(container);
}
