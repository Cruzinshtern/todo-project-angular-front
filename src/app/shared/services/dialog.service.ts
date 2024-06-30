import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(private _dialog: MatDialog, private _traslateService: TranslateService) {}

    openDialog(component: any, action: 'edit' | 'delete', todoData = {}) {
        let data = {};
        if (action === 'edit') {
          data = { 
            title: this._traslateService.instant('dialog.edit'), 
            text: null, 
            confirmBtnText: this._traslateService.instant('dialog.edit'),
            dialogType: action,
            todoData: todoData
          }
        }
        if (action === 'delete') {
          data = { 
            title: this._traslateService.instant('dialog.deleteModal.title'), 
            text: this._traslateService.instant('dialog.deleteModal.text'), 
            confirmBtnText: this._traslateService.instant('dialog.deleteModal.confirmBtnText'),
            dialogType: action
          };
        }      
    
        return this._dialog.open(component, { data });
    }
}