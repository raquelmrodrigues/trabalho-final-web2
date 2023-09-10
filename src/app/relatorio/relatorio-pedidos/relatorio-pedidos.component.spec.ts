import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioPedidosComponent } from './relatorio-pedidos.component';

describe('RelatorioPedidosComponent', () => {
  let component: RelatorioPedidosComponent;
  let fixture: ComponentFixture<RelatorioPedidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatorioPedidosComponent]
    });
    fixture = TestBed.createComponent(RelatorioPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
