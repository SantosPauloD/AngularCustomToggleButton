import {
  ChangeDetectionStrategy,
  Component,
  forwardRef,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type ToggleLabelPosition = 'before' | 'after';

@Component({
  selector: 'fm-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToogleComponent),
      multi: true,
    },
  ],
})
export class ToogleComponent implements ControlValueAccessor {
  @Input() label: ToggleLabelPosition = 'after';

  value: boolean = false;
  disabled: boolean = false;

  onChange: (value: boolean) => void = () => {};
  onTouched: () => void = () => {};

  constructor() {}

  writeValue(value: boolean): void {
    this.value = value;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  toggleState(): void {
    this.value = !this.value;
    this.onChange(this.value);
    this.onTouched();
  }
}
