import { Component, OnInit } from "@angular/core";
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
export class ServicesComponent implements OnInit {
  GSsvg = {
    copyIcon: "../../../assets/svg/copypaste-icon.svg"
  };

  @ViewChild('codeVar1') dynamicRef1: ElementRef;
  @ViewChild('codeVar2') dynamicRef2: ElementRef;


  get codeVal() {
    return this.dynamicRef1.nativeElement.innerHTML;
  }
  get codeVal2() {
    return this.dynamicRef2.nativeElement.innerHTML;
  }

  copyCode(numVar): void {
    var codeCopy = document.createElement("textarea");
    document.body.appendChild(codeCopy);
    if (numVar==1){
      codeCopy.value = this.codeVal;
    }
    else
    {
      codeCopy.value = this.codeVal2;
    }
    codeCopy.select();
    document.execCommand("copy");
    document.body.removeChild(codeCopy);
  }




  constructor() {}

  ngOnInit(): void {}
}
