  @HostListener('window:storage', ['$event'])
  onStorageChange(_event: any) {
    let doRefresh = localStorage.getItem('doRefresh');
    if (doRefresh) {
      location.reload();
      localStorage.removeItem('doRefresh');
    }
  }
