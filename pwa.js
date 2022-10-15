  @HostListener('window:storage', ['$event'])
  onStorageChange(_event: any) {
    let doRefresh = localStorage.getItem('doRefresh');
    if (doRefresh) {
      location.reload();
      localStorage.removeItem('doRefresh');
    }
  }

 setViewSize(width: any, height: any) {
    this.utils.screenSizeObj.width = width;
    this.utils.screenSizeObj.height = height;
    switch (true) {
      case width < 576:
        this.utils.screenSizeObj.type = 'mobile';
        break;
      case width < 768:
        this.utils.screenSizeObj.type = 'tab';
        break;
      case width >= 768:
        this.utils.screenSizeObj.type = 'desktop';
        break;
      default:
        this.utils.screenSizeObj.type = 'not defined';
        break;
    }
  }
