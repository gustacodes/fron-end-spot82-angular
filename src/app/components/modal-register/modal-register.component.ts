import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Spots } from 'src/app/interfaces/Spots';
import { SharedService } from 'src/app/services/shared.service';
import { SpotService } from 'src/app/services/spot.service';

@Component({
  selector: 'app-modal-register',
  templateUrl: './modal-register.component.html',
  styleUrls: ['./modal-register.component.scss'],
})
export class ModalRegisterComponent implements OnInit {
  @Input() modalOpen?: boolean;
  formGroup!: FormGroup;
  @Input() spotActual!: Spots;

  constructor(
    public service: SharedService,
    private spotService: SpotService
  ) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      name: new FormControl(
        this.service.getSpotActual()!.client
          ? this.service.getSpotActual()!.client.name
          : '',
        [Validators.required]
      ),
      vehicle: new FormControl(
        this.service.getSpotActual()!.client
          ? this.service.getSpotActual()!.client.vehicle
          : '',
        [Validators.required]
      ),
      type: new FormControl(
        this.service.getSpotActual()!.client
          ? this.service.getSpotActual()!.client.type
          : '',
        [Validators.required]
      ),
      plate: new FormControl(
        this.service.getSpotActual()!.client
          ? this.service.getSpotActual()!.client.plate
          : '',
        [Validators.required]
      ),
      spot: new FormControl(this.service.getSpotActual()!.id, [
        Validators.required,
      ]),
      methodPayment: new FormControl(
        this.service.getSpotActual()!.client
          ? this.service.getSpotActual()!.client.payment
          : '',
          [Validators.required]
      ),
    });
  }

  get name() {
    return this.formGroup.get('name')!;
  }

  get vehicle() {
    return this.formGroup.get('vehicle')!;
  }

  get type() {
    return this.formGroup.get('type')!;
  }

  get plate() {
    return this.formGroup.get('plate')!;
  }

  get methodPayment() {
    return this.formGroup.get('methodPayment')!;
  }

  registerClient() {
    
    this.formGroup.get('methodPayment')?.setValue('DINHEIRO')

    if (this.formGroup.invalid) {
      return;
    }
    

    this.spotService.saveClient(this.formGroup.value).subscribe(
      (client) => {},

      (error) => {
        alert('Falha ao cadastrar cliente' + JSON.stringify(error));
      }
    );
  }

  endPeriod() {

    if (this.formGroup.invalid) {
      return;
    }

    this.spotService
      .end(
        this.service.getSpotActual()?.id,
        this.formGroup.get('methodPayment')?.value
      )
      .subscribe(
        () => {},

        (error) => {
          alert('Falha ao finalizar' + JSON.stringify(error));
        }
      );
  }
}
