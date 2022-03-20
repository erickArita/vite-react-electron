
export { }

declare global {
  interface Window {
    // Expose some Api through preload script
    fs: typeof import('fs')
    ipcRenderer: import('electron').IpcRenderer
    removeLoading: () => void
    api: {
      invoke: (event: string, ...args: any[]) => void
      on: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void
      getAll: (channel: string, listener: (event: Electron.IpcRendererEvent, ...args: any[]) => void) => void
    }
  }
}
