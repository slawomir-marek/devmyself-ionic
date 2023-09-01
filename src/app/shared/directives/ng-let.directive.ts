import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class NgLetContext {
  $implicit: any = null;
  ngLet: any = null;
}

@Directive({
  selector: '[ngLet]',
})
export class NgLetDirective implements OnInit {
  private _context = new NgLetContext();

  @Input()
  set ngLet(value: any) {
    this._context.$implicit = this._context.ngLet = value;
  }

  constructor(private _vcr: ViewContainerRef, private _templateRef: TemplateRef<NgLetContext>) {}

  ngOnInit() {
    this._vcr.createEmbeddedView(this._templateRef, this._context);
  }
}
