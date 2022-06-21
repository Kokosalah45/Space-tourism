import create from 'zustand';

const useWindowSizeStore = create((set) => ({
  windowSize: 2,
  setWindowSize: (currentWidth: number) =>
    set(({ windowSize }: { windowSize: string }) => ({
      windowSize: currentWidth,
    })),
}));

export default useWindowSizeStore;
