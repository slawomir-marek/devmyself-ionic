import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, merge, of, Subject, takeUntil, withLatestFrom } from 'rxjs';

@Component({
  selector: 'devmyself-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBarComponent implements AfterViewInit, OnDestroy {
  protected readonly MIN_QUERY_LENGTH: number = 3;
  protected readonly MAX_QUERY_LENGTH: number = 200;
  private readonly DEBOUNCE_TIME: number = 700;

  @Input() set value(value: string) {
    if (value !== this.searchControl.value) {
      this.searchControl.setValue(value);

      this.isDirty = !this.isEmpty;
    }
  }

  @Input() placeholder: string | undefined;

  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() executed: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('input') input!: ElementRef;

  searchControl: FormControl;
  inputMaxLength: number = this.MAX_QUERY_LENGTH;
  isDirty: boolean = false;

  private executeOnEnter = new Subject<string>();
  private unsubscribe$: Subject<void> = new Subject();

  get isEmpty(): boolean {
    return !this.searchControl || this.searchControl.value == undefined || this.searchControl.value === '';
  }

  constructor() {
    this.searchControl = new FormControl();
  }

  ngAfterViewInit(): void {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(this.DEBOUNCE_TIME),
        distinctUntilChanged(),
        withLatestFrom(merge(of(null), this.executeOnEnter)),
        filter(([value, lastExecutedOnEnterValue]) => this.isQueryValid(value)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(([query]) => this.onSearchQueryChange(query));

    this.executeOnEnter
      .pipe(
        distinctUntilChanged(),
        filter((query: string) => this.isQueryValid(query)),
        takeUntil(this.unsubscribe$)
      )
      .subscribe((query) => this.executed.next(query));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  inputOnEnter(query: string): void {
    this.executeOnEnter.next(query);
  }

  inputOnFocus(): void {
    this.isDirty = true;
  }

  inputOnBlur(): void {
    this.isDirty = !this.isEmpty;
  }

  clear(): void {
    this.searchControl.patchValue('', { emitEvent: false });
    this.onSearchQueryChange('');
    this.input?.nativeElement.focus();
  }

  private onSearchQueryChange(query: string): void {
    this.valueChanged.next(query);
  }

  private isQueryValid(query: string): boolean {
    return query.trim().length >= this.MIN_QUERY_LENGTH || query.trim().length === 0;
  }
}
