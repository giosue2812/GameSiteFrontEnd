import {Injectable} from '@angular/core';
import {NgbToast, NgbToastService, NgbToastType} from 'ngb-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private ngbToastService:NgbToastService) { }

  showErrorLogin():void{
    const toast: NgbToast = {
      toastType: NgbToastType.Danger,
      text:'The login or password error',
      dismissible:true,
      onDismiss:() => {
        console.log("Toast Dismissed");
      }
    };
    this.ngbToastService.show(toast);
  }

  showErrorAdminNotAutorize():void{
    const toast:NgbToast = {
      toastType: NgbToastType.Danger,
      text:'You ar not admin',
      dismissible:true,
      onDismiss:()=>{
        console.log("Toast Dismissed");
      }
    };
    this.ngbToastService.show(toast);
  }

  removeToast(toast: NgbToast):void{
    this.ngbToastService.remove(toast);
  }
}
