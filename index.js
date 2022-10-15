let str = 'Hello World';

for(let i =0; i< str.length; i++)
  console.log(str[i]);

for(let ch of str)
    console.log(ch);

    let cookiesAccepted = localStorage.getItem('cookiesAcceptance');
    if (!cookiesAccepted)
      this.isCookieModelOpened = false;
    if (!cookiesAccepted && !this.isCookieModelOpened) {
    console.log('test')}

checkCookiesModel() {
        this.isCookieModelOpened = true;
        setTimeout(() => {
          const dialogRef = this.dialog.open(SharedModelComponent, {
            disableClose: true,
            panelClass: 'cookiesModel',
            data: {
              cookiesSection: true
            }
          });
          dialogRef.afterClosed().subscribe((res: any) => {
            this.isCookieModelOpened = true;
            localStorage.setItem('cookiesAcceptance', res)
          });
  }
